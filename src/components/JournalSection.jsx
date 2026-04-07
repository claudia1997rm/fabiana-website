import { journalPosts } from '../data/siteData';
import { SectionHeading } from './SectionHeading';

export function JournalSection() {
  return (
    <section id="journal" className="section-shell bg-[linear-gradient(135deg,#201A28_0%,#2A2235_62%,#4E425F_100%)] text-cloud">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,245,250,0.08),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(242,237,247,0.12),transparent_24%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-6 md:px-10 md:py-24 lg:py-32">
        <SectionHeading
          eyebrow="Diario"
          title="Textos para mirar la vida con mas belleza y significado"
          description="Una seccion editorial pensada para leer con calma: ideas, rituales y estilo personal antes de guardar, descargar o volver a tu propia practica."
          theme="dark"
        />

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
          {journalPosts.map((post, index) => (
            <article key={post.title} className="reveal-on-scroll group overflow-hidden rounded-[1.65rem] border border-white/20 bg-white/[0.07] transition duration-700 hover:-translate-y-1.5 hover:border-white/30 hover:bg-white/[0.10] hover:shadow-lavender focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-4 focus-visible:ring-offset-deepPlum md:rounded-[2rem]" style={{ '--reveal-delay': `${index * 85}ms` }}>
              <div className="overflow-hidden">
                <img src={post.image} alt="" className="h-52 w-full object-cover opacity-90 transition duration-1000 group-hover:scale-105 group-hover:opacity-100 sm:h-64 md:h-72" />
              </div>
              <div className="p-5 md:p-6">
                <p className="text-[9px] uppercase tracking-[0.28em] text-cloud/50 md:text-[10px] md:tracking-[0.32em]">{post.category}</p>
                <h3 className="mt-4 font-display text-[2rem] leading-none tracking-[-0.03em] md:text-4xl">{post.title}</h3>
                <p className="mt-4 text-sm leading-7 text-cloud/70">{post.excerpt}</p>
                <div className="mt-7 flex items-center gap-3 text-[9px] uppercase tracking-[0.28em] text-cloud/75 md:mt-8 md:text-[10px] md:tracking-[0.3em]">
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