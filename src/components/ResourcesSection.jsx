import { resources as defaultResources } from '../data/siteData';
import { Button } from './Button';
import { SectionHeading } from './SectionHeading';
import { slugify } from '../lib/contentService';

export function ResourcesSection({ resourceItems = defaultResources }) {
  return (
    <section id="recursos" className="section-shell mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-24 lg:py-32">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Recursos / PDFs"
          title="PDFs, gu?as y piezas descargables con alma editorial"
          description="Una boutique digital para descargar gu?as, guardar rituales y convertir la inspiraci?n en una pr?ctica real. Cada pieza est? pensada como un peque?o objeto editorial."
        />
        <div className="max-w-md rounded-[1.35rem] border border-plum/25 bg-[linear-gradient(135deg,#FFFDF8,#F2EDF7)] p-4 text-sm leading-7 text-ink/70 shadow-soft backdrop-blur-sm md:rounded-[1.7rem] md:p-5">
          <p className="text-[10px] uppercase tracking-[0.32em] text-plum">Recorrido sugerido</p>
          <p className="mt-3">Empieza por el recurso que m?s resuene contigo, lee su detalle y vuelve cuando quieras a la carta para recibir nuevas ediciones.</p>
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:mt-14 lg:grid-cols-3 lg:gap-6">
        {resourceItems.map((resource, index) => (
          <article key={resource.title} className="product-card group overflow-hidden rounded-[1.65rem] border border-ink/10 bg-white/80 p-3 shadow-soft md:rounded-[2rem] md:p-4" style={{ '--reveal-delay': `${index * 85}ms` }}>
            <div className="relative overflow-hidden rounded-[1.35rem] bg-[linear-gradient(135deg,#FFFDF8,#F2EDF7)] md:rounded-[1.7rem]">
              <img src={resource.image} alt="" className="h-56 w-full object-cover transition duration-1000 group-hover:scale-105 sm:h-72 md:h-80" />
              <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-2 md:inset-x-4 md:top-4 md:gap-3">
                <span className="rounded-full border border-white/60 bg-lavenderMist/90 px-2.5 py-1.5 text-[9px] uppercase tracking-[0.22em] text-ink/70 backdrop-blur-md md:px-3 md:text-[10px] md:tracking-[0.28em]">{resource.meta}</span>
                <span className="rounded-full border border-white/40 bg-plum px-2.5 py-1.5 text-[9px] uppercase tracking-[0.22em] text-cloud backdrop-blur-md md:px-3 md:text-[10px] md:tracking-[0.28em]">{resource.edition}</span>
              </div>
            </div>
            <div className="p-3 pt-5 md:p-4 md:pt-7">
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                <p className="text-[9px] uppercase tracking-[0.26em] text-plum md:text-[10px] md:tracking-[0.32em]">{resource.type}</p>
                <span className="h-px w-8 bg-ink/20 transition duration-500 group-hover:w-14 group-hover:bg-plum/50" />
                <p className="text-[9px] uppercase tracking-[0.24em] text-plum md:text-[10px] md:tracking-[0.28em]">Producto editorial</p>
              </div>
              <h3 className="mt-4 font-display text-[2rem] leading-none tracking-[-0.04em] text-ink md:mt-5 md:text-4xl">{resource.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink/70 md:mt-5">{resource.description}</p>
              <div className="mt-6 border-t border-plum/20 pt-5 md:mt-8 md:pt-6">
                <Button href={`/resources/${slugify(resource.title)}`} variant={index === 0 ? 'primary' : 'secondary'}>{resource.cta}</Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
