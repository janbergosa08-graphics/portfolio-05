export const contactDetails = {
  email: 'janbergosa.graphics@gmail.com',
  phone: '+63 970 589 0264',
  phoneHref: 'tel:+639705890264',
  responseTime: 'Within 24 hours',
  hours: 'MON–FRI · 9AM–6PM PHT',
  availability: 'Open to roles & select projects',
  availabilityNote: 'Priority: product UI/UX, dashboards, and design-system work for shipping teams.',
};

export const projectTypes = [
  'Full-time / Product design role',
  'UI/UX for web product',
  'Dashboard / ops tool',
  'Design system',
  'Website redesign',
  'Other product work',
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
