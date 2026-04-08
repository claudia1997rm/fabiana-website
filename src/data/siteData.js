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
  eyebrow: 'Astrologia, moda y crecimiento personal',
  title: 'Fabiana',
  lead: 'Una revista intima sobre belleza, ritual y magnetismo femenino.',
  subtitle:
    'FabuRose es un universo editorial para descubrir recursos, leer ideas con intencion, descargar guias cuidadas y recibir cartas intimas para acompanar tu estilo, tus ciclos y tu crecimiento personal.',
  primaryCta: { label: 'Descubrir la coleccion', href: '#recursos' },
  secondaryCta: { label: 'Entrar al universo', href: '#universo' },
  image: editorialImages.heroPrimary,
  imageSecondary: editorialImages.heroSecondary,
  imageFallback: heroVisual,
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
  quote: '"Vivir en belleza es un acto diario, un estilo que se siente y se respira. El autoconocimiento es la brujula que lo hace posible."',
  lookbookTitle: 'Un archivo visual para vestir, cuidar y narrar tu energia.',
  pillars: [
    { title: 'Moda con intencion', description: 'Estilo personal, armario capsula y presencia visual con identidad.' },
    { title: 'Astrologia sensible', description: 'Luna, ciclos y simbolos como espejo emocional y creativo.' },
    { title: 'Crecimiento elegante', description: 'Habitos, escritura reflexiva y rituales disenados para sostener tu energia.' },
  ],
};

export const editorialGallery = [
  { title: 'Ritual matinal', note: 'Luz suave, piel limpia y una energia que empieza lento.', image: editorialImages.galleryOne },
  { title: 'Uniforme personal', note: 'Texturas, silueta y actitud en una misma escena.', image: editorialImages.galleryTwo },
  { title: 'Belleza en detalle', note: 'Objetos, gesto y atmosfera como parte del lenguaje visual.', image: editorialImages.galleryThree },
];

export const about = {
  title: 'Sobre Fabiana',
  body: [
    'Fabiana crea un espacio donde la estetica no es superficial, sino lenguaje. Comparte herramientas para construir habitos suaves, una identidad mas consciente y una vida que se sienta tan bella por dentro como por fuera.',
    'Su universo mezcla moda, bienestar, fotografia, astrologia y crecimiento personal con una mirada editorial: cercana, refinada y emocionalmente honesta. Cada recurso esta pensado para acompanar procesos reales, no para sumar ruido.',
  ],
  quote: 'La transformacion tambien puede verse delicada, femenina y absolutamente tuya.',
  image: editorialImages.aboutPrimary,
  imageFallback: aboutPortrait,
  notes: ['Mirada editorial y aspiracional', 'Contenido digital facil de escalar', 'Base visual lista para marca personal de alta gama'],
};

export const categories = [
  { name: 'Habitos', description: 'Rituales de 30 dias, organizacion suave y habitos que sostienen tu energia.', accent: 'Ritual', path: '/habitos', cta: 'Explorar habitos', image: editorialImages.habits },
  { name: 'Moda', description: 'Estilo personal, capsulas inteligentes y una estetica coherente con tu esencia.', accent: 'Estilo', path: '/moda', cta: 'Explorar moda', image: editorialImages.fashion },
  { name: 'Estetica', description: 'Belleza consciente, autocuidado y pequenos gestos que elevan lo cotidiano.', accent: 'Belleza', path: '/estetica', cta: 'Explorar estetica', image: editorialImages.beauty },
  { name: 'Fotografia', description: 'Consejos visuales, poses, luz y narrativa para capturar tu universo.', accent: 'Visual', path: '/fotografia', cta: 'Explorar fotografia', image: editorialImages.photography },
  { name: 'Astrologia', description: 'Reflexiones simbolicas y herramientas para leer tu energia con sensibilidad.', accent: 'Cosmos', path: '/astrologia', cta: 'Explorar astrologia', image: editorialImages.astrology },
  { name: 'Vida', description: 'Inspiracion para vivir con mas intencion, placer, presencia y direccion.', accent: 'Vida', path: '/vida', cta: 'Explorar vida', image: editorialImages.lifestyle },
];

export const categoryPages = {
  habitos: {
    title: 'Habitos',
    eyebrow: 'Rituales y constancia suave',
    subtitle: 'Pequenos rituales que transforman tu dia.',
    introTitle: 'Habitos: pequenos rituales que transforman tu dia',
    introParagraphs: [
      'Un habito no es solo repetir algo mecanicamente; es un gesto que despierta tu cuerpo, activa tu energia y armoniza tu mente. Es como encender un pequeno fuego cada manana que te recuerda que estas viva, que tu dia empieza contigo y para ti.',
      'Cuando lo haces con atencion, un habito se convierte en ritual: un momento sagrado donde tu cuerpo responde, tu respiracion se alinea y tu mente se aclara. Saltos, movimientos, jugos y respiraciones: cada gesto tiene su propia melodia y efecto. Algunos habitos aceleran tu corazon, otros te llenan de calma; unos despiertan endorfinas, otros te regalan serotonina. Lo magico es sentirlo en ti.',
      'No todos los habitos seran tuyos. Escuchar tu cuerpo es clave: observa como reacciona, que sensaciones surgen, que emociones despierta. Si algo no resuena, no es tu estilo, y esta perfecto. La belleza esta en probar, sentir y quedarte con lo que realmente te eleva.',
      'Cada habito consciente que incorporas es un pequeno ritual que te recuerda: tu vida, tu energia y tu bienestar merecen ser celebrados, cada dia, a tu manera.',
    ],
    image: editorialImages.habits,
    imageAlt: 'Paisaje luminoso para la seccion de habitos',
    habits: [
      {
        id: 'saltos-al-despertar',
        name: 'Hacer 100 saltos al levantarse',
        duration: '2-4 minutos',
        category: 'Diurnos',
        tags: ['Diurnos', 'Rituales'],
        description:
          'Realiza 100 saltos o saltos de tijera al despertar para activar el cuerpo, mover la circulacion y darle a la manana un inicio dinamico, vital y consciente.',
        physicalBenefits: [
          'Mejora la circulacion sanguinea.',
          'Activa el metabolismo desde el inicio del dia.',
          'Fortalece piernas, gluteos y core.',
          'Incrementa la coordinacion y el equilibrio.',
          'Ayuda a quemar calorias desde la manana.',
        ],
        mentalEmotionalBenefits: [
          'Aumenta la sensacion de energia y alerta.',
          'Reduce el estres acumulado.',
          'Mejora el animo.',
          'Favorece la claridad mental.',
        ],
        hormones: [
          { name: 'Endorfinas', effect: 'sensacion de bienestar.' },
          { name: 'Adrenalina', effect: 'energia inmediata.' },
          { name: 'Dopamina', effect: 'motivacion y recompensa.' },
        ],
        sensations: [
          'Aumento de energia.',
          'Calor corporal.',
          'Sensacion de activacion.',
          'Vitalidad al comenzar el dia.',
        ],
      },
      {
        id: 'limon-aceite-oliva-12-dias',
        name: 'Cuidado de piel por 12 dias: zumo de limon con aceite de oliva',
        duration: '12 dias',
        category: 'Diurnos',
        tags: ['Diurnos', 'Rituales'],
        image: editorialImages.habitsSkin,
        imageAlt: 'Ritual de autocuidado para la piel',
        description:
          'Prepara una mezcla de jugo de limon con aceite de oliva y aplicala sobre la piel diariamente durante 12 dias para acompanar una rutina enfocada en textura, luminosidad y cuidado personal consciente.',
        physicalBenefits: [
          'La vitamina C del limon estimula la produccion de colageno.',
          'Ayuda a iluminar la piel.',
          'Puede contribuir a reducir manchas visibles.',
          'El aceite de oliva hidrata profundamente.',
          'Aporta antioxidantes y protege la barrera cutanea.',
        ],
        mentalEmotionalBenefits: [
          'Genera sensacion de frescura y limpieza.',
          'Funciona como rutina relajante que ayuda a reducir estres.',
          'Aumenta la autoestima.',
          'Refuerza la sensacion de cuidado personal.',
        ],
        hormones: [
          { name: 'Cortisol', effect: 'puede disminuir al convertirlo en un gesto calmante de autocuidado.' },
          { name: 'Serotonina', effect: 'puede aumentar la sensacion de satisfaccion al cuidar la piel.' },
        ],
        sensations: [
          'Piel mas suave e iluminada.',
          'Sensacion de frescura.',
          'Rutina calmante.',
          'Energia suave al cuidarte.',
        ],
      },
    ],
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
  { title: '30 dias de habitos para mujeres', description: 'Una guia en PDF con practicas simples para volver a ti, cuidar tu energia y crear constancia con suavidad.', type: 'PDF descargable', cta: 'Ver recurso exclusivo', href: '#', image: editorialImages.resourceHabits, fallbackImage: resourceCover, meta: 'Mas descargado', edition: 'Edicion ritual' },
  { title: 'Guia de estilo femenino y moderno', description: 'Ideas para construir un armario con personalidad, elegancia y una narrativa visual propia.', type: 'Mini libro digital', cta: 'Explorar guia', href: '#', image: editorialImages.resourceFashion, fallbackImage: resourceCover, meta: 'Nuevo', edition: 'Moda consciente' },
  { title: 'Rituales de luna y energia personal', description: 'Un recurso editorial para conectar con tus ciclos, registrar emociones y crear intencion.', type: 'Cuaderno digital', cta: 'Descargar recurso', href: '#', image: editorialImages.resourceAstro, fallbackImage: resourceCover, meta: 'Astrologia + escritura reflexiva', edition: 'Coleccion lunar' },
];

export const journalPosts = [
  { category: 'Estilo de vida', title: 'Como crear mananas mas suaves sin perder enfoque', excerpt: 'Pequenos rituales, luz natural y decisiones minimas para empezar el dia con presencia.', image: editorialImages.journalMorning, fallbackImage: journalImage },
  { category: 'Moda', title: 'Vestirte como la mujer que ya estas construyendo', excerpt: 'La ropa como lenguaje: silueta, textura y repeticion estetica al servicio de tu identidad.', image: editorialImages.journalWardrobe, fallbackImage: journalImage },
  { category: 'Astrologia', title: 'La carta natal como espejo creativo y emocional', excerpt: 'Una mirada accesible a la astrologia como herramienta de narrativa personal.', image: editorialImages.journalAstro, fallbackImage: journalImage },
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
