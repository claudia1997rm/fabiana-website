import { about, categories, editorialGallery, hero, journalPosts, resources } from './siteData';

export const siteImageGroups = [
  {
    title: 'Hero',
    description: 'Visual principal de entrada.',
    items: [
      { key: 'heroPrimary', label: 'Imagen principal del hero', fallback: hero.image },
      { key: 'heroSecondary', label: 'Imagen secundaria del hero', fallback: hero.imageSecondary },
    ],
  },
  {
    title: 'Sobre Fabiana',
    description: 'Retrato principal del bloque personal.',
    items: [{ key: 'aboutPrimary', label: 'Imagen principal de Sobre Fabiana', fallback: about.image }],
  },
  {
    title: 'Lookbook',
    description: 'Tres imagenes del strip editorial.',
    items: [
      { key: 'galleryOne', label: 'Lookbook 01', fallback: editorialGallery[0].image },
      { key: 'galleryTwo', label: 'Lookbook 02', fallback: editorialGallery[1].image },
      { key: 'galleryThree', label: 'Lookbook 03', fallback: editorialGallery[2].image },
    ],
  },
  {
    title: 'Universo',
    description: 'Imagenes de las cards de categorias.',
    items: [
      { key: 'categoryHabits', label: 'Habitos', fallback: categories[0].image },
      { key: 'categoryFashion', label: 'Moda', fallback: categories[1].image },
      { key: 'categoryBeauty', label: 'Estetica', fallback: categories[2].image },
      { key: 'categoryPhotography', label: 'Fotografia', fallback: categories[3].image },
      { key: 'categoryAstrology', label: 'Astrologia', fallback: categories[4].image },
      { key: 'categoryLifestyle', label: 'Vida', fallback: categories[5].image },
    ],
  },
  {
    title: 'Recursos',
    description: 'Portadas de la boutique digital.',
    items: [
      { key: 'resourceOne', label: 'Recurso 01', fallback: resources[0].image },
      { key: 'resourceTwo', label: 'Recurso 02', fallback: resources[1].image },
      { key: 'resourceThree', label: 'Recurso 03', fallback: resources[2].image },
    ],
  },
  {
    title: 'Diario',
    description: 'Imagenes de las entradas destacadas.',
    items: [
      { key: 'journalOne', label: 'Articulo 01', fallback: journalPosts[0].image },
      { key: 'journalTwo', label: 'Articulo 02', fallback: journalPosts[1].image },
      { key: 'journalThree', label: 'Articulo 03', fallback: journalPosts[2].image },
    ],
  },
];

export function buildHomepageContent(imageOverrides = {}) {
  return {
    hero: {
      ...hero,
      image: imageOverrides.heroPrimary || hero.image,
      imageSecondary: imageOverrides.heroSecondary || hero.imageSecondary,
    },
    about: {
      ...about,
      image: imageOverrides.aboutPrimary || about.image,
    },
    editorialGallery: editorialGallery.map((item, index) => ({
      ...item,
      image:
        index === 0
          ? imageOverrides.galleryOne || item.image
          : index === 1
            ? imageOverrides.galleryTwo || item.image
            : imageOverrides.galleryThree || item.image,
    })),
    categories: categories.map((item, index) => ({
      ...item,
      image:
        index === 0
          ? imageOverrides.categoryHabits || item.image
          : index === 1
            ? imageOverrides.categoryFashion || item.image
            : index === 2
              ? imageOverrides.categoryBeauty || item.image
              : index === 3
                ? imageOverrides.categoryPhotography || item.image
                : index === 4
                  ? imageOverrides.categoryAstrology || item.image
                  : imageOverrides.categoryLifestyle || item.image,
    })),
    resources: resources.map((item, index) => ({
      ...item,
      image:
        index === 0
          ? imageOverrides.resourceOne || item.image
          : index === 1
            ? imageOverrides.resourceTwo || item.image
            : imageOverrides.resourceThree || item.image,
    })),
    journalPosts: journalPosts.map((item, index) => ({
      ...item,
      image:
        index === 0
          ? imageOverrides.journalOne || item.image
          : index === 1
            ? imageOverrides.journalTwo || item.image
            : imageOverrides.journalThree || item.image,
    })),
  };
}
