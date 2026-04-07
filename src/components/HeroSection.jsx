import { hero } from '../data/siteData';
import { Button } from './Button';

export function HeroSection() {
  return (
    <section className="section-shell pt-8 md:pt-10">
      <div className="orb left-[-120px] top-16 h-72 w-72 bg-blush/55 animate-pulseSoft" />
      <div className="orb right-[-120px] top-20 h-80 w-80 bg-sand/30 animate-drift" />
      <div className="absolute inset-0 bg-grain opacity-80" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-14 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-32 lg:pt-20">
        <div className="relative z-10 animate-rise">
          <div className="mb-7 flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.34em] text-taupe">
            <span>{hero.eyebrow}</span>
            <span className="hidden h-px w-16 bg-ink/15 md:block" />
            <span>{hero.issue}</span>
          </div>

          <h1 className="max-w-4xl font-display text-[4.7rem] leading-[0.82] tracking-[-0.05em] text-ink sm:text-[6rem] lg:text-[8.6rem] xl:text-[9.4rem]">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-2xl font-serif text-2xl italic leading-tight text-ink/78 md:text-[2rem]">
            {hero.lead}
          </p>

          <p className="mt-6 max-w-xl text-base leading-8 text-ink/66 md:text-lg">{hero.subtitle}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>

          <div className="mt-12 grid max-w-2xl gap-4 border-t border-ink/10 pt-6 md:grid-cols-3">
            {hero.highlights.map((item) => (
              <div key={item} className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.32em] text-taupe">FabuRosa</span>
                <p className="text-sm leading-6 text-ink/68">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -left-8 top-6 hidden h-40 w-40 rounded-full border border-ink/10 md:block" />
          <div className="absolute right-0 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-ink/10 to-transparent lg:block" />

          <div className="relative z-10 w-full max-w-[32rem]">
            <div className="glass-panel rounded-[2.25rem] p-4 shadow-glow">
              <img
                src={hero.image}
                alt="Composición visual editorial para FabuRosa"
                className="h-[33rem] w-full rounded-[1.75rem] object-cover animate-float"
              />
            </div>

            <div className="magazine-frame absolute -bottom-6 -left-4 max-w-[15rem] rounded-[1.6rem] p-5 md:-left-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-taupe">Nota editorial</p>
              <p className="mt-3 font-serif text-xl leading-6 text-ink">{hero.microNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
