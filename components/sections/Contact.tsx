'use client';

import ContactForm from '@/components/contact/ContactForm';
import ContactGraphic from '@/components/contact/ContactGraphic';
import { Reveal } from '@/components/motion/Reveal';
import { SectionEntrance } from '@/components/motion/SectionEntrance';
import { contactIntro } from '@/lib/content';

export default function Contact() {
  return (
    <SectionEntrance id="contact" className="border-b border-line">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 lg:items-stretch">
          <div className="frame-highlight section-pad flex flex-col justify-center border-b border-line lg:border-b-0 lg:border-r lg:py-16 xl:py-20">
            <Reveal>
              <p className="font-mono text-[10px] tracking-[0.16em] text-accent">{contactIntro.kicker}</p>
              <h2 className="section-heading-lg mt-3 max-w-md font-semibold">
                {contactIntro.titleLine1}
                <br />
                {contactIntro.titleLine2}
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">{contactIntro.body}</p>
              <ContactGraphic />
            </Reveal>
          </div>

          <div className="frame-highlight section-pad lg:py-16 xl:py-20">
            <Reveal delay={0.08}>
              <ContactForm formId="contact-section-form" submitLabel="Send Message" />
            </Reveal>
          </div>
        </div>
      </div>
    </SectionEntrance>
  );
}
