import { newsletter } from '../data/siteData';
import { SectionHeading } from './SectionHeading';

export function NewsletterSection() {
  return (
    <section id="newsletter" className="section-shell mx-auto max-w-6xl px-6 py-24 md:px-10 lg:py-32">
      <div className="reveal-on-scroll relative overflow-hidden rounded-[2.4rem] border border-lavender/25 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(236,228,219,0.84)_48%,rgba(233,229,245,0.78)_100%)] px-6 py-12 shadow-card transition duration-700 hover:-translate-y-1 hover:shadow-violetGlow md:px-12 lg:px-16 lg:py-16">
        <div className="orb -right-10 top-8 h-44 w-44 bg-white/60" />
        <div className="orb -left-10 bottom-0 h-52 w-52 bg-lavender/30" />
        <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <SectionHeading
              eyebrow="Carta"
              title={newsletter.title}
              description={newsletter.description}
            />
            <div className="mt-8 flex flex-wrap gap-2.5">
              {['Notas privadas', 'Recursos seleccionados', 'Lanzamientos primero'].map((item) => (
                <span key={item} className="rounded-full border border-lavender/25 bg-white/60 px-4 py-2 text-[10px] uppercase tracking-[0.26em] text-ink/60 backdrop-blur-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-[1.9rem] p-5 shadow-soft transition duration-500 hover:-translate-y-1 hover:bg-white/60 md:p-6">
            <form className="flex flex-col gap-4">
              <label className="text-[10px] uppercase tracking-[0.32em] text-taupe" htmlFor="newsletter-email">Tu correo</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder={newsletter.placeholder}
                className="min-h-14 rounded-full border border-ink/12 bg-white/85 px-6 text-sm tracking-[0.06em] text-ink outline-none transition duration-300 placeholder:text-ink/35 focus:border-plum/50 focus:bg-white focus:shadow-soft"
              />
              <button
                type="submit"
                className="min-h-14 rounded-full border border-ink bg-ink px-8 text-[11px] font-semibold uppercase tracking-[0.34em] text-cloud transition duration-500 hover:-translate-y-1 hover:border-plum hover:bg-plum hover:text-cloud focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum/25 focus-visible:ring-offset-4 focus-visible:ring-offset-cloud"
              >
                {newsletter.buttonLabel}
              </button>
            </form>
            <p className="mt-5 text-sm leading-6 text-ink/60">{newsletter.helper}</p>
          </div>
        </div>
      </div>
    </section>
  );
}