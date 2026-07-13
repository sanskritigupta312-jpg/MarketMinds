import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { brand } from '../../data/content';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const href = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(
    brand.whatsappDefaultMessage
  )}`;

  return (
    <div
      className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-50 flex items-center gap-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
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
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with MarketMinds on WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-6px_rgba(37,211,102,0.6)] transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <MessageCircle size={26} strokeWidth={2} className="relative fill-white text-[#25D366]" />
      </a>
    </div>
  );
}
