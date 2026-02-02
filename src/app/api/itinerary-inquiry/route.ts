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
    destinations: z.array(z.object({
      id: z.string(),
      name: z.string(),
      daysAllocated: z.number(),
      order: z.number(),
    })).optional(),
    dates: z.object({
      type: z.enum(['flexible', 'fixed']),
      startDate: z.string().optional(),
      endDate: z.string().optional(),
      flexibleMonth: z.string().optional(),
      totalDays: z.number(),
    }).optional(),
    activities: z.array(z.object({
      destinationId: z.string(),
      name: z.string(),
      category: z.string(),
    })).optional(),
    accommodation: z.object({
      tier: z.enum(['3-star', '4-star', '5-star']).optional(),
      specialTypes: z.array(z.string()),
    }).optional(),
    travelers: z.object({
      adults: z.number().min(1),
      children: z.number().min(0),
      specialRequirements: z.object({
        dietary: z.array(z.string()),
        accessibility: z.boolean(),
        photographyFocus: z.boolean(),
      }),
      specialOccasion: z.object({
        type: z.string(),
        notes: z.string().optional(),
      }).optional(),
    }).optional(),
    addOns: z.array(z.object({
      id: z.string(),
      name: z.string(),
      price: z.number(),
    })).optional(),
    estimatedPrice: z.object({
      grandTotal: z.number(),
      totalPerPerson: z.number(),
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

    // Format destinations for email
    const destinationsText = itinerary.destinations
      ?.sort((a, b) => a.order - b.order)
      .map((d) => `${d.name} (${d.daysAllocated} days)`)
      .join(' → ') || 'Not specified';

    // Format activities
    const activitiesText = itinerary.activities
      ?.map((a) => `• ${a.name} (${a.category})`)
      .join('\n') || 'Not specified';

    // Format add-ons
    const addOnsText = itinerary.addOns && itinerary.addOns.length > 0
      ? itinerary.addOns.map((a) => `• ${a.name} - ₹${a.price.toLocaleString('en-IN')}`).join('\n')
      : 'None selected';

    // Format special requirements
    const requirements = itinerary.travelers?.specialRequirements;
    const requirementsText = [
      requirements?.dietary?.length ? `Dietary: ${requirements.dietary.join(', ')}` : null,
      requirements?.accessibility ? 'Accessibility needs: Yes' : null,
      requirements?.photographyFocus ? 'Photography focus: Yes' : null,
    ].filter(Boolean).join('\n') || 'None specified';

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
Preferred Contact: ${contactInfo.preferredContactMethod}

TRIP DETAILS
------------
Destinations: ${destinationsText}
Total Duration: ${itinerary.dates?.totalDays || 0} days
Travel Dates: ${itinerary.dates?.type === 'fixed' && itinerary.dates.startDate
  ? itinerary.dates.startDate
  : itinerary.dates?.flexibleMonth
    ? `Flexible - ${itinerary.dates.flexibleMonth}`
    : 'Flexible'}

TRAVELERS
---------
Adults: ${itinerary.travelers?.adults || 2}
Children: ${itinerary.travelers?.children || 0}
${itinerary.travelers?.specialOccasion?.type && itinerary.travelers.specialOccasion.type !== 'none'
  ? `Special Occasion: ${itinerary.travelers.specialOccasion.type}`
  : ''}

ACCOMMODATION
-------------
Tier: ${itinerary.accommodation?.tier || '4-star'}
Special Types: ${itinerary.accommodation?.specialTypes?.join(', ') || 'Standard'}

ACTIVITIES
----------
${activitiesText}

ADD-ONS
-------
${addOnsText}

SPECIAL REQUIREMENTS
--------------------
${requirementsText}

ESTIMATED PRICE
---------------
Total: ₹${itinerary.estimatedPrice?.grandTotal?.toLocaleString('en-IN') || 'N/A'}
Per Person: ₹${itinerary.estimatedPrice?.totalPerPerson?.toLocaleString('en-IN') || 'N/A'}

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
      destinations: destinationsText,
      travelers: (itinerary.travelers?.adults || 2) + (itinerary.travelers?.children || 0),
      estimatedValue: itinerary.estimatedPrice?.grandTotal,
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
