import { useState } from 'react';
import { Link } from 'react-router-dom';
import { categoryPages } from '../data/siteData';
import { buildAstrologySummary } from '../lib/astrology';

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
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const nextSummary = buildAstrologySummary({ birthDate, birthTime, birthPlace });

    if (!nextSummary) {
      setError('Añade tu fecha de nacimiento para descubrir tu signo solar.');
      setSummary(null);
      return;
    }

    setError('');
    setSummary(nextSummary);
  }

  const recommendations = summary?.sign.recommendations || page.recommendations;

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <form className="magazine-frame rounded-[2rem] p-6 md:p-8" onSubmit={handleSubmit}>
        <p className="editorial-kicker">Carta natal</p>
        <h2 className="mt-4 font-display text-4xl leading-none tracking-[-0.03em] text-ink md:text-5xl">
          Descubre tu signo solar
        </h2>
        <p className="mt-5 leading-7 text-ink/70">
          Introduce tu fecha para generar una primera carta astral editorial: signo solar, elemento, modalidad y recomendaciones iniciales. La hora y el lugar quedan preparados para ampliar la lectura más adelante.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <label className="text-[10px] uppercase tracking-[0.3em] text-taupe">
            Fecha de nacimiento
            <input className="mt-3 min-h-14 w-full rounded-full border border-ink/10 bg-white/80 px-5 text-sm text-ink outline-none transition focus:border-ink/50 focus:bg-white" type="date" value={birthDate} onChange={(event) => setBirthDate(event.target.value)} />
          </label>
          <label className="text-[10px] uppercase tracking-[0.3em] text-taupe">
            Hora
            <input className="mt-3 min-h-14 w-full rounded-full border border-ink/10 bg-white/80 px-5 text-sm text-ink outline-none transition focus:border-ink/50 focus:bg-white" type="time" value={birthTime} onChange={(event) => setBirthTime(event.target.value)} />
          </label>
          <label className="text-[10px] uppercase tracking-[0.3em] text-taupe md:col-span-2">
            Lugar
            <input className="mt-3 min-h-14 w-full rounded-full border border-ink/10 bg-white/80 px-5 text-sm text-ink outline-none transition placeholder:text-ink/35 focus:border-ink/50 focus:bg-white" type="text" placeholder="Ciudad, país" value={birthPlace} onChange={(event) => setBirthPlace(event.target.value)} />
          </label>
        </div>

        {error ? <p className="mt-4 rounded-[1rem] bg-white/70 p-4 text-sm leading-6 text-ink/70">{error}</p> : null}

        <button className="mt-8 min-h-14 rounded-full border border-ink bg-ink px-8 text-[11px] font-semibold uppercase tracking-[0.34em] text-cloud transition duration-500 hover:-translate-y-1 hover:bg-white hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/25 focus-visible:ring-offset-4 focus-visible:ring-offset-cloud" type="submit">
          Descubrir mi carta
        </button>

        {summary ? (
          <section className="mt-8 rounded-[1.7rem] border border-ink/10 bg-white/70 p-6 shadow-soft">
            <p className="text-[10px] uppercase tracking-[0.32em] text-taupe">Carta astral inicial</p>
            <h3 className="mt-3 font-display text-4xl leading-none tracking-[-0.03em] text-ink">{summary.title}</h3>
            <div className="mt-5 grid gap-3 text-sm leading-6 text-ink/70 md:grid-cols-3">
              <p><span className="font-semibold text-ink">Elemento:</span> {summary.sign.element}</p>
              <p><span className="font-semibold text-ink">Modalidad:</span> {summary.sign.modality}</p>
              <p><span className="font-semibold text-ink">Mantra:</span> {summary.sign.mantra}</p>
            </div>
            <p className="mt-5 leading-7 text-ink/70">{summary.description}</p>
            {summary.context ? <p className="mt-3 text-xs uppercase tracking-[0.22em] text-taupe">Datos guardados para futura lectura: {summary.context}</p> : null}
          </section>
        ) : null}
      </form>

      <section className="rounded-[2rem] border border-white/10 bg-ink p-6 text-cloud shadow-card md:p-8">
        <p className="editorial-kicker text-blush">Recomendaciones según tu energía</p>
        <h2 className="mt-4 font-display text-4xl leading-none tracking-[-0.03em] md:text-5xl">
          {summary ? `Para una energía ${summary.sign.name}` : 'Un primer mapa para elegir recursos'}
        </h2>
        <p className="mt-5 leading-7 text-cloud/70">
          {summary ? 'Estas recomendaciones se actualizan con tu signo solar. En una versión futura podrán combinarse con ascendente, luna y casas.' : 'Añade tu fecha de nacimiento para personalizar este bloque con tu signo solar.'}
        </p>
        <div className="mt-8 space-y-4">
          {recommendations.map((item) => (
            <article key={item} className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-5 transition duration-500 hover:-translate-y-1 hover:bg-white/[0.09]">
              <p className="text-sm leading-7 text-cloud/75">{item}</p>
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
            <p className="mt-7 max-w-3xl font-serif text-2xl italic leading-tight text-ink/75 md:text-3xl">
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
            <p className="max-w-md text-sm leading-7 text-ink/60">
              Esta página queda lista para conectar recursos, artículos, colecciones y productos digitales en una futura versión de la plataforma.
            </p>
          </div>
          <ComingSoonGrid items={page.comingSoon} />
        </section>
      </div>
    </section>
  );
}
