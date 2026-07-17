import { NextResponse } from 'next/server';
import { contactDetails } from '@/lib/contact';

type ContactPayload = {
  name?: string;
  email?: string;
  project?: string;
  message?: string;
  terms?: boolean;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
  const project = payload.project?.trim() || 'Not specified';
  const message = payload.message?.trim() || 'No message provided.';
  const terms = Boolean(payload.terms);

  if (!name) return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 });
  }
  if (!terms) {
    return NextResponse.json({ error: 'You must accept the privacy policy.' }, { status: 400 });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  const endpoint = accessKey
    ? 'https://api.web3forms.com/submit'
    : `https://formsubmit.co/ajax/${encodeURIComponent(contactDetails.email)}`;

  const body = accessKey
    ? {
        access_key: accessKey,
        subject: `Portfolio inquiry from ${name}`,
        from_name: name,
        email,
        project,
        message,
      }
    : {
        _subject: `Portfolio inquiry from ${name}`,
        _template: 'table',
        name,
        email,
        project,
        message,
      };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    });

    const result = (await response.json()) as { success?: boolean; message?: string };

    if (!response.ok || result.success === false) {
      return NextResponse.json(
        { error: result.message ?? 'Unable to deliver your message right now.' },
        { status: 502 },
      );
    }

    return NextResponse.json({
      message: 'Thanks for reaching out. I will get back to you within 24 hours.',
    });
  } catch {
    return NextResponse.json(
      { error: 'Unable to deliver your message right now. Please try again shortly.' },
      { status: 502 },
    );
  }
}
