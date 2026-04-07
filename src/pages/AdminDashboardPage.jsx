import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  createCategory,
  listAdminPhotos,
  listAdminPosts,
  listAdminResources,
  listCategories,
  savePhoto,
  savePost,
  saveResource,
  uploadContentFile,
} from '../lib/contentService';
import { STORAGE_BUCKETS } from '../lib/storagePaths';

const initialResource = { title: '', description: '', category_id: '', featured: false, status: 'draft', published_at: '', cover_image_path: '', pdf_file_path: '' };
const initialPost = { title: '', excerpt: '', content: '', category_id: '', featured: false, status: 'draft', published_at: '', cover_image_path: '' };
const initialPhoto = { title: '', description: '', featured: false, status: 'draft', published_at: '', image_path: '' };
const toDateTimeLocal = (value) => (value ? value.slice(0, 16) : '');
const statusLabels = { draft: 'borrador', published: 'publicado' };
const inputClass = 'rounded-full border border-ink/10 bg-white/90 px-5 py-4 outline-none transition focus:border-plum/50 focus:bg-white';
const textareaClass = 'rounded-[1.5rem] border border-ink/10 bg-white/90 px-5 py-4 outline-none transition focus:border-plum/50 focus:bg-white';
const buttonClass = 'rounded-full border border-deepPlum bg-deepPlum px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-cloud transition duration-500 hover:-translate-y-1 hover:border-wine hover:bg-wine';

export function AdminDashboardPage() {
  const { user } = useAuth();
  const [categories, setCategories] = useState([]);
  const [resources, setResources] = useState([]);
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [resource, setResource] = useState(initialResource);
  const [post, setPost] = useState(initialPost);
  const [photo, setPhoto] = useState(initialPhoto);
  const [resourceCover, setResourceCover] = useState(null);
  const [resourcePdf, setResourcePdf] = useState(null);
  const [postCover, setPostCover] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);
  const [status, setStatus] = useState('');

  async function refreshAdminData() {
    const [nextCategories, nextResources, nextPosts, nextPhotos] = await Promise.all([
      listCategories(),
      listAdminResources(),
      listAdminPosts(),
      listAdminPhotos(),
    ]);
    setCategories(nextCategories);
    setResources(nextResources);
    setPosts(nextPosts);
    setPhotos(nextPhotos);
  }

  useEffect(() => {
    refreshAdminData().catch((error) => setStatus(error.message));
  }, []);

  async function handleCreateCategory(event) {
    event.preventDefault();
    setStatus('');
    try {
      await createCategory({ name: categoryName });
      setCategoryName('');
      await refreshAdminData();
      setStatus('Categoria creada.');
    } catch (error) {
      setStatus(error.message);
    }
  }

  async function handleSaveResource(event) {
    event.preventDefault();
    setStatus('');
    try {
      const coverPath = resourceCover ? await uploadContentFile({ bucket: STORAGE_BUCKETS.covers, folder: 'resources', file: resourceCover, ownerId: user.id }) : resource.cover_image_path || null;
      const pdfPath = resourcePdf ? await uploadContentFile({ bucket: STORAGE_BUCKETS.pdfs, folder: 'resources', file: resourcePdf, ownerId: user.id }) : resource.pdf_file_path || null;
      await saveResource({ ...resource, cover_image_path: coverPath, pdf_file_path: pdfPath, published_at: resource.published_at || null });
      setResource(initialResource);
      setResourceCover(null);
      setResourcePdf(null);
      event.target.reset();
      await refreshAdminData();
      setStatus(resource.id ? 'Recurso actualizado.' : 'Recurso creado.');
    } catch (error) {
      setStatus(error.message);
    }
  }

  async function handleSavePost(event) {
    event.preventDefault();
    setStatus('');
    try {
      const coverPath = postCover ? await uploadContentFile({ bucket: STORAGE_BUCKETS.covers, folder: 'posts', file: postCover, ownerId: user.id }) : post.cover_image_path || null;
      await savePost({ ...post, cover_image_path: coverPath, published_at: post.published_at || null });
      setPost(initialPost);
      setPostCover(null);
      event.target.reset();
      await refreshAdminData();
      setStatus(post.id ? 'Articulo actualizado.' : 'Articulo creado.');
    } catch (error) {
      setStatus(error.message);
    }
  }

  async function handleSavePhoto(event) {
    event.preventDefault();
    setStatus('');
    try {
      const imagePath = photoFile ? await uploadContentFile({ bucket: STORAGE_BUCKETS.covers, folder: 'photography', file: photoFile, ownerId: user.id }) : photo.image_path || null;
      if (!imagePath) throw new Error('Sube una imagen antes de publicar la fotografia.');
      await savePhoto({ ...photo, image_path: imagePath, published_at: photo.published_at || null });
      setPhoto(initialPhoto);
      setPhotoFile(null);
      event.target.reset();
      await refreshAdminData();
      setStatus(photo.id ? 'Fotografia actualizada.' : 'Fotografia creada.');
    } catch (error) {
      setStatus(error.message);
    }
  }

  function editResource(item) {
    setResource({ ...item, category_id: item.category_id || '', published_at: toDateTimeLocal(item.published_at) });
    setStatus(`Editando recurso: ${item.title}`);
  }

  function editPost(item) {
    setPost({ ...item, category_id: item.category_id || '', published_at: toDateTimeLocal(item.published_at) });
    setStatus(`Editando articulo: ${item.title}`);
  }

  function editPhoto(item) {
    setPhoto({ ...item, published_at: toDateTimeLocal(item.published_at) });
    setPhotoFile(null);
    setStatus(`Editando fotografia: ${item.title}`);
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="editorial-kicker">Administracion Fabiana</p>
          <h1 className="mt-4 font-display text-6xl leading-none tracking-[-0.04em] text-ink">Estudio de contenido</h1>
          <p className="mt-5 max-w-2xl leading-8 text-ink/70">Sube PDFs, portadas, fotos, crea categorias, publica recursos y edita articulos del diario desde un panel protegido.</p>
        </div>
        {status ? <p className="rounded-full bg-white px-5 py-3 text-sm text-ink/70 shadow-soft">{status}</p> : null}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <form onSubmit={handleCreateCategory} className="magazine-frame rounded-[2rem] p-6">
          <p className="editorial-kicker">Categorias</p>
          <input className={`mt-6 w-full ${inputClass}`} placeholder="Nombre de la categoria" value={categoryName} onChange={(event) => setCategoryName(event.target.value)} required />
          <button className={`mt-4 ${buttonClass}`}>Crear</button>
          <div className="mt-6 space-y-2 text-sm text-ink/60">{categories.map((category) => <p key={category.id}>{category.name}</p>)}</div>
        </form>

        <form onSubmit={handleSaveResource} className="magazine-frame rounded-[2rem] p-6 lg:col-span-2">
          <p className="editorial-kicker">{resource.id ? 'Editar recurso PDF' : 'Nuevo recurso PDF'}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input className={inputClass} placeholder="Titulo" value={resource.title} onChange={(event) => setResource({ ...resource, title: event.target.value })} required />
            <select className={inputClass} value={resource.category_id} onChange={(event) => setResource({ ...resource, category_id: event.target.value })}><option value="">Sin categoria</option>{categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}</select>
            <textarea className={`${textareaClass} md:col-span-2`} placeholder="Descripcion" value={resource.description} onChange={(event) => setResource({ ...resource, description: event.target.value })} required />
            <label className="text-sm leading-6 text-ink/70">Portada del recurso<input className="mt-2 block" type="file" accept="image/*" onChange={(event) => setResourceCover(event.target.files?.[0])} /></label>
            <label className="text-sm leading-6 text-ink/70">Archivo PDF<input className="mt-2 block" type="file" accept="application/pdf" onChange={(event) => setResourcePdf(event.target.files?.[0])} /></label>
            <input className={inputClass} type="datetime-local" value={resource.published_at} onChange={(event) => setResource({ ...resource, published_at: event.target.value })} />
            <select className={inputClass} value={resource.status} onChange={(event) => setResource({ ...resource, status: event.target.value })}><option value="draft">Borrador</option><option value="published">Publicado</option></select>
            <label className="flex items-center gap-3 text-sm text-ink/70"><input type="checkbox" checked={resource.featured} onChange={(event) => setResource({ ...resource, featured: event.target.checked })} /> Recurso destacado</label>
          </div>
          <button className={`mt-6 ${buttonClass}`}>{resource.id ? 'Actualizar recurso' : 'Crear recurso'}</button>
        </form>
      </div>

      <form onSubmit={handleSavePhoto} className="magazine-frame mt-6 overflow-hidden rounded-[2rem] p-6">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative min-h-80 overflow-hidden rounded-[1.7rem] border border-plum/20 bg-[linear-gradient(135deg,#2A2235,#5B4A78)] p-6 text-cloud shadow-card">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(248,245,250,0.18),transparent_30%)]" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <p className="editorial-kicker text-blush">Fotografia</p>
              <div>
                <h2 className="font-display text-5xl leading-none tracking-[-0.04em]">Galeria editorial</h2>
                <p className="mt-5 text-sm leading-7 text-cloud/70">Sube imagenes con descripcion para alimentar la pagina de Fotografia con un formato moderno, aesthetic y animado.</p>
              </div>
            </div>
          </div>
          <div>
            <p className="editorial-kicker">{photo.id ? 'Editar fotografia' : 'Nueva fotografia'}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <input className={inputClass} placeholder="Titulo" value={photo.title} onChange={(event) => setPhoto({ ...photo, title: event.target.value })} required />
              <select className={inputClass} value={photo.status} onChange={(event) => setPhoto({ ...photo, status: event.target.value })}><option value="draft">Borrador</option><option value="published">Publicado</option></select>
              <textarea className={`${textareaClass} min-h-32 md:col-span-2`} placeholder="Descripcion visual" value={photo.description} onChange={(event) => setPhoto({ ...photo, description: event.target.value })} />
              <label className="rounded-[1.4rem] border border-dashed border-plum/30 bg-white/60 p-5 text-sm leading-6 text-ink/70 transition hover:border-plum/60 hover:bg-white/75 md:col-span-2">Imagen de la galeria<input className="mt-3 block" type="file" accept="image/*" onChange={(event) => setPhotoFile(event.target.files?.[0])} /></label>
              <input className={inputClass} type="datetime-local" value={photo.published_at} onChange={(event) => setPhoto({ ...photo, published_at: event.target.value })} />
              <label className="flex items-center gap-3 text-sm text-ink/70"><input type="checkbox" checked={photo.featured} onChange={(event) => setPhoto({ ...photo, featured: event.target.checked })} /> Fotografia destacada</label>
            </div>
            <button className={`mt-6 ${buttonClass}`}>{photo.id ? 'Actualizar fotografia' : 'Publicar fotografia'}</button>
          </div>
        </div>
      </form>

      <form onSubmit={handleSavePost} className="magazine-frame mt-6 rounded-[2rem] p-6">
        <p className="editorial-kicker">{post.id ? 'Editar articulo del diario' : 'Nuevo articulo del diario'}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <input className={inputClass} placeholder="Titulo" value={post.title} onChange={(event) => setPost({ ...post, title: event.target.value })} required />
          <select className={inputClass} value={post.category_id} onChange={(event) => setPost({ ...post, category_id: event.target.value })}><option value="">Sin categoria</option>{categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}</select>
          <textarea className={`${textareaClass} md:col-span-2`} placeholder="Extracto" value={post.excerpt} onChange={(event) => setPost({ ...post, excerpt: event.target.value })} />
          <textarea className={`${textareaClass} min-h-52 md:col-span-2`} placeholder="Contenido del articulo" value={post.content} onChange={(event) => setPost({ ...post, content: event.target.value })} required />
          <label className="text-sm leading-6 text-ink/70">Portada del articulo<input className="mt-2 block" type="file" accept="image/*" onChange={(event) => setPostCover(event.target.files?.[0])} /></label>
          <input className={inputClass} type="datetime-local" value={post.published_at} onChange={(event) => setPost({ ...post, published_at: event.target.value })} />
          <select className={inputClass} value={post.status} onChange={(event) => setPost({ ...post, status: event.target.value })}><option value="draft">Borrador</option><option value="published">Publicado</option></select>
          <label className="flex items-center gap-3 text-sm text-ink/70"><input type="checkbox" checked={post.featured} onChange={(event) => setPost({ ...post, featured: event.target.checked })} /> Articulo destacado</label>
        </div>
        <button className={`mt-6 ${buttonClass}`}>{post.id ? 'Actualizar articulo' : 'Crear articulo'}</button>
      </form>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="magazine-frame rounded-[2rem] p-6"><p className="editorial-kicker">Recursos existentes</p>{resources.map((item) => <button key={item.id} onClick={() => editResource(item)} className="mt-4 block text-left text-sm leading-6 text-ink/70 transition hover:text-ink">{item.title} - {statusLabels[item.status] || item.status}</button>)}</div>
        <div className="magazine-frame rounded-[2rem] p-6"><p className="editorial-kicker">Fotografias existentes</p>{photos.map((item) => <button key={item.id} onClick={() => editPhoto(item)} className="mt-4 block text-left text-sm leading-6 text-ink/70 transition hover:text-ink">{item.title} - {statusLabels[item.status] || item.status}</button>)}</div>
        <div className="magazine-frame rounded-[2rem] p-6"><p className="editorial-kicker">Articulos existentes</p>{posts.map((item) => <button key={item.id} onClick={() => editPost(item)} className="mt-4 block text-left text-sm leading-6 text-ink/70 transition hover:text-ink">{item.title} - {statusLabels[item.status] || item.status}</button>)}</div>
      </div>
    </section>
  );
}