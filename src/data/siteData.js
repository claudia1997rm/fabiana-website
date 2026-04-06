import aboutPortrait from '../assets/placeholders/about-portrait.svg';
import heroVisual from '../assets/placeholders/hero-visual.svg';
import journalImage from '../assets/placeholders/journal-cover.svg';
import resourceCover from '../assets/placeholders/resource-cover.svg';

export const navigation = [
  { label: 'Sobre Fabiana', href: '#sobre' },
  { label: 'Universo', href: '#universo' },
  { label: 'Recursos', href: '#recursos' },
  { label: 'Journal', href: '#journal' },
  { label: 'Newsletter', href: '#newsletter' },
];

export const hero = {
  eyebrow: 'Astrología, moda y crecimiento personal',
  title: 'Fabiana',
  lead: 'Una revista íntima sobre belleza, ritual y magnetismo femenino.',
  subtitle:
    'FabuRosa une la sensibilidad de una publicación editorial con la cercanía de una marca personal. Aquí conviven hábitos suaves, estilo, energía, fotografía y una forma más consciente de habitar tu vida.',
  primaryCta: { label: 'Explorar recursos', href: '#recursos' },
  secondaryCta: { label: 'Conóceme', href: '#sobre' },
  image: heroVisual,
  issue: 'Issue 01',
  microNote: 'Para mujeres que quieren verse bellas, sentirse presentes y crear una vida con intención.',
  highlights: [
    'Guías digitales y PDFs con estética premium',
    'Textos editoriales sobre rituales, estilo y energía',
    'Base lista para ventas, newsletter y futuro CMS',
  ],
};

export const statement = {
  quote: 'Una estética suave. Una mente clara. Un universo donde la belleza también guía.',
  pillars: [
    { title: 'Moda con intención', description: 'Estilo personal, armario cápsula y presencia visual con identidad.' },
    { title: 'Astrología sensible', description: 'Luna, ciclos y símbolos como espejo emocional y creativo.' },
    { title: 'Crecimiento elegante', description: 'Hábitos, journaling y rituales diseñados para sostener tu energía.' },
  ],
};

export const about = {
  title: 'Sobre Fabiana',
  body: [
    'Fabiana crea un espacio donde la estética no es superficial, sino lenguaje. Comparte herramientas para construir hábitos suaves, una identidad más consciente y una vida que se sienta tan bella por dentro como por fuera.',
    'Su universo mezcla moda, bienestar, fotografía, astrología y crecimiento personal con una mirada editorial: cercana, refinada y emocionalmente honesta. Cada recurso está pensado para acompañar procesos reales, no para sumar ruido.',
  ],
  quote: 'La transformación también puede verse delicada, femenina y absolutamente tuya.',
  image: aboutPortrait,
  notes: [
    'Mirada editorial y aspiracional',
    'Contenido digital fácil de escalar',
    'Base visual lista para marca personal premium',
  ],
};

export const categories = [
  {
    name: 'Hábitos',
    description: 'Rituales de 30 días, organización suave y hábitos que sostienen tu energía.',
    accent: 'Ritual',
  },
  {
    name: 'Moda',
    description: 'Estilo personal, cápsulas inteligentes y una estética coherente con tu esencia.',
    accent: 'Style',
  },
  {
    name: 'Estética',
    description: 'Belleza consciente, autocuidado y pequeños gestos que elevan lo cotidiano.',
    accent: 'Beauty',
  },
  {
    name: 'Fotografía',
    description: 'Consejos visuales, poses, luz y narrativa para capturar tu universo.',
    accent: 'Visual',
  },
  {
    name: 'Astrología',
    description: 'Reflexiones simbólicas y herramientas para leer tu energía con sensibilidad.',
    accent: 'Cosmos',
  },
  {
    name: 'Lifestyle',
    description: 'Inspiración para vivir con más intención, placer, presencia y dirección.',
    accent: 'Living',
  },
];

export const resources = [
  {
    title: '30 días de hábitos para mujeres',
    description:
      'Una guía en PDF con prácticas simples para volver a ti, cuidar tu energía y crear constancia con suavidad.',
    type: 'PDF descargable',
    cta: 'Ver recurso',
    href: '#',
    image: resourceCover,
    meta: 'Bestseller de entrada',
  },
  {
    title: 'Guía de estilo femenino y moderno',
    description:
      'Ideas para construir un armario con personalidad, elegancia y una narrativa visual propia.',
    type: 'Mini ebook',
    cta: 'Próximamente',
    href: '#',
    image: resourceCover,
    meta: 'Moda y identidad visual',
  },
  {
    title: 'Rituales de luna y energía personal',
    description:
      'Un recurso editorial para conectar con tus ciclos, registrar emociones y crear intención.',
    type: 'Workbook digital',
    cta: 'Descargar',
    href: '#',
    image: resourceCover,
    meta: 'Astrología + journaling',
  },
];

export const journalPosts = [
  {
    category: 'Lifestyle',
    title: 'Cómo crear mañanas más suaves sin perder enfoque',
    excerpt: 'Pequeños rituales, luz natural y decisiones mínimas para empezar el día con presencia.',
    image: journalImage,
  },
  {
    category: 'Moda',
    title: 'Vestirte como la mujer que ya estás construyendo',
    excerpt: 'La ropa como lenguaje: silueta, textura y repetición estética al servicio de tu identidad.',
    image: journalImage,
  },
  {
    category: 'Astrología',
    title: 'La carta natal como espejo creativo y emocional',
    excerpt: 'Una mirada accesible a la astrología como herramienta de narrativa personal.',
    image: journalImage,
  },
];

export const newsletter = {
  title: 'Una carta íntima para mujeres que quieren volver a sí mismas',
  description:
    'Suscríbete para recibir notas editoriales, recursos exclusivos, inspiración visual y lanzamientos antes que nadie.',
  placeholder: 'Tu email',
  buttonLabel: 'Quiero recibirla',
  helper:
    'Puedes conectar aquí MailerLite, ConvertKit, Substack o el proveedor que prefieras cuando quieras activar el formulario real.',
};

export const footer = {
  closing: 'Belleza, intención y profundidad para crear una vida con firma propia.',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Pinterest', href: 'https://pinterest.com' },
    { label: 'TikTok', href: 'https://tiktok.com' },
  ],
  contact: 'hola@faburosa.com',
};

export const integrationNotes = [
  'Pagos: sustituir los href de resources por enlaces de Gumroad, Stripe Payment Links o Shopify Lite.',
  'Newsletter: conectar el formulario a Mailchimp, ConvertKit, Beehiiv o tu endpoint preferido.',
  'Blog/CMS: mover journalPosts a un CMS como Sanity, Contentful o Notion API cuando quieras escalar.',
];
