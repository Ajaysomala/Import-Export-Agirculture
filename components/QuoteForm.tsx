'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import type { SiteCopy } from '@/lib/i18n';
import { QuoteRequest } from '@/lib/types';

const WHATSAPP_NUMBER = '919603456927'; // TODO(BACKEND): move to config/env
const CONTACT_EMAIL = 'abhiglobalexports@gmail.com'; // TODO(BACKEND): move to config/env

export default function QuoteForm({ copy }: { copy: SiteCopy }) {
  const searchParams = useSearchParams();
  const prefillProduct = searchParams.get('product') ?? '';

  const [form, setForm] = useState<QuoteRequest>({
    name: '', company: '', country: '', product: prefillProduct, qty: '', email: '', phone: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  function update<K extends keyof QuoteRequest>(field: K, value: QuoteRequest[K]) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    // TODO(BACKEND — Cloud Function): replace this fallback with a real
    // POST to /api/submit-quote (or a Firebase Callable Function) that
    // validates server-side, writes to Firestore `inquiries` (CRM), sends
    // an email, and optionally triggers WhatsApp Cloud API.
    try {
      openWhatsApp(form);
      openEmail(form);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required>
          <input required value={form.name} onChange={(e) => update('name', e.target.value)} className="input" />
        </Field>
        <Field label="Company">
          <input value={form.company} onChange={(e) => update('company', e.target.value)} className="input" />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Country">
          <input value={form.country} onChange={(e) => update('country', e.target.value)} className="input" />
        </Field>
        <Field label="Product">
          <input value={form.product} onChange={(e) => update('product', e.target.value)} className="input" />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Quantity needed">
          <input value={form.qty} onChange={(e) => update('qty', e.target.value)} className="input" />
        </Field>
        <Field label={copy.contact.emailLabel} required>
          <input required type="email" value={form.email} onChange={(e) => update('email', e.target.value)} className="input" />
        </Field>
      </div>
      <Field label={copy.contact.whatsappLabel}>
        <input value={form.phone} onChange={(e) => update('phone', e.target.value)} className="input" />
      </Field>
      <Field label="Message">
        <textarea rows={4} value={form.message} onChange={(e) => update('message', e.target.value)} className="input resize-none" />
      </Field>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-full bg-clay px-6 py-3.5 text-sm font-semibold text-cream shadow-glow transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {status === 'sending' ? '…' : copy.hero.ctaQuote}
      </button>
      {status === 'sent' && (
        <p className="text-sm text-forest">Your email and WhatsApp app should have opened with your request pre-filled.</p>
      )}
      {status === 'error' && <p className="text-sm text-clay">Reach us directly at {CONTACT_EMAIL}.</p>}

      <style jsx global>{`
        .input {
          width: 100%; border-radius: 0.75rem; border: 1px solid rgba(30,52,36,0.15);
          background: white; padding: 0.7rem 1rem; color: #1E3424; font-size: 0.9rem;
        }
        .input:focus { outline: none; border-color: #D7A84A; }
      `}</style>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft/70">
        {label} {required && <span className="text-clay">*</span>}
      </span>
      {children}
    </label>
  );
}

function openWhatsApp(d: QuoteRequest) {
  const text = encodeURIComponent(
    `New quotation request:\nName: ${d.name}\nCompany: ${d.company || 'N/A'}\nCountry: ${d.country || 'N/A'}\nProduct: ${d.product || 'N/A'}\nQuantity: ${d.qty || 'N/A'}\nEmail: ${d.email}\nPhone: ${d.phone || 'N/A'}\nMessage: ${d.message || 'None'}`
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
}

function openEmail(d: QuoteRequest) {
  const subject = encodeURIComponent(`Quotation Request - ${d.product || 'General Inquiry'}`);
  const body = encodeURIComponent(
    `New quotation request:\n\nName: ${d.name}\nCompany: ${d.company || 'N/A'}\nCountry: ${d.country || 'N/A'}\nProduct: ${d.product || 'N/A'}\nQuantity: ${d.qty || 'N/A'}\nEmail: ${d.email}\nPhone: ${d.phone || 'N/A'}\n\nMessage:\n${d.message || 'None'}`
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}
