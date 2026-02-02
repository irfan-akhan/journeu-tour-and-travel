import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendBookingInquiry } from '@/lib/email';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  tourName: z.string().min(1, 'Tour name is required'),
  tourId: z.string().min(1, 'Tour ID is required'),
  travelDate: z.string().optional(),
  travelers: z.number().optional(),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = bookingSchema.parse(body);

    await sendBookingInquiry(validatedData);

    console.log('Booking inquiry:', validatedData.tourName, validatedData.email);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your inquiry! Our team will contact you shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: error.issues.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    console.error('Booking inquiry error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}
