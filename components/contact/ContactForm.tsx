'use client';

import { useState, type FormEvent } from 'react';
import { contactFormDefaults, projectTypes, type ContactFormValues } from '@/lib/contact';

type ContactFormProps = {
  formId: string;
  submitLabel?: string;
  onSuccess?: () => void;
  compact?: boolean;
};

type FieldErrors = Partial<Record<keyof ContactFormValues, string>>;
type Touched = Partial<Record<keyof ContactFormValues, boolean>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PROJECT_SET = new Set<string>(projectTypes);

function looksRandom(text: string) {
  const cleaned = text.replace(/\s+/g, '');
  if (cleaned.length < 8) return false;

  // Repeated character spam: aaaaa / !!!!! 
  if (/^(.)\1{7,}$/i.test(cleaned)) return true;

  // Keyboard smash with almost no vowels
  const letters = cleaned.replace(/[^a-z]/gi, '');
  if (letters.length >= 12) {
    const vowels = (letters.match(/[aeiou]/gi) ?? []).length;
    if (vowels / letters.length < 0.15) return true;
  }

  // No real words (no space + long gibberish)
  if (!/\s/.test(text.trim()) && cleaned.length >= 24) return true;

  return false;
}

function fieldError(key: keyof ContactFormValues, values: ContactFormValues): string | undefined {
  const name = values.name.trim();
  const email = values.email.trim();
  const project = values.project.trim();
  const message = values.message.trim();

  switch (key) {
    case 'name':
      if (!name) return 'Enter your full name so I know who to reply to.';
      if (name.length < 2) return 'Name looks too short — use at least 2 characters.';
      if (/^[^a-zA-Z]+$/.test(name)) return 'Use letters in your name — avoid numbers or symbols only.';
      return undefined;
    case 'email':
      if (!email) return 'Enter your email so I can reply.';
      if (!email.includes('@')) return 'Email is missing @ — use a format like name@company.com.';
      if (!email.includes('.')) return 'Email needs a domain ending — try name@company.com.';
      if (!EMAIL_RE.test(email)) return 'That email format looks wrong. Example: name@company.com';
      return undefined;
    case 'project':
      if (!project) return 'Select a project type from the list — don’t leave this blank.';
      if (!PROJECT_SET.has(project)) return 'Choose one of the listed project types, not a custom/random value.';
      return undefined;
    case 'message':
      if (!message) return 'Add a short message about your project or goal.';
      if (message.length < 20) {
        return 'Message is too short — share at least a sentence about what you need help with.';
      }
      if (looksRandom(message)) {
        return 'That message looks random. Briefly describe the product, users, or problem — avoid keyboard spam.';
      }
      return undefined;
    case 'terms':
      if (!values.terms) return 'Check this box to accept the privacy policy before sending.';
      return undefined;
    default:
      return undefined;
  }
}

function validate(values: ContactFormValues): FieldErrors {
  const errors: FieldErrors = {};
  (Object.keys(contactFormDefaults) as (keyof ContactFormValues)[]).forEach((key) => {
    const message = fieldError(key, values);
    if (message) errors[key] = message;
  });
  return errors;
}

const inputClass =
  'w-full border border-line bg-canvas px-3 py-3 text-sm leading-normal text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-accent';

const inputErrorClass =
  'w-full border border-accent bg-canvas px-3 py-3 text-sm leading-normal text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-accent';

function FieldTip({
  id,
  error,
  tip,
}: {
  id: string;
  error?: string;
  tip?: string;
}) {
  if (error) {
    return (
      <p id={id} className="mt-1.5 text-xs leading-relaxed text-accent" role="alert">
        {error}
      </p>
    );
  }
  if (tip) {
    return (
      <p id={id} className="mt-1.5 text-xs leading-relaxed text-muted">
        {tip}
      </p>
    );
  }
  return null;
}

export default function ContactForm({
  formId,
  submitLabel = 'Send Message',
  onSuccess,
  compact = false,
}: ContactFormProps) {
  const [values, setValues] = useState<ContactFormValues>(contactFormDefaults);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Touched>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const showError = (key: keyof ContactFormValues) =>
    touched[key] || Boolean(errors[key]) ? fieldError(key, values) ?? errors[key] : undefined;

  const update = <K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) => {
    setValues((current) => {
      const next = { ...current, [key]: value };
      if (touched[key] || errors[key]) {
        const message = fieldError(key, next);
        setErrors((currentErrors) => ({ ...currentErrors, [key]: message }));
      }
      return next;
    });
  };

  const markTouched = (key: keyof ContactFormValues) => {
    setTouched((current) => ({ ...current, [key]: true }));
    setErrors((current) => ({ ...current, [key]: fieldError(key, values) }));
  };

  const canSubmit =
    !fieldError('name', values) &&
    !fieldError('email', values) &&
    !fieldError('project', values) &&
    !fieldError('message', values) &&
    !fieldError('terms', values) &&
    status !== 'submitting';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setTouched({
      name: true,
      email: true,
      project: true,
      message: true,
      terms: true,
    });

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus('idle');
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? 'Unable to send your message right now.');
      }

      setStatus('success');
      setStatusMessage(data.message ?? 'Message sent. I will reply within 24 hours.');
      setValues(contactFormDefaults);
      setErrors({});
      setTouched({});
      onSuccess?.();
    } catch (error) {
      setStatus('error');
      setStatusMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div
        className="border border-line bg-accent-soft px-4 py-5"
        role="status"
        aria-live="polite"
      >
        <p className="text-sm font-medium text-ink">Message sent</p>
        <p className="mt-2 text-sm text-muted">{statusMessage}</p>
        <button
          type="button"
          className="mt-4 ui-btn text-muted hover:border-accent hover:text-accent"
          onClick={() => setStatus('idle')}
        >
          Send another message
        </button>
      </div>
    );
  }

  const nameError = showError('name');
  const emailError = showError('email');
  const projectError = showError('project');
  const messageError = showError('message');
  const termsError = showError('terms');

  return (
    <form
      id={formId}
      className={compact ? 'space-y-4' : 'space-y-5'}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-name`} className="mb-2 block font-mono text-[10px] tracking-wider text-muted">
            Your name <span className="text-accent">*</span>
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            className={nameError ? inputErrorClass : inputClass}
            value={values.name}
            onChange={(event) => update('name', event.target.value)}
            onBlur={() => markTouched('name')}
            aria-invalid={Boolean(nameError)}
            aria-describedby={`${formId}-name-tip`}
          />
          <FieldTip
            id={`${formId}-name-tip`}
            error={nameError}
            tip="Use your real name so the reply reaches the right person."
          />
        </div>

        <div>
          <label htmlFor={`${formId}-email`} className="mb-2 block font-mono text-[10px] tracking-wider text-muted">
            Your email <span className="text-accent">*</span>
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@company.com"
            className={emailError ? inputErrorClass : inputClass}
            value={values.email}
            onChange={(event) => update('email', event.target.value)}
            onBlur={() => markTouched('email')}
            aria-invalid={Boolean(emailError)}
            aria-describedby={`${formId}-email-tip`}
          />
          <FieldTip
            id={`${formId}-email-tip`}
            error={emailError}
            tip="Use a work email when possible. Format: name@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${formId}-project`} className="mb-2 block font-mono text-[10px] tracking-wider text-muted">
          Project type <span className="text-accent">*</span>
        </label>
        <select
          id={`${formId}-project`}
          name="project"
          className={projectError ? inputErrorClass : inputClass}
          value={values.project}
          onChange={(event) => update('project', event.target.value)}
          onBlur={() => markTouched('project')}
          aria-invalid={Boolean(projectError)}
          aria-describedby={`${formId}-project-tip`}
        >
          <option value="">Select a project type</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <FieldTip
          id={`${formId}-project-tip`}
          error={projectError}
          tip="Pick the closest match from the list — don’t invent a custom type."
        />
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className="mb-2 block font-mono text-[10px] tracking-wider text-muted">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={compact ? 4 : 5}
          placeholder="What are you building, who is it for, and where are users getting stuck?"
          className={`${messageError ? inputErrorClass : inputClass} resize-y min-h-[7rem]`}
          value={values.message}
          onChange={(event) => update('message', event.target.value)}
          onBlur={() => markTouched('message')}
          aria-invalid={Boolean(messageError)}
          aria-describedby={`${formId}-message-tip`}
        />
        <FieldTip
          id={`${formId}-message-tip`}
          error={messageError}
          tip="Write a clear sentence or two. Avoid random characters or keyboard spam."
        />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-muted">
          <input
            type="checkbox"
            name="terms"
            className="mt-0.5 h-4 w-4 shrink-0 border border-line accent-accent"
            checked={values.terms}
            onChange={(event) => update('terms', event.target.checked)}
            onBlur={() => markTouched('terms')}
            aria-invalid={Boolean(termsError)}
            aria-describedby={`${formId}-terms-tip`}
          />
          <span>
            I agree to the{' '}
            <a href="/legal" className="text-ink underline decoration-line underline-offset-4 hover:text-accent">
              privacy policy
            </a>{' '}
            and terms of service.
          </span>
        </label>
        <FieldTip
          id={`${formId}-terms-tip`}
          error={termsError}
          tip="Required before the message can be sent."
        />
      </div>

      {status === 'error' && (
        <p className="border border-accent-muted bg-accent-soft px-3 py-2 text-sm text-ink" role="alert">
          {statusMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={!canSubmit}
        aria-disabled={!canSubmit}
        className={`ui-btn-lg w-full border transition-colors sm:w-auto ${
          canSubmit
            ? 'border-accent bg-accent-soft text-ink hover:bg-accent hover:text-canvas'
            : 'cursor-not-allowed border-line bg-transparent text-muted opacity-50'
        }`}
      >
        {status === 'submitting' ? 'Sending…' : submitLabel}
      </button>
    </form>
  );
}
