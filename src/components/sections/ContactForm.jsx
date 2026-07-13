import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { brand } from '../../data/content';

const budgets = ['Under ₹50k / mo', '₹50k – ₹1.5L / mo', '₹1.5L – ₹5L / mo', '₹5L+ / mo'];

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: budgets[0], message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  // NOTE: This form is front-end only. To go live, either:
  //  1) point the <form> action at a service like Formspree / Basin / EmailJS, or
  //  2) wire this handler to your own API route.
  // For now it opens a pre-filled email as a working fallback.
  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`New project enquiry — ${form.name || 'Website contact form'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nBudget: ${form.budget}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
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
        <h3 className="font-display text-2xl text-charcoal dark:text-ivory">Almost there</h3>
        <p className="max-w-sm text-sm leading-relaxed text-charcoal-muted dark:text-ivory-muted">
          Your email app should have opened with your message pre-filled. Just hit send — we reply within one business day.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn-outline mt-2">
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card flex flex-col gap-5 p-8 sm:p-10">
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

      <button type="submit" className="btn-primary mt-2 w-fit">
        Send message
        <ArrowUpRight size={16} />
      </button>
    </form>
  );
}
