import { resources } from '../data/siteData';
import { Button } from './Button';
import { SectionHeading } from './SectionHeading';
import { slugify } from '../lib/contentService';

export function ResourcesSection() {
  return (
    <section id="recursos" className="section-shell mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Recursos / PDFs"
          title="PDFs, guias y piezas descargables con alma editorial"
          description="Una boutique digital para descargar guias, guardar rituales y convertir la inspiracion en una practica real. Cada pieza esta pensada como un pequeno objeto editorial."
        />
        <div className="max-w-md rounded-[1.7rem] border border-plum/35 bg-[linear-gradient(135deg,#F8F5FA,#D4CBDC)] p-5 text-sm leading-7 text-ink/70 shadow-soft backdrop-blur-sm">
          <p className="text-[10px] uppercase tracking-[0.32em] text-plum">Recorrido sugerido</p>
          <p className="mt-3">Empieza por el recurso que mas resuene contigo, lee su detalle y vuelve cuando quieras a la carta para recibir nuevas ediciones.</p>
        </div>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {resources.map((resource, index) => (
          <article key={resource.title} className="product-card group overflow-hidden rounded-[2rem] border border-ink/10 bg-white/70 p-4 shadow-soft" style={{ '--reveal-delay': `${index * 85}ms` }}>
            <div className="relative overflow-hidden rounded-[1.7rem] bg-[linear-gradient(135deg,#F8F5FA,#D4CBDC)]">
              <img src={resource.image} alt="" className="h-80 w-full object-cover transition duration-1000 group-hover:scale-105" />
              <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3">
                <span className="rounded-full border border-white/50 bg-lavenderMist/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-ink/70 backdrop-blur-md">{resource.meta}</span>
                <span className="rounded-full border border-white/40 bg-[linear-gradient(135deg,#2A2235,#5E2F3F)] px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-cloud backdrop-blur-md">{resource.edition}</span>
              </div>
            </div>
            <div className="p-4 pt-7">
              <div className="flex items-center gap-3">
                <p className="text-[10px] uppercase tracking-[0.32em] text-plum">{resource.type}</p>
                <span className="h-px w-10 bg-ink/20 transition duration-500 group-hover:w-16 group-hover:bg-plum/60" />
                <p className="text-[10px] uppercase tracking-[0.28em] text-plum">Producto editorial</p>
              </div>
              <h3 className="mt-5 font-display text-4xl leading-none tracking-[-0.04em] text-ink">{resource.title}</h3>
              <p className="mt-5 text-sm leading-7 text-ink/70">{resource.description}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-plum/25 pt-6">
                <Button href={`/resources/${slugify(resource.title)}`} variant={index === 0 ? 'primary' : 'secondary'}>{resource.cta}</Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}