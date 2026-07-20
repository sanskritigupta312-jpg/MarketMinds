import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { brand } from '../../data/content';

export default function FloatingButtons() {
  const [hoveredWa, setHoveredWa] = useState(false);
  const [hoveredCall, setHoveredCall] = useState(false);

  const waHref = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(
    brand.whatsappDefaultMessage
  )}`;
  const callHref = `tel:+918707858634`;

  return (
    <div className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-50 flex flex-col items-end gap-4">
      {/* Call Button */}
      <div
        className="flex items-center gap-3"
        onMouseEnter={() => setHoveredCall(true)}
        onMouseLeave={() => setHoveredCall(false)}
      >
        <AnimatePresence>
          {hoveredCall && (
            <motion.span
              initial={{ opacity: 0, x: 8, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 8, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="hidden sm:block rounded-full bg-ink dark:bg-paper-raised text-ivory dark:text-charcoal text-xs font-medium px-4 py-2 shadow-card whitespace-nowrap"
            >
              Call us now
            </motion.span>
          )}
        </AnimatePresence>

        <a
          href={callHref}
          aria-label="Call MarketMinds"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-ink shadow-[0_8px_24px_-6px_rgba(201,162,39,0.6)] transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          <span className="absolute inset-0 rounded-full bg-gold-500 animate-ping opacity-30" />
          <Phone size={24} strokeWidth={2} className="relative fill-ink text-ink" />
        </a>
      </div>

      {/* WhatsApp Button */}
      <div
        className="flex items-center gap-3"
        onMouseEnter={() => setHoveredWa(true)}
        onMouseLeave={() => setHoveredWa(false)}
      >
        <AnimatePresence>
          {hoveredWa && (
            <motion.span
              initial={{ opacity: 0, x: 8, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 8, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="hidden sm:block rounded-full bg-ink dark:bg-paper-raised text-ivory dark:text-charcoal text-xs font-medium px-4 py-2 shadow-card whitespace-nowrap"
            >
              Chat with us on WhatsApp
            </motion.span>
          )}
        </AnimatePresence>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with MarketMinds on WhatsApp"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-6px_rgba(37,211,102,0.6)] transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
          <MessageCircle size={26} strokeWidth={2} className="relative fill-white text-[#25D366]" />
        </a>
      </div>
    </div>
  );
}
