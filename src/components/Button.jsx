function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 transition duration-500 group-hover:translate-x-1.5">
      <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Button({ href, children, variant = 'primary' }) {
  const baseClasses =
    'group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] transition duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum/25 focus-visible:ring-offset-4 focus-visible:ring-offset-cloud sm:min-h-14 sm:px-6 sm:py-3.5 sm:text-[11px] sm:tracking-[0.34em]';

  const variants = {
    primary:
      'border-plum bg-plum text-white shadow-[0_16px_34px_rgba(91,74,120,0.20)] hover:-translate-y-1 hover:border-deepPlum hover:bg-deepPlum hover:text-white hover:shadow-lavender active:translate-y-0',
    secondary:
      'border-plum/40 bg-lavenderMist/90 text-plum backdrop-blur-md hover:-translate-y-1 hover:border-plum/60 hover:bg-lavender hover:text-deepPlum hover:shadow-soft active:translate-y-0',
    ghost:
      'border-transparent bg-transparent px-0 py-0 text-ink hover:text-plum focus-visible:ring-offset-transparent',
  };

  return (
    <a href={href} className={`${baseClasses} ${variants[variant]}`}>
      <span>{children}</span>
      {variant !== 'ghost' ? <ArrowIcon /> : null}
    </a>
  );
}