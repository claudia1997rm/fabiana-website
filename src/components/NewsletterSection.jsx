import { newsletter } from '../data/siteData';
import { SectionHeading } from './SectionHeading';

export function NewsletterSection() {
  return (
    <section id="newsletter" className="section-shell mx-auto max-w-[92rem] px-5 py-16 sm:px-6 md:px-10 md:py-24 lg:py-32">
      <div className="reveal-on-scroll relative overflow-hidden rounded-[2rem] border border-plum/18 bg-[linear-gradient(135deg,rgba(255,253,248,0.98),rgba(250,248,252,0.94)_48%,rgba(242,237,247,0.82)_100%)] shadow-soft transition duration-700 hover:-translate-y-1 hover:shadow-lavender md:rounded-[2.7rem]">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative min-h-[18rem] overflow-hidden bg-plum p-8 text-cloud md:p-10 lg:min-h-full lg:p-12">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/12" aria-hidden="true" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-12">
              <p className="editorial-kicker text-lilac">Carta privada</p>
              <div>
                <p className="font-display text-7xl leading-none tracking-[-0.06em] md:text-8xl">FR</p>
                <p className="mt-5 max-w-sm text-sm leading-7 text-cloud/72">Una edición íntima para recibir recursos, notas y lanzamientos con calma.</p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10 lg:p-14">
            <SectionHeading eyebrow="Carta" title={newsletter.title} description={newsletter.description} />
            <div className="mt-6 flex flex-wrap gap-2 md:mt-8 md:gap-2.5">
              {['Notas privadas', 'Recursos seleccionados', 'Lanzamientos primero'].map((item) => (
                <span key={item} className="rounded-full border border-plum/20 bg-lavenderMist/90 px-3 py-2 text-[9px] uppercase tracking-[0.22em] text-ink/60 backdrop-blur-sm md:px-4 md:text-[10px] md:tracking-[0.26em]">
                  {item}
                </span>
              ))}
            </div>

            <form className="mt-8 grid gap-3 md:grid-cols-[1fr_auto] md:gap-4">
              <label className="sr-only" htmlFor="newsletter-email">Tu correo</label>
              <input id="newsletter-email" type="email" placeholder={newsletter.placeholder} className="min-h-14 rounded-full border border-ink/10 bg-white/90 px-6 py-4 text-sm tracking-[0.06em] text-ink outline-none transition duration-300 placeholder:text-ink/40 focus:border-plum/50 focus:bg-white focus:shadow-soft" />
              <button type="submit" className="min-h-14 rounded-full border border-plum bg-plum px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-white shadow-[0_16px_34px_rgba(91,74,120,0.18)] transition duration-500 hover:-translate-y-1 hover:border-deepPlum hover:bg-deepPlum hover:text-cloud focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum/25 focus-visible:ring-offset-4 focus-visible:ring-offset-cloud">
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