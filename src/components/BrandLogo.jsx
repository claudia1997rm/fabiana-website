export function BrandLogo({ className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-plum text-white shadow-lavender transition duration-500 group-hover:-translate-y-0.5 group-hover:border-white/30 group-hover:bg-wine ${className}`}
    >
      <svg className="h-5 w-5" viewBox="0 0 64 64" fill="none" role="img" focusable="false">
        <path d="M32.8 8C24.9 12.9 20.9 20.4 21.5 30C22.2 41.9 29.8 49.4 39.5 53.1C37.5 44.2 38.5 36.7 42.6 30.6C45.4 26.4 44.7 19.9 38.8 13.6C42.4 15.1 45.3 17.4 47.3 20.4C50.5 25.3 50.8 31.1 48.1 36.2C45.2 41.9 39.4 45.3 32.6 46.3C26.7 47.2 20.8 45.9 16.1 42.7C17.9 36.2 21.2 31.2 26.3 27.7C31.2 24.3 34.2 18.2 32.8 8Z" fill="currentColor"/>
        <path d="M25.4 38.2C19.7 39.5 15.3 42.7 12.2 47.7C10.2 51 9.4 54.7 9.8 59C15.4 57.9 20.1 55.3 23.8 51.2C27.4 47.1 28.4 42.8 25.4 38.2Z" fill="currentColor" opacity="0.86"/>
      </svg>
    </span>
  );
}