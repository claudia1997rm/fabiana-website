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
  eyebrow: 'Astrologia, moda y crecimiento personal',
  title: 'Fabiana',
  lead: 'Una revista intima sobre belleza, ritual y magnetismo femenino.',
  subtitle:
    'FabuRose es un universo editorial para descubrir recursos, leer ideas con intencion, descargar guias cuidadas y recibir cartas intimas para acompanar tu estilo, tus ciclos y tu crecimiento personal.',
  primaryCta: { label: 'Descubrir la coleccion', href: '#recursos' },
  secondaryCta: { label: 'Entrar al universo', href: '#universo' },
  image: heroVisual,
  issue: 'Edicion 01',
  microNote: 'Empieza por una guia, una lectura o una carta: elige el ritual que mas se parezca a ti.',
  highlights: [
    'Descubre recursos digitales con estetica de alta gama',
    'Lee notas editoriales sobre rituales, estilo y energia',
    'Suscribete para recibir lanzamientos y cartas privadas',
  ],
  journey: ['Descubrir', 'Leer', 'Descargar', 'Suscribirse'],
};

export const statement = {
  quote: 'Una estetica suave. Una mente clara. Un universo donde la belleza tambien guia.',
  pillars: [
    { title: 'Moda con intencion', description: 'Estilo personal, armario capsula y presencia visual con identidad.' },
    { title: 'Astrologia sensible', description: 'Luna, ciclos y simbolos como espejo emocional y creativo.' },
    { title: 'Crecimiento elegante', description: 'Habitos, escritura reflexiva y rituales disenados para sostener tu energia.' },
  ],
};

export const about = {
  title: 'Sobre Fabiana',
  body: [
    'Fabiana crea un espacio donde la estetica no es superficial, sino lenguaje. Comparte herramientas para construir habitos suaves, una identidad mas consciente y una vida que se sienta tan bella por dentro como por fuera.',
    'Su universo mezcla moda, bienestar, fotografia, astrologia y crecimiento personal con una mirada editorial: cercana, refinada y emocionalmente honesta. Cada recurso esta pensado para acompanar procesos reales, no para sumar ruido.',
  ],
  quote: 'La transformacion tambien puede verse delicada, femenina y absolutamente tuya.',
  image: aboutPortrait,
  notes: ['Mirada editorial y aspiracional', 'Contenido digital facil de escalar', 'Base visual lista para marca personal de alta gama'],
};

export const categories = [
  { name: 'Habitos', description: 'Rituales de 30 dias, organizacion suave y habitos que sostienen tu energia.', accent: 'Ritual', path: '/habitos', cta: 'Explorar habitos' },
  { name: 'Moda', description: 'Estilo personal, capsulas inteligentes y una estetica coherente con tu esencia.', accent: 'Estilo', path: '/moda', cta: 'Explorar moda' },
  { name: 'Estetica', description: 'Belleza consciente, autocuidado y pequenos gestos que elevan lo cotidiano.', accent: 'Belleza', path: '/estetica', cta: 'Explorar estetica' },
  { name: 'Fotografia', description: 'Consejos visuales, poses, luz y narrativa para capturar tu universo.', accent: 'Visual', path: '/fotografia', cta: 'Explorar fotografia' },
  { name: 'Astrologia', description: 'Reflexiones simbolicas y herramientas para leer tu energia con sensibilidad.', accent: 'Cosmos', path: '/astrologia', cta: 'Explorar astrologia' },
  { name: 'Vida', description: 'Inspiracion para vivir con mas intencion, placer, presencia y direccion.', accent: 'Vida', path: '/vida', cta: 'Explorar vida' },
];

export const categoryPages = {
  habitos: {
    title: 'Habitos',
    eyebrow: 'Rituales y constancia suave',
    subtitle: 'Una biblioteca editorial para crear rutinas bellas, sostenibles y alineadas con tu energia real.',
    intro: 'Aqui viviran guias de 30 dias, practicas de journaling, rituales de manana y recursos descargables para volver a ti sin exigencia.',
    comingSoon: ['Guias de habitos de 30 dias', 'Rituales de manana y noche', 'Plantillas de seguimiento suave'],
  },
  moda: {
    title: 'Moda',
    eyebrow: 'Estilo personal y presencia',
    subtitle: 'Un espacio para vestir con intencion, construir una identidad visual y elevar tu armario desde la calma.',
    intro: 'Proximamente reunira capsulas de estilo, ideas de combinaciones, recursos de color y notas sobre la ropa como lenguaje personal.',
    comingSoon: ['Armario capsula femenino', 'Guias de siluetas y texturas', 'Moodboards de estilo editorial'],
  },
  estetica: {
    title: 'Estetica',
    eyebrow: 'Belleza consciente',
    subtitle: 'Una coleccion de gestos pequenos, rituales de cuidado y detalles visuales para elevar lo cotidiano.',
    intro: 'Este espacio se prepara para rutinas de autocuidado, inspiracion visual y recursos para construir una estetica propia sin exceso.',
    comingSoon: ['Rutinas de autocuidado', 'Rituales de belleza suave', 'Notas de estetica personal'],
  },
  fotografia: {
    title: 'Fotografia',
    eyebrow: 'Luz, pose y narrativa visual',
    subtitle: 'Una galeria editorial para imagenes con intencion, presencia y una atmosfera muy FabuRose.',
    intro: 'Aqui se reunen fotografias subidas por Fabiana: imagen, descripcion y una lectura visual preparada para crecer como portfolio.',
    comingSoon: ['Guia de poses naturales', 'Luz y composicion editorial', 'Ideas para sesiones personales'],
  },
  astrologia: {
    title: 'Astrologia',
    eyebrow: 'Ciclos, simbolos y energia',
    subtitle: 'Una entrada sensible a tu carta, tus ciclos y las recomendaciones que pueden acompanar tu momento vital.',
    intro: 'Esta pagina queda preparada para una futura experiencia personalizada. Por ahora puedes ver la estructura visual del formulario y las recomendaciones editoriales.',
    comingSoon: ['Lecturas por energia dominante', 'Rituales segun tu luna', 'Recursos conectados con tu carta'],
    recommendations: [
      'Si tu energia pide calma: rituales de tierra, descanso y orden suave.',
      'Si tu energia pide expresion: escritura, fotografia y color como lenguaje.',
      'Si tu energia pide direccion: habitos simples, foco y una guia de 30 dias.',
    ],
  },
  vida: {
    title: 'Vida',
    eyebrow: 'Lifestyle y crecimiento personal',
    subtitle: 'Un archivo vivo para habitar tus dias con mas intencion, belleza y placer cotidiano.',
    intro: 'Aqui creceran articulos, recursos y notas sobre organizacion suave, bienestar, decisiones conscientes y crecimiento personal con estetica editorial.',
    comingSoon: ['Notas de vida consciente', 'Rituales de organizacion suave', 'Recursos de crecimiento personal'],
  },
};

export const resources = [
  { title: '30 dias de habitos para mujeres', description: 'Una guia en PDF con practicas simples para volver a ti, cuidar tu energia y crear constancia con suavidad.', type: 'PDF descargable', cta: 'Ver recurso exclusivo', href: '#', image: resourceCover, meta: 'Mas descargado', edition: 'Edicion ritual' },
  { title: 'Guia de estilo femenino y moderno', description: 'Ideas para construir un armario con personalidad, elegancia y una narrativa visual propia.', type: 'Mini libro digital', cta: 'Explorar guia', href: '#', image: resourceCover, meta: 'Nuevo', edition: 'Moda consciente' },
  { title: 'Rituales de luna y energia personal', description: 'Un recurso editorial para conectar con tus ciclos, registrar emociones y crear intencion.', type: 'Cuaderno digital', cta: 'Descargar recurso', href: '#', image: resourceCover, meta: 'Astrologia + escritura reflexiva', edition: 'Coleccion lunar' },
];

export const journalPosts = [
  { category: 'Estilo de vida', title: 'Como crear mananas mas suaves sin perder enfoque', excerpt: 'Pequenos rituales, luz natural y decisiones minimas para empezar el dia con presencia.', image: journalImage },
  { category: 'Moda', title: 'Vestirte como la mujer que ya estas construyendo', excerpt: 'La ropa como lenguaje: silueta, textura y repeticion estetica al servicio de tu identidad.', image: journalImage },
  { category: 'Astrologia', title: 'La carta natal como espejo creativo y emocional', excerpt: 'Una mirada accesible a la astrologia como herramienta de narrativa personal.', image: journalImage },
];

export const newsletter = {
  title: 'Una carta intima para mujeres que quieren volver a si mismas',
  description: 'Recibe notas editoriales, recursos privados, inspiracion visual y lanzamientos antes que nadie. Una carta pausada para cuidar tu energia, tu estilo y tu forma de mirar la vida.',
  placeholder: 'tu@correo.com',
  buttonLabel: 'Recibir la carta',
  helper: 'Sin ruido ni exceso: solo contenido cuidado, lanzamientos y recursos seleccionados para el universo FabuRose.',
};

export const footer = {
  closing: 'Belleza, intencion y profundidad para crear una vida con firma propia.',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Pinterest', href: 'https://pinterest.com' },
    { label: 'TikTok', href: 'https://tiktok.com' },
  ],
  contact: 'hola@faburose.com',
};

export const integrationNotes = [
  'Pagos: sustituir los href de resources por enlaces de Gumroad, Stripe Payment Links o Shopify Lite.',
  'Carta: conectar el formulario a Mailchimp, ConvertKit, Beehiiv o tu punto de conexion preferido.',
  'Blog / CMS: mover los articulos a un CMS como Sanity, Contentful o Notion API cuando quieras escalar.',
];