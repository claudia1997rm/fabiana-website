# FabuRosa Web

Landing editorial y responsive para la marca personal de FabuRosa, creada con React, Vite y Tailwind CSS.

## Ejecutar en local

1. Instala dependencias:

```bash
npm install
```

2. Inicia el entorno de desarrollo:

```bash
npm run dev
```

3. Para generar build de producción:

```bash
npm run build
```

## Estructura del proyecto

```text
src/
  assets/placeholders/   # Imágenes SVG de ejemplo
  components/            # Secciones y piezas reutilizables
  data/siteData.js       # Textos, enlaces y contenido mock editable
  App.jsx
  index.css
  main.jsx
```

## Cómo cambiar textos, imágenes y PDFs

### Textos y enlaces

- Edita [src/data/siteData.js](/C:/CLAUDIA/Proyectos/07_FabuRosa/src/data/siteData.js)
- Ahí puedes cambiar:
  - navegación
  - hero
  - texto de presentación
  - categorías
  - recursos digitales
  - artículos del journal
  - copy de newsletter
  - footer y enlaces sociales

### Imágenes

- Sustituye los SVG de ejemplo dentro de [src/assets/placeholders](/C:/CLAUDIA/Proyectos/07_FabuRosa/src/assets/placeholders)
- O importa nuevas imágenes desde otra carpeta y actualiza sus referencias en [src/data/siteData.js](/C:/CLAUDIA/Proyectos/07_FabuRosa/src/data/siteData.js)

### PDFs o productos descargables

- En [src/data/siteData.js](/C:/CLAUDIA/Proyectos/07_FabuRosa/src/data/siteData.js), busca el array `resources`
- Cambia:
  - `title`
  - `description`
  - `type`
  - `cta`
  - `href`
- Para enlazar un PDF local más adelante, puedes colocarlo en `public/` y usar una ruta como `/pdfs/mi-recurso.pdf`
- Para enlazar un checkout externo, pega la URL de Gumroad, Stripe o Shopify Lite en `href`

## Preparado para futuras integraciones

- Pagos con Gumroad, Stripe Payment Links o Shopify Lite
- Newsletter con Mailchimp, ConvertKit, Beehiiv o MailerLite
- Blog/CMS con Sanity, Contentful, Notion API o similares

## Ideas para una versión 2

1. Añadir páginas individuales para cada recurso y categoría
2. Conectar un CMS para publicar artículos sin tocar código
3. Crear filtros por temática en recursos y journal
4. Integrar pasarela de pago y automatización de entregas
5. Añadir animaciones scroll-based más ricas y transiciones de página
6. Incluir testimonios, press kit y media kit para colaboraciones
