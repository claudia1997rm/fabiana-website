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
  eyebrow: 'Astrolog?a, moda y crecimiento personal',
  title: 'Fabiana',
  lead: 'Una revista ?ntima sobre belleza, ritual y magnetismo femenino.',
  subtitle:
    'FabuRose es un universo editorial para descubrir recursos, leer ideas con intenci?n, descargar gu?as cuidadas y recibir cartas ?ntimas para acompa?ar tu estilo, tus ciclos y tu crecimiento personal.',
  primaryCta: { label: 'Descubrir la colecci?n', href: '#recursos' },
  secondaryCta: { label: 'Entrar al universo', href: '#universo' },
  image: editorialImages.heroPrimary,
  imageSecondary: editorialImages.heroSecondary,
  imageFallback: heroVisual,
  issue: 'Edicion 01',
  microNote: 'Empieza por una guia, una lectura o una carta: elige el ritual que mas se parezca a ti.',
  highlights: [
    'Descubre recursos digitales con est?tica de alta gama',
    'Lee notas editoriales sobre rituales, estilo y energ?a',
    'Suscribete para recibir lanzamientos y cartas privadas',
  ],
  journey: ['Descubrir', 'Leer', 'Descargar', 'Suscribirse'],
};

export const statement = {
  quote: '"Vivir en belleza es un acto diario, un estilo que se siente y se respira. El autoconocimiento es la br?jula que lo hace posible."',
  lookbookTitle: 'Un archivo visual para vestir, cuidar y narrar tu energ?a.',
  pillars: [
    { title: 'Moda con intenci?n', description: 'Estilo personal, armario c?psula y presencia visual con identidad.' },
    { title: 'Astrolog?a sensible', description: 'Luna, ciclos y s?mbolos como espejo emocional y creativo.' },
    { title: 'Crecimiento elegante', description: 'H?bitos, escritura reflexiva y rituales dise?ados para sostener tu energ?a.' },
  ],
};

export const editorialGallery = [
  { title: 'Ritual matinal', note: 'Luz suave, piel limpia y una energ?a que empieza lento.', image: editorialImages.galleryOne },
  { title: 'Uniforme personal', note: 'Texturas, silueta y actitud en una misma escena.', image: editorialImages.galleryTwo },
  { title: 'Belleza en detalle', note: 'Objetos, gesto y atmosfera como parte del lenguaje visual.', image: editorialImages.galleryThree },
];

export const about = {
  title: 'Sobre Fabiana',
  body: [
    'Fabiana crea un espacio donde la est?tica no es superficial, sino lenguaje. Comparte herramientas para construir h?bitos suaves, una identidad m?s consciente y una vida que se sienta tan bella por dentro como por fuera.',
    'Su universo mezcla moda, bienestar, fotograf?a, astrolog?a y crecimiento personal con una mirada editorial: cercana, refinada y emocionalmente honesta. Cada recurso est? pensado para acompa?ar procesos reales, no para sumar ruido.',
  ],
  quote: 'La transformaci?n tambi?n puede verse delicada, femenina y absolutamente tuya.',
  image: editorialImages.aboutPrimary,
  imageFallback: aboutPortrait,
  notes: ['Mirada editorial y aspiracional', 'Contenido digital facil de escalar', 'Base visual lista para marca personal de alta gama'],
};

export const categories = [
  { name: 'H?bitos', description: 'Rituales de 30 d?as, organizaci?n suave y h?bitos que sostienen tu energ?a.', accent: 'Ritual', path: '/habitos', cta: 'Explorar h?bitos', image: editorialImages.habits },
  { name: 'Moda', description: 'Estilo personal, c?psulas inteligentes y una est?tica coherente con tu esencia.', accent: 'Estilo', path: '/moda', cta: 'Explorar moda', image: editorialImages.fashion },
  { name: 'Est?tica', description: 'Belleza consciente, autocuidado y peque?os gestos que elevan lo cotidiano.', accent: 'Belleza', path: '/estetica', cta: 'Explorar est?tica', image: editorialImages.beauty },
  { name: 'Fotograf?a', description: 'Consejos visuales, poses, luz y narrativa para capturar tu universo.', accent: 'Visual', path: '/fotografia', cta: 'Explorar fotograf?a', image: editorialImages.photography },
  { name: 'Astrolog?a', description: 'Reflexiones simb?licas y herramientas para leer tu energ?a con sensibilidad.', accent: 'Cosmos', path: '/astrologia', cta: 'Explorar astrolog?a', image: editorialImages.astrology },
  { name: 'Vida', description: 'Inspiraci?n para vivir con m?s intenci?n, placer, presencia y direcci?n.', accent: 'Vida', path: '/vida', cta: 'Explorar vida', image: editorialImages.lifestyle },
];

export const categoryPages = {
  habitos: {
    title: 'H?bitos',
    eyebrow: 'Rituales y constancia suave',
    subtitle: 'Peque?os rituales que transforman tu d?a.',
    introTitle: 'H?bitos: peque?os rituales que transforman tu d?a',
    introParagraphs: [
      'Un habito no es solo repetir algo mecanicamente; es un gesto que despierta tu cuerpo, activa tu energia y armoniza tu mente. Es como encender un pequeno fuego cada manana que te recuerda que estas viva, que tu dia empieza contigo y para ti.',
      'Cuando lo haces con atencion, un habito se convierte en ritual: un momento sagrado donde tu cuerpo responde, tu respiracion se alinea y tu mente se aclara. Saltos, movimientos, jugos y respiraciones: cada gesto tiene su propia melodia y efecto. Algunos habitos aceleran tu corazon, otros te llenan de calma; unos despiertan endorfinas, otros te regalan serotonina. Lo magico es sentirlo en ti.',
      'No todos los habitos seran tuyos. Escuchar tu cuerpo es clave: observa como reacciona, que sensaciones surgen, que emociones despierta. Si algo no resuena, no es tu estilo, y esta perfecto. La belleza esta en probar, sentir y quedarte con lo que realmente te eleva.',
      'Cada habito consciente que incorporas es un pequeno ritual que te recuerda: tu vida, tu energia y tu bienestar merecen ser celebrados, cada dia, a tu manera.',
    ],
    image: editorialImages.habits,
    imageAlt: 'Paisaje luminoso para la secci?n de h?bitos',
    habits: [
      {
        id: 'saltos-al-despertar',
        name: 'Hacer 100 saltos al levantarse',
        duration: '2-4 minutos',
        category: 'Diurnos',
        tags: ['Diurnos', 'Rituales'],
        description:
          'Realiza 100 saltos o saltos de tijera al despertar para activar el cuerpo, mover la circulaci?n y darle a la ma?ana un inicio din?mico, vital y consciente.',
        physicalBenefits: [
          'Mejora la circulaci?n sangu?nea.',
          'Activa el metabolismo desde el inicio del dia.',
          'Fortalece piernas, gluteos y core.',
          'Incrementa la coordinacion y el equilibrio.',
          'Ayuda a quemar calor?as desde la ma?ana.',
        ],
        mentalEmotionalBenefits: [
          'Aumenta la sensaci?n de energ?a y alerta.',
          'Reduce el estres acumulado.',
          'Mejora el ?nimo.',
          'Favorece la claridad mental.',
        ],
        hormones: [
          { name: 'Endorfinas', effect: 'sensaci?n de bienestar.' },
          { name: 'Adrenalina', effect: 'energ?a inmediata.' },
          { name: 'Dopamina', effect: 'motivacion y recompensa.' },
        ],
        sensations: [
          'Aumento de energ?a.',
          'Calor corporal.',
          'Sensacion de activacion.',
          'Vitalidad al comenzar el dia.',
        ],
      },
      {
        id: 'limon-aceite-oliva-12-dias',
        name: 'Cuidado de piel por 12 d?as: zumo de lim?n con aceite de oliva',
        duration: '12 d?as',
        category: 'Diurnos',
        tags: ['Diurnos', 'Rituales'],
        image: editorialImages.habitsSkin,
        imageAlt: 'Ritual de autocuidado para la piel',
        description:
          'Prepara una mezcla de jugo de limon con aceite de oliva y aplicala sobre la piel diariamente durante 12 d?as para acompanar una rutina enfocada en textura, luminosidad y cuidado personal consciente.',
        physicalBenefits: [
          'La vitamina C del lim?n estimula la producci?n de col?geno.',
          'Ayuda a iluminar la piel.',
          'Puede contribuir a reducir manchas visibles.',
          'El aceite de oliva hidrata profundamente.',
          'Aporta antioxidantes y protege la barrera cutanea.',
        ],
        mentalEmotionalBenefits: [
          'Genera sensaci?n de frescura y limpieza.',
          'Funciona como rutina relajante que ayuda a reducir estr?s.',
          'Aumenta la autoestima.',
          'Refuerza la sensaci?n de cuidado personal.',
        ],
        hormones: [
          { name: 'Cortisol', effect: 'puede disminuir al convertirlo en un gesto calmante de autocuidado.' },
          { name: 'Serotonina', effect: 'puede aumentar la sensaci?n de satisfacci?n al cuidar la piel.' },
        ],
        sensations: [
          'Piel m?s suave e iluminada.',
          'Sensacion de frescura.',
          'Rutina calmante.',
          'Energ?a suave al cuidarte.',
        ],
      },
    ],
    comingSoon: ['Gu?as de h?bitos de 30 d?as', 'Rituales de ma?ana y noche', 'Plantillas de seguimiento suave'],
  },
  moda: {
    title: 'Moda',
    eyebrow: 'Estilo personal y presencia',
    subtitle: 'Un espacio para vestir con intenci?n, construir una identidad visual y elevar tu armario desde la calma.',
    intro: 'Pr?ximamente reunir? c?psulas de estilo, ideas de combinaciones, recursos de color y notas sobre la ropa como lenguaje personal.',
    comingSoon: ['Armario c?psula femenino', 'Gu?as de siluetas y texturas', 'Moodboards de estilo editorial'],
  },
  estetica: {
    title: 'Est?tica',
    eyebrow: 'Belleza consciente',
    subtitle: 'Una colecci?n de gestos peque?os, rituales de cuidado y detalles visuales para elevar lo cotidiano.',
    intro: 'Este espacio se prepara para rutinas de autocuidado, inspiraci?n visual y recursos para construir una est?tica propia sin exceso.',
    comingSoon: ['Rutinas de autocuidado', 'Rituales de belleza suave', 'Notas de est?tica personal'],
  },
  fotografia: {
    title: 'Fotograf?a',
    eyebrow: 'Luz, pose y narrativa visual',
    subtitle: 'Una galer?a editorial para im?genes con intenci?n, presencia y una atm?sfera muy FabuRose.',
    intro: 'Aqu? se re?nen fotograf?as subidas por Fabiana: imagen, descripci?n y una lectura visual preparada para crecer como portfolio.',
    comingSoon: ['Gu?a de poses naturales', 'Luz y composici?n editorial', 'Ideas para sesiones personales'],
  },
  astrologia: {
    title: 'Astrolog?a',
    eyebrow: 'Ciclos, s?mbolos y energ?a',
    subtitle: 'Una entrada sensible a tu carta, tus ciclos y las recomendaciones que pueden acompa?ar tu momento vital.',
    intro: 'Esta p?gina queda preparada para una futura experiencia personalizada. Por ahora puedes ver la estructura visual del formulario y las recomendaciones editoriales.',
    comingSoon: ['Lecturas por energ?a dominante', 'Rituales seg?n tu luna', 'Recursos conectados con tu carta'],
    recommendations: [
      'Si tu energ?a pide calma: rituales de tierra, descanso y orden suave.',
      'Si tu energ?a pide expresi?n: escritura, fotograf?a y color como lenguaje.',
      'Si tu energ?a pide direcci?n: h?bitos simples, foco y una gu?a de 30 d?as.',
    ],
  },
  vida: {
    title: 'Vida',
    eyebrow: 'Lifestyle y crecimiento personal',
    subtitle: 'Un archivo vivo para habitar tus d?as con m?s intenci?n, belleza y placer cotidiano.',
    intro: 'Aqu? crecer?n art?culos, recursos y notas sobre organizaci?n suave, bienestar, decisiones conscientes y crecimiento personal con est?tica editorial.',
    comingSoon: ['Notas de vida consciente', 'Rituales de organizacion suave', 'Recursos de crecimiento personal'],
  },
};

export const resources = [
  { title: '30 d?as de h?bitos para mujeres', description: 'Una gu?a en PDF con pr?cticas simples para volver a ti, cuidar tu energ?a y crear constancia con suavidad.', type: 'PDF descargable', cta: 'Ver recurso exclusivo', href: '#', image: editorialImages.resourceHabits, fallbackImage: resourceCover, meta: 'M?s descargado', edition: 'Edici?n ritual' },
  { title: 'Gu?a de estilo femenino y moderno', description: 'Ideas para construir un armario con personalidad, elegancia y una narrativa visual propia.', type: 'Mini libro digital', cta: 'Explorar guia', href: '#', image: editorialImages.resourceFashion, fallbackImage: resourceCover, meta: 'Nuevo', edition: 'Moda consciente' },
  { title: 'Rituales de luna y energ?a personal', description: 'Un recurso editorial para conectar con tus ciclos, registrar emociones y crear intenci?n.', type: 'Cuaderno digital', cta: 'Descargar recurso', href: '#', image: editorialImages.resourceAstro, fallbackImage: resourceCover, meta: 'Astrolog?a + escritura reflexiva', edition: 'Colecci?n lunar' },
];

export const journalPosts = [
  { category: 'Estilo de vida', title: 'C?mo crear ma?anas m?s suaves sin perder enfoque', excerpt: 'Peque?os rituales, luz natural y decisiones m?nimas para empezar el d?a con presencia.', image: editorialImages.journalMorning, fallbackImage: journalImage },
  { category: 'Moda', title: 'Vestirte como la mujer que ya estas construyendo', excerpt: 'La ropa como lenguaje: silueta, textura y repeticion estetica al servicio de tu identidad.', image: editorialImages.journalWardrobe, fallbackImage: journalImage },
  { category: 'Astrolog?a', title: 'La carta natal como espejo creativo y emocional', excerpt: 'Una mirada accesible a la astrolog?a como herramienta de narrativa personal.', image: editorialImages.journalAstro, fallbackImage: journalImage },
];

export const newsletter = {
  title: 'Una carta ?ntima para mujeres que quieren volver a s? mismas',
  description: 'Recibe notas editoriales, recursos privados, inspiraci?n visual y lanzamientos antes que nadie. Una carta pausada para cuidar tu energ?a, tu estilo y tu forma de mirar la vida.',
  placeholder: 'tu@correo.com',
  buttonLabel: 'Recibir la carta',
  helper: 'Sin ruido ni exceso: solo contenido cuidado, lanzamientos y recursos seleccionados para el universo FabuRose.',
};

export const footer = {
  closing: 'Belleza, intenci?n y profundidad para crear una vida con firma propia.',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Pinterest', href: 'https://pinterest.com' },
    { label: 'TikTok', href: 'https://tiktok.com' },
  ],
  contact: 'hola@faburose.com',
};

export const integrationNotes = [
  'Pagos: sustituir los href de resources por enlaces de Gumroad, Stripe Payment Links o Shopify Lite.',
  'Carta: conectar el formulario a Mailchimp, ConvertKit, Beehiiv o tu punto de conexi?n preferido.',
  'Blog / CMS: mover los art?culos a un CMS como Sanity, Contentful o Notion API cuando quieras escalar.',
];
