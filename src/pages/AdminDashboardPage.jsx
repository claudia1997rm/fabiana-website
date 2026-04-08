import { useEffect, useMemo, useState } from 'react';
import { hero as defaultHero } from '../data/siteData';
import { useAuth } from '../context/AuthContext';
import {
  createCategory,
  deletePhoto,
  getSiteSettings,
  listAdminPhotos,
  listAdminPosts,
  listAdminResources,
  listCategories,
  savePhoto,
  savePost,
  saveResource,
  saveSiteSettings,
  uploadContentFile,
} from '../lib/contentService';
import { STORAGE_BUCKETS } from '../lib/storagePaths';

const initialResource = { title: '', description: '', category_id: '', featured: false, status: 'draft', published_at: '', cover_image_path: '', pdf_file_path: '' };
const initialPost = { title: '', excerpt: '', content: '', category_id: '', featured: false, status: 'draft', published_at: '', cover_image_path: '' };
const initialPhoto = { title: '', description: '', featured: false, status: 'draft', published_at: '', image_path: '' };
const toDateTimeLocal = (value) => (value ? value.slice(0, 16) : '');
const statusLabels = { draft: 'borrador', published: 'publicado' };

const sectionButtonClass = 'flex min-h-28 flex-col justify-between rounded-[1.55rem] border px-5 py-5 text-left transition duration-500';
const tabButtonClass = 'inline-flex min-h-11 items-center justify-center rounded-full border px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] transition duration-300';
const inputClass = 'min-h-12 rounded-[1.2rem] border border-plum/18 bg-white/92 px-5 py-3 text-sm text-ink outline-none transition duration-300 placeholder:text-ink/35 hover:border-plum/30 focus:border-plum focus:bg-white focus:shadow-soft';
const textareaClass = 'rounded-[1.4rem] border border-plum/18 bg-white/92 px-5 py-4 text-sm leading-7 text-ink outline-none transition duration-300 placeholder:text-ink/35 hover:border-plum/30 focus:border-plum focus:bg-white focus:shadow-soft';
const labelClass = 'space-y-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-taupe';
const fileClass = 'mt-3 block w-full cursor-pointer rounded-[1.25rem] border border-dashed border-plum/22 bg-lavenderMist/90 px-4 py-4 text-sm text-ink/70 transition duration-300 file:mr-4 file:rounded-full file:border-0 file:bg-plum file:px-4 file:py-2 file:text-[10px] file:font-semibold file:uppercase file:tracking-[0.22em] file:text-cloud hover:border-plum/40 hover:bg-white';
const primaryButtonClass = 'inline-flex min-h-12 items-center justify-center rounded-full border border-plum bg-plum px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-cloud shadow-lavender transition duration-500 hover:-translate-y-0.5 hover:border-deepPlum hover:bg-deepPlum';
const secondaryButtonClass = 'inline-flex min-h-11 items-center justify-center rounded-full border border-plum/18 bg-lavenderMist/90 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-plum transition duration-500 hover:-translate-y-0.5 hover:border-plum/35 hover:bg-white hover:text-deepPlum';
const dangerButtonClass = 'inline-flex min-h-11 items-center justify-center rounded-full border border-wine/30 bg-white/85 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-wine transition duration-500 hover:-translate-y-0.5 hover:border-wine hover:bg-wine hover:text-white';

function getReadableError(message) {
  if (!message) return '';
  if (message.includes('site_settings')) return 'Falta configurar la tabla de apariencia del sitio. Ejecuta el SQL nuevo de site_settings en Supabase.';
  if (message.includes('row-level security')) return 'Supabase ha bloqueado la accion por permisos. Revisa que tu usuario tenga rol admin y que las policies de Storage y del contenido esten aplicadas.';
  if (message.includes('bucket') || message.includes('Storage')) return 'No se pudo subir o borrar el archivo. Revisa que el bucket images exista y permita acciones para admin.';
  if (message.includes('photo_entries')) return 'Falta configurar la tabla de fotografia. Ejecuta el SQL de photo_entries en Supabase.';
  if (message.includes('duplicate key')) return 'Ese contenido ya existe. Cambia el titulo o actualiza el elemento existente.';
  return message;
}

function AdminAlert({ message }) {
  if (!message) return null;
  const isError = /error|could not|failed|permission|policy|blocked|bloqueado|falta|no se pudo/i.test(message);
  return (
    <div className={`rounded-[1.45rem] border px-5 py-4 text-sm leading-6 shadow-soft ${isError ? 'border-wine/25 bg-white/95 text-wine' : 'border-plum/18 bg-lavenderMist/95 text-deepPlum'}`}>
      <span className="editorial-kicker block text-[9px]">{isError ? 'Aviso del estudio' : 'Estado'}</span>
      <span className="mt-2 block">{getReadableError(message)}</span>
    </div>
  );
}

function PanelCard({ eyebrow, title, description, children, className = '' }) {
  return (
    <section className={`magazine-frame rounded-[1.9rem] p-5 md:rounded-[2.2rem] md:p-7 ${className}`}>
      <div className="border-b border-plum/18 pb-5">
        {eyebrow ? <p className="editorial-kicker">{eyebrow}</p> : null}
        {title ? <h2 className="mt-3 font-display text-4xl leading-none tracking-[-0.04em] text-ink md:text-5xl">{title}</h2> : null}
        {description ? <p className="mt-4 max-w-3xl text-sm leading-7 text-ink/68">{description}</p> : null}
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

function SectionSwitch({ value, active, label, description, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${sectionButtonClass} ${active ? 'border-plum bg-white text-ink shadow-lavender' : 'border-plum/16 bg-white/72 text-ink/80 hover:-translate-y-0.5 hover:border-plum/28 hover:bg-white'}`}
    >
      <span className="editorial-kicker">{label}</span>
      <span className="mt-3 block font-display text-3xl leading-none tracking-[-0.04em]">{value}</span>
      <span className="mt-3 block max-w-xs text-sm leading-6 text-ink/60">{description}</span>
    </button>
  );
}

function TabButton({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${tabButtonClass} ${active ? 'border-plum bg-plum text-cloud shadow-lavender' : 'border-plum/18 bg-white/80 text-plum hover:border-plum/35 hover:bg-lavenderMist/95 hover:text-deepPlum'}`}
    >
      {children}
    </button>
  );
}

function StatCard({ label, value, detail }) {
  return (
    <div className="rounded-[1.35rem] border border-plum/16 bg-white/75 p-4 shadow-soft backdrop-blur-sm">
      <p className="font-display text-4xl leading-none text-plum">{value}</p>
      <p className="mt-2 text-[10px] uppercase tracking-[0.26em] text-taupe">{label}</p>
      {detail ? <p className="mt-3 text-sm leading-6 text-ink/60">{detail}</p> : null}
    </div>
  );
}

function EmptyLibraryState({ children }) {
  return <div className="rounded-[1.2rem] border border-dashed border-plum/20 bg-white/78 p-5 text-sm leading-6 text-ink/65">{children}</div>;
}

function LibraryRow({ title, meta, status, image, onEdit, onDelete, deleteLabel = 'Borrar' }) {
  return (
    <div className="overflow-hidden rounded-[1.3rem] border border-plum/12 bg-white/82 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-plum/24 hover:bg-white">
      <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-4">
          {image ? <img src={image} alt={title} className="h-16 w-16 rounded-[1rem] object-cover" /> : <div className="flex h-16 w-16 items-center justify-center rounded-[1rem] bg-lavenderMist text-[10px] uppercase tracking-[0.24em] text-plum">Archivo</div>}
          <div className="min-w-0">
            <p className="truncate font-display text-2xl leading-none tracking-[-0.03em] text-ink">{title}</p>
            {meta ? <p className="mt-2 text-sm leading-6 text-ink/58">{meta}</p> : null}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:justify-end">
          <StatusPill value={status} />
          <button type="button" onClick={onEdit} className={secondaryButtonClass}>Editar</button>
          {onDelete ? <button type="button" onClick={onDelete} className={dangerButtonClass}>{deleteLabel}</button> : null}
        </div>
      </div>
    </div>
  );
}

export function AdminDashboardPage() {
  const { user } = useAuth();
  const [categories, setCategories] = useState([]);
  const [resources, setResources] = useState([]);
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [siteSettings, setSiteSettings] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const [resource, setResource] = useState(initialResource);
  const [post, setPost] = useState(initialPost);
  const [photo, setPhoto] = useState(initialPhoto);
  const [resourceCover, setResourceCover] = useState(null);
  const [resourcePdf, setResourcePdf] = useState(null);
  const [postCover, setPostCover] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);
  const [heroPrimaryFile, setHeroPrimaryFile] = useState(null);
  const [heroSecondaryFile, setHeroSecondaryFile] = useState(null);
  const [status, setStatus] = useState('');
  const [activeSection, setActiveSection] = useState('create');
  const [createTab, setCreateTab] = useState('resource');
  const [libraryTab, setLibraryTab] = useState('resources');
  const [resourceFormKey, setResourceFormKey] = useState(0);
  const [postFormKey, setPostFormKey] = useState(0);
  const [photoFormKey, setPhotoFormKey] = useState(0);
  const [appearanceFormKey, setAppearanceFormKey] = useState(0);

  const stats = useMemo(() => [
    { label: 'Recursos', value: resources.length, detail: 'Guias, descargables y piezas premium.' },
    { label: 'Fotografias', value: photos.length, detail: 'Galeria visual para la seccion editorial.' },
    { label: 'Articulos', value: posts.length, detail: 'Entradas para el diario y contenidos largos.' },
  ], [photos.length, posts.length, resources.length]);

  const heroPreviewPrimary = siteSettings?.heroPrimaryImageUrl || defaultHero.image;
  const heroPreviewSecondary = siteSettings?.heroSecondaryImageUrl || defaultHero.imageSecondary;

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

    try {
      const nextSiteSettings = await getSiteSettings();
      setSiteSettings(nextSiteSettings);
    } catch (error) {
      setSiteSettings(null);
      setStatus((current) => current || error.message);
    }
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
      const wasEditing = Boolean(resource.id);
      setResource(initialResource);
      setResourceCover(null);
      setResourcePdf(null);
      setResourceFormKey((value) => value + 1);
      await refreshAdminData();
      setStatus(wasEditing ? 'Recurso actualizado.' : 'Recurso creado.');
      setActiveSection('library');
      setLibraryTab('resources');
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
      const wasEditing = Boolean(post.id);
      setPost(initialPost);
      setPostCover(null);
      setPostFormKey((value) => value + 1);
      await refreshAdminData();
      setStatus(wasEditing ? 'Articulo actualizado.' : 'Articulo creado.');
      setActiveSection('library');
      setLibraryTab('posts');
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
      const wasEditing = Boolean(photo.id);
      setPhoto(initialPhoto);
      setPhotoFile(null);
      setPhotoFormKey((value) => value + 1);
      await refreshAdminData();
      setStatus(wasEditing ? 'Fotografia actualizada.' : 'Fotografia creada.');
      setActiveSection('library');
      setLibraryTab('photos');
    } catch (error) {
      setStatus(error.message);
    }
  }

  async function handleSaveAppearance(event) {
    event.preventDefault();
    setStatus('');
    try {
      const heroPrimaryPath = heroPrimaryFile
        ? await uploadContentFile({ bucket: STORAGE_BUCKETS.covers, folder: 'site/hero', file: heroPrimaryFile, ownerId: user.id })
        : siteSettings?.hero_primary_image_path || null;
      const heroSecondaryPath = heroSecondaryFile
        ? await uploadContentFile({ bucket: STORAGE_BUCKETS.covers, folder: 'site/hero', file: heroSecondaryFile, ownerId: user.id })
        : siteSettings?.hero_secondary_image_path || null;

      const nextSettings = await saveSiteSettings({
        hero_primary_image_path: heroPrimaryPath,
        hero_secondary_image_path: heroSecondaryPath,
      });

      setSiteSettings(nextSettings);
      setHeroPrimaryFile(null);
      setHeroSecondaryFile(null);
      setAppearanceFormKey((value) => value + 1);
      setStatus('Apariencia del hero actualizada.');
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
        setPhotoFormKey((value) => value + 1);
      }
      await refreshAdminData();
      setStatus('Fotografia borrada.');
    } catch (error) {
      setStatus(error.message);
    }
  }

  function editResource(item) {
    setResource({ ...item, category_id: item.category_id || '', published_at: toDateTimeLocal(item.published_at) });
    setActiveSection('create');
    setCreateTab('resource');
    setStatus(`Editando recurso: ${item.title}`);
  }

  function editPost(item) {
    setPost({ ...item, category_id: item.category_id || '', published_at: toDateTimeLocal(item.published_at) });
    setActiveSection('create');
    setCreateTab('post');
    setStatus(`Editando articulo: ${item.title}`);
  }

  function editPhoto(item) {
    setPhoto({ ...item, published_at: toDateTimeLocal(item.published_at) });
    setPhotoFile(null);
    setActiveSection('create');
    setCreateTab('photo');
    setStatus(`Editando fotografia: ${item.title}`);
  }

  function resetResourceDraft() {
    setResource(initialResource);
    setResourceCover(null);
    setResourcePdf(null);
    setResourceFormKey((value) => value + 1);
    setStatus('Formulario de recurso limpio.');
  }

  function resetPostDraft() {
    setPost(initialPost);
    setPostCover(null);
    setPostFormKey((value) => value + 1);
    setStatus('Formulario de articulo limpio.');
  }

  function resetPhotoDraft() {
    setPhoto(initialPhoto);
    setPhotoFile(null);
    setPhotoFormKey((value) => value + 1);
    setStatus('Formulario de fotografia limpio.');
  }
  function renderCreatePanel() {
    return (
      <PanelCard eyebrow="Crear contenido" title="Mesa editorial" description="Abre solo el formato que quieras crear: recurso, fotografia o articulo. Cada flujo queda mas limpio y enfocado.">
        <div className="flex flex-wrap gap-3 border-b border-plum/14 pb-6">
          <TabButton active={createTab === 'resource'} onClick={() => setCreateTab('resource')}>Recurso PDF</TabButton>
          <TabButton active={createTab === 'photo'} onClick={() => setCreateTab('photo')}>Fotografia</TabButton>
          <TabButton active={createTab === 'post'} onClick={() => setCreateTab('post')}>Articulo</TabButton>
        </div>

        {createTab === 'resource' ? (
          <form key={resourceFormKey} onSubmit={handleSaveResource} className="mt-6 grid gap-5 md:grid-cols-2">
            <label className={labelClass}>Titulo<input className={`mt-3 w-full ${inputClass}`} placeholder="Titulo del recurso" value={resource.title} onChange={(event) => setResource({ ...resource, title: event.target.value })} required /></label>
            <label className={labelClass}>Categoria<select className={`mt-3 w-full ${inputClass}`} value={resource.category_id} onChange={(event) => setResource({ ...resource, category_id: event.target.value })}><option value="">Sin categoria</option>{categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}</select></label>
            <label className={`${labelClass} md:col-span-2`}>Descripcion<textarea className={`mt-3 min-h-28 w-full ${textareaClass}`} placeholder="Descripcion breve y editorial" value={resource.description} onChange={(event) => setResource({ ...resource, description: event.target.value })} required /></label>
            <label className={labelClass}>Portada del recurso<input className={fileClass} type="file" accept="image/*" onChange={(event) => setResourceCover(event.target.files?.[0] || null)} /></label>
            <label className={labelClass}>Archivo PDF<input className={fileClass} type="file" accept="application/pdf" onChange={(event) => setResourcePdf(event.target.files?.[0] || null)} /></label>
            <label className={labelClass}>Fecha de publicacion<input className={`mt-3 w-full ${inputClass}`} type="datetime-local" value={resource.published_at} onChange={(event) => setResource({ ...resource, published_at: event.target.value })} /></label>
            <label className={labelClass}>Estado<select className={`mt-3 w-full ${inputClass}`} value={resource.status} onChange={(event) => setResource({ ...resource, status: event.target.value })}><option value="draft">Borrador</option><option value="published">Publicado</option></select></label>
            <label className="flex items-center gap-3 rounded-[1.2rem] border border-plum/18 bg-lavenderMist/80 p-4 text-sm text-ink/70 md:col-span-2"><input type="checkbox" checked={resource.featured} onChange={(event) => setResource({ ...resource, featured: event.target.checked })} /> Recurso destacado</label>
            <div className="flex flex-wrap gap-3 md:col-span-2">
              <button className={primaryButtonClass}>{resource.id ? 'Actualizar recurso' : 'Crear recurso'}</button>
              <button type="button" onClick={resetResourceDraft} className={secondaryButtonClass}>Limpiar formulario</button>
            </div>
          </form>
        ) : null}

        {createTab === 'photo' ? (
          <div className="mt-6 grid gap-6 lg:grid-cols-[0.84fr_1.16fr]">
            <div className="relative overflow-hidden rounded-[1.7rem] border border-plum/18 bg-[linear-gradient(135deg,#2A2235,#5B4A78)] p-6 text-cloud shadow-card">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,253,248,0.20),transparent_32%)]" />
              <div className="absolute bottom-[-3rem] right-[-3rem] h-48 w-48 rounded-full border border-cloud/20" />
              <div className="relative z-10 flex h-full min-h-72 flex-col justify-between gap-8">
                <p className="editorial-kicker text-blush">Fotografia</p>
                <div>
                  <h3 className="font-display text-5xl leading-none tracking-[-0.04em]">Curar una imagen</h3>
                  <p className="mt-5 text-sm leading-7 text-cloud/72">Sube una imagen, escribe una descripcion con intencion y decide si entra como borrador o como pieza publicada.</p>
                </div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-cloud/60">Archivo visual FabuRose</p>
              </div>
            </div>
            <form key={photoFormKey} onSubmit={handleSavePhoto} className="grid gap-5 md:grid-cols-2">
              <label className={labelClass}>Titulo<input className={`mt-3 w-full ${inputClass}`} placeholder="Titulo de la foto" value={photo.title} onChange={(event) => setPhoto({ ...photo, title: event.target.value })} required /></label>
              <label className={labelClass}>Estado<select className={`mt-3 w-full ${inputClass}`} value={photo.status} onChange={(event) => setPhoto({ ...photo, status: event.target.value })}><option value="draft">Borrador</option><option value="published">Publicado</option></select></label>
              <label className={`${labelClass} md:col-span-2`}>Descripcion<textarea className={`mt-3 min-h-32 w-full ${textareaClass}`} placeholder="Una linea editorial para acompanar la imagen" value={photo.description} onChange={(event) => setPhoto({ ...photo, description: event.target.value })} /></label>
              <label className={`${labelClass} md:col-span-2`}>Imagen de la galeria<input className={fileClass} type="file" accept="image/*" onChange={(event) => setPhotoFile(event.target.files?.[0] || null)} /></label>
              <label className={labelClass}>Fecha<input className={`mt-3 w-full ${inputClass}`} type="datetime-local" value={photo.published_at} onChange={(event) => setPhoto({ ...photo, published_at: event.target.value })} /></label>
              <label className="flex items-center gap-3 rounded-[1.2rem] border border-plum/18 bg-lavenderMist/80 p-4 text-sm text-ink/70"><input type="checkbox" checked={photo.featured} onChange={(event) => setPhoto({ ...photo, featured: event.target.checked })} /> Fotografia destacada</label>
              <div className="flex flex-wrap gap-3 md:col-span-2">
                <button className={primaryButtonClass}>{photo.id ? 'Actualizar fotografia' : 'Publicar fotografia'}</button>
                <button type="button" onClick={resetPhotoDraft} className={secondaryButtonClass}>{photo.id ? 'Cancelar edicion' : 'Limpiar formulario'}</button>
              </div>
            </form>
          </div>
        ) : null}

        {createTab === 'post' ? (
          <form key={postFormKey} onSubmit={handleSavePost} className="mt-6 grid gap-5 md:grid-cols-2">
            <label className={labelClass}>Titulo<input className={`mt-3 w-full ${inputClass}`} placeholder="Titulo del articulo" value={post.title} onChange={(event) => setPost({ ...post, title: event.target.value })} required /></label>
            <label className={labelClass}>Categoria<select className={`mt-3 w-full ${inputClass}`} value={post.category_id} onChange={(event) => setPost({ ...post, category_id: event.target.value })}><option value="">Sin categoria</option>{categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}</select></label>
            <label className={`${labelClass} md:col-span-2`}>Extracto<textarea className={`mt-3 min-h-24 w-full ${textareaClass}`} placeholder="Resumen breve" value={post.excerpt} onChange={(event) => setPost({ ...post, excerpt: event.target.value })} /></label>
            <label className={`${labelClass} md:col-span-2`}>Contenido<textarea className={`mt-3 min-h-52 w-full ${textareaClass}`} placeholder="Contenido del articulo" value={post.content} onChange={(event) => setPost({ ...post, content: event.target.value })} required /></label>
            <label className={labelClass}>Portada del articulo<input className={fileClass} type="file" accept="image/*" onChange={(event) => setPostCover(event.target.files?.[0] || null)} /></label>
            <label className={labelClass}>Fecha<input className={`mt-3 w-full ${inputClass}`} type="datetime-local" value={post.published_at} onChange={(event) => setPost({ ...post, published_at: event.target.value })} /></label>
            <label className={labelClass}>Estado<select className={`mt-3 w-full ${inputClass}`} value={post.status} onChange={(event) => setPost({ ...post, status: event.target.value })}><option value="draft">Borrador</option><option value="published">Publicado</option></select></label>
            <label className="flex items-center gap-3 rounded-[1.2rem] border border-plum/18 bg-lavenderMist/80 p-4 text-sm text-ink/70"><input type="checkbox" checked={post.featured} onChange={(event) => setPost({ ...post, featured: event.target.checked })} /> Articulo destacado</label>
            <div className="flex flex-wrap gap-3 md:col-span-2">
              <button className={primaryButtonClass}>{post.id ? 'Actualizar articulo' : 'Crear articulo'}</button>
              <button type="button" onClick={resetPostDraft} className={secondaryButtonClass}>Limpiar formulario</button>
            </div>
          </form>
        ) : null}
      </PanelCard>
    );
  }

  function renderOrganizePanel() {
    return (
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <PanelCard eyebrow="Organizar" title="Categorias" description="Ordena el universo editorial y define las lineas que despues veras en recursos, diario y fotografia.">
          <form onSubmit={handleCreateCategory} className="space-y-4">
            <label className={labelClass}>Nombre<input className={`mt-3 w-full ${inputClass}`} placeholder="Ej. Ritual, estilo, astrologia" value={categoryName} onChange={(event) => setCategoryName(event.target.value)} required /></label>
            <button className={primaryButtonClass}>Crear categoria</button>
          </form>
        </PanelCard>

        <PanelCard eyebrow="Mapa editorial" title="Colecciones activas" description="Tus categorias funcionan como estructura base para mantener el contenido limpio y facil de escalar.">
          <div className="grid gap-3 sm:grid-cols-2">
            {categories.length === 0 ? <EmptyLibraryState>Aun no hay categorias creadas. Empieza por una linea editorial y luego asignala a recursos y articulos.</EmptyLibraryState> : null}
            {categories.map((category) => (
              <div key={category.id} className="rounded-[1.25rem] border border-plum/14 bg-white/78 p-4 shadow-soft">
                <p className="editorial-kicker">Categoria</p>
                <p className="mt-3 font-display text-3xl leading-none tracking-[-0.04em] text-ink">{category.name}</p>
                <p className="mt-3 text-sm leading-6 text-ink/60">/{category.slug}</p>
              </div>
            ))}
          </div>
        </PanelCard>
      </div>
    );
  }

  function renderLibraryPanel() {
    return (
      <PanelCard eyebrow="Gestionar" title="Biblioteca de contenido" description="Edita lo ya publicado o en borrador sin tener todos los formularios abiertos al mismo tiempo.">
        <div className="flex flex-wrap gap-3 border-b border-plum/14 pb-6">
          <TabButton active={libraryTab === 'resources'} onClick={() => setLibraryTab('resources')}>Recursos</TabButton>
          <TabButton active={libraryTab === 'photos'} onClick={() => setLibraryTab('photos')}>Fotografias</TabButton>
          <TabButton active={libraryTab === 'posts'} onClick={() => setLibraryTab('posts')}>Diario</TabButton>
        </div>

        <div className="mt-6 space-y-4">
          {libraryTab === 'resources' ? (
            resources.length === 0 ? <EmptyLibraryState>No hay recursos todavia. Crea el primero desde Crear contenido.</EmptyLibraryState> : resources.map((item) => (
              <LibraryRow
                key={item.id}
                title={item.title}
                meta={item.description}
                status={item.status}
                image={item.cover_image_path ? item.image : ''}
                onEdit={() => editResource(item)}
              />
            ))
          ) : null}

          {libraryTab === 'photos' ? (
            photos.length === 0 ? <EmptyLibraryState>No hay fotografias todavia. Usa Crear contenido para alimentar la galeria editorial.</EmptyLibraryState> : photos.map((item) => (
              <LibraryRow
                key={item.id}
                title={item.title}
                meta={item.description}
                status={item.status}
                image={item.image}
                onEdit={() => editPhoto(item)}
                onDelete={() => handleDeletePhoto(item)}
              />
            ))
          ) : null}

          {libraryTab === 'posts' ? (
            posts.length === 0 ? <EmptyLibraryState>No hay articulos en el diario todavia. Crea una pieza nueva desde Crear contenido.</EmptyLibraryState> : posts.map((item) => (
              <LibraryRow
                key={item.id}
                title={item.title}
                meta={item.excerpt}
                status={item.status}
                image={item.cover_image_path ? item.image : ''}
                onEdit={() => editPost(item)}
              />
            ))
          ) : null}
        </div>
      </PanelCard>
    );
  }

  function renderAppearancePanel() {
    return (
      <PanelCard eyebrow="Apariencia" title="Hero del sitio" description="Actualiza las imagenes principales del hero desde Storage. Si no subes nada, la home mantiene los visuales actuales como fallback.">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <form key={appearanceFormKey} onSubmit={handleSaveAppearance} className="grid gap-5 md:grid-cols-2">
            <label className={`${labelClass} md:col-span-2`}>Imagen principal del hero<input className={fileClass} type="file" accept="image/*" onChange={(event) => setHeroPrimaryFile(event.target.files?.[0] || null)} /></label>
            <label className={`${labelClass} md:col-span-2`}>Imagen secundaria del hero<input className={fileClass} type="file" accept="image/*" onChange={(event) => setHeroSecondaryFile(event.target.files?.[0] || null)} /></label>
            <div className="md:col-span-2 rounded-[1.25rem] border border-plum/16 bg-lavenderMist/85 p-4 text-sm leading-6 text-ink/64">
              Las imagenes se guardan en el bucket <strong>images</strong>, dentro de la carpeta <strong>site/hero</strong>. La home leera estos archivos desde Supabase cuando existan.
            </div>
            <div className="flex flex-wrap gap-3 md:col-span-2">
              <button className={primaryButtonClass}>Guardar apariencia</button>
              <button type="button" onClick={() => { setHeroPrimaryFile(null); setHeroSecondaryFile(null); setAppearanceFormKey((value) => value + 1); setStatus('Cambios visuales cancelados.'); }} className={secondaryButtonClass}>Cancelar</button>
            </div>
          </form>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[1.4rem] border border-plum/16 bg-white/82 p-4 shadow-soft">
              <p className="editorial-kicker">Hero principal</p>
              <img src={heroPreviewPrimary} alt="Vista previa hero principal" className="mt-4 h-56 w-full rounded-[1.2rem] object-cover" />
            </div>
            <div className="rounded-[1.4rem] border border-plum/16 bg-white/82 p-4 shadow-soft">
              <p className="editorial-kicker">Hero secundario</p>
              <img src={heroPreviewSecondary} alt="Vista previa hero secundaria" className="mt-4 h-56 w-full rounded-[1.2rem] object-cover" />
            </div>
          </div>
        </div>
      </PanelCard>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-10 md:py-20">
      <div className="relative overflow-hidden rounded-[2rem] border border-plum/18 bg-[linear-gradient(135deg,#FFFDF8_0%,#FAF8FC_52%,#F2EDF7_100%)] p-6 shadow-soft md:rounded-[2.6rem] md:p-10">
        <div className="absolute right-[-5rem] top-[-6rem] h-56 w-56 rounded-full bg-lavender/70 blur-3xl" />
        <div className="relative z-10 grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-end">
          <div>
            <p className="editorial-kicker">Administracion FabuRose</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.92] tracking-[-0.05em] text-ink sm:text-6xl md:text-7xl">Estudio editorial de contenido</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-ink/70">Organiza tu trabajo por etapas: crear, ordenar, gestionar y ajustar la apariencia del sitio. Todo dentro de una estructura mas clara y suave.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map((item) => <StatCard key={item.label} {...item} />)}
          </div>
        </div>
      </div>

      <div className="mt-6"><AdminAlert message={status} /></div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <SectionSwitch value="Crear" label="Flujo 01" description="Abre un solo formulario a la vez para trabajar con foco." active={activeSection === 'create'} onClick={() => setActiveSection('create')} />
        <SectionSwitch value="Organizar" label="Flujo 02" description="Define y revisa las categorias del universo editorial." active={activeSection === 'organize'} onClick={() => setActiveSection('organize')} />
        <SectionSwitch value="Biblioteca" label="Flujo 03" description="Edita o revisa lo que ya existe sin perder contexto." active={activeSection === 'library'} onClick={() => setActiveSection('library')} />
        <SectionSwitch value="Apariencia" label="Flujo 04" description="Actualiza las imagenes del hero y la capa visual del sitio." active={activeSection === 'appearance'} onClick={() => setActiveSection('appearance')} />
      </div>

      <div className="mt-8 space-y-6">
        {activeSection === 'create' ? renderCreatePanel() : null}
        {activeSection === 'organize' ? renderOrganizePanel() : null}
        {activeSection === 'library' ? renderLibraryPanel() : null}
        {activeSection === 'appearance' ? renderAppearancePanel() : null}
      </div>
    </section>
  );
}
