import aboutPortrait from '../assets/placeholders/about-portrait.svg';
import heroVisual from '../assets/placeholders/hero-visual.svg';
import journalImage from '../assets/placeholders/journal-cover.svg';
import resourceCover from '../assets/placeholders/resource-cover.svg';

export const navigation = [
  { label: 'Sobre Fabiana', href: '#sobre' },
  { label: 'Universo', href: '#universo' },
  { label: 'Recursos', href: '#recursos' },
  { label: 'Diario', href: '#journal' },
  { label: 'Carta', href: '#newsletter' },
];

export const hero = {
  eyebrow: 'Astrología, moda y crecimiento personal',
  title: 'Fabiana',
  lead: 'Una revista íntima sobre belleza, ritual y magnetismo femenino.',
  subtitle:
    'FabuRosa es un universo editorial para descubrir recursos, leer ideas con intención, descargar guías cuidadas y recibir cartas íntimas para acompañar tu estilo, tus ciclos y tu crecimiento personal.',
  primaryCta: { label: 'Descubrir la colección', href: '#recursos' },
  secondaryCta: { label: 'Entrar al universo', href: '#universo' },
  image: heroVisual,
  issue: 'Edición 01',
  microNote: 'Empieza por una guía, una lectura o una carta: elige el ritual que más se parezca a ti.',
  highlights: [
    'Descubre recursos digitales con estética de alta gama',
    'Lee notas editoriales sobre rituales, estilo y energía',
    'Suscríbete para recibir lanzamientos y cartas privadas',
  ],
  journey: ['Descubrir', 'Leer', 'Descargar', 'Suscribirse'],
};

export const statement = {
  quote: 'Una estética suave. Una mente clara. Un universo donde la belleza también guía.',
  pillars: [
    { title: 'Moda con intención', description: 'Estilo personal, armario cápsula y presencia visual con identidad.' },
    { title: 'Astrología sensible', description: 'Luna, ciclos y símbolos como espejo emocional y creativo.' },
    { title: 'Crecimiento elegante', description: 'Hábitos, escritura reflexiva y rituales diseñados para sostener tu energía.' },
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
    'Base visual lista para marca personal de alta gama',
  ],
};

export const categories = [
  {
    name: 'Hábitos',
    description: 'Rituales de 30 días, organización suave y hábitos que sostienen tu energía.',
    accent: 'Ritual',
    path: '/habitos',
    cta: 'Explorar hábitos',
  },
  {
    name: 'Moda',
    description: 'Estilo personal, cápsulas inteligentes y una estética coherente con tu esencia.',
    accent: 'Estilo',
    path: '/moda',
    cta: 'Explorar moda',
  },
  {
    name: 'Estética',
    description: 'Belleza consciente, autocuidado y pequeños gestos que elevan lo cotidiano.',
    accent: 'Belleza',
    path: '/estetica',
    cta: 'Explorar estética',
  },
  {
    name: 'Fotografía',
    description: 'Consejos visuales, poses, luz y narrativa para capturar tu universo.',
    accent: 'Visual',
    path: '/fotografia',
    cta: 'Explorar fotografía',
  },
  {
    name: 'Astrología',
    description: 'Reflexiones simbólicas y herramientas para leer tu energía con sensibilidad.',
    accent: 'Cosmos',
    path: '/astrologia',
    cta: 'Explorar astrología',
  },
  {
    name: 'Vida',
    description: 'Inspiración para vivir con más intención, placer, presencia y dirección.',
    accent: 'Vida',
    path: '/vida',
    cta: 'Explorar vida',
  },
];

export const categoryPages = {
  habitos: {
    title: 'Hábitos',
    eyebrow: 'Rituales y constancia suave',
    subtitle: 'Una biblioteca editorial para crear rutinas bellas, sostenibles y alineadas con tu energía real.',
    intro: 'Aquí vivirán guías de 30 días, prácticas de journaling, rituales de mañana y recursos descargables para volver a ti sin exigencia.',
    comingSoon: ['Guías de hábitos de 30 días', 'Rituales de mañana y noche', 'Plantillas de seguimiento suave'],
  },
  moda: {
    title: 'Moda',
    eyebrow: 'Estilo personal y presencia',
    subtitle: 'Un espacio para vestir con intención, construir una identidad visual y elevar tu armario desde la calma.',
    intro: 'Próximamente reunirá cápsulas de estilo, ideas de combinaciones, recursos de color y notas sobre la ropa como lenguaje personal.',
    comingSoon: ['Armario cápsula femenino', 'Guías de siluetas y texturas', 'Moodboards de estilo editorial'],
  },
  estetica: {
    title: 'Estética',
    eyebrow: 'Belleza consciente',
    subtitle: 'Una colección de gestos pequeños, rituales de cuidado y detalles visuales para elevar lo cotidiano.',
    intro: 'Este espacio se prepara para rutinas de autocuidado, inspiración visual y recursos para construir una estética propia sin exceso.',
    comingSoon: ['Rutinas de autocuidado', 'Rituales de belleza suave', 'Notas de estética personal'],
  },
  fotografia: {
    title: 'Fotografía',
    eyebrow: 'Luz, pose y narrativa visual',
    subtitle: 'Consejos editoriales para crear imágenes con intención, presencia y una atmósfera muy FabuRosa.',
    intro: 'Próximamente habrá guías de luz, poses, composición y storytelling visual para capturar mejor tu universo personal.',
    comingSoon: ['Guía de poses naturales', 'Luz y composición editorial', 'Ideas para sesiones personales'],
  },
  astrologia: {
    title: 'Astrología',
    eyebrow: 'Ciclos, símbolos y energía',
    subtitle: 'Una entrada sensible a tu carta, tus ciclos y las recomendaciones que pueden acompañar tu momento vital.',
    intro: 'Esta página queda preparada para una futura experiencia personalizada. Por ahora puedes ver la estructura visual del formulario y las recomendaciones editoriales.',
    comingSoon: ['Lecturas por energía dominante', 'Rituales según tu luna', 'Recursos conectados con tu carta'],
    recommendations: [
      'Si tu energía pide calma: rituales de tierra, descanso y orden suave.',
      'Si tu energía pide expresión: escritura, fotografía y color como lenguaje.',
      'Si tu energía pide dirección: hábitos simples, foco y una guía de 30 días.',
    ],
  },
  vida: {
    title: 'Vida',
    eyebrow: 'Lifestyle y crecimiento personal',
    subtitle: 'Un archivo vivo para habitar tus días con más intención, belleza y placer cotidiano.',
    intro: 'Aquí crecerán artículos, recursos y notas sobre organización suave, bienestar, decisiones conscientes y crecimiento personal con estética editorial.',
    comingSoon: ['Notas de vida consciente', 'Rituales de organización suave', 'Recursos de crecimiento personal'],
  },
};

export const resources = [
  {
    title: '30 días de hábitos para mujeres',
    description:
      'Una guía en PDF con prácticas simples para volver a ti, cuidar tu energía y crear constancia con suavidad.',
    type: 'PDF descargable',
    cta: 'Ver recurso exclusivo',
    href: '#',
    image: resourceCover,
    meta: 'Más descargado',
    edition: 'Edición ritual',
  },
  {
    title: 'Guía de estilo femenino y moderno',
    description:
      'Ideas para construir un armario con personalidad, elegancia y una narrativa visual propia.',
    type: 'Mini libro digital',
    cta: 'Explorar guía',
    href: '#',
    image: resourceCover,
    meta: 'Nuevo',
    edition: 'Moda consciente',
  },
  {
    title: 'Rituales de luna y energía personal',
    description:
      'Un recurso editorial para conectar con tus ciclos, registrar emociones y crear intención.',
    type: 'Cuaderno digital',
    cta: 'Descargar recurso',
    href: '#',
    image: resourceCover,
    meta: 'Astrología + escritura reflexiva',
    edition: 'Colección lunar',
  },
];

export const journalPosts = [
  {
    category: 'Estilo de vida',
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
    'Recibe notas editoriales, recursos privados, inspiración visual y lanzamientos antes que nadie. Una carta pausada para cuidar tu energía, tu estilo y tu forma de mirar la vida.',
  placeholder: 'tu@correo.com',
  buttonLabel: 'Recibir la carta',
  helper:
    'Sin ruido ni exceso: solo contenido cuidado, lanzamientos y recursos seleccionados para el universo FabuRosa.',
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
  'Carta: conectar el formulario a Mailchimp, ConvertKit, Beehiiv o tu punto de conexión preferido.',
  'Blog / CMS: mover los artículos a un CMS como Sanity, Contentful o Notion API cuando quieras escalar.',
];