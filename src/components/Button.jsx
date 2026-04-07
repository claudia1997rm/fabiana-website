function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 transition duration-500 group-hover:translate-x-1.5">
      <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Button({ href, children, variant = 'primary' }) {
  const baseClasses =
    'group inline-flex items-center justify-center gap-3 rounded-full border px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.34em] transition duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/25 focus-visible:ring-offset-4 focus-visible:ring-offset-cloud';

  const variants = {
    primary:
      'border-ink bg-ink text-cloud shadow-glow hover:-translate-y-1 hover:bg-white hover:text-ink hover:shadow-card active:translate-y-0',
    secondary:
      'border-ink/15 bg-white/65 text-ink backdrop-blur-md hover:-translate-y-1 hover:border-ink/35 hover:bg-white hover:shadow-soft active:translate-y-0',
    ghost:
      'border-transparent bg-transparent px-0 py-0 text-ink hover:text-gold focus-visible:ring-offset-transparent',
  };

  return (
    <a href={href} className={`${baseClasses} ${variants[variant]}`}>
      <span>{children}</span>
      {variant !== 'ghost' ? <ArrowIcon /> : null}
    </a>
  );
}