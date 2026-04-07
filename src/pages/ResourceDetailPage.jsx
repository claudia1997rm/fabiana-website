import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getResourceBySlug } from '../lib/contentService';

export function ResourceDetailPage() {
  const { slug } = useParams();
  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getResourceBySlug(slug).then(setResource).finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">Loading resource...</section>;
  if (!resource) return <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">Resource not found.</section>;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      <Link to="/" className="editorial-kicker">Back home</Link>
      <article className="magazine-frame mt-8 grid gap-8 rounded-[2rem] p-6 md:grid-cols-[0.9fr_1.1fr] md:p-10">
        {resource.image ? <img src={resource.image} alt={resource.title} className="w-full rounded-[1.6rem] object-cover" /> : null}
        <div>
          <p className="editorial-kicker">{resource.categories?.name || resource.type || 'Resource'}</p>
          <h1 className="mt-5 font-display text-6xl leading-[0.9] tracking-[-0.04em] text-ink">{resource.title}</h1>
          <p className="mt-6 text-lg leading-8 text-ink/66">{resource.description}</p>
          {resource.published_at ? <p className="mt-4 text-sm text-ink/50">Published {new Date(resource.published_at).toLocaleDateString()}</p> : null}
          {resource.pdfUrl ? (
            <a href={resource.pdfUrl} className="mt-8 inline-flex rounded-full border border-ink bg-ink px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-cloud transition hover:bg-white hover:text-ink">
              Download PDF
            </a>
          ) : null}
        </div>
      </article>
    </section>
  );
}