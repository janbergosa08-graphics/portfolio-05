'use client';

import { useEffect, useRef } from 'react';
import { contactDetails } from '@/lib/contact';
import ContactForm from '@/components/contact/ContactForm';

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/55 p-0 sm:items-center sm:p-4"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      role="presentation"
    >
      <div
        ref={dialogRef}
        className="flex max-h-[92vh] w-full max-w-5xl flex-col border border-line bg-canvas shadow-none outline-none"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        tabIndex={-1}
      >
        <div className="border-b border-line shell-x py-4">
          <p className="font-mono text-[10px] tracking-[0.16em] text-accent">LET&apos;S TALK</p>
          <h2 id="contact-modal-title" className="mt-1 text-lg font-semibold tracking-tight text-ink">
            Role or product conversation
          </h2>
        </div>

        <div className="grid overflow-y-auto lg:grid-cols-2">
          <aside className="section-pad border-b border-line lg:border-b-0 lg:border-r">
            <p className="text-sm leading-relaxed text-muted">
              Share the product, users, timeline, and what success looks like. I reply within 24 hours with
              clear next steps.
            </p>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="font-mono text-[10px] tracking-wider text-muted">EMAIL</dt>
                <dd className="mt-1">
                  <a href={`mailto:${contactDetails.email}`} className="text-ink hover:text-accent">
                    {contactDetails.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] tracking-wider text-muted">PHONE</dt>
                <dd className="mt-1">
                  <a href={contactDetails.phoneHref} className="text-ink hover:text-accent">
                    {contactDetails.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] tracking-wider text-muted">RESPONSE</dt>
                <dd className="mt-1 text-muted">{contactDetails.responseTime}</dd>
              </div>
            </dl>
          </aside>

          <div className="section-pad">
            <ContactForm formId="contact-modal-form" compact onSuccess={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
}
