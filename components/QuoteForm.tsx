'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { QuoteRequest } from '@/lib/types';
import { getCopy, type Locale } from '@/lib/i18n';

const WHATSAPP_NUMBER = '919603456927'; // TODO(BACKEND): move to config/env
const CONTACT_EMAIL = 'abhiglobalexports@gmail.com'; // TODO(BACKEND): move to config/env

export default function QuoteForm({ locale }: { locale: Locale }) {
  const searchParams = useSearchParams();
  const prefillProduct = searchParams.get('product') ?? '';
  const copy = getCopy(locale);

  const [form, setForm] = useState<QuoteRequest>({
    name: '',
    company: '',
    country: '',
    product: prefillProduct,
    qty: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  function update<K extends keyof QuoteRequest>(field: K, value: QuoteRequest[K]) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');

    // -------------------------------------------------------------------
    // TODO(BACKEND — Cloud Function): this is the single most important
    // connection point in the whole site. Replace the block below with:
    //
    //   const res = await fetch('/api/submit-quote', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(form),
    //   });
    //
    // Where /api/submit-quote (or a Firebase Callable Function) should:
    //   1. Validate + sanitize the payload server-side
    //   2. Write it to the Firestore `inquiries` collection (your CRM)
    //   3. Send a notification email (Resend/SendGrid)
    //   4. Optionally trigger WhatsApp Cloud API for an automated message
    //
    // Until that endpoint exists, we fall back to opening the visitor's
    // own email/WhatsApp client directly (same behaviour as the client's
    // original prototype), so the form is fully usable today.
    // -------------------------------------------------------------------
    try {
      openWhatsApp(form);
      openEmail(form);
      setStatus('sent');
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={copy.quoteForm.fullName} required>
          <input
            required
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className="input"
          />
        </Field>
        <Field label={copy.quoteForm.company}>
          <input
            value={form.company}
            onChange={(e) => update('company', e.target.value)}
            className="input"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={copy.quoteForm.country}>
          <input
            value={form.country}
            onChange={(e) => update('country', e.target.value)}
            className="input"
          />
        </Field>
        <Field label={copy.quoteForm.product}>
          <input
            value={form.product}
            onChange={(e) => update('product', e.target.value)}
            placeholder="e.g. Basmati Rice"
            className="input"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={copy.quoteForm.quantity}>
          <input
            value={form.qty}
            onChange={(e) => update('qty', e.target.value)}
            placeholder="e.g. 20 metric tons / month"
            className="input"
          />
        </Field>
        <Field label={copy.quoteForm.email} required>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className="input"
          />
        </Field>
      </div>

      <Field label={copy.quoteForm.phone}>
        <input
          value={form.phone}
          onChange={(e) => update('phone', e.target.value)}
          className="input"
        />
      </Field>

      <Field label={copy.quoteForm.message}>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          className="input resize-none"
        />
      </Field>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-full bg-clay px-6 py-3.5 text-sm font-semibold text-cream shadow-glow transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {status === 'sending' ? copy.quoteForm.sending : copy.quoteForm.submit}
      </button>

      {status === 'sent' && (
        <p className="text-sm text-lime">
          {copy.quoteForm.sent}
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-clay">
          {copy.quoteForm.error}{' '}
          {CONTACT_EMAIL}.
        </p>
      )}

      <style jsx global>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(31, 91, 55, 0.14);
          background: rgba(255, 255, 255, 0.92);
          padding: 0.7rem 1rem;
          color: #1e3424;
          font-size: 0.9rem;
        }
        .input:focus {
          outline: none;
          border-color: #c86d3a;
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-forest/60">
        {label} {required && <span className="text-clay">*</span>}
      </span>
      {children}
    </label>
  );
}

function openWhatsApp(d: QuoteRequest) {
  const text = encodeURIComponent(
    `New quotation request:\nName: ${d.name}\nCompany: ${d.company || 'Not provided'}\nCountry: ${d.country || 'Not provided'}\nProduct: ${d.product || 'Not specified'}\nQuantity: ${d.qty || 'Not provided'}\nEmail: ${d.email}\nPhone: ${d.phone || 'Not provided'}\nMessage: ${d.message || 'None'}`
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
}

function openEmail(d: QuoteRequest) {
  const subject = encodeURIComponent(`Quotation Request - ${d.product || 'General Inquiry'}`);
  const body = encodeURIComponent(
    `New quotation request from the website:\n\nName: ${d.name}\nCompany: ${d.company || 'Not provided'}\nCountry: ${d.country || 'Not provided'}\nProduct: ${d.product || 'Not specified'}\nQuantity Needed: ${d.qty || 'Not provided'}\nEmail: ${d.email}\nPhone/WhatsApp: ${d.phone || 'Not provided'}\n\nMessage:\n${d.message || 'None'}`
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}
