import { editorialGallery, statement } from '../data/siteData';

export function EditorialGallerySection() {
  return (
    <section className="section-shell mx-auto max-w-7xl px-5 py-8 sm:px-6 md:px-10 md:py-14">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div className="max-w-xl">
          <p className="editorial-kicker">Lookbook FabuRose</p>
          <h2 className="mt-4 font-display text-4xl leading-[0.96] tracking-[-0.04em] text-ink md:text-5xl">
            {statement.lookbookTitle}
          </h2>
          <p className="mt-5 text-sm leading-7 text-ink/70 md:text-base">
            Una capa visual mas viva para que la web respire como revista: imagen, textura y atmosfera acompanando el contenido.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
          <article className="group overflow-hidden rounded-[1.9rem] border border-plum/20 bg-white/70 p-3 shadow-soft transition duration-700 hover:-translate-y-1 hover:shadow-lavender">
            <div className="overflow-hidden rounded-[1.45rem]">
              <img
                src={editorialGallery[0].image}
                alt={editorialGallery[0].title}
                className="h-[19rem] w-full object-cover transition duration-1000 group-hover:scale-[1.03] md:h-[26rem]"
              />
            </div>
            <div className="p-3 md:p-4">
              <p className="text-[10px] uppercase tracking-[0.28em] text-plum">{editorialGallery[0].title}</p>
              <p className="mt-3 text-sm leading-6 text-ink/70">{editorialGallery[0].note}</p>
            </div>
          </article>

          <div className="grid gap-4">
            {editorialGallery.slice(1).map((item) => (
              <article key={item.title} className="group overflow-hidden rounded-[1.7rem] border border-plum/20 bg-white/70 p-3 shadow-soft transition duration-700 hover:-translate-y-1 hover:shadow-lavender">
                <div className="overflow-hidden rounded-[1.3rem]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-44 w-full object-cover transition duration-1000 group-hover:scale-[1.03] md:h-[12.25rem]"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-plum">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-ink/70">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}