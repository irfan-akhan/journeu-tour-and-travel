import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendCallbackRequest } from '@/lib/email';

const callbackSchema = z.object({
  phone: z.string().min(10, 'Please enter a valid phone number'),
  preferredTime: z.string().min(1, 'Please select a preferred time'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = callbackSchema.parse(body);

    await sendCallbackRequest(validatedData);

    console.log('Callback request:', validatedData.phone);

    return NextResponse.json(
      {
        success: true,
        message: 'We will call you back at your preferred time!',
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please provide valid phone number and preferred time',
        },
        { status: 400 }
      );
    }

    console.error('Callback request error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}
