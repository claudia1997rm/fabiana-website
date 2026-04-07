import { newsletter } from '../data/siteData';
import { SectionHeading } from './SectionHeading';

export function NewsletterSection() {
  return (
    <section id="newsletter" className="section-shell mx-auto max-w-6xl px-6 py-24 md:px-10 lg:py-32">
      <div className="relative overflow-hidden rounded-[2.4rem] border border-ink/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(236,228,219,0.85)_52%,rgba(220,199,192,0.72)_100%)] px-6 py-12 shadow-card md:px-12 lg:px-16 lg:py-16">
        <div className="orb -right-10 top-8 h-44 w-44 bg-white/60" />
        <div className="orb -left-10 bottom-0 h-52 w-52 bg-blush/35" />
        <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <SectionHeading
              eyebrow="Carta"
              title={newsletter.title}
              description={newsletter.description}
            />
          </div>

          <div className="glass-panel rounded-[1.9rem] p-5 md:p-6">
            <form className="flex flex-col gap-4">
              <label className="text-[10px] uppercase tracking-[0.32em] text-taupe">Tu correo</label>
              <input
                type="email"
                placeholder={newsletter.placeholder}
                className="min-h-14 rounded-full border border-ink/12 bg-white/80 px-6 text-sm tracking-[0.06em] text-ink outline-none transition duration-300 focus:border-ink/35 focus:bg-white"
              />
              <button
                type="submit"
                className="min-h-14 rounded-full border border-ink bg-ink px-8 text-[11px] font-semibold uppercase tracking-[0.34em] text-cloud transition duration-500 hover:-translate-y-1 hover:bg-white hover:text-ink"
              >
                {newsletter.buttonLabel}
              </button>
            </form>
            <p className="mt-5 text-sm leading-6 text-ink/56">{newsletter.helper}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
