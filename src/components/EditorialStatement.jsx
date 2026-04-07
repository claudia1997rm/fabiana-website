import { statement } from '../data/siteData';

export function EditorialStatement() {
  return (
    <section className="section-shell mx-auto max-w-7xl px-6 pb-8 md:px-10 md:pb-16">
      <div className="reveal-on-scroll magazine-frame rounded-[2.25rem] px-6 py-10 transition duration-700 hover:-translate-y-1 hover:shadow-violetGlow md:px-10 lg:px-14 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="editorial-kicker">Firma editorial</p>
            <p className="mt-6 max-w-3xl font-display text-4xl leading-[0.98] tracking-[-0.03em] text-ink md:text-5xl lg:text-6xl">
              {statement.quote}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {statement.pillars.map((pillar, index) => (
              <article key={pillar.title} className="reveal-on-scroll border-t border-lavender/35 pt-4 transition duration-500 hover:border-plum/45" style={{ '--reveal-delay': `${index * 90}ms` }}>
                <p className="text-[10px] uppercase tracking-[0.32em] text-plum/75">{pillar.title}</p>
                <p className="mt-3 text-sm leading-6 text-ink/70">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}