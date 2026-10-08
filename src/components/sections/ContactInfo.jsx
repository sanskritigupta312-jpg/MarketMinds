import { Mail, Phone, MapPin, MessageCircle, ArrowUpRight, Clock } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import { brand } from '../../data/content';

const items = [
  {
    icon: Mail,
    label: 'Email',
    value: brand.email,
    href: `mailto:${brand.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: brand.phoneDisplay,
    href: `tel:${brand.phoneHref}`,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Message us directly',
    href: `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(brand.whatsappDefaultMessage)}`,
  },
  {
    icon: MapPin,
    label: 'Find us',
    value: brand.address,
    href: brand.gmbUrl,
  },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => (
        <RevealOnScroll key={item.label} delay={i * 0.06}>
          <a
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 rounded-xl border border-charcoal/10 dark:border-ivory/10 p-5 transition-colors duration-300 hover:border-gold-500/50 hover:bg-paper-soft dark:hover:bg-ink-soft"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-charcoal/15 dark:border-ivory/15 text-gold-500 transition-colors duration-300 group-hover:border-gold-500 group-hover:bg-gold-500/10">
                <item.icon size={17} strokeWidth={1.75} />
              </span>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-widest2 text-charcoal-muted dark:text-ivory-muted">
                  {item.label}
                </span>
                <span className="text-sm text-charcoal dark:text-ivory">{item.value}</span>
              </div>
            </div>
            <ArrowUpRight
              size={16}
              className="shrink-0 text-charcoal/30 dark:text-ivory/30 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold-500"
            />
          </a>
        </RevealOnScroll>
      ))}

      <RevealOnScroll delay={items.length * 0.06}>
        <div className="flex items-center gap-4 rounded-xl bg-ink p-5 text-ivory">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-500/30 text-gold-400">
            <Clock size={17} strokeWidth={1.75} />
          </span>
          <div className="flex flex-col">
            <span className="font-mono text-[10px] uppercase tracking-widest2 text-gold-400">
              Response time
            </span>
            <span className="text-sm text-ivory">We reply within one business day</span>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}
