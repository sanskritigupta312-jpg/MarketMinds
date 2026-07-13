import { Link } from 'react-router-dom';
import logoMark from '../../assets/images/logo-mark.webp';

export default function Logo({ className = '', showWordmark = true, size = 'md' }) {
  const badgeSize = size === 'sm' ? 'h-8 w-8' : 'h-10 w-10';
  const textSize = size === 'sm' ? 'text-base' : 'text-lg';

  return (
    <Link to="/" className={`group flex items-center gap-3 ${className}`} aria-label="MarketMinds — home">
      <span
        className={`flex ${badgeSize} shrink-0 items-center justify-center rounded-xl bg-ink ring-1 ring-gold-500/30 transition-transform duration-300 group-hover:scale-105 group-hover:ring-gold-500/60`}
      >
        <img src={logoMark} alt="" className="h-[62%] w-[62%] object-contain" />
      </span>
      {showWordmark && (
        <span className={`font-display ${textSize} leading-none tracking-tight text-charcoal dark:text-ivory`}>
          Market<span className="italic text-gold-500">Minds</span>
        </span>
      )}
    </Link>
  );
}
