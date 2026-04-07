import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPostBySlug } from '../lib/contentService';

export function BlogPostDetailPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostBySlug(slug).then(setPost).finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">Cargando articulo...</section>;
  if (!post) return <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">Articulo no encontrado.</section>;

  return (
    <article className="mx-auto max-w-4xl px-6 py-20 md:px-10">
      <Link to="/" className="editorial-kicker">Volver al inicio</Link>
      {post.image ? <img src={post.image} alt={post.title} className="mt-8 h-[28rem] w-full rounded-[2rem] object-cover shadow-card" /> : null}
      <p className="editorial-kicker mt-10">{post.categories?.name || post.category || 'Diario'}</p>
      <h1 className="mt-5 font-display text-6xl leading-[0.9] tracking-[-0.04em] text-ink md:text-7xl">{post.title}</h1>
      {post.excerpt ? <p className="mt-6 font-serif text-3xl italic leading-tight text-ink/70">{post.excerpt}</p> : null}
      <div className="mt-10 whitespace-pre-line text-lg leading-9 text-ink/70">{post.content}</div>
    </article>
  );
}
