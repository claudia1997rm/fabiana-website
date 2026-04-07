export function BrandLogo({ className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#6D5BA6] text-[10px] font-serif font-medium uppercase tracking-[0.26em] text-white shadow-lavender transition duration-500 group-hover:-translate-y-0.5 group-hover:border-white/25 group-hover:bg-wine ${className}`}
    >
      FR
    </span>
  );
}