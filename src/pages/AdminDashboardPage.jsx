import { useEffect, useMemo, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  createCategory,
  deletePhoto,
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

const inputClass = 'min-h-12 rounded-full border border-plum/20 bg-white/85 px-5 py-4 text-sm text-ink outline-none transition duration-300 placeholder:text-ink/35 hover:border-plum/30 hover:bg-white focus:border-plum focus:bg-white focus:shadow-soft';
const textareaClass = 'rounded-[1.45rem] border border-plum/20 bg-white/85 px-5 py-4 text-sm leading-7 text-ink outline-none transition duration-300 placeholder:text-ink/35 hover:border-plum/30 hover:bg-white focus:border-plum focus:bg-white focus:shadow-soft';
const labelClass = 'space-y-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-taupe';
const fileClass = 'mt-3 block w-full cursor-pointer rounded-[1.25rem] border border-dashed border-plum/25 bg-lavenderMist/90 px-4 py-4 text-sm text-ink/70 transition duration-300 file:mr-4 file:rounded-full file:border-0 file:bg-plum file:px-4 file:py-2 file:text-[10px] file:font-semibold file:uppercase file:tracking-[0.22em] file:text-cloud hover:border-plum/50 hover:bg-white';
const primaryButtonClass = 'inline-flex min-h-12 items-center justify-center rounded-full border border-plum bg-plum px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-cloud shadow-lavender transition duration-500 hover:-translate-y-1 hover:border-deepPlum hover:bg-deepPlum hover:text-white';
const secondaryButtonClass = 'inline-flex min-h-11 items-center justify-center rounded-full border border-plum/20 bg-lavenderMist/90 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-plum transition duration-500 hover:-translate-y-0.5 hover:border-plum/40 hover:bg-white hover:text-deepPlum';
const dangerButtonClass = 'inline-flex min-h-11 items-center justify-center rounded-full border border-wine/30 bg-white/70 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-wine transition duration-500 hover:-translate-y-0.5 hover:border-wine hover:bg-wine hover:text-white';

function getReadableError(message) {
  if (!message) return '';
  if (message.includes('row-level security')) return 'Supabase ha bloqueado la accion por permisos. Revisa que tu usuario tenga rol admin y que las policies de Storage y photo_entries esten aplicadas.';
  if (message.includes('bucket') || message.includes('Storage')) return 'No se pudo subir o borrar el archivo. Revisa que el bucket images exista y permita acciones para admin.';
  if (message.includes('photo_entries')) return 'Falta configurar la tabla de fotografias. Ejecuta el SQL de photo_entries en Supabase.';
  if (message.includes('duplicate key')) return 'Ese contenido ya existe. Cambia el titulo o actualiza el elemento existente.';
  return message;
}

function AdminAlert({ message }) {
  if (!message) return null;
  const isError = /error|could not|failed|permission|policy|blocked|bloqueado|falta|no se pudo/i.test(message);
  return (
    <div className={`rounded-[1.35rem] border px-5 py-4 text-sm leading-6 shadow-soft ${isError ? 'border-wine/25 bg-white text-wine' : 'border-plum/20 bg-lavenderMist/95 text-deepPlum'}`}>
      <span className="editorial-kicker block text-[9px]">{isError ? 'Aviso del estudio' : 'Estado'}</span>
      <span className="mt-2 block">{getReadableError(message)}</span>
    </div>
  );
}

function PanelCard({ eyebrow, title, description, children, className = '', id }) {
  return (
    <section id={id} className={`magazine-frame rounded-[1.8rem] p-5 transition duration-700 hover:-translate-y-1 hover:shadow-lavender md:rounded-[2.1rem] md:p-7 ${className}`}>
      <div className="border-b border-plum/20 pb-5">
        <p className="editorial-kicker">{eyebrow}</p>
        {title ? <h2 className="mt-3 font-display text-4xl leading-none tracking-[-0.04em] text-ink md:text-5xl">{title}</h2> : null}
        {description ? <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/70">{description}</p> : null}
      </div>
      <div className="pt-6">{children}</div>
    </section>
  );
}

function StatusPill({ value }) {
  return (
    <span className={`rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] ${value === 'published' ? 'bg-plum text-cloud' : 'bg-lavender text-plum'}`}>
      {statusLabels[value] || value}
    </span>
  );
}

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

  const stats = useMemo(() => [
    { label: 'Recursos', value: resources.length },
    { label: 'Fotografias', value: photos.length },
    { label: 'Articulos', value: posts.length },
  ], [photos.length, posts.length, resources.length]);

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

  async function handleDeletePhoto(item) {
    const confirmed = window.confirm(`Quieres borrar la fotografia "${item.title}"? Esta accion no se puede deshacer.`);
    if (!confirmed) return;
    setStatus('');
    try {
      await deletePhoto(item);
      if (photo.id === item.id) {
        setPhoto(initialPhoto);
        setPhotoFile(null);
      }
      await refreshAdminData();
      setStatus('Fotografia borrada.');
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
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-20">
      <div className="relative overflow-hidden rounded-[2rem] border border-plum/20 bg-[linear-gradient(135deg,#FFFDF8_0%,#FAF8FC_54%,#F2EDF7_100%)] p-6 shadow-soft md:rounded-[2.6rem] md:p-10">
        <div className="absolute right-[-5rem] top-[-6rem] h-56 w-56 rounded-full bg-lavender/70 blur-3xl" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="editorial-kicker">Administracion FabuRose</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.92] tracking-[-0.05em] text-ink sm:text-6xl md:text-7xl">Estudio editorial de contenido</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-ink/70">Crea, cura y publica recursos, fotografias y articulos desde un espacio pensado como una mesa editorial: claro, suave y con foco.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#admin-fotografia" className={primaryButtonClass}>Subir fotografia</a>
              <a href="#archivo-fotografias" className={secondaryButtonClass}>Gestionar fotografias</a>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-[1.35rem] border border-plum/20 bg-white/70 p-4 text-center shadow-soft backdrop-blur-sm">
                <p className="font-display text-4xl leading-none text-plum">{item.value}</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.26em] text-taupe">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6"><AdminAlert message={status} /></div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <PanelCard eyebrow="Biblioteca" title="Categorias" description="Define las lineas editoriales que ordenan la plataforma.">
          <form onSubmit={handleCreateCategory} className="space-y-4">
            <label className={labelClass}>Nombre<input className={`mt-3 w-full ${inputClass}`} placeholder="Ej. Ritual, moda, astrologia" value={categoryName} onChange={(event) => setCategoryName(event.target.value)} required /></label>
            <button className={secondaryButtonClass}>Crear categoria</button>
          </form>
          <div className="mt-7 flex flex-wrap gap-2">
            {categories.map((category) => <span key={category.id} className="rounded-full border border-plum/20 bg-lavenderMist/90 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-taupe">{category.name}</span>)}
          </div>
        </PanelCard>

        <PanelCard eyebrow="Coleccion digital" title={resource.id ? 'Editar recurso PDF' : 'Nuevo recurso PDF'} description="Publica guias y descargables como piezas editoriales de la boutique FabuRose.">
          <form onSubmit={handleSaveResource} className="grid gap-5 md:grid-cols-2">
            <label className={labelClass}>Titulo<input className={`mt-3 w-full ${inputClass}`} placeholder="Titulo del recurso" value={resource.title} onChange={(event) => setResource({ ...resource, title: event.target.value })} required /></label>
            <label className={labelClass}>Categoria<select className={`mt-3 w-full ${inputClass}`} value={resource.category_id} onChange={(event) => setResource({ ...resource, category_id: event.target.value })}><option value="">Sin categoria</option>{categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}</select></label>
            <label className={`${labelClass} md:col-span-2`}>Descripcion<textarea className={`mt-3 min-h-28 w-full ${textareaClass}`} placeholder="Descripcion breve y editorial" value={resource.description} onChange={(event) => setResource({ ...resource, description: event.target.value })} required /></label>
            <label className={labelClass}>Portada del recurso<input className={fileClass} type="file" accept="image/*" onChange={(event) => setResourceCover(event.target.files?.[0])} /></label>
            <label className={labelClass}>Archivo PDF<input className={fileClass} type="file" accept="application/pdf" onChange={(event) => setResourcePdf(event.target.files?.[0])} /></label>
            <label className={labelClass}>Fecha de publicacion<input className={`mt-3 w-full ${inputClass}`} type="datetime-local" value={resource.published_at} onChange={(event) => setResource({ ...resource, published_at: event.target.value })} /></label>
            <label className={labelClass}>Estado<select className={`mt-3 w-full ${inputClass}`} value={resource.status} onChange={(event) => setResource({ ...resource, status: event.target.value })}><option value="draft">Borrador</option><option value="published">Publicado</option></select></label>
            <label className="flex items-center gap-3 rounded-[1.2rem] border border-plum/20 bg-lavenderMist/80 p-4 text-sm text-ink/70 md:col-span-2"><input type="checkbox" checked={resource.featured} onChange={(event) => setResource({ ...resource, featured: event.target.checked })} /> Recurso destacado</label>
            <div className="md:col-span-2"><button className={primaryButtonClass}>{resource.id ? 'Actualizar recurso' : 'Crear recurso'}</button></div>
          </form>
        </PanelCard>
      </div>

      <PanelCard id="admin-fotografia" eyebrow="Nueva fotografia" title={photo.id ? 'Editar pieza visual' : 'Galeria editorial'} description="Sube imagenes con descripcion para alimentar la pagina de Fotografia con un formato moderno, aesthetic y animado." className="mt-6 overflow-hidden">
        <form onSubmit={handleSavePhoto} className="grid gap-7 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch">
          <div className="relative min-h-72 overflow-hidden rounded-[1.7rem] border border-plum/20 bg-[linear-gradient(135deg,#2A2235,#5B4A78)] p-6 text-cloud shadow-card">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,253,248,0.20),transparent_32%)]" />
            <div className="absolute bottom-[-3rem] right-[-3rem] h-48 w-48 rounded-full border border-cloud/20" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-10">
              <p className="editorial-kicker text-blush">Fotografia</p>
              <div>
                <h2 className="font-display text-5xl leading-none tracking-[-0.04em]">Curar una imagen</h2>
                <p className="mt-5 text-sm leading-7 text-cloud/70">Elige una imagen, escribe una descripcion con intencion y decide si entra como borrador o publicacion visible.</p>
              </div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-cloud/60">/photography</p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <label className={labelClass}>Titulo<input className={`mt-3 w-full ${inputClass}`} placeholder="Titulo de la foto" value={photo.title} onChange={(event) => setPhoto({ ...photo, title: event.target.value })} required /></label>
            <label className={labelClass}>Estado<select className={`mt-3 w-full ${inputClass}`} value={photo.status} onChange={(event) => setPhoto({ ...photo, status: event.target.value })}><option value="draft">Borrador</option><option value="published">Publicado</option></select></label>
            <label className={`${labelClass} md:col-span-2`}>Descripcion<textarea className={`mt-3 min-h-32 w-full ${textareaClass}`} placeholder="Una linea editorial para acompanar la imagen" value={photo.description} onChange={(event) => setPhoto({ ...photo, description: event.target.value })} /></label>
            <label className={`${labelClass} md:col-span-2`}>Imagen de la galeria<input className={fileClass} type="file" accept="image/*" onChange={(event) => setPhotoFile(event.target.files?.[0])} /></label>
            <label className={labelClass}>Fecha<input className={`mt-3 w-full ${inputClass}`} type="datetime-local" value={photo.published_at} onChange={(event) => setPhoto({ ...photo, published_at: event.target.value })} /></label>
            <label className="flex items-center gap-3 rounded-[1.2rem] border border-plum/20 bg-lavenderMist/80 p-4 text-sm text-ink/70"><input type="checkbox" checked={photo.featured} onChange={(event) => setPhoto({ ...photo, featured: event.target.checked })} /> Fotografia destacada</label>
            <div className="flex flex-wrap gap-3 md:col-span-2">
              <button className={primaryButtonClass}>{photo.id ? 'Actualizar fotografia' : 'Publicar fotografia'}</button>
              {photo.id ? <button type="button" onClick={() => { setPhoto(initialPhoto); setPhotoFile(null); setStatus('Edicion cancelada.'); }} className={secondaryButtonClass}>Cancelar edicion</button> : null}
            </div>
          </div>
        </form>
      </PanelCard>

      <PanelCard eyebrow="Diario" title={post.id ? 'Editar articulo' : 'Nuevo articulo'} description="Escribe entradas para el diario manteniendo una estructura editorial limpia y facil de escanear." className="mt-6">
        <form onSubmit={handleSavePost} className="grid gap-5 md:grid-cols-2">
          <label className={labelClass}>Titulo<input className={`mt-3 w-full ${inputClass}`} placeholder="Titulo del articulo" value={post.title} onChange={(event) => setPost({ ...post, title: event.target.value })} required /></label>
          <label className={labelClass}>Categoria<select className={`mt-3 w-full ${inputClass}`} value={post.category_id} onChange={(event) => setPost({ ...post, category_id: event.target.value })}><option value="">Sin categoria</option>{categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}</select></label>
          <label className={`${labelClass} md:col-span-2`}>Extracto<textarea className={`mt-3 min-h-24 w-full ${textareaClass}`} placeholder="Resumen breve" value={post.excerpt} onChange={(event) => setPost({ ...post, excerpt: event.target.value })} /></label>
          <label className={`${labelClass} md:col-span-2`}>Contenido<textarea className={`mt-3 min-h-52 w-full ${textareaClass}`} placeholder="Contenido del articulo" value={post.content} onChange={(event) => setPost({ ...post, content: event.target.value })} required /></label>
          <label className={labelClass}>Portada del articulo<input className={fileClass} type="file" accept="image/*" onChange={(event) => setPostCover(event.target.files?.[0])} /></label>
          <label className={labelClass}>Fecha<input className={`mt-3 w-full ${inputClass}`} type="datetime-local" value={post.published_at} onChange={(event) => setPost({ ...post, published_at: event.target.value })} /></label>
          <label className={labelClass}>Estado<select className={`mt-3 w-full ${inputClass}`} value={post.status} onChange={(event) => setPost({ ...post, status: event.target.value })}><option value="draft">Borrador</option><option value="published">Publicado</option></select></label>
          <label className="flex items-center gap-3 rounded-[1.2rem] border border-plum/20 bg-lavenderMist/80 p-4 text-sm text-ink/70"><input type="checkbox" checked={post.featured} onChange={(event) => setPost({ ...post, featured: event.target.checked })} /> Articulo destacado</label>
          <div className="md:col-span-2"><button className={primaryButtonClass}>{post.id ? 'Actualizar articulo' : 'Crear articulo'}</button></div>
        </form>
      </PanelCard>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <PanelCard eyebrow="Archivo" title="Recursos" description="Selecciona un recurso para editarlo.">
          <div className="space-y-3">
            {resources.map((item) => <button key={item.id} onClick={() => editResource(item)} className="group flex w-full items-center justify-between gap-4 rounded-[1.2rem] border border-plum/10 bg-white/70 p-4 text-left transition duration-300 hover:-translate-y-0.5 hover:border-plum/30 hover:bg-white"><span className="text-sm leading-6 text-ink/75 group-hover:text-ink">{item.title}</span><StatusPill value={item.status} /></button>)}
          </div>
        </PanelCard>
        <PanelCard id="archivo-fotografias" eyebrow="Archivo" title="Fotografias" description="Aqui aparecen las fotos ya subidas. Abre una foto para editarla o usa Borrar para eliminarla.">
          <div className="space-y-3">
            {photos.length === 0 ? <p className="rounded-[1.2rem] border border-dashed border-plum/20 bg-lavenderMist/80 p-4 text-sm leading-6 text-ink/70">Todavia no hay fotografias subidas. Usa el boton Subir fotografia de arriba para crear la primera.</p> : null}
            {photos.map((item) => (
              <div key={item.id} className="group rounded-[1.25rem] border border-plum/10 bg-white/70 p-3 transition duration-300 hover:-translate-y-0.5 hover:border-plum/30 hover:bg-white">
                <button onClick={() => editPhoto(item)} className="flex w-full items-center justify-between gap-3 text-left">
                  <span className="text-sm leading-6 text-ink/75 group-hover:text-ink">{item.title}</span>
                  <StatusPill value={item.status} />
                </button>
                <div className="mt-3 flex flex-wrap gap-2 border-t border-plum/10 pt-3">
                  <button type="button" onClick={() => editPhoto(item)} className={secondaryButtonClass}>Editar</button>
                  <button type="button" onClick={() => handleDeletePhoto(item)} className={dangerButtonClass}>Borrar</button>
                </div>
              </div>
            ))}
          </div>
        </PanelCard>
        <PanelCard eyebrow="Archivo" title="Diario" description="Selecciona un articulo para editarlo.">
          <div className="space-y-3">
            {posts.map((item) => <button key={item.id} onClick={() => editPost(item)} className="group flex w-full items-center justify-between gap-4 rounded-[1.2rem] border border-plum/10 bg-white/70 p-4 text-left transition duration-300 hover:-translate-y-0.5 hover:border-plum/30 hover:bg-white"><span className="text-sm leading-6 text-ink/75 group-hover:text-ink">{item.title}</span><StatusPill value={item.status} /></button>)}
          </div>
        </PanelCard>
      </div>
    </section>
  );
}
