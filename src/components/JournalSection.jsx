import { journalPosts } from '../data/siteData';
import { SectionHeading } from './SectionHeading';

export function JournalSection() {
  return (
    <section id="journal" className="section-shell bg-[linear-gradient(135deg,#201A28_0%,#2A2235_56%,#5E2F3F_100%)] text-cloud">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,245,250,0.08),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(248,245,250,0.14),transparent_24%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32">
        <SectionHeading
          eyebrow="Diario"
          title="Textos para mirar la vida con mas belleza y significado"
          description="Una seccion editorial pensada para leer con calma: ideas, rituales y estilo personal antes de guardar, descargar o volver a tu propia practica."
          theme="dark"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {journalPosts.map((post, index) => (
            <article key={post.title} className="reveal-on-scroll group overflow-hidden rounded-[2rem] border border-white/20 bg-white/[0.09] transition duration-700 hover:-translate-y-2 hover:border-white/35 hover:bg-white/[0.10] hover:shadow-lavender focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-4 focus-visible:ring-offset-deepPlum" style={{ '--reveal-delay': `${index * 85}ms` }}>
              <div className="overflow-hidden">
                <img src={post.image} alt="" className="h-72 w-full object-cover opacity-85 transition duration-1000 group-hover:scale-105 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <p className="text-[10px] uppercase tracking-[0.32em] text-cloud/45">{post.category}</p>
                <h3 className="mt-4 font-display text-3xl leading-none tracking-[-0.03em] md:text-4xl">{post.title}</h3>
                <p className="mt-4 text-sm leading-7 text-cloud/65">{post.excerpt}</p>
                <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-cloud/75">
                  <span>Leer articulo</span>
                  <span className="h-px flex-1 bg-white/20 transition duration-500 group-hover:bg-white/40" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}