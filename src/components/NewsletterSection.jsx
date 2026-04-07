import { newsletter } from '../data/siteData';
import { SectionHeading } from './SectionHeading';

export function NewsletterSection() {
  return (
    <section id="newsletter" className="section-shell mx-auto max-w-6xl px-5 py-16 sm:px-6 md:px-10 md:py-24 lg:py-32">
      <div className="reveal-on-scroll relative overflow-hidden rounded-[1.75rem] border border-plum/20 bg-[linear-gradient(135deg,rgba(255,253,248,0.98),rgba(250,248,252,0.94)_48%,rgba(242,237,247,0.82)_100%)] px-5 py-9 shadow-soft transition duration-700 hover:-translate-y-1 hover:shadow-lavender md:rounded-[2.4rem] md:px-12 md:py-12 lg:px-16 lg:py-16">
        <div className="orb -right-10 top-8 hidden h-44 w-44 bg-lavender/70 md:block" />
        <div className="orb -left-10 bottom-0 hidden h-52 w-52 bg-blush/25 md:block" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-10">
          <div>
            <SectionHeading eyebrow="Carta" title={newsletter.title} description={newsletter.description} />
            <div className="mt-6 flex flex-wrap gap-2 md:mt-8 md:gap-2.5">
              {['Notas privadas', 'Recursos seleccionados', 'Lanzamientos primero'].map((item) => (
                <span key={item} className="rounded-full border border-plum/20 bg-lavenderMist/90 px-3 py-2 text-[9px] uppercase tracking-[0.22em] text-ink/60 backdrop-blur-sm md:px-4 md:text-[10px] md:tracking-[0.26em]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-[1.55rem] p-4 shadow-soft transition duration-500 hover:-translate-y-1 hover:bg-lavenderMist/90 md:rounded-[1.9rem] md:p-6">
            <form className="flex flex-col gap-3 md:gap-4">
              <label className="text-[10px] uppercase tracking-[0.32em] text-plum" htmlFor="newsletter-email">Tu correo</label>
              <input id="newsletter-email" type="email" placeholder={newsletter.placeholder} className="min-h-12 rounded-full border border-ink/10 bg-lavenderMist/90 px-5 py-4 text-sm tracking-[0.06em] text-ink outline-none transition duration-300 placeholder:text-ink/40 focus:border-plum/50 focus:bg-white focus:shadow-soft md:min-h-14 md:px-6" />
              <button type="submit" className="min-h-12 rounded-full border border-plum bg-plum px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-white shadow-[0_16px_34px_rgba(91,74,120,0.18)] transition duration-500 hover:-translate-y-1 hover:border-deepPlum hover:bg-deepPlum hover:text-cloud focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum/25 focus-visible:ring-offset-4 focus-visible:ring-offset-cloud md:min-h-14 md:px-8 md:text-[11px] md:tracking-[0.34em]">
                {newsletter.buttonLabel}
              </button>
            </form>
            <p className="mt-4 text-sm leading-6 text-ink/60 md:mt-5">{newsletter.helper}</p>
          </div>
        </div>
      </div>
    </section>
  );
}