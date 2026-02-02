import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendNewsletterConfirmation } from '@/lib/email';

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = newsletterSchema.parse(body);

    await sendNewsletterConfirmation(validatedData);

    console.log('Newsletter subscription:', validatedData.email);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for subscribing! You will receive our latest updates.',
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please enter a valid email address',
        },
        { status: 400 }
      );
    }

    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}
