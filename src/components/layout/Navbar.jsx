import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from '../ui/Logo';
import ThemeToggle from './ThemeToggle';
import { navLinks } from '../../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'bg-paper/85 dark:bg-ink/85 backdrop-blur-lg border-b border-charcoal/10 dark:border-ivory/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="section-pad flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative font-mono text-[12px] uppercase tracking-widest2 transition-colors duration-300 ${
                  isActive
                    ? 'text-gold-500'
                    : 'text-charcoal/70 dark:text-ivory/70 hover:text-gold-500'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <ThemeToggle />
          <Link to="/contact" className="btn-primary text-xs px-6 py-3">
            Start a project
            <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 dark:border-ivory/15 text-charcoal dark:text-ivory"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-paper dark:bg-ink border-t border-charcoal/10 dark:border-ivory/10"
          >
            <nav className="section-pad flex flex-col gap-1 py-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center justify-between border-b border-charcoal/10 dark:border-ivory/10 py-4 font-display text-2xl ${
                        isActive ? 'text-gold-500' : 'text-charcoal dark:text-ivory'
                      }`
                    }
                  >
                    {link.label}
                    <ArrowUpRight size={20} className="opacity-40" />
                  </NavLink>
                </motion.div>
              ))}
              <Link to="/contact" className="btn-primary mt-6 w-full">
                Start a project
                <ArrowUpRight size={15} />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
