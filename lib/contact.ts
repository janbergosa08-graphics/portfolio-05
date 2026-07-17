export const contactDetails = {
  email: 'janbergosa.graphics@gmail.com',
  phone: '+63 970 589 0264',
  phoneHref: 'tel:+639705890264',
  responseTime: 'Within 24 hours',
  hours: 'MON–FRI · 9AM–6PM PHT',
  availability: 'Open for new projects',
  availabilityNote: 'Limited capacity for product UI/UX and design system work.',
};

export const projectTypes = [
  'UI/UX Design',
  'Website Design',
  'Product Design',
  'Branding',
  'Illustration',
  'Other',
] as const;

export type ContactFormValues = {
  name: string;
  email: string;
  project: string;
  message: string;
  terms: boolean;
};

export const contactFormDefaults: ContactFormValues = {
  name: '',
  email: '',
  project: '',
  message: '',
  terms: false,
};
