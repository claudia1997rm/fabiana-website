import { categories } from '../data/siteData';
import { SectionHeading } from './SectionHeading';

export function UniverseSection() {
  return (
    <section id="universo" className="section-shell border-y border-ink/10 bg-white/45">
      <div className="orb left-[-90px] top-24 h-64 w-64 bg-blush/30" />
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-28">
        <SectionHeading
          eyebrow="Universo Fabiana"
          title="Seis líneas editoriales para una vida más bella, consciente y magnética"
          description="Elige una puerta de entrada: hábitos, estilo, estética, fotografía, astrología o vida consciente. Desde ahí puedes leer, descargar y volver a tu propio ritual."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:grid-rows-[repeat(2,minmax(0,1fr))]">
          {categories.map((category, index) => {
            const featured = index === 0;
            return (
              <article
                key={category.name}
                className={`reveal-on-scroll group hover-lift relative overflow-hidden rounded-[2rem] border border-ink/10 p-7 md:p-8 ${featured ? 'bg-ink text-cloud lg:row-span-2' : 'bg-cloud/90 text-ink'}`}
                style={{ '--reveal-delay': `${index * 75}ms` }}
              >
                <div className={`absolute right-0 top-0 h-28 w-28 rounded-full blur-3xl transition duration-700 group-hover:scale-125 ${featured ? 'bg-blush/25' : 'bg-pearl/60'}`} />
                <p className={`text-[10px] uppercase tracking-[0.32em] ${featured ? 'text-blush' : 'text-taupe'}`}>
                  {category.accent}
                </p>
                <div className="mt-8 flex items-start justify-between gap-4">
                  <h3 className={`font-display text-4xl leading-none tracking-[-0.03em] transition duration-500 group-hover:tracking-[-0.04em] ${featured ? 'md:text-6xl' : 'md:text-[2.7rem]'}`}>
                    {category.name}
                  </h3>
                  <span className={`text-[11px] uppercase tracking-[0.28em] ${featured ? 'text-cloud/50' : 'text-ink/35'}`}>
                    0{index + 1}
                  </span>
                </div>
                <p className={`mt-5 max-w-sm leading-7 ${featured ? 'text-cloud/75' : 'text-ink/70'}`}>
                  {category.description}
                </p>
                <div className={`mt-10 h-px w-full origin-left ${featured ? 'bg-white/15' : 'bg-ink/10'} transition duration-700 group-hover:scale-x-90`} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}