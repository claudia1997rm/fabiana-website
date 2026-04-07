import { journalPosts, resources as mockResources } from '../data/siteData';
import { supabase } from './supabaseClient';
import { buildStoragePath, STORAGE_BUCKETS } from './storagePaths';

export function slugify(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function getPublicUrl(bucket, path) {
  if (!supabase || !path) return '';
  return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl;
}

function mapResource(resource) {
  return resource?.cover_image_path
    ? { ...resource, image: getPublicUrl(STORAGE_BUCKETS.covers, resource.cover_image_path), pdfUrl: getPublicUrl(STORAGE_BUCKETS.pdfs, resource.pdf_file_path) }
    : resource;
}

function mapPost(post) {
  return post?.cover_image_path ? { ...post, image: getPublicUrl(STORAGE_BUCKETS.covers, post.cover_image_path) } : post;
}

function mapPhoto(photo) {
  return photo?.image_path ? { ...photo, image: getPublicUrl(STORAGE_BUCKETS.covers, photo.image_path) } : photo;
}

export async function listPublishedResources() {
  if (!supabase) return mockResources.map((resource) => ({ ...resource, slug: slugify(resource.title) }));
  const { data, error } = await supabase.from('resources').select('*, categories(name, slug)').eq('status', 'published').order('published_at', { ascending: false });
  if (error) throw error;
  return data.map(mapResource);
}

export async function getResourceBySlug(slug) {
  if (!supabase) {
    const resource = mockResources.find((item) => slugify(item.title) === slug);
    return resource ? { ...resource, slug } : null;
  }
  const { data, error } = await supabase.from('resources').select('*, categories(name, slug)').eq('slug', slug).eq('status', 'published').single();
  if (error) return null;
  return mapResource(data);
}

export async function listPublishedPosts() {
  if (!supabase) return journalPosts.map((post) => ({ ...post, slug: slugify(post.title), content: post.excerpt }));
  const { data, error } = await supabase.from('posts').select('*, categories(name, slug)').eq('status', 'published').order('published_at', { ascending: false });
  if (error) throw error;
  return data.map(mapPost);
}

export async function getPostBySlug(slug) {
  if (!supabase) {
    const post = journalPosts.find((item) => slugify(item.title) === slug);
    return post ? { ...post, slug, content: post.excerpt } : null;
  }
  const { data, error } = await supabase.from('posts').select('*, categories(name, slug)').eq('slug', slug).eq('status', 'published').single();
  if (error) return null;
  return mapPost(data);
}

export async function listPublishedPhotos() {
  if (!supabase) return [];
  const { data, error } = await supabase.from('photo_entries').select('*').eq('status', 'published').order('published_at', { ascending: false });
  if (error) throw error;
  return data.map(mapPhoto);
}

export async function listCategories() {
  if (!supabase) return [];
  const { data, error } = await supabase.from('categories').select('*').order('name');
  if (error) throw error;
  return data;
}

export async function listAdminResources() {
  const { data, error } = await supabase.from('resources').select('*, categories(name, slug)').order('updated_at', { ascending: false });
  if (error) throw error;
  return data;
}

export async function listAdminPosts() {
  const { data, error } = await supabase.from('posts').select('*, categories(name, slug)').order('updated_at', { ascending: false });
  if (error) throw error;
  return data;
}

export async function listAdminPhotos() {
  const { data, error } = await supabase.from('photo_entries').select('*').order('updated_at', { ascending: false });
  if (error) throw error;
  return data.map(mapPhoto);
}

export async function uploadContentFile({ bucket, folder, file, ownerId }) {
  const path = buildStoragePath({ folder, file, ownerId });
  const { data, error } = await supabase.storage.from(bucket).upload(path, file, { cacheControl: '3600', upsert: false });
  if (error) throw error;
  return data.path;
}

export async function createCategory(payload) {
  const slug = payload.slug || slugify(payload.name);
  const { data, error } = await supabase.from('categories').insert({ ...payload, slug }).select().single();
  if (error) throw error;
  return data;
}

function cleanWritePayload(payload) {
  const { categories, image, pdfUrl, ...record } = payload;
  return { ...record, category_id: record.category_id || null };
}

export async function saveResource(payload) {
  const slug = payload.slug || slugify(payload.title);
  const record = cleanWritePayload({ ...payload, slug });
  const query = record.id
    ? supabase.from('resources').update(record).eq('id', record.id).select().single()
    : supabase.from('resources').insert(record).select().single();
  const { data, error } = await query;
  if (error) throw error;
  return data;
}

export async function savePost(payload) {
  const slug = payload.slug || slugify(payload.title);
  const record = cleanWritePayload({ ...payload, slug });
  const query = record.id
    ? supabase.from('posts').update(record).eq('id', record.id).select().single()
    : supabase.from('posts').insert(record).select().single();
  const { data, error } = await query;
  if (error) throw error;
  return data;
}

export async function savePhoto(payload) {
  const { image, ...record } = payload;
  const query = record.id
    ? supabase.from('photo_entries').update(record).eq('id', record.id).select().single()
    : supabase.from('photo_entries').insert(record).select().single();
  const { data, error } = await query;
  if (error) throw error;
  return data;
}