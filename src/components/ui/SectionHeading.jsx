import RevealOnScroll from './RevealOnScroll';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  size = 'lg',
  className = '',
  invert = false,
}) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';
  const sizeClass = size === 'lg' ? 'text-display-lg' : 'text-display-md';

  // invert = true forces the light-on-dark palette regardless of the
  // site-wide theme. Use it when the section itself is always dark
  // (e.g. a permanent ink-coloured band), so text stays legible in
  // both light and dark mode.
  const titleColor = invert ? 'text-ivory' : 'text-charcoal dark:text-ivory';
  const descColor = invert ? 'text-ivory-muted' : 'text-charcoal-muted dark:text-ivory-muted';
  const eyebrowColor = invert ? '!text-gold-400' : '';

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <RevealOnScroll direction="none">
          <span className={`eyebrow flex items-center gap-3 ${eyebrowColor}`}>
            <span className="h-px w-8 bg-gold-500" />
            {eyebrow}
          </span>
        </RevealOnScroll>
      )}
      {title && (
        <RevealOnScroll delay={0.05}>
          <h2 className={`${sizeClass} font-display font-medium ${titleColor} text-balance`}>
            {title}
          </h2>
        </RevealOnScroll>
      )}
      {description && (
        <RevealOnScroll delay={0.1}>
          <p className={`text-base sm:text-lg ${descColor} leading-relaxed text-balance`}>
            {description}
          </p>
        </RevealOnScroll>
      )}
    </div>
  );
}
