import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { categoryPages } from '../data/siteData';
import { buildAstrologySummary } from '../lib/astrology';
import { deletePhoto, listPublishedPhotos } from '../lib/contentService';

function ComingSoonGrid({ items }) {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      {items.map((item, index) => (
        <article
          key={item}
          className="reveal-on-scroll magazine-frame rounded-[1.6rem] p-6 transition duration-700 hover:-translate-y-1 hover:shadow-card"
          style={{ '--reveal-delay': `${index * 90}ms` }}
        >
          <p className="text-[10px] uppercase tracking-[0.32em] text-taupe">Pr?ximamente</p>
          <h3 className="mt-4 font-display text-3xl leading-none tracking-[-0.03em] text-ink">{item}</h3>
        </article>
      ))}
    </div>
  );
}

function HabitsShowcase({ habits }) {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [openHabitId, setOpenHabitId] = useState(habits[0]?.id ?? null);
  const filters = ['Todos', 'Diurnos', 'Nocturnos', 'Rituales'];

  const filteredHabits = useMemo(() => {
    if (activeFilter === 'Todos') return habits;
    return habits.filter((habit) => habit.tags?.includes(activeFilter) || habit.category === activeFilter);
  }, [activeFilter, habits]);

  return (
    <section className="mt-12">
      <div className="flex flex-col gap-3 border-t border-plum/16 pt-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="editorial-kicker">H?bitos iniciales</p>
          <h2 className="mt-4 font-display text-4xl leading-none tracking-[-0.03em] text-ink md:text-5xl">Rituales diarios</h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-ink/60">
          Elige cu?l abrir para explorar el detalle. As? podremos seguir sumando m?s rituales sin que la p?gina se sienta pesada.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {filters.map((filter) => {
          const active = filter === activeFilter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] transition duration-300 ${
                active
                  ? 'border-plum bg-plum text-cloud shadow-soft'
                  : 'border-plum/12 bg-white/78 text-ink/70 hover:border-plum/25 hover:bg-lilac hover:text-plum'
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-5">
        {filteredHabits.map((habit, index) => (
          <article
            key={habit.id}
            className="reveal-on-scroll magazine-frame overflow-hidden rounded-[2rem] p-6 md:p-8"
            style={{ '--reveal-delay': `${index * 90}ms` }}
          >
            <button
              type="button"
              onClick={() => setOpenHabitId((current) => (current === habit.id ? null : habit.id))}
              className="flex w-full flex-col gap-4 border-b border-plum/10 pb-6 text-left md:flex-row md:items-end md:justify-between"
            >
              <div className="min-w-0">
                <div className="flex flex-wrap gap-2">
                  {habit.tags?.map((tag) => (
                    <span key={tag} className="rounded-full border border-plum/10 bg-white/75 px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-plum">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 font-display text-4xl leading-none tracking-[-0.03em] text-ink md:text-5xl">{habit.name}</h3>
              </div>
              <div className="flex items-center gap-3 self-start md:self-end">
                <div className="rounded-full border border-plum/10 bg-white/65 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-plum">
                  Duraci?n: {habit.duration}
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-plum/10 bg-lilac/55 text-xl text-plum transition duration-300">
                  {openHabitId === habit.id ? '-' : '+'}
                </span>
              </div>
            </button>

            {openHabitId === habit.id ? (
              <div className="mt-6">
                <div className={`grid gap-6 ${habit.image ? 'lg:grid-cols-[0.72fr_1fr] lg:items-start' : ''}`}>
                  {habit.image ? (
                    <div className="overflow-hidden rounded-[1.6rem] lg:max-w-[19rem]">
                      <img src={habit.image} alt={habit.imageAlt || habit.name} className="h-72 w-full object-cover object-center" />
                    </div>
                  ) : null}

                  <p className="text-base leading-8 text-ink/72">{habit.description}</p>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <section className="rounded-[1.6rem] bg-white/78 p-5">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-taupe">Beneficios f?sicos</p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-ink/72">
                      {habit.physicalBenefits.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="rounded-[1.6rem] bg-lilac/55 p-5">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-taupe">Beneficios mentales y emocionales</p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-ink/72">
                      {habit.mentalEmotionalBenefits.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
                  <section className="rounded-[1.6rem] bg-plum p-5 text-cloud">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-lilac">Hormonas implicadas</p>
                    <div className="mt-4 space-y-4">
                      {habit.hormones.map((hormone) => (
                        <div key={hormone.name} className="border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cloud">{hormone.name}</p>
                          <p className="mt-2 text-sm leading-6 text-cloud/78">{hormone.effect}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="rounded-[1.6rem] border border-plum/10 bg-white/80 p-5">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-taupe">Sensaciones al realizarlo</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {habit.sensations.map((item) => (
                        <span key={item} className="rounded-full border border-plum/10 bg-lilac/65 px-3 py-2 text-sm text-ink/75">
                          {item}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function PhotographyGallery() {
  const { isAdmin } = useAuth();
  const [photos, setPhotos] = useState([]);
  const [status, setStatus] = useState('');

  async function refreshPhotos() {
    return listPublishedPhotos()
      .then((items) => setPhotos(items))
      .catch((error) => setStatus(error.message));
  }

  useEffect(() => {
    refreshPhotos();
  }, []);

  async function handleDeletePhoto(photo) {
    const confirmed = window.confirm(`Quieres borrar la fotograf?a "${photo.title}"? Esta acci?n no se puede deshacer.`);
    if (!confirmed) return;

    setStatus('');
    try {
      await deletePhoto(photo);
      await refreshPhotos();
      setStatus('Fotograf?a borrada.');
    } catch (error) {
      setStatus(error.message);
    }
  }

  return (
    <section className="mt-12 border-t border-plum/16 pt-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="editorial-kicker">Galer?a visual</p>
          <h2 className="mt-4 font-display text-4xl leading-none tracking-[-0.03em] text-ink md:text-5xl">
            Fotograf?as publicadas por Fabiana
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-ink/60">
          Un archivo visual para sesiones, detalles, atm?sfera y composiciones que construyen el universo FabuRose.
        </p>
      </div>

      {isAdmin ? (
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/admin#admin-fotografia" className="rounded-full border border-plum bg-plum px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-cloud shadow-lavender transition duration-500 hover:-translate-y-1 hover:bg-deepPlum">Subir fotograf?a</Link>
          <Link to="/admin#archivo-fotografias" className="rounded-full border border-plum/20 bg-lilac/60 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-plum transition duration-500 hover:-translate-y-0.5 hover:bg-white">Gestionar en admin</Link>
        </div>
      ) : null}

      {status ? <p className="mt-6 rounded-[1.2rem] bg-white/78 p-4 text-sm text-ink/70 shadow-soft">{status}</p> : null}

      {photos.length ? (
        <div className="mt-10 columns-1 gap-5 md:columns-2 xl:columns-3">
          {photos.map((photo, index) => (
            <article
              key={photo.id}
              className="reveal-on-scroll group relative mb-5 break-inside-avoid overflow-hidden rounded-[2rem] border border-plum/16 bg-white/78 p-3 shadow-soft transition duration-700 hover:-translate-y-2 hover:border-plum/30 hover:shadow-card"
              style={{ '--reveal-delay': `${index * 70}ms` }}
            >
              <div className="relative overflow-hidden rounded-[1.6rem] bg-plum/10">
                <img src={photo.image} alt={photo.title} className="h-full w-full object-cover transition duration-1000 group-hover:scale-[1.035]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,26,47,0.08),rgba(34,26,47,0.62))]" />
                {photo.featured ? <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/12 px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-cloud backdrop-blur-md">Destacada</span> : null}
                {isAdmin ? (
                  <div className="absolute right-4 top-4 flex gap-2 opacity-0 transition duration-500 group-hover:opacity-100">
                    <Link to="/admin#archivo-fotografias" className="rounded-full border border-white/20 bg-white/12 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-cloud backdrop-blur-md transition hover:bg-white hover:text-plum">Editar</Link>
                    <button type="button" onClick={() => handleDeletePhoto(photo)} className="rounded-full border border-white/20 bg-white px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-wine transition hover:bg-wine hover:text-white">Borrar</button>
                  </div>
                ) : null}
                <div className="absolute inset-x-4 bottom-4 translate-y-0 transition duration-700 group-hover:-translate-y-1">
                  <div className="rounded-[1.4rem] border border-white/16 bg-white/14 p-4 shadow-[0_18px_34px_rgba(34,26,47,0.18)] backdrop-blur-md">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-cloud/78">Comentario visual</p>
                    <h3 className="mt-3 font-display text-3xl leading-none tracking-[-0.03em] text-white">{photo.title}</h3>
                    {photo.description ? (
                      <p className="mt-3 text-sm leading-6 text-white/80">{photo.description}</p>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="magazine-frame mt-10 rounded-[2rem] p-8 text-center">
          <p className="editorial-kicker">Galer?a en preparaci?n</p>
          <h3 className="mt-4 font-display text-4xl leading-none text-ink">Pronto habr? fotograf?as aqu?</h3>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-ink/60">
            Cuando Fabiana publique fotos desde el panel admin, aparecer?n en esta p?gina con un formato m?s inmersivo y comentarios editoriales sobre la propia imagen.
          </p>
        </div>
      )}
    </section>
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
      setError('A?ade tu fecha de nacimiento para descubrir tu signo solar.');
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
        <h2 className="mt-4 font-display text-4xl leading-none tracking-[-0.03em] text-ink md:text-5xl">Descubre tu signo solar</h2>
        <p className="mt-5 leading-7 text-ink/70">
          Introduce tu fecha para generar una primera carta astral editorial: signo solar, elemento, modalidad y recomendaciones iniciales. La hora y el lugar quedan preparados para ampliar la lectura m?s adelante.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <label className="text-[10px] uppercase tracking-[0.3em] text-taupe">Fecha de nacimiento<input className="mt-3 min-h-14 w-full rounded-full border border-plum/14 bg-white/84 px-5 text-sm text-ink outline-none transition focus:border-plum/45 focus:bg-white" type="date" value={birthDate} onChange={(event) => setBirthDate(event.target.value)} /></label>
          <label className="text-[10px] uppercase tracking-[0.3em] text-taupe">Hora<input className="mt-3 min-h-14 w-full rounded-full border border-plum/14 bg-white/84 px-5 text-sm text-ink outline-none transition focus:border-plum/45 focus:bg-white" type="time" value={birthTime} onChange={(event) => setBirthTime(event.target.value)} /></label>
          <label className="text-[10px] uppercase tracking-[0.3em] text-taupe md:col-span-2">Lugar<input className="mt-3 min-h-14 w-full rounded-full border border-plum/14 bg-white/84 px-5 text-sm text-ink outline-none transition placeholder:text-ink/40 focus:border-plum/45 focus:bg-white" type="text" placeholder="Ciudad, pa?s" value={birthPlace} onChange={(event) => setBirthPlace(event.target.value)} /></label>
        </div>

        {error ? <p className="mt-4 rounded-[1rem] bg-white/78 p-4 text-sm leading-6 text-ink/70">{error}</p> : null}

        <button className="mt-8 min-h-14 rounded-full border border-plum bg-plum px-8 text-[11px] font-semibold uppercase tracking-[0.34em] text-cloud transition duration-500 hover:-translate-y-1 hover:bg-deepPlum focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum/25 focus-visible:ring-offset-4 focus-visible:ring-offset-cloud" type="submit">Descubrir mi carta</button>

        {summary ? (
          <section className="mt-8 rounded-[1.7rem] border border-plum/10 bg-white/76 p-6 shadow-soft">
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

      <section className="rounded-[2rem] border border-plum/14 bg-plum p-6 text-cloud shadow-card md:p-8">
        <p className="editorial-kicker text-lilac">Recomendaciones seg?n tu energ?a</p>
        <h2 className="mt-4 font-display text-4xl leading-none tracking-[-0.03em] md:text-5xl">{summary ? `Para una energ?a ${summary.sign.name}` : 'Un primer mapa para elegir recursos'}</h2>
        <p className="mt-5 leading-7 text-cloud/72">{summary ? 'Estas recomendaciones se actualizan con tu signo solar. En una versi?n futura podr?n combinarse con ascendente, luna y casas.' : 'A?ade tu fecha de nacimiento para personalizar este bloque con tu signo solar.'}</p>
        <div className="mt-8 space-y-4">
          {recommendations.map((item) => (
            <article key={item} className="rounded-[1.4rem] border border-white/10 bg-white/[0.08] p-5 transition duration-500 hover:-translate-y-1 hover:bg-white/[0.12]">
              <p className="text-sm leading-7 text-cloud/78">{item}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export function CategoryPage({ categoryKey }) {
  const page = categoryPages[categoryKey];
  const isHabitsPage = categoryKey === 'habitos';

  if (!page) {
    return (
      <section className="mx-auto max-w-5xl px-6 py-24 md:px-10">
        <p className="editorial-kicker">Universo Fabiana</p>
        <h1 className="mt-5 font-display text-6xl leading-none tracking-[-0.04em] text-ink">Categor?a no encontrada</h1>
        <Link className="soft-link mt-8 inline-flex" to="/#universo">Volver al universo</Link>
      </section>
    );
  }

  return (
    <section className="section-shell min-h-screen px-6 py-20 md:px-10 lg:py-28">
      <div className="orb right-[-80px] top-20 h-72 w-72 bg-blush/24" />
      <div className="orb left-[-120px] bottom-10 h-80 w-80 bg-sand/16" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <Link className="soft-link" to="/#universo">Volver al universo</Link>

        {isHabitsPage ? (
          <>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="editorial-kicker">{page.eyebrow}</p>
                <h1 className="mt-5 font-display text-[4.8rem] leading-[0.82] tracking-[-0.05em] text-ink sm:text-[6rem] lg:text-[8rem]">{page.title}</h1>
                <p className="mt-7 max-w-3xl font-serif text-2xl italic leading-tight text-ink/75 md:text-3xl">{page.subtitle}</p>
              </div>

              {page.image ? (
                <div className="magazine-frame overflow-hidden rounded-[2.2rem] p-3">
                  <img src={page.image} alt={page.imageAlt || page.title} className="h-[22rem] w-full rounded-[1.7rem] object-cover object-center md:h-[28rem]" />
                </div>
              ) : null}
            </div>

            <div className="mt-8 magazine-frame rounded-[2rem] p-7 md:p-8">
              <p className="text-[10px] uppercase tracking-[0.32em] text-taupe">Nota de la autora</p>
              {page.introTitle ? <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-[-0.03em] text-ink md:text-5xl">{page.introTitle}</h2> : null}
              {page.introParagraphs ? (
                <div className="mt-5 space-y-4 text-base leading-8 text-ink/70">
                  {page.introParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              ) : (
                <p className="mt-5 text-base leading-8 text-ink/70">{page.intro}</p>
              )}
            </div>
          </>
        ) : (
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="editorial-kicker">{page.eyebrow}</p>
              <h1 className="mt-5 font-display text-[4.8rem] leading-[0.82] tracking-[-0.05em] text-ink sm:text-[6rem] lg:text-[8rem]">{page.title}</h1>
              <p className="mt-7 max-w-3xl font-serif text-2xl italic leading-tight text-ink/75 md:text-3xl">{page.subtitle}</p>
            </div>

            <div className="magazine-frame rounded-[2rem] p-7 md:p-8">
              <p className="text-[10px] uppercase tracking-[0.32em] text-taupe">Nota de entrada</p>
              <p className="mt-5 text-base leading-8 text-ink/70">{page.intro}</p>
            </div>
          </div>
        )}

        {categoryKey === 'astrologia' ? <AstrologyPreview page={page} /> : null}
        {categoryKey === 'fotografia' ? <PhotographyGallery /> : null}
        {isHabitsPage && page.habits ? <HabitsShowcase habits={page.habits} /> : null}

        {categoryKey !== 'fotografia' ? (
          <section className="mt-12">
            <div className="flex flex-col gap-3 border-t border-plum/16 pt-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="editorial-kicker">Archivo editorial</p>
                <h2 className="mt-4 font-display text-4xl leading-none tracking-[-0.03em] text-ink md:text-5xl">Contenido preparado para crecer</h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-ink/60">Esta p?gina queda lista para conectar recursos, art?culos, colecciones y productos digitales en una futura versi?n de la plataforma.</p>
            </div>
            <ComingSoonGrid items={page.comingSoon} />
          </section>
        ) : null}
      </div>
    </section>
  );
}
