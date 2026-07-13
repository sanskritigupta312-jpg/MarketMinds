import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={isDark}
      className={`relative flex h-8 w-14 items-center rounded-full border border-charcoal/15 dark:border-ivory/15 bg-paper-soft dark:bg-ink-raised px-1 transition-colors duration-300 ${className}`}
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-gradient shadow-gold"
        style={{ marginLeft: isDark ? 'auto' : 0 }}
      >
        {isDark ? (
          <Moon size={13} strokeWidth={2.5} className="text-ink" />
        ) : (
          <Sun size={13} strokeWidth={2.5} className="text-ink" />
        )}
      </motion.span>
    </button>
  );
}
