import { hero } from '../data/siteData';
import { Button } from './Button';

export function HeroSection() {
  return (
    <section className="section-shell pt-8 md:pt-10">
      <div className="orb left-[-120px] top-16 h-72 w-72 bg-lavender/30 animate-pulseSoft" />
      <div className="orb right-[-120px] top-20 h-80 w-80 bg-lilac/20 animate-drift" />
      <div className="absolute inset-0 bg-grain opacity-80" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-14 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-32 lg:pt-20">
        <div className="relative z-10 animate-rise">
          <div className="mb-7 flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.34em] text-plum/75">
            <span>{hero.eyebrow}</span>
            <span className="hidden h-px w-16 bg-plum/20 md:block" />
            <span>{hero.issue}</span>
          </div>

          <h1 className="hero-title max-w-4xl text-[4.35rem] leading-[0.9] text-ink sm:text-[5.9rem] lg:text-[8.15rem] xl:text-[8.9rem]">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-2xl font-serif text-2xl italic leading-tight text-ink/80 md:text-[2rem]">
            {hero.lead}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-ink/70 md:text-lg">{hero.subtitle}</p>

          <div className="mt-8 flex flex-wrap gap-2.5" aria-label="Recorrido sugerido">
            {hero.journey.map((step, index) => (
              <span key={step} className="rounded-full border border-plum/20 bg-lavenderMist/80 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-ink/60 shadow-lavender backdrop-blur-sm">
                {String(index + 1).padStart(2, '0')} · {step}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>

          <div className="mt-12 grid max-w-2xl gap-4 border-t border-plum/20 pt-6 md:grid-cols-3">
            {hero.highlights.map((item, index) => (
              <div key={item} className="reveal-on-scroll space-y-2 rounded-[1.25rem] p-1 transition duration-500 hover:bg-lavenderMist/80" style={{ '--reveal-delay': `${index * 80}ms` }}>
                <span className="text-[10px] uppercase tracking-[0.32em] text-plum/75">FabuRose</span>
                <p className="text-sm leading-6 text-ink/70">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -left-8 top-6 hidden h-40 w-40 rounded-full border border-plum/20 md:block" />
          <div className="absolute right-0 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-plum/20 to-transparent lg:block" />

          <div className="relative z-10 w-full max-w-[32rem]">
            <div className="glass-panel rounded-[2.25rem] p-4 shadow-glow transition duration-700 hover:-translate-y-1 hover:shadow-lavender">
              <img
                src={hero.image}
                alt="Composición visual editorial para FabuRose"
                className="h-[33rem] w-full rounded-[1.75rem] object-cover animate-float"
              />
            </div>

            <div className="magazine-frame absolute -bottom-6 -left-4 max-w-[15rem] rounded-[1.6rem] p-5 transition duration-500 hover:-translate-y-1 hover:shadow-lavender md:-left-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-plum/75">Nota editorial</p>
              <p className="mt-3 font-serif text-xl leading-6 text-ink">{hero.microNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
