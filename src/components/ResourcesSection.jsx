import { resources as defaultResources } from '../data/siteData';
import { Button } from './Button';
import { SectionHeading } from './SectionHeading';
import { slugify } from '../lib/contentService';

export function ResourcesSection({ resourceItems = defaultResources }) {
  const [featuredResource, ...secondaryResources] = resourceItems;

  return (
    <section id="recursos" className="section-shell mx-auto max-w-[92rem] px-5 py-16 sm:px-6 md:px-10 md:py-24 lg:py-32">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <SectionHeading
          eyebrow="Recursos / PDFs"
          title="Una boutique editorial para descargar y volver a ti"
          description="Inspirado en vitrinas de producto: una pieza protagonista, recursos secundarios claros y una ruta de lectura más directa."
        />
        <div className="rounded-[1.6rem] border border-plum/18 bg-white/76 p-5 text-sm leading-7 text-ink/70 shadow-soft md:p-6">
          <p className="text-[10px] uppercase tracking-[0.32em] text-plum">Recorrido sugerido</p>
          <p className="mt-3">Empieza por el recurso que más resuene contigo, lee su detalle y vuelve cuando quieras a la carta para recibir nuevas ediciones.</p>
        </div>
      </div>

      {featuredResource ? (
        <article className="product-card group mt-12 overflow-hidden rounded-[2rem] border border-plum/16 bg-white/80 p-3 shadow-soft md:rounded-[2.7rem] md:p-4 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <div className="relative min-h-[28rem] overflow-hidden rounded-[1.65rem] bg-plum/10 md:rounded-[2.2rem] lg:min-h-[36rem]">
            <img src={featuredResource.image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,26,47,0.04),rgba(34,26,47,0.46))]" />
            <span className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/18 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white backdrop-blur-md">{featuredResource.meta}</span>
          </div>
          <div className="flex flex-col justify-between p-5 md:p-8 lg:p-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-plum">{featuredResource.type} · {featuredResource.edition}</p>
              <h3 className="mt-5 max-w-2xl font-display text-5xl leading-[0.88] tracking-[-0.05em] text-ink md:text-6xl lg:text-7xl">{featuredResource.title}</h3>
              <p className="mt-6 max-w-xl text-base leading-8 text-ink/70">{featuredResource.description}</p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-plum/16 pt-6">
              <Button href={`/resources/${slugify(featuredResource.title)}`}>{featuredResource.cta}</Button>
              <p className="max-w-xs text-xs uppercase tracking-[0.24em] text-ink/45">Objeto digital · lectura pausada · descarga</p>
            </div>
          </div>
        </article>
      ) : null}

      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:mt-8 lg:grid-cols-2">
        {secondaryResources.map((resource, index) => (
          <article key={resource.title} className="product-card group overflow-hidden rounded-[1.65rem] border border-ink/10 bg-white/80 p-3 shadow-soft md:rounded-[2rem] md:p-4" style={{ '--reveal-delay': `${index * 85}ms` }}>
            <div className="relative overflow-hidden rounded-[1.35rem] bg-[linear-gradient(135deg,#FFFDF8,#F2EDF7)] md:rounded-[1.7rem]">
              <img src={resource.image} alt="" className="h-56 w-full object-cover transition duration-1000 group-hover:scale-105 sm:h-72 md:h-80" />
              <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-2 md:inset-x-4 md:top-4 md:gap-3">
                <span className="rounded-full border border-white/60 bg-lavenderMist/90 px-2.5 py-1.5 text-[9px] uppercase tracking-[0.22em] text-ink/70 backdrop-blur-md md:px-3 md:text-[10px] md:tracking-[0.28em]">{resource.meta}</span>
                <span className="rounded-full border border-white/40 bg-plum px-2.5 py-1.5 text-[9px] uppercase tracking-[0.22em] text-cloud backdrop-blur-md md:px-3 md:text-[10px] md:tracking-[0.28em]">{resource.edition}</span>
              </div>
            </div>
            <div className="p-3 pt-5 md:p-4 md:pt-7">
              <p className="text-[9px] uppercase tracking-[0.26em] text-plum md:text-[10px] md:tracking-[0.32em]">{resource.type}</p>
              <h3 className="mt-4 font-display text-[2rem] leading-none tracking-[-0.04em] text-ink md:mt-5 md:text-4xl">{resource.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink/70 md:mt-5">{resource.description}</p>
              <div className="mt-6 border-t border-plum/20 pt-5 md:mt-8 md:pt-6">
                <Button href={`/resources/${slugify(resource.title)}`} variant="secondary">{resource.cta}</Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}