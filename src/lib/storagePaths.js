export const STORAGE_BUCKETS = {
  covers: 'images',
  pdfs: 'pdfs',
};

export function sanitizeFileName(fileName) {
  return fileName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9.]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function buildStoragePath({ folder, file, ownerId }) {
  const timestamp = Date.now();
  const safeName = sanitizeFileName(file.name);
  return `${folder}/${ownerId || 'admin'}/${timestamp}-${safeName}`;
}