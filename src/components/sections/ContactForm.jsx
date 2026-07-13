import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { brand } from '../../data/content';

const budgets = ['Under ₹50k / mo', '₹50k – ₹1.5L / mo', '₹1.5L – ₹5L / mo', '₹5L+ / mo'];

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: budgets[0], message: '', website: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const submitted = status === 'sent';

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  // Submits to Web3Forms (free, no backend needed — https://web3forms.com).
  // `form.website` is a honeypot: real visitors never see or fill this field,
  // so anything that does is almost certainly a bot and gets silently dropped.
  // If the request fails (or the access key hasn't been set up yet), we fall
  // back to opening a pre-filled email so the enquiry is never lost.
  async function handleSubmit(e) {
    e.preventDefault();
    if (form.website) return; // honeypot tripped — quietly ignore

    setStatus('sending');

    const payload = {
      access_key: brand.web3formsAccessKey,
      subject: `New project enquiry — ${form.name || 'Website contact form'}`,
      from_name: brand.name,
      name: form.name,
      email: form.email,
      company: form.company,
      budget: form.budget,
      message: form.message,
    };

    const isKeySet = brand.web3formsAccessKey && brand.web3formsAccessKey !== 'YOUR_WEB3FORMS_ACCESS_KEY';

    try {
      if (!isKeySet) throw new Error('Access key not configured');
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || 'Submission failed');
      setStatus('sent');
    } catch {
      // Fallback so a broken key or network hiccup never loses an enquiry.
      const subject = encodeURIComponent(payload.subject);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nBudget: ${form.budget}\n\nMessage:\n${form.message}`
      );
      window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
      setStatus('error');
    }
  }

  const inputClass =
    'w-full rounded-xl border border-charcoal/15 dark:border-ivory/15 bg-paper dark:bg-ink px-5 py-3.5 text-sm text-charcoal dark:text-ivory placeholder:text-charcoal-muted/60 dark:placeholder:text-ivory-muted/50 outline-none transition-colors duration-300 focus:border-gold-500';

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="card flex flex-col items-center gap-4 p-12 text-center"
      >
        <CheckCircle2 className="text-gold-500" size={40} strokeWidth={1.5} />
        <h3 className="font-display text-2xl text-charcoal dark:text-ivory">Message sent</h3>
        <p className="max-w-sm text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
          Thanks — that's landed in our inbox. We reply within one business day.
        </p>
        <button onClick={() => setStatus('idle')} className="btn-outline mt-2">
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card flex flex-col gap-5 p-8 sm:p-10">
      {/* Honeypot — hidden from real visitors, bots tend to fill every field */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      {status === 'error' && (
        <div className="flex items-start gap-3 rounded-xl border border-gold-500/30 bg-gold-500/10 px-4 py-3 text-sm text-charcoal dark:text-ivory">
          <AlertCircle size={18} className="mt-0.5 shrink-0 text-gold-600 dark:text-gold-400" />
          <span>
            Couldn't reach our form service, so we opened a pre-filled email instead — just hit send there.
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-widest2 text-charcoal-muted dark:text-ivory-muted">
            Name
          </label>
          <input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-widest2 text-charcoal-muted dark:text-ivory-muted">
            Email
          </label>
          <input id="email" type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="font-mono text-[11px] uppercase tracking-widest2 text-charcoal-muted dark:text-ivory-muted">
            Company
          </label>
          <input id="company" name="company" value={form.company} onChange={handleChange} placeholder="Company name" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="budget" className="font-mono text-[11px] uppercase tracking-widest2 text-charcoal-muted dark:text-ivory-muted">
            Monthly budget
          </label>
          <select id="budget" name="budget" value={form.budget} onChange={handleChange} className={`${inputClass} appearance-none`}>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-widest2 text-charcoal-muted dark:text-ivory-muted">
          Tell us about the project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="What are you trying to grow, and what's not working today?"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button type="submit" disabled={status === 'sending'} className="btn-primary mt-2 w-fit disabled:cursor-wait disabled:opacity-60">
        {status === 'sending' ? 'Sending…' : 'Send message'}
        {status !== 'sending' && <ArrowUpRight size={16} />}
      </button>
    </form>
  );
}