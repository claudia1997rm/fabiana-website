import { journalPosts } from '../data/siteData';
import { slugify } from '../lib/contentService';
import { Button } from './Button';
import { SectionHeading } from './SectionHeading';

export function JournalSection() {
  return (
    <section id="journal" className="section-shell bg-[linear-gradient(135deg,#4C3F91,#6E2F45)] text-cloud">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(246,244,251,0.16),transparent_24%)]" />
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Diario"
            title="Textos para mirar la vida con más belleza y significado"
            description="Una sección editorial pensada para leer con calma: ideas, rituales y estilo personal antes de guardar, descargar o volver a tu propia práctica."
            theme="dark"
          />
          <Button href="#newsletter" variant="secondary">
            Recibir nuevas notas
          </Button>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {journalPosts.map((post, index) => (
            <a
              key={post.title}
              href={`/journal/${slugify(post.title)}`}
              className="reveal-on-scroll group overflow-hidden rounded-[2rem] border border-white/20 bg-white/[0.09] transition duration-700 hover:-translate-y-2 hover:border-white/35 hover:bg-white/[0.10] hover:shadow-lavender focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-4 focus-visible:ring-offset-deepPlum"
              style={{ '--reveal-delay': `${index * 100}ms` }}
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-80 w-full object-cover opacity-92 transition duration-700 group-hover:scale-[1.045] group-hover:opacity-100"
                />
              </div>
              <div className="p-6 md:p-7">
                <p className="text-[10px] uppercase tracking-[0.34em] text-lavender">{post.category}</p>
                <h3 className="mt-4 font-display text-[2.25rem] leading-[0.95] tracking-[-0.03em] text-cloud">
                  {post.title}
                </h3>
                <p className="mt-4 leading-7 text-cloud/70">{post.excerpt}</p>
                <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-cloud/60 transition group-hover:text-cloud">
                  <span>Leer artículo</span>
                  <span className="h-px w-12 bg-current transition duration-500 group-hover:w-16" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}