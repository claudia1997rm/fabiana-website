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
          description="El bloque está planteado como una boutique digital: visual, elegante y listo para conectar con una venta directa o con una página individual por producto."
        />
        <p className="max-w-md text-sm leading-7 text-ink/58">
          Cada card puede enlazar después a Gumroad, Stripe Payment Links, Shopify Lite o una futura ficha de producto con detalle ampliado.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-12">
        {resources.map((resource, index) => (
          <article
            key={resource.title}
            className={`group hover-lift magazine-frame overflow-hidden rounded-[2.1rem] p-4 ${index === 0 ? 'lg:col-span-7' : 'lg:col-span-5'}`}
          >
            <div className={`grid gap-6 ${index === 0 ? 'lg:grid-cols-[0.95fr_1.05fr] lg:items-center' : ''}`}>
              <div className="overflow-hidden rounded-[1.7rem] bg-pearl">
                <img
                  src={resource.image}
                  alt={`Portada del recurso ${resource.title}`}
                  className={`w-full object-cover transition duration-700 group-hover:scale-[1.03] ${index === 0 ? 'h-[28rem]' : 'h-72'}`}
                />
              </div>
              <div className="flex h-full flex-col px-2 pb-2 pt-2">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-taupe">{resource.type}</p>
                  <span className="h-1 w-1 rounded-full bg-ink/25" />
                  <p className="text-[10px] uppercase tracking-[0.28em] text-gold">{resource.meta}</p>
                </div>
                <h3 className="mt-4 font-display text-4xl leading-[0.95] tracking-[-0.03em] text-ink md:text-5xl">
                  {resource.title}
                </h3>
                <p className="mt-5 flex-1 leading-7 text-ink/66">{resource.description}</p>
                <div className="mt-8 border-t border-ink/10 pt-6">
                  <Button href={`/resources/${slugify(resource.title)}`} variant={index === 0 ? 'primary' : 'secondary'}>
                    {resource.cta}
                  </Button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}