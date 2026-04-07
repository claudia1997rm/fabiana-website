import { Link } from 'react-router-dom';
import { categoryPages } from '../data/siteData';

function ComingSoonGrid({ items }) {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      {items.map((item, index) => (
        <article
          key={item}
          className="reveal-on-scroll magazine-frame rounded-[1.6rem] p-6 transition duration-700 hover:-translate-y-1 hover:shadow-card"
          style={{ '--reveal-delay': `${index * 90}ms` }}
        >
          <p className="text-[10px] uppercase tracking-[0.32em] text-taupe">Próximamente</p>
          <h3 className="mt-4 font-display text-3xl leading-none tracking-[-0.03em] text-ink">{item}</h3>
        </article>
      ))}
    </div>
  );
}

function AstrologyPreview({ page }) {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <form className="magazine-frame rounded-[2rem] p-6 md:p-8" onSubmit={(event) => event.preventDefault()}>
        <p className="editorial-kicker">Carta natal</p>
        <h2 className="mt-4 font-display text-4xl leading-none tracking-[-0.03em] text-ink md:text-5xl">
          Prepara tu lectura energética
        </h2>
        <p className="mt-5 leading-7 text-ink/68">
          Este bloque está listo para conectar más adelante una lógica real de carta natal. Por ahora funciona como maqueta visual de la experiencia.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <label className="text-[10px] uppercase tracking-[0.3em] text-taupe">
            Fecha de nacimiento
            <input className="mt-3 min-h-14 w-full rounded-full border border-ink/10 bg-white/80 px-5 text-sm text-ink outline-none transition focus:border-ink/45 focus:bg-white" type="date" />
          </label>
          <label className="text-[10px] uppercase tracking-[0.3em] text-taupe">
            Hora
            <input className="mt-3 min-h-14 w-full rounded-full border border-ink/10 bg-white/80 px-5 text-sm text-ink outline-none transition focus:border-ink/45 focus:bg-white" type="time" />
          </label>
          <label className="text-[10px] uppercase tracking-[0.3em] text-taupe md:col-span-2">
            Lugar
            <input className="mt-3 min-h-14 w-full rounded-full border border-ink/10 bg-white/80 px-5 text-sm text-ink outline-none transition placeholder:text-ink/35 focus:border-ink/45 focus:bg-white" type="text" placeholder="Ciudad, país" />
          </label>
        </div>

        <button className="mt-8 min-h-14 rounded-full border border-ink bg-ink px-8 text-[11px] font-semibold uppercase tracking-[0.34em] text-cloud transition duration-500 hover:-translate-y-1 hover:bg-white hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/25 focus-visible:ring-offset-4 focus-visible:ring-offset-cloud" type="button">
          Descubrir mi carta
        </button>
      </form>

      <section className="rounded-[2rem] border border-white/10 bg-ink p-6 text-cloud shadow-card md:p-8">
        <p className="editorial-kicker text-blush">Recomendaciones según tu energía</p>
        <h2 className="mt-4 font-display text-4xl leading-none tracking-[-0.03em] md:text-5xl">
          Un primer mapa para elegir recursos
        </h2>
        <div className="mt-8 space-y-4">
          {page.recommendations.map((item) => (
            <article key={item} className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-5 transition duration-500 hover:-translate-y-1 hover:bg-white/[0.09]">
              <p className="text-sm leading-7 text-cloud/76">{item}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export function CategoryPage({ categoryKey }) {
  const page = categoryPages[categoryKey];

  if (!page) {
    return (
      <section className="mx-auto max-w-5xl px-6 py-24 md:px-10">
        <p className="editorial-kicker">Universo Fabiana</p>
        <h1 className="mt-5 font-display text-6xl leading-none tracking-[-0.04em] text-ink">Categoría no encontrada</h1>
        <Link className="soft-link mt-8 inline-flex" to="/#universo">Volver al universo</Link>
      </section>
    );
  }

  return (
    <section className="section-shell min-h-screen px-6 py-20 md:px-10 lg:py-28">
      <div className="orb right-[-80px] top-20 h-72 w-72 bg-blush/30" />
      <div className="orb left-[-120px] bottom-10 h-80 w-80 bg-sand/20" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <Link className="soft-link" to="/#universo">Volver al universo</Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="editorial-kicker">{page.eyebrow}</p>
            <h1 className="mt-5 font-display text-[4.8rem] leading-[0.82] tracking-[-0.05em] text-ink sm:text-[6rem] lg:text-[8rem]">
              {page.title}
            </h1>
            <p className="mt-7 max-w-3xl font-serif text-2xl italic leading-tight text-ink/76 md:text-3xl">
              {page.subtitle}
            </p>
          </div>

          <div className="magazine-frame rounded-[2rem] p-7 md:p-8">
            <p className="text-[10px] uppercase tracking-[0.32em] text-taupe">Nota de entrada</p>
            <p className="mt-5 text-base leading-8 text-ink/70">{page.intro}</p>
          </div>
        </div>

        {categoryKey === 'astrologia' ? <AstrologyPreview page={page} /> : null}

        <section className="mt-12">
          <div className="flex flex-col gap-3 border-t border-ink/10 pt-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="editorial-kicker">Archivo editorial</p>
              <h2 className="mt-4 font-display text-4xl leading-none tracking-[-0.03em] text-ink md:text-5xl">
                Contenido preparado para crecer
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-ink/62">
              Esta página queda lista para conectar recursos, artículos, colecciones y productos digitales en una futura versión de la plataforma.
            </p>
          </div>
          <ComingSoonGrid items={page.comingSoon} />
        </section>
      </div>
    </section>
  );
}
