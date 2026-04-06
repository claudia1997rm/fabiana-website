import { statement } from '../data/siteData';

export function EditorialStatement() {
  return (
    <section className="section-shell mx-auto max-w-7xl px-6 pb-8 md:px-10 md:pb-16">
      <div className="magazine-frame rounded-[2.25rem] px-6 py-10 md:px-10 lg:px-14 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="editorial-kicker">Editorial Signature</p>
            <p className="mt-6 max-w-3xl font-display text-4xl leading-[0.98] tracking-[-0.03em] text-ink md:text-5xl lg:text-6xl">
              {statement.quote}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {statement.pillars.map((pillar) => (
              <article key={pillar.title} className="border-t border-ink/10 pt-4">
                <p className="text-[10px] uppercase tracking-[0.32em] text-taupe">{pillar.title}</p>
                <p className="mt-3 text-sm leading-6 text-ink/68">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
