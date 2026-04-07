export const ZODIAC_SIGNS = [
  {
    name: 'Aries',
    start: [3, 21],
    end: [4, 19],
    element: 'Fuego',
    modality: 'Cardinal',
    energy: 'iniciadora, directa y valiente',
    mantra: 'Empiezo antes de tenerlo todo perfecto.',
    recommendations: ['Rituales de foco para empezar proyectos', 'Movimiento, color y decisiones simples', 'Una guía de hábitos que sostenga tu impulso'],
  },
  {
    name: 'Tauro',
    start: [4, 20],
    end: [5, 20],
    element: 'Tierra',
    modality: 'Fijo',
    energy: 'sensual, constante y conectada con el cuerpo',
    mantra: 'Construyo belleza a mi propio ritmo.',
    recommendations: ['Rituales de autocuidado sensorial', 'Rutinas lentas y sostenibles', 'Recursos de estética y placer cotidiano'],
  },
  {
    name: 'Géminis',
    start: [5, 21],
    end: [6, 20],
    element: 'Aire',
    modality: 'Mutable',
    energy: 'curiosa, expresiva y mentalmente ágil',
    mantra: 'Mi voz también ordena mi mundo.',
    recommendations: ['Journaling breve y flexible', 'Notas editoriales para inspirarte', 'Fotografía y storytelling visual'],
  },
  {
    name: 'Cáncer',
    start: [6, 21],
    end: [7, 22],
    element: 'Agua',
    modality: 'Cardinal',
    energy: 'intuitiva, protectora y emocionalmente profunda',
    mantra: 'Mi sensibilidad es una brújula.',
    recommendations: ['Rituales lunares y de hogar', 'Escritura emocional', 'Hábitos suaves para sentirte sostenida'],
  },
  {
    name: 'Leo',
    start: [7, 23],
    end: [8, 22],
    element: 'Fuego',
    modality: 'Fijo',
    energy: 'creativa, luminosa y magnética',
    mantra: 'Me permito ocupar mi propio centro.',
    recommendations: ['Estilo personal con presencia', 'Fotografía para expresar identidad', 'Rituales de confianza y visibilidad'],
  },
  {
    name: 'Virgo',
    start: [8, 23],
    end: [9, 22],
    element: 'Tierra',
    modality: 'Mutable',
    energy: 'precisa, cuidadosa y orientada al detalle',
    mantra: 'Lo simple también puede ser sagrado.',
    recommendations: ['Guías de organización suave', 'Hábitos de 30 días', 'Rutinas de belleza simples y sostenibles'],
  },
  {
    name: 'Libra',
    start: [9, 23],
    end: [10, 22],
    element: 'Aire',
    modality: 'Cardinal',
    energy: 'armónica, estética y vincular',
    mantra: 'Elijo belleza sin perderme a mí.',
    recommendations: ['Moda con intención', 'Moodboards de estilo', 'Rituales de equilibrio emocional'],
  },
  {
    name: 'Escorpio',
    start: [10, 23],
    end: [11, 21],
    element: 'Agua',
    modality: 'Fijo',
    energy: 'intensa, transformadora y profundamente intuitiva',
    mantra: 'Transformo lo que ya no sostiene mi energía.',
    recommendations: ['Escritura de sombra y claridad', 'Rituales de cierre', 'Recursos de magnetismo personal'],
  },
  {
    name: 'Sagitario',
    start: [11, 22],
    end: [12, 21],
    element: 'Fuego',
    modality: 'Mutable',
    energy: 'expansiva, honesta y exploradora',
    mantra: 'Mi vida se abre cuando sigo mi verdad.',
    recommendations: ['Planes de crecimiento personal', 'Rituales de visión', 'Lecturas para ampliar perspectiva'],
  },
  {
    name: 'Capricornio',
    start: [12, 22],
    end: [1, 19],
    element: 'Tierra',
    modality: 'Cardinal',
    energy: 'ambiciosa, estructurada y profundamente perseverante',
    mantra: 'Construyo una vida que se sostiene.',
    recommendations: ['Hábitos de enfoque', 'Rutinas de planificación elegante', 'Recursos para constancia y dirección'],
  },
  {
    name: 'Acuario',
    start: [1, 20],
    end: [2, 18],
    element: 'Aire',
    modality: 'Fijo',
    energy: 'original, visionaria y libre',
    mantra: 'Mi diferencia también es mi dirección.',
    recommendations: ['Exploración creativa', 'Fotografía conceptual', 'Notas de identidad y propósito'],
  },
  {
    name: 'Piscis',
    start: [2, 19],
    end: [3, 20],
    element: 'Agua',
    modality: 'Mutable',
    energy: 'sensible, imaginativa y espiritual',
    mantra: 'Mi intuición también sabe el camino.',
    recommendations: ['Rituales lunares', 'Escritura intuitiva', 'Recursos de descanso y conexión emocional'],
  },
];

function isDateInRange(month, day, sign) {
  const [startMonth, startDay] = sign.start;
  const [endMonth, endDay] = sign.end;
  const current = month * 100 + day;
  const start = startMonth * 100 + startDay;
  const end = endMonth * 100 + endDay;

  if (start <= end) return current >= start && current <= end;
  return current >= start || current <= end;
}

export function getZodiacSignFromDate(dateValue) {
  if (!dateValue) return null;

  const [, monthText, dayText] = dateValue.split('-');
  const month = Number(monthText);
  const day = Number(dayText);

  if (!month || !day) return null;
  return ZODIAC_SIGNS.find((sign) => isDateInRange(month, day, sign)) || null;
}

export function buildAstrologySummary({ birthDate, birthTime, birthPlace }) {
  const sign = getZodiacSignFromDate(birthDate);
  if (!sign) return null;

  const context = [birthTime ? `hora ${birthTime}` : null, birthPlace ? `lugar: ${birthPlace}` : null]
    .filter(Boolean)
    .join(' · ');

  return {
    sign,
    context,
    title: `Tu signo solar es ${sign.name}`,
    description: `Tu energía solar se siente ${sign.energy}. Esta lectura inicial usa tu fecha de nacimiento como punto de partida; más adelante puede ampliarse con ascendente, luna y casas astrológicas.`,
  };
}
