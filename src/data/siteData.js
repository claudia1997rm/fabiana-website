import aboutPortrait from '../assets/placeholders/about-portrait.svg';
import heroVisual from '../assets/placeholders/hero-visual.svg';
import journalImage from '../assets/placeholders/journal-cover.svg';
import resourceCover from '../assets/placeholders/resource-cover.svg';

const editorialImages = {
  heroPrimary: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
  heroSecondary: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
  aboutPrimary: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
  habits: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1200&q=80',
  habitsSkin: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
  fashion: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
  beauty: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
  photography: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
  astrology: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  lifestyle: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80',
  galleryOne: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=80',
  galleryTwo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80',
  galleryThree: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&q=80',
  resourceHabits: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1000&q=80',
  resourceFashion: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=80',
  resourceAstro: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1000&q=80',
  journalMorning: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80',
  journalWardrobe: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=80',
  journalAstro: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80',
};

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
    'FabuRose es un universo editorial para descubrir recursos, leer ideas con intención, descargar guías cuidadas y recibir cartas íntimas para acompañar tu estilo, tus ciclos y tu crecimiento personal.',
  primaryCta: { label: 'Descubrir la colección', href: '#recursos' },
  secondaryCta: { label: 'Entrar al universo', href: '#universo' },
  image: editorialImages.heroPrimary,
  imageSecondary: editorialImages.heroSecondary,
  imageFallback: heroVisual,
  issue: 'Edicion 01',
  microNote: 'Empieza por una guia, una lectura o una carta: elige el ritual que mas se parezca a ti.',
  highlights: [
    'Descubre recursos digitales con estética de alta gama',
    'Lee notas editoriales sobre rituales, estilo y energía',
    'Suscribete para recibir lanzamientos y cartas privadas',
  ],
  journey: ['Descubrir', 'Leer', 'Descargar', 'Suscribirse'],
};

export const statement = {
  quote: '"Vivir en belleza es un acto diario, un estilo que se siente y se respira. El autoconocimiento es la brújula que lo hace posible."',
  lookbookTitle: 'Un archivo visual para vestir, cuidar y narrar tu energía.',
  pillars: [
    { title: 'Moda con intención', description: 'Estilo personal, armario cápsula y presencia visual con identidad.' },
    { title: 'Astrología sensible', description: 'Luna, ciclos y símbolos como espejo emocional y creativo.' },
    { title: 'Crecimiento elegante', description: 'Hábitos, escritura reflexiva y rituales diseñados para sostener tu energía.' },
  ],
};

export const editorialGallery = [
  { title: 'Ritual matinal', note: 'Luz suave, piel limpia y una energía que empieza lento.', image: editorialImages.galleryOne },
  { title: 'Uniforme personal', note: 'Texturas, silueta y actitud en una misma escena.', image: editorialImages.galleryTwo },
  { title: 'Belleza en detalle', note: 'Objetos, gesto y atmosfera como parte del lenguaje visual.', image: editorialImages.galleryThree },
];

export const about = {
  title: 'Sobre Fabiana',
  body: [
    'Fabiana crea un espacio donde la estética no es superficial, sino lenguaje. Comparte herramientas para construir hábitos suaves, una identidad más consciente y una vida que se sienta tan bella por dentro como por fuera.',
    'Su universo mezcla moda, bienestar, fotografía, astrología y crecimiento personal con una mirada editorial: cercana, refinada y emocionalmente honesta. Cada recurso está pensado para acompañar procesos reales, no para sumar ruido.',
  ],
  quote: 'La transformación también puede verse delicada, femenina y absolutamente tuya.',
  image: editorialImages.aboutPrimary,
  imageFallback: aboutPortrait,
  notes: ['Mirada editorial y aspiracional', 'Contenido digital facil de escalar', 'Base visual lista para marca personal de alta gama'],
};

export const categories = [
  { name: 'Hábitos', description: 'Rituales de 30 días, organización suave y hábitos que sostienen tu energía.', accent: 'Ritual', path: '/habitos', cta: 'Explorar hábitos', image: editorialImages.habits },
  { name: 'Moda', description: 'Estilo personal, cápsulas inteligentes y una estética coherente con tu esencia.', accent: 'Estilo', path: '/moda', cta: 'Explorar moda', image: editorialImages.fashion },
  { name: 'Estética', description: 'Belleza consciente, autocuidado y pequeños gestos que elevan lo cotidiano.', accent: 'Belleza', path: '/estetica', cta: 'Explorar estética', image: editorialImages.beauty },
  { name: 'Fotografía', description: 'Consejos visuales, poses, luz y narrativa para capturar tu universo.', accent: 'Visual', path: '/fotografia', cta: 'Explorar fotografía', image: editorialImages.photography },
  { name: 'Astrología', description: 'Reflexiones simbólicas y herramientas para leer tu energía con sensibilidad.', accent: 'Cosmos', path: '/astrologia', cta: 'Explorar astrología', image: editorialImages.astrology },
  { name: 'Vida', description: 'Inspiración para vivir con más intención, placer, presencia y dirección.', accent: 'Vida', path: '/vida', cta: 'Explorar vida', image: editorialImages.lifestyle },
];

export const categoryPages = {
  habitos: {
    title: 'Hábitos',
    eyebrow: 'Rituales y constancia suave',
    subtitle: 'Pequeños rituales que transforman tu día.',
    introTitle: 'Hábitos: pequeños rituales que transforman tu día',
    introParagraphs: [
      'Un habito no es solo repetir algo mecanicamente; es un gesto que despierta tu cuerpo, activa tu energia y armoniza tu mente. Es como encender un pequeno fuego cada manana que te recuerda que estas viva, que tu dia empieza contigo y para ti.',
      'Cuando lo haces con atencion, un habito se convierte en ritual: un momento sagrado donde tu cuerpo responde, tu respiracion se alinea y tu mente se aclara. Saltos, movimientos, jugos y respiraciones: cada gesto tiene su propia melodia y efecto. Algunos habitos aceleran tu corazon, otros te llenan de calma; unos despiertan endorfinas, otros te regalan serotonina. Lo magico es sentirlo en ti.',
      'No todos los habitos seran tuyos. Escuchar tu cuerpo es clave: observa como reacciona, que sensaciones surgen, que emociones despierta. Si algo no resuena, no es tu estilo, y esta perfecto. La belleza esta en probar, sentir y quedarte con lo que realmente te eleva.',
      'Cada habito consciente que incorporas es un pequeno ritual que te recuerda: tu vida, tu energia y tu bienestar merecen ser celebrados, cada dia, a tu manera.',
    ],
    image: editorialImages.habits,
    imageAlt: 'Paisaje luminoso para la sección de hábitos',
    habits: [
      {
        id: 'saltos-al-despertar',
        name: 'Hacer 100 saltos al levantarse',
        duration: '2-4 minutos',
        category: 'Diurnos',
        tags: ['Diurnos', 'Rituales'],
        description:
          'Realiza 100 saltos o saltos de tijera al despertar para activar el cuerpo, mover la circulación y darle a la mañana un inicio dinámico, vital y consciente.',
        physicalBenefits: [
          'Mejora la circulación sanguínea.',
          'Activa el metabolismo desde el inicio del dia.',
          'Fortalece piernas, gluteos y core.',
          'Incrementa la coordinacion y el equilibrio.',
          'Ayuda a quemar calorías desde la mañana.',
        ],
        mentalEmotionalBenefits: [
          'Aumenta la sensación de energía y alerta.',
          'Reduce el estres acumulado.',
          'Mejora el ánimo.',
          'Favorece la claridad mental.',
        ],
        hormones: [
          { name: 'Endorfinas', effect: 'sensación de bienestar.' },
          { name: 'Adrenalina', effect: 'energía inmediata.' },
          { name: 'Dopamina', effect: 'motivacion y recompensa.' },
        ],
        sensations: [
          'Aumento de energía.',
          'Calor corporal.',
          'Sensacion de activacion.',
          'Vitalidad al comenzar el dia.',
        ],
      },
      {
        id: 'limon-aceite-oliva-12-dias',
        name: 'Cuidado de piel por 12 días: zumo de limón con aceite de oliva',
        duration: '12 días',
        category: 'Diurnos',
        tags: ['Diurnos', 'Rituales'],
        image: editorialImages.habitsSkin,
        imageAlt: 'Ritual de autocuidado para la piel',
        description:
          'Prepara una mezcla de jugo de limon con aceite de oliva y aplicala sobre la piel diariamente durante 12 días para acompañar una rutina enfocada en textura, luminosidad y cuidado personal consciente.',
        physicalBenefits: [
          'La vitamina C del limón estimula la producción de colágeno.',
          'Ayuda a iluminar la piel.',
          'Puede contribuir a reducir manchas visibles.',
          'El aceite de oliva hidrata profundamente.',
          'Aporta antioxidantes y protege la barrera cutanea.',
        ],
        mentalEmotionalBenefits: [
          'Genera sensación de frescura y limpieza.',
          'Funciona como rutina relajante que ayuda a reducir estrés.',
          'Aumenta la autoestima.',
          'Refuerza la sensación de cuidado personal.',
        ],
        hormones: [
          { name: 'Cortisol', effect: 'puede disminuir al convertirlo en un gesto calmante de autocuidado.' },
          { name: 'Serotonina', effect: 'puede aumentar la sensación de satisfacción al cuidar la piel.' },
        ],
        sensations: [
          'Piel más suave e iluminada.',
          'Sensacion de frescura.',
          'Rutina calmante.',
          'Energía suave al cuidarte.',
        ],
      },
    ],
    comingSoon: ['Guías de hábitos de 30 días', 'Rituales de mañana y noche', 'Plantillas de seguimiento suave'],
  },
  moda: {
    title: 'Moda',
    eyebrow: 'Estilo personal y presencia',
    subtitle: 'Un espacio para vestir con intención, construir una identidad visual y elevar tu armario desde la calma.',
    intro: 'Próximamente reuniré cápsulas de estilo, ideas de combinaciones, recursos de color y notas sobre la ropa como lenguaje personal.',
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
    subtitle: 'Una galería editorial para imágenes con intención, presencia y una atmósfera muy FabuRose.',
    intro: 'Aquí se reúnen fotografías subidas por Fabiana: imagen, descripción y una lectura visual preparada para crecer como portfolio.',
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
    comingSoon: ['Notas de vida consciente', 'Rituales de organizacion suave', 'Recursos de crecimiento personal'],
  },
};

export const resources = [
  { title: '30 días de hábitos para mujeres', description: 'Una guía en PDF con prácticas simples para volver a ti, cuidar tu energía y crear constancia con suavidad.', type: 'PDF descargable', cta: 'Ver recurso exclusivo', href: '#', image: editorialImages.resourceHabits, fallbackImage: resourceCover, meta: 'Más descargado', edition: 'Edición ritual' },
  { title: 'Guía de estilo femenino y moderno', description: 'Ideas para construir un armario con personalidad, elegancia y una narrativa visual propia.', type: 'Mini libro digital', cta: 'Explorar guía', href: '#', image: editorialImages.resourceFashion, fallbackImage: resourceCover, meta: 'Nuevo', edition: 'Moda consciente' },
  { title: 'Rituales de luna y energía personal', description: 'Un recurso editorial para conectar con tus ciclos, registrar emociones y crear intención.', type: 'Cuaderno digital', cta: 'Descargar recurso', href: '#', image: editorialImages.resourceAstro, fallbackImage: resourceCover, meta: 'Astrología + escritura reflexiva', edition: 'Colección lunar' },
];

export const journalPosts = [
  { category: 'Estilo de vida', title: 'Cómo crear mañanas más suaves sin perder enfoque', excerpt: 'Pequeños rituales, luz natural y decisiones mínimas para empezar el día con presencia.', image: editorialImages.journalMorning, fallbackImage: journalImage },
  { category: 'Moda', title: 'Vestirte como la mujer que ya estas construyendo', excerpt: 'La ropa como lenguaje: silueta, textura y repeticion estetica al servicio de tu identidad.', image: editorialImages.journalWardrobe, fallbackImage: journalImage },
  { category: 'Astrología', title: 'La carta natal como espejo creativo y emocional', excerpt: 'Una mirada accesible a la astrología como herramienta de narrativa personal.', image: editorialImages.journalAstro, fallbackImage: journalImage },
];

export const newsletter = {
  title: 'Una carta íntima para mujeres que quieren volver a sí mismas',
  description: 'Recibe notas editoriales, recursos privados, inspiración visual y lanzamientos antes que nadie. Una carta pausada para cuidar tu energía, tu estilo y tu forma de mirar la vida.',
  placeholder: 'tu@correo.com',
  buttonLabel: 'Recibir la carta',
  helper: 'Sin ruido ni exceso: solo contenido cuidado, lanzamientos y recursos seleccionados para el universo FabuRose.',
};

export const footer = {
  closing: 'Belleza, intención y profundidad para crear una vida con firma propia.',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Pinterest', href: 'https://pinterest.com' },
    { label: 'TikTok', href: 'https://tiktok.com' },
  ],
  contact: 'hola@faburose.com',
};

export const integrationNotes = [
  'Pagos: sustituir los href de resources por enlaces de Gumroad, Stripe Payment Links o Shopify Lite.',
  'Carta: conectar el formulario a Mailchimp, ConvertKit, Beehiiv o tu punto de conexión preferido.',
  'Blog / CMS: mover los artículos a un CMS como Sanity, Contentful o Notion API cuando quieras escalar.',
];
