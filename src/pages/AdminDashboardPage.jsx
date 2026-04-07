import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  createCategory,
  listAdminPosts,
  listAdminResources,
  listCategories,
  savePost,
  saveResource,
  uploadContentFile,
} from '../lib/contentService';
import { STORAGE_BUCKETS } from '../lib/storagePaths';

const initialResource = { title: '', description: '', category_id: '', featured: false, status: 'draft', published_at: '', cover_image_path: '', pdf_file_path: '' };
const initialPost = { title: '', excerpt: '', content: '', category_id: '', featured: false, status: 'draft', published_at: '', cover_image_path: '' };
const toDateTimeLocal = (value) => (value ? value.slice(0, 16) : '');

export function AdminDashboardPage() {
  const { user } = useAuth();
  const [categories, setCategories] = useState([]);
  const [resources, setResources] = useState([]);
  const [posts, setPosts] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [resource, setResource] = useState(initialResource);
  const [post, setPost] = useState(initialPost);
  const [resourceCover, setResourceCover] = useState(null);
  const [resourcePdf, setResourcePdf] = useState(null);
  const [postCover, setPostCover] = useState(null);
  const [status, setStatus] = useState('');

  async function refreshAdminData() {
    const [nextCategories, nextResources, nextPosts] = await Promise.all([listCategories(), listAdminResources(), listAdminPosts()]);
    setCategories(nextCategories);
    setResources(nextResources);
    setPosts(nextPosts);
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
      setStatus('Category created.');
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
      setStatus(resource.id ? 'Resource updated.' : 'Resource created.');
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
      setStatus(post.id ? 'Post updated.' : 'Post created.');
    } catch (error) {
      setStatus(error.message);
    }
  }

  function editResource(item) {
    setResource({ ...item, category_id: item.category_id || '', published_at: toDateTimeLocal(item.published_at) });
    setStatus(`Editing resource: ${item.title}`);
  }

  function editPost(item) {
    setPost({ ...item, category_id: item.category_id || '', published_at: toDateTimeLocal(item.published_at) });
    setStatus(`Editing post: ${item.title}`);
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="editorial-kicker">Fabiana Admin</p>
          <h1 className="mt-4 font-display text-6xl leading-none tracking-[-0.04em] text-ink">Content studio</h1>
          <p className="mt-5 max-w-2xl leading-8 text-ink/65">Upload PDFs and covers, create categories, publish resources and edit journal posts from one protected dashboard.</p>
        </div>
        {status ? <p className="rounded-full bg-white px-5 py-3 text-sm text-ink/70 shadow-soft">{status}</p> : null}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <form onSubmit={handleCreateCategory} className="magazine-frame rounded-[2rem] p-6">
          <p className="editorial-kicker">Categories</p>
          <input className="mt-6 w-full rounded-full border border-ink/10 bg-white px-5 py-4 outline-none focus:border-ink/40" placeholder="Category name" value={categoryName} onChange={(event) => setCategoryName(event.target.value)} required />
          <button className="mt-4 rounded-full border border-ink bg-ink px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-cloud transition hover:bg-white hover:text-ink">Create</button>
          <div className="mt-6 space-y-2 text-sm text-ink/60">{categories.map((category) => <p key={category.id}>{category.name}</p>)}</div>
        </form>

        <form onSubmit={handleSaveResource} className="magazine-frame rounded-[2rem] p-6 lg:col-span-2">
          <p className="editorial-kicker">{resource.id ? 'Edit PDF resource' : 'New PDF resource'}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input className="rounded-full border border-ink/10 bg-white px-5 py-4" placeholder="Title" value={resource.title} onChange={(event) => setResource({ ...resource, title: event.target.value })} required />
            <select className="rounded-full border border-ink/10 bg-white px-5 py-4" value={resource.category_id} onChange={(event) => setResource({ ...resource, category_id: event.target.value })}>
              <option value="">No category</option>{categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
            </select>
            <textarea className="rounded-[1.5rem] border border-ink/10 bg-white px-5 py-4 md:col-span-2" placeholder="Description" value={resource.description} onChange={(event) => setResource({ ...resource, description: event.target.value })} required />
            <input type="file" accept="image/*" onChange={(event) => setResourceCover(event.target.files?.[0])} />
            <input type="file" accept="application/pdf" onChange={(event) => setResourcePdf(event.target.files?.[0])} />
            <input className="rounded-full border border-ink/10 bg-white px-5 py-4" type="datetime-local" value={resource.published_at} onChange={(event) => setResource({ ...resource, published_at: event.target.value })} />
            <select className="rounded-full border border-ink/10 bg-white px-5 py-4" value={resource.status} onChange={(event) => setResource({ ...resource, status: event.target.value })}><option value="draft">Draft</option><option value="published">Published</option></select>
            <label className="flex items-center gap-3 text-sm text-ink/65"><input type="checkbox" checked={resource.featured} onChange={(event) => setResource({ ...resource, featured: event.target.checked })} /> Featured resource</label>
          </div>
          <button className="mt-6 rounded-full border border-ink bg-ink px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-cloud transition hover:bg-white hover:text-ink">{resource.id ? 'Update resource' : 'Create resource'}</button>
        </form>
      </div>

      <form onSubmit={handleSavePost} className="magazine-frame mt-6 rounded-[2rem] p-6">
        <p className="editorial-kicker">{post.id ? 'Edit journal post' : 'New journal post'}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <input className="rounded-full border border-ink/10 bg-white px-5 py-4" placeholder="Title" value={post.title} onChange={(event) => setPost({ ...post, title: event.target.value })} required />
          <select className="rounded-full border border-ink/10 bg-white px-5 py-4" value={post.category_id} onChange={(event) => setPost({ ...post, category_id: event.target.value })}><option value="">No category</option>{categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}</select>
          <textarea className="rounded-[1.5rem] border border-ink/10 bg-white px-5 py-4 md:col-span-2" placeholder="Excerpt" value={post.excerpt} onChange={(event) => setPost({ ...post, excerpt: event.target.value })} />
          <textarea className="min-h-52 rounded-[1.5rem] border border-ink/10 bg-white px-5 py-4 md:col-span-2" placeholder="Post content" value={post.content} onChange={(event) => setPost({ ...post, content: event.target.value })} required />
          <input type="file" accept="image/*" onChange={(event) => setPostCover(event.target.files?.[0])} />
          <input className="rounded-full border border-ink/10 bg-white px-5 py-4" type="datetime-local" value={post.published_at} onChange={(event) => setPost({ ...post, published_at: event.target.value })} />
          <select className="rounded-full border border-ink/10 bg-white px-5 py-4" value={post.status} onChange={(event) => setPost({ ...post, status: event.target.value })}><option value="draft">Draft</option><option value="published">Published</option></select>
          <label className="flex items-center gap-3 text-sm text-ink/65"><input type="checkbox" checked={post.featured} onChange={(event) => setPost({ ...post, featured: event.target.checked })} /> Featured post</label>
        </div>
        <button className="mt-6 rounded-full border border-ink bg-ink px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-cloud transition hover:bg-white hover:text-ink">{post.id ? 'Update post' : 'Create post'}</button>
      </form>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="magazine-frame rounded-[2rem] p-6"><p className="editorial-kicker">Existing resources</p>{resources.map((item) => <button key={item.id} onClick={() => editResource(item)} className="mt-4 block text-left text-sm leading-6 text-ink/70 transition hover:text-ink">{item.title} · {item.status}</button>)}</div>
        <div className="magazine-frame rounded-[2rem] p-6"><p className="editorial-kicker">Existing posts</p>{posts.map((item) => <button key={item.id} onClick={() => editPost(item)} className="mt-4 block text-left text-sm leading-6 text-ink/70 transition hover:text-ink">{item.title} · {item.status}</button>)}</div>
      </div>
    </section>
  );
}