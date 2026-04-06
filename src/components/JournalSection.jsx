import { journalPosts } from '../data/siteData';
import { Button } from './Button';
import { SectionHeading } from './SectionHeading';

export function JournalSection() {
  return (
    <section id="journal" className="section-shell bg-midnight text-cloud">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(220,199,192,0.12),transparent_24%)]" />
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Journal"
            title="Textos para mirar la vida con más belleza y significado"
            description="Una sección editorial pensada para crecer como revista digital, blog premium o archivo vivo de ideas, rituales y estilo personal."
            theme="dark"
          />
          <Button href="#newsletter" variant="secondary">
            Recibir nuevas notas
          </Button>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {journalPosts.map((post) => (
            <article
              key={post.title}
              className="group hover-lift overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06]"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-80 w-full object-cover opacity-92 transition duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-6 md:p-7">
                <p className="text-[10px] uppercase tracking-[0.34em] text-blush">{post.category}</p>
                <h3 className="mt-4 font-display text-[2.25rem] leading-[0.95] tracking-[-0.03em] text-cloud">
                  {post.title}
                </h3>
                <p className="mt-4 leading-7 text-cloud/68">{post.excerpt}</p>
                <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-cloud/60 transition group-hover:text-cloud">
                  <span>Leer artículo</span>
                  <span className="h-px w-12 bg-current" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
