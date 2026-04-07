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
              <Link key={category.name} to={category.path} aria-label={category.cta} className={`reveal-on-scroll group hover-lift relative block cursor-pointer overflow-hidden rounded-[1.55rem] border border-ink/10 p-5 transition duration-700 hover:border-plum/25 hover:shadow-lavender focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum/25 focus-visible:ring-offset-4 focus-visible:ring-offset-cloud md:rounded-[2rem] md:p-8 ${featured ? 'bg-[linear-gradient(135deg,#2A2235,#5B4A78)] text-white lg:row-span-2' : 'bg-lavenderMist/92 text-ink'}`} style={{ '--reveal-delay': `${index * 75}ms` }}>
                <div className={`absolute right-0 top-0 h-24 w-24 rounded-full blur-3xl transition duration-700 group-hover:scale-125 ${featured ? 'bg-lavender/20' : 'bg-lavender/50'}`} />
                <p className={`text-[9px] uppercase tracking-[0.28em] md:text-[10px] md:tracking-[0.32em] ${featured ? 'text-white/75' : 'text-plum'}`}>{category.accent}</p>
                <div className="mt-6 flex items-start justify-between gap-4 md:mt-8">
                  <h3 className={`font-display text-3xl leading-none tracking-[-0.03em] transition duration-500 group-hover:tracking-[-0.04em] md:text-[2.7rem] ${featured ? 'lg:text-6xl' : ''}`}>{category.name}</h3>
                  <span className={`text-[10px] uppercase tracking-[0.24em] md:text-[11px] md:tracking-[0.28em] ${featured ? 'text-cloud/50' : 'text-ink/40'}`}>0{index + 1}</span>
                </div>
                <p className={`mt-4 max-w-sm text-sm leading-6 md:mt-5 md:text-base md:leading-7 ${featured ? 'text-cloud/75' : 'text-ink/70'}`}>{category.description}</p>
                <div className="mt-7 flex items-center justify-between gap-4 md:mt-10 md:gap-5">
                  <span className={`text-[9px] uppercase tracking-[0.26em] transition duration-500 group-hover:tracking-[0.3em] md:text-[10px] ${featured ? 'text-cloud/70' : 'text-ink/60'}`}>Explorar</span>
                  <span className={`h-px flex-1 origin-left transition duration-700 group-hover:scale-x-90 ${featured ? 'bg-white/20' : 'bg-plum/25'}`} />
                  <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full border text-sm transition duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-1 md:h-9 md:w-9 ${featured ? 'border-lavender/25 text-lavender group-hover:bg-lavender/10' : 'border-plum/30 text-plum group-hover:bg-lavender'}`}>{"->"}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}