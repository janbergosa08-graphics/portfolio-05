'use client';

import ContactForm from '@/components/contact/ContactForm';
import ContactGraphic from '@/components/contact/ContactGraphic';
import { Reveal } from '@/components/motion/Reveal';

export default function Contact() {
  return (
    <section id="contact" className="border-b border-line">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 lg:items-stretch">
          <div className="section-pad flex flex-col justify-center border-b border-line lg:border-b-0 lg:border-r lg:py-16 xl:py-20">
            <Reveal>
              <p className="font-mono text-[10px] tracking-[0.16em] text-accent">CONTACT</p>
              <h2 className="section-heading-lg mt-3 max-w-md font-semibold">
                Build solutions.
                <br />
                Forge impact.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
                Accepting new projects and collaborations. Share where users stall, what you&apos;re
                building, and how we can improve the experience.
              </p>
              <ContactGraphic />
            </Reveal>
          </div>

          <div className="section-pad lg:py-16 xl:py-20">
            <Reveal delay={0.05}>
              <ContactForm formId="contact-section-form" submitLabel="Send Message" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
