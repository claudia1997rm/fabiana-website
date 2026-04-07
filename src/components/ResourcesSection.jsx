import { resources } from '../data/siteData';
import { slugify } from '../lib/contentService';
import { Button } from './Button';
import { SectionHeading } from './SectionHeading';

export function ResourcesSection() {
  return (
    <section id="recursos" className="section-shell mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Recursos digitales"
          title="PDFs, guías y piezas descargables con alma editorial"
          description="Una boutique digital para descargar guías, guardar rituales y convertir la inspiración en una práctica real. Cada pieza está pensada como un pequeño objeto editorial."
        />
        <div className="max-w-md rounded-[1.7rem] border border-ink/10 bg-white/55 p-5 text-sm leading-7 text-ink/70 shadow-soft backdrop-blur-sm">
          <p className="text-[10px] uppercase tracking-[0.32em] text-taupe">Recorrido sugerido</p>
          <p className="mt-3">Empieza por el recurso que más resuene contigo, lee su detalle y vuelve cuando quieras a la carta para recibir nuevas ediciones.</p>
        </div>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-12">
        {resources.map((resource, index) => (
          <article
            key={resource.title}
            className={`reveal-on-scroll product-card group magazine-frame overflow-hidden rounded-[2.1rem] p-4 ${index === 0 ? 'lg:col-span-7' : 'lg:col-span-5'}`}
            style={{ '--reveal-delay': `${index * 110}ms` }}
          >
            <div className={`grid gap-6 ${index === 0 ? 'lg:grid-cols-[0.95fr_1.05fr] lg:items-center' : ''}`}>
              <div className="relative overflow-hidden rounded-[1.7rem] bg-pearl">
                <img
                  src={resource.image}
                  alt={`Portada del recurso ${resource.title}`}
                  className={`w-full object-cover transition duration-700 group-hover:scale-[1.035] ${index === 0 ? 'h-[28rem]' : 'h-72'}`}
                />
                <div className="absolute inset-x-4 top-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/50 bg-white/75 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-ink/70 backdrop-blur-md">
                    {resource.meta}
                  </span>
                  <span className="rounded-full border border-white/40 bg-ink/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-cloud backdrop-blur-md">
                    {resource.edition}
                  </span>
                </div>
              </div>
              <div className="flex h-full flex-col px-2 pb-2 pt-2">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-taupe">{resource.type}</p>
                  <span className="h-px w-10 bg-ink/20 transition duration-500 group-hover:w-16 group-hover:bg-ink/40" />
                  <p className="text-[10px] uppercase tracking-[0.28em] text-gold">Producto editorial</p>
                </div>
                <h3 className="mt-4 font-display text-4xl leading-[0.95] tracking-[-0.03em] text-ink md:text-5xl">
                  {resource.title}
                </h3>
                <p className="mt-5 flex-1 leading-7 text-ink/70">{resource.description}</p>
                <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-ink/10 pt-6">
                  <Button href={`/resources/${slugify(resource.title)}`} variant={index === 0 ? 'primary' : 'secondary'}>
                    {resource.cta}
                  </Button>
                  <a className="soft-link" href="#newsletter">Avisarme de novedades</a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}