import { about as defaultAbout } from '../data/siteData';
import { SectionHeading } from './SectionHeading';

export function AboutSection({ aboutData = defaultAbout }) {
  return (
    <section id="sobre" className="section-shell mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -right-6 -top-6 hidden h-32 w-32 rounded-full border border-plum/16 md:block" />
          <div className="magazine-frame rounded-[2.3rem] p-4 shadow-card">
            <img
              src={aboutData.image}
              alt="Retrato editorial de Fabiana"
              className="h-[28rem] w-full rounded-[1.9rem] object-cover md:h-[38rem]"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Sobre Fabiana"
            title="Una marca personal construida como un universo visual, emocional y editorial"
            description="El tono mezcla sofisticacion, sensibilidad y una sensacion de revista digital pensada para acompanar procesos reales."
          />

          <div className="mt-8 space-y-5 text-lg leading-8 text-ink/72">
            {aboutData.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {aboutData.notes.map((note) => (
              <div key={note} className="rounded-[1.4rem] border border-plum/14 bg-white/76 px-4 py-5 shadow-soft">
                <p className="text-sm leading-6 text-ink/72">{note}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-2xl border-l border-plum/35 pl-6 font-serif text-3xl italic leading-tight text-ink md:text-4xl">
            "{aboutData.quote}"
          </p>
        </div>
      </div>
    </section>
  );
}
