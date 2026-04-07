function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 transition duration-500 group-hover:translate-x-1.5">
      <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Button({ href, children, variant = 'primary' }) {
  const baseClasses =
    'group inline-flex items-center justify-center gap-3 rounded-full border px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.34em] transition duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum/25 focus-visible:ring-offset-4 focus-visible:ring-offset-cloud';

  const variants = {
    primary:
      'border-plum bg-plum text-white shadow-lavender hover:-translate-y-1 hover:border-deepPlum hover:bg-deepPlum hover:text-white hover:shadow-lavender active:translate-y-0',
    secondary:
      'border-plum/35 bg-white/70 text-plum backdrop-blur-md hover:-translate-y-1 hover:border-plum/45 hover:bg-lavenderMist hover:text-plum hover:shadow-lavender active:translate-y-0',
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