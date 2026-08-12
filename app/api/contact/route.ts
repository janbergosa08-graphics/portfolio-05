import { NextResponse } from 'next/server';
import { Resend } from 'resend';

type ContactPayload = {
  name?: string;
  email?: string;
  project?: string;
  workType?: string;
  message?: string;
  terms?: boolean;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getRequiredEnv(name: string) {
  const value = process.env[name];
  return value && value.trim() ? value.trim() : undefined;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name = payload.name?.trim() ?? '';
  const email = payload.email?.trim() ?? '';
  const project = (payload.project ?? payload.workType ?? '').trim() || 'Not specified';
  const message = payload.message?.trim() || '';
  const terms = Boolean(payload.terms);

  if (!name) return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 });
  }
  if (!project || project === 'Not specified') {
    return NextResponse.json({ error: 'Work type is required.' }, { status: 400 });
  }
  if (!message) {
    return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
  }
  if (!terms) {
    return NextResponse.json({ error: 'You must accept the privacy policy.' }, { status: 400 });
  }

  const apiKey = getRequiredEnv('RESEND_API_KEY');
  const recipientAddress = getRequiredEnv('CONTACT_TO') ?? 'janbergosa.graphics@gmail.com';
  const fromAddress = getRequiredEnv('RESEND_FROM') ?? 'Portfolio Contact <onboarding@resend.dev>';

  if (!apiKey) {
    console.error('Contact email delivery failed: missing Resend API key.', {
      recipient: recipientAddress,
      from: fromAddress,
    });

    return NextResponse.json(
      {
        error:
          'Email delivery is not configured in this environment. Add your Resend API key and verified sender to .env.local or email janbergosa.graphics@gmail.com directly.',
        errorCode: 'EMAIL_PROVIDER_CONFIG_MISSING',
      },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const submittedAt = new Date().toISOString();

  try {
    const result = await resend.emails.send({
      from: fromAddress,
      to: [recipientAddress],
      replyTo: email,
      subject: `Portfolio inquiry from ${name} — ${project}`,
      text: [
        `Recruiter's name: ${name}`,
        `Recruiter's email: ${email}`,
        `Work type: ${project}`,
        '',
        'Message:',
        message,
        '',
        `Submitted: ${submittedAt}`,
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h3 style="margin-bottom: 12px;">Portfolio inquiry</h3>
          <p><strong>Recruiter's name:</strong> ${name}</p>
          <p><strong>Recruiter's email:</strong> ${email}</p>
          <p><strong>Work type:</strong> ${project}</p>
          <p><strong>Submitted:</strong> ${submittedAt}</p>
          <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
            <strong>Message:</strong>
            <p style="white-space: pre-wrap; margin-top: 8px;">${message.replace(/\n/g, '<br />')}</p>
          </div>
        </div>
      `,
    });

    if (result.error) {
      throw new Error(result.error.message || 'Resend rejected the email request.');
    }

    return NextResponse.json({
      message: "Message sent successfully. I'll get back to you within 24 hours.",
    });
  } catch (error) {
    const reason = error instanceof Error ? error.message : 'Unknown email provider error';

    console.error('Contact email delivery failed:', {
      recipient: recipientAddress,
      sender: fromAddress,
      replyTo: email,
      reason,
    });

    return NextResponse.json(
      { error: 'Unable to deliver your message right now. Please try again shortly.' },
      { status: 500 },
    );
  }
}
