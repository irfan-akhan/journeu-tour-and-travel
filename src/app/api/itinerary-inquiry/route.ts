import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const TO_EMAIL = process.env.TO_EMAIL || 'contact@journeu.com';

// Create transporter with Gmail SMTP
const createTransporter = () => {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass,
    },
  });
};

// Validation schema
const itineraryInquirySchema = z.object({
  contactInfo: z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email'),
    phone: z.string().min(10, 'Please enter a valid phone number'),
    preferredContactMethod: z.enum(['email', 'phone', 'whatsapp']),
  }),
  itinerary: z.object({
    duration: z.object({
      label: z.string(),
      days: z.number(),
      nights: z.number(),
    }).nullable().optional(),
    pickup: z.string().optional(),
    drop: z.string().optional(),
    places: z.array(z.string()).optional(),
    stays: z.array(z.string()).optional(),
    inclusions: z.array(z.string()).optional(),
    addons: z.array(z.string()).optional(),
    travelers: z.object({
      adults: z.number().min(1),
      children: z.number().min(0),
    }).optional(),
  }),
  additionalNotes: z.string().optional(),
  marketingConsent: z.boolean(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = itineraryInquirySchema.parse(body);

    const { contactInfo, itinerary, additionalNotes } = validatedData;

    // Generate reference ID
    const referenceId = `ITN-${Date.now().toString(36).toUpperCase()}`;

    // Email content
    const emailSubject = `Custom Itinerary Inquiry - ${contactInfo.name} [${referenceId}]`;
    const emailBody = `
NEW CUSTOM ITINERARY INQUIRY
============================
Reference: ${referenceId}

CONTACT INFORMATION
-------------------
Name: ${contactInfo.name}
Email: ${contactInfo.email}
Phone: ${contactInfo.phone}

TRIP DETAILS
------------
Duration: ${itinerary.duration?.label || 'Not specified'}
Pickup: ${itinerary.pickup || 'Not specified'}
Drop: ${itinerary.drop || 'Not specified'}
Places to Visit: ${itinerary.places?.join(', ') || 'Not specified'}
Night Stays: ${itinerary.stays?.join(', ') || 'Not specified'}
Inclusions: ${itinerary.inclusions?.length ? itinerary.inclusions.join(', ') : 'None selected'}
Add-Ons: ${itinerary.addons?.length ? itinerary.addons.join(', ') : 'None selected'}

TRAVELERS
---------
Adults: ${itinerary.travelers?.adults ?? 2}
Children: ${itinerary.travelers?.children ?? 0}

ADDITIONAL NOTES
----------------
${additionalNotes || 'None'}

---
This inquiry was submitted via the Custom Itinerary Builder.
    `.trim();

    // Send email
    const transporter = createTransporter();

    if (!transporter) {
      // Dev mode - just log
      console.log('📧 [DEV MODE] Custom itinerary inquiry would be sent:');
      console.log('  To:', TO_EMAIL);
      console.log('  Subject:', emailSubject);
      console.log('  Body:', emailBody.substring(0, 500) + '...');
    } else {
      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: TO_EMAIL,
        replyTo: contactInfo.email,
        subject: `🗺️ ${emailSubject}`,
        text: emailBody,
      });
    }

    // Log for analytics
    console.log('Custom itinerary inquiry received:', {
      referenceId,
      name: contactInfo.name,
      duration: itinerary.duration?.label,
      places: itinerary.places?.length,
      travelers: (itinerary.travelers?.adults ?? 2) + (itinerary.travelers?.children ?? 0),
    });

    return NextResponse.json({
      success: true,
      message: 'Your custom itinerary request has been received! Our travel experts will contact you within 24 hours with a personalized quote.',
      referenceId,
    }, { status: 200 });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: 'Validation failed',
        errors: error.issues.map((err) => ({
          field: err.path.join('.'),
          message: err.message,
        })),
      }, { status: 400 });
    }

    console.error('Itinerary inquiry error:', error);
    return NextResponse.json({
      success: false,
      message: 'An error occurred while processing your request. Please try again later.',
    }, { status: 500 });
  }
}
