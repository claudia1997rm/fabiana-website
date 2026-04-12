import { editorialGallery as defaultEditorialGallery, statement } from '../data/siteData';

export function EditorialGallerySection({ galleryItems = defaultEditorialGallery }) {
  return (
    <section className="section-shell mx-auto max-w-[92rem] px-5 py-10 sm:px-6 md:px-10 md:py-18">
      <div className="template-showcase-grid">
        <div className="relative overflow-hidden rounded-[2rem] border border-plum/16 bg-[linear-gradient(140deg,rgba(255,253,248,0.9),rgba(242,237,247,0.74))] p-6 shadow-soft md:rounded-[2.6rem] md:p-10 lg:row-span-2">
          <div className="absolute -left-24 bottom-[-7rem] h-72 w-72 rounded-full border border-plum/10" aria-hidden="true" />
          <p className="editorial-kicker">Lookbook FabuRose</p>
          <h2 className="mt-5 max-w-xl font-display text-5xl leading-[0.9] tracking-[-0.05em] text-ink md:text-6xl lg:text-7xl">
            {statement.lookbookTitle}
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-ink/68 md:text-base">
            Una capa visual más viva para que la web respire como revista: imagen, textura y atmósfera acompañando el contenido.
          </p>
          <div className="mt-10 flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-plum">
            <span>Editorial index</span>
            <span className="h-px flex-1 bg-plum/18" />
          </div>
        </div>

        {galleryItems.map((item, index) => (
          <article key={item.title} className={`template-photo-card group ${index === 0 ? 'lg:row-span-2' : ''}`}>
            <img
              src={item.image}
              alt={item.title}
              className={`h-full min-h-[20rem] w-full object-cover transition duration-1000 group-hover:scale-[1.035] ${index === 0 ? 'lg:min-h-[34rem]' : 'lg:min-h-[16rem]'}`}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,26,47,0.02),rgba(34,26,47,0.54))]" />
            <div className="absolute left-5 right-5 top-5 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-white/72">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <span>Ver edición</span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded-[1.35rem] border border-white/16 bg-white/14 p-4 text-white backdrop-blur-md transition duration-700 group-hover:-translate-y-1 group-hover:bg-white/18">
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/72">{item.title}</p>
              <p className="mt-3 text-sm leading-6 text-white/82">{item.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}