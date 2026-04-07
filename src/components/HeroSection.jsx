import { hero } from '../data/siteData';
import { Button } from './Button';

export function HeroSection() {
  return (
    <section className="section-shell pt-4 md:pt-10">
      <div className="orb left-[-120px] top-16 hidden h-72 w-72 bg-plum/20 animate-pulseSoft md:block" />
      <div className="orb right-[-120px] top-20 hidden h-80 w-80 bg-blush/20 animate-drift md:block" />
      <div className="absolute inset-0 bg-grain opacity-55" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-10 sm:px-6 md:px-10 md:pb-24 md:pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14 lg:pb-32 lg:pt-20">
        <div className="relative z-10 animate-rise">
          <div className="mb-5 flex flex-wrap items-center gap-3 text-[9px] uppercase tracking-[0.26em] text-plum sm:text-[10px] md:mb-7 md:gap-4 md:text-[11px] md:tracking-[0.34em]">
            <span>{hero.eyebrow}</span>
            <span className="hidden h-px w-16 bg-plum/20 md:block" />
            <span>{hero.issue}</span>
          </div>

          <h1 className="hero-title max-w-4xl text-[3.9rem] leading-[0.88] text-ink min-[390px]:text-[4.55rem] sm:text-[5.9rem] lg:text-[8.15rem] xl:text-[8.9rem]">{hero.title}</h1>
          <p className="mt-5 max-w-2xl font-serif text-[1.45rem] italic leading-tight text-ink/80 sm:text-2xl md:mt-6 md:text-[2rem]">{hero.lead}</p>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-7 text-ink/70 md:mt-6 md:text-lg md:leading-8">{hero.subtitle}</p>

          <div className="mt-7 flex flex-wrap gap-2" aria-label="Recorrido sugerido">
            {hero.journey.map((step, index) => (
              <span key={step} className="rounded-full border border-plum/20 bg-lavenderMist/90 px-3 py-2 text-[9px] uppercase tracking-[0.22em] text-ink/60 shadow-soft backdrop-blur-sm sm:px-4 sm:text-[10px] sm:tracking-[0.28em]">
                {String(index + 1).padStart(2, '0')} - {step}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap md:mt-10 md:gap-4">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">{hero.secondaryCta.label}</Button>
          </div>

          <div className="mt-9 grid max-w-2xl gap-3 border-t border-plum/20 pt-5 sm:grid-cols-3 md:mt-12 md:gap-4 md:pt-6">
            {hero.highlights.map((item, index) => (
              <div key={item} className="reveal-on-scroll space-y-2 rounded-[1.25rem] p-2 transition duration-500 hover:bg-lavenderMist/90 sm:p-1" style={{ '--reveal-delay': `${index * 80}ms` }}>
                <span className="text-[9px] uppercase tracking-[0.28em] text-plum sm:text-[10px] sm:tracking-[0.32em]">FabuRose</span>
                <p className="text-sm leading-6 text-ink/70">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -left-8 top-6 hidden h-40 w-40 rounded-full border border-plum/20 md:block" />
          <div className="absolute right-0 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-plum/20 to-transparent lg:block" />

          <div className="relative z-10 w-full max-w-[24rem] sm:max-w-[30rem] lg:max-w-[32rem]">
            <div className="glass-panel rounded-[1.8rem] p-3 shadow-soft transition duration-700 hover:-translate-y-1 hover:shadow-lavender md:rounded-[2.25rem] md:p-4">
              <img src={hero.image} alt="Composicion visual editorial para FabuRose" className="h-[23rem] w-full rounded-[1.45rem] object-cover animate-float sm:h-[30rem] md:h-[33rem] md:rounded-[1.75rem]" />
            </div>

            <div className="magazine-frame absolute -bottom-4 left-3 max-w-[13rem] rounded-[1.35rem] p-4 transition duration-500 hover:-translate-y-1 hover:shadow-lavender sm:-left-4 md:-bottom-6 md:-left-10 md:max-w-[15rem] md:rounded-[1.6rem] md:p-5">
              <p className="text-[9px] uppercase tracking-[0.26em] text-plum sm:text-[10px] sm:tracking-[0.3em]">Nota editorial</p>
              <p className="mt-3 font-serif text-lg leading-6 text-ink md:text-xl">{hero.microNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}