import { Link } from 'react-router-dom';
import { categories } from '../data/siteData';
import { SectionHeading } from './SectionHeading';

export function UniverseSection() {
  return (
    <section id="universo" className="section-shell border-y border-plum/20 bg-[linear-gradient(135deg,rgba(255,253,248,0.94),rgba(242,237,247,0.78))]">
      <div className="orb left-[-90px] top-24 hidden h-64 w-64 bg-blush/25 md:block" />
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-24 lg:py-28">
        <SectionHeading
          eyebrow="Universo Fabiana"
          title="Seis lineas editoriales para una vida mas bella, consciente y magnetica"
          description="Elige una puerta de entrada: habitos, estilo, estetica, fotografia, astrologia o vida consciente. Desde ahi puedes leer, descargar y volver a tu propio ritual."
        />

        <div className="mt-10 grid gap-4 md:mt-14 lg:grid-cols-3 lg:grid-rows-[repeat(2,minmax(0,1fr))]">
          {categories.map((category, index) => {
            const featured = index === 0;
            return (
              <Link
                key={category.name}
                to={category.path}
                aria-label={category.cta}
                className={`reveal-on-scroll group hover-lift relative block cursor-pointer overflow-hidden rounded-[1.55rem] border border-ink/10 transition duration-700 hover:border-plum/25 hover:shadow-lavender focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum/25 focus-visible:ring-offset-4 focus-visible:ring-offset-cloud md:rounded-[2rem] ${featured ? 'lg:row-span-2' : ''}`}
                style={{ '--reveal-delay': `${index * 75}ms` }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className={`absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-[1.03] ${featured ? 'opacity-90' : 'opacity-82'}`}
                />
                <div className={`absolute inset-0 ${featured ? 'bg-[linear-gradient(180deg,rgba(32,26,40,0.22),rgba(32,26,40,0.74))]' : 'bg-[linear-gradient(180deg,rgba(255,253,248,0.18),rgba(42,34,53,0.68))]'}`} />
                <div className={`absolute right-0 top-0 h-24 w-24 rounded-full blur-3xl transition duration-700 group-hover:scale-125 ${featured ? 'bg-lavender/20' : 'bg-lavender/50'}`} />
                <div className={`relative z-10 flex h-full flex-col justify-between p-5 text-white md:p-8 ${featured ? 'min-h-[32rem]' : 'min-h-[20rem]'}`}>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.28em] md:text-[10px] md:tracking-[0.32em] text-white/80">{category.accent}</p>
                    <div className="mt-6 flex items-start justify-between gap-4 md:mt-8">
                      <h3 className={`font-display text-3xl leading-none tracking-[-0.03em] transition duration-500 group-hover:tracking-[-0.04em] md:text-[2.7rem] ${featured ? 'lg:text-6xl' : ''}`}>{category.name}</h3>
                      <span className="text-[10px] uppercase tracking-[0.24em] text-white/55 md:text-[11px] md:tracking-[0.28em]">0{index + 1}</span>
                    </div>
                    <p className={`mt-4 max-w-sm text-sm leading-6 text-white/80 md:mt-5 md:text-base md:leading-7 ${featured ? 'lg:max-w-md' : ''}`}>{category.description}</p>
                  </div>
                  <div className="mt-7 flex items-center justify-between gap-4 md:mt-10 md:gap-5">
                    <span className="text-[9px] uppercase tracking-[0.26em] text-white/80 transition duration-500 group-hover:tracking-[0.3em] md:text-[10px]">Explorar</span>
                    <span className="h-px flex-1 origin-left bg-white/25 transition duration-700 group-hover:scale-x-90" />
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-sm text-white transition duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-1 group-hover:bg-white/10 md:h-9 md:w-9">{'->'}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}