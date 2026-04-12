import { hero as defaultHero } from '../data/siteData';
import { Button } from './Button';

export function HeroSection({ heroData = defaultHero }) {
  return (
    <section className="section-shell pt-4 md:pt-8">
      <div className="absolute inset-0 bg-grain opacity-45" aria-hidden="true" />
      <div className="orb left-[-120px] top-12 hidden h-72 w-72 bg-plum/12 animate-pulseSoft md:block" />
      <div className="orb right-[-100px] top-24 hidden h-72 w-72 bg-blush/18 animate-drift md:block" />

      <div className="mx-auto max-w-[92rem] px-5 pb-14 pt-8 sm:px-6 md:px-10 md:pb-20 md:pt-12 lg:pb-28">
        <div className="editorial-cover-grid">
          <div className="relative z-10 flex min-h-[34rem] flex-col justify-between overflow-hidden rounded-[2rem] border border-plum/16 bg-white/72 p-5 shadow-soft backdrop-blur-sm sm:p-7 md:min-h-[44rem] md:rounded-[2.7rem] md:p-10 lg:col-span-7 lg:p-12">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,253,248,0.9),rgba(251,248,254,0.64)_42%,rgba(242,237,247,0.62))]" aria-hidden="true" />
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-plum/12" aria-hidden="true" />
            <div className="relative z-10">
              <div className="mb-6 flex flex-wrap items-center gap-3 text-[9px] uppercase tracking-[0.26em] text-plum sm:text-[10px] md:mb-9 md:gap-4 md:text-[11px] md:tracking-[0.34em]">
                <span>{heroData.eyebrow}</span>
                <span className="hidden h-px w-16 bg-plum/20 md:block" />
                <span>{heroData.issue}</span>
              </div>

              <h1 className="hero-title max-w-5xl text-[4.4rem] leading-[0.84] text-ink min-[390px]:text-[5.1rem] sm:text-[6.6rem] lg:text-[8.6rem] xl:text-[10.2rem]">{heroData.title}</h1>
              <p className="mt-6 max-w-2xl font-serif text-[1.55rem] italic leading-tight text-ink/80 sm:text-2xl md:text-[2.15rem]">{heroData.lead}</p>
              <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-ink/70 md:mt-6 md:text-lg md:leading-8">{heroData.subtitle}</p>
            </div>

            <div className="relative z-10 mt-10 grid gap-5 border-t border-plum/16 pt-6 xl:grid-cols-[0.85fr_1.15fr] xl:items-end">
              <div className="grid gap-3 sm:flex sm:flex-wrap md:gap-4">
                <Button href={heroData.primaryCta.href}>{heroData.primaryCta.label}</Button>
                <Button href={heroData.secondaryCta.href} variant="secondary">{heroData.secondaryCta.label}</Button>
              </div>
              <div className="grid gap-3 sm:grid-cols-4 xl:justify-end" aria-label="Recorrido sugerido">
                {heroData.journey.map((step, index) => (
                  <span key={step} className="rounded-full border border-plum/16 bg-lavenderMist/90 px-3 py-2 text-center text-[9px] uppercase tracking-[0.22em] text-ink/60 shadow-soft backdrop-blur-sm sm:text-[10px] sm:tracking-[0.24em]">
                    {String(index + 1).padStart(2, '0')} · {step}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 grid gap-4 lg:col-span-5 lg:grid-rows-[1fr_auto]">
            <div className="group relative min-h-[32rem] overflow-hidden rounded-[2rem] border border-plum/16 bg-plum/8 p-3 shadow-card md:min-h-[44rem] md:rounded-[2.7rem] md:p-4">
              <img src={heroData.image} alt="Editorial lifestyle para FabuRose" className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,26,47,0.04),rgba(34,26,47,0.36))]" />
              <div className="absolute inset-x-6 top-6 flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.28em] text-white/82">
                <span>FabuRose</span>
                <span>Visual journal</span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.55rem] border border-white/20 bg-white/16 p-5 text-white shadow-[0_18px_44px_rgba(34,26,47,0.16)] backdrop-blur-md transition duration-700 group-hover:-translate-y-1 group-hover:bg-white/20 md:bottom-7 md:left-7 md:right-7 md:p-6">
                <p className="text-[10px] uppercase tracking-[0.32em] text-white/72">Nota editorial</p>
                <p className="mt-3 max-w-sm font-serif text-xl leading-7 md:text-2xl">{heroData.microNote}</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[0.72fr_1fr]">
              <div className="overflow-hidden rounded-[1.55rem] border border-plum/16 bg-white/76 p-3 shadow-soft">
                <img src={heroData.imageSecondary} alt="Detalle editorial de moda para FabuRose" className="h-52 w-full rounded-[1.15rem] object-cover" />
              </div>
              <div className="rounded-[1.55rem] border border-plum/16 bg-white/78 p-5 shadow-soft">
                <p className="text-[10px] uppercase tracking-[0.3em] text-plum">Índice rápido</p>
                <div className="mt-4 space-y-3">
                  {heroData.highlights.map((item) => (
                    <p key={item} className="border-t border-plum/12 pt-3 text-sm leading-6 text-ink/68 first:border-t-0 first:pt-0">{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}