import { Link } from 'react-router-dom';
import { categories } from '../data/siteData';
import { SectionHeading } from './SectionHeading';

export function UniverseSection() {
  return (
    <section id="universo" className="section-shell border-y border-plum/25 bg-[linear-gradient(135deg,rgba(248,245,250,0.92),rgba(85,74,104,0.22))]">
      <div className="orb left-[-90px] top-24 h-64 w-64 bg-wine/25" />
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-28">
        <SectionHeading
          eyebrow="Universo Fabiana"
          title="Seis lineas editoriales para una vida mas bella, consciente y magnetica"
          description="Elige una puerta de entrada: habitos, estilo, estetica, fotografia, astrologia o vida consciente. Desde ahi puedes leer, descargar y volver a tu propio ritual."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:grid-rows-[repeat(2,minmax(0,1fr))]">
          {categories.map((category, index) => {
            const featured = index === 0;
            return (
              <Link key={category.name} to={category.path} aria-label={category.cta} className={`reveal-on-scroll group hover-lift relative block cursor-pointer overflow-hidden rounded-[2rem] border border-ink/10 p-7 transition duration-700 hover:border-plum/25 hover:shadow-lavender focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum/25 focus-visible:ring-offset-4 focus-visible:ring-offset-cloud md:p-8 ${featured ? 'bg-[linear-gradient(135deg,#2A2235,#5E2F3F)] text-white lg:row-span-2' : 'bg-lavenderMist/90 text-ink'}`} style={{ '--reveal-delay': `${index * 75}ms` }}>
                <div className={`absolute right-0 top-0 h-28 w-28 rounded-full blur-3xl transition duration-700 group-hover:scale-125 ${featured ? 'bg-wine/25' : 'bg-lavenderMist/65'}`} />
                <p className={`text-[10px] uppercase tracking-[0.32em] ${featured ? 'text-white/80' : 'text-plum'}`}>{category.accent}</p>
                <div className="mt-8 flex items-start justify-between gap-4">
                  <h3 className={`font-display text-4xl leading-none tracking-[-0.03em] transition duration-500 group-hover:tracking-[-0.04em] ${featured ? 'md:text-6xl' : 'md:text-[2.7rem]'}`}>{category.name}</h3>
                  <span className={`text-[11px] uppercase tracking-[0.28em] ${featured ? 'text-cloud/50' : 'text-ink/35'}`}>0{index + 1}</span>
                </div>
                <p className={`mt-5 max-w-sm leading-7 ${featured ? 'text-cloud/75' : 'text-ink/70'}`}>{category.description}</p>
                <div className="mt-10 flex items-center justify-between gap-5">
                  <span className={`text-[10px] uppercase tracking-[0.3em] transition duration-500 group-hover:tracking-[0.34em] ${featured ? 'text-cloud/70' : 'text-ink/55'}`}>Explorar</span>
                  <span className={`h-px flex-1 origin-left transition duration-700 group-hover:scale-x-90 ${featured ? 'bg-white/25' : 'bg-plum/30'}`} />
                  <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-1 ${featured ? 'border-lavender/25 text-lavender group-hover:bg-lavender/10' : 'border-plum/35 text-plum group-hover:bg-lavenderMist'}`}>→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}