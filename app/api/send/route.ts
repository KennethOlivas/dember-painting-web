import EmailTemplate from '@/components/email/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const req = await request.json()
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['kennetholivas1@gmail.com'],
      subject: `Dember Paints' Contact Form ${req.fullName}`,
      react: EmailTemplate(req) as React.ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
