export const ZODIAC_SIGNS = [
  { name: 'Aries', start: [3, 21], end: [4, 19], element: 'Fuego', modality: 'Cardinal', energy: 'iniciadora, directa y valiente', mantra: 'Empiezo antes de tenerlo todo perfecto.', recommendations: ['Rituales de foco para empezar proyectos', 'Movimiento, color y decisiones simples', 'Una guia de habitos que sostenga tu impulso'] },
  { name: 'Tauro', start: [4, 20], end: [5, 20], element: 'Tierra', modality: 'Fijo', energy: 'sensual, constante y conectada con el cuerpo', mantra: 'Construyo belleza a mi propio ritmo.', recommendations: ['Rituales de autocuidado sensorial', 'Rutinas lentas y sostenibles', 'Recursos de est?tica y placer cotidiano'] },
  { name: 'Geminis', start: [5, 21], end: [6, 20], element: 'Aire', modality: 'Mutable', energy: 'curiosa, expresiva y mentalmente ?gil', mantra: 'Mi voz tambi?n ordena mi mundo.', recommendations: ['Journaling breve y flexible', 'Notas editoriales para inspirarte', 'Fotografia y storytelling visual'] },
  { name: 'Cancer', start: [6, 21], end: [7, 22], element: 'Agua', modality: 'Cardinal', energy: 'intuitiva, protectora y emocionalmente profunda', mantra: 'Mi sensibilidad es una br?jula.', recommendations: ['Rituales lunares y de hogar', 'Escritura emocional', 'Habitos suaves para sentirte sostenida'] },
  { name: 'Leo', start: [7, 23], end: [8, 22], element: 'Fuego', modality: 'Fijo', energy: 'creativa, luminosa y magn?tica', mantra: 'Me permito ocupar mi propio centro.', recommendations: ['Estilo personal con presencia', 'Fotografia para expresar identidad', 'Rituales de confianza y visibilidad'] },
  { name: 'Virgo', start: [8, 23], end: [9, 22], element: 'Tierra', modality: 'Mutable', energy: 'precisa, cuidadosa y orientada al detalle', mantra: 'Lo simple tambi?n puede ser sagrado.', recommendations: ['Guias de organizacion suave', 'H?bitos de 30 d?as', 'Rutinas de belleza simples y sostenibles'] },
  { name: 'Libra', start: [9, 23], end: [10, 22], element: 'Aire', modality: 'Cardinal', energy: 'armonica, est?tica y vincular', mantra: 'Elijo belleza sin perderme a mi.', recommendations: ['Moda con intenci?n', 'Moodboards de estilo', 'Rituales de equilibrio emocional'] },
  { name: 'Escorpio', start: [10, 23], end: [11, 21], element: 'Agua', modality: 'Fijo', energy: 'intensa, transformadora y profundamente intuitiva', mantra: 'Transformo lo que ya no sostiene mi energ?a.', recommendations: ['Escritura de sombra y claridad', 'Rituales de cierre', 'Recursos de magnetismo personal'] },
  { name: 'Sagitario', start: [11, 22], end: [12, 21], element: 'Fuego', modality: 'Mutable', energy: 'expansiva, honesta y exploradora', mantra: 'Mi vida se abre cuando sigo mi verdad.', recommendations: ['Planes de crecimiento personal', 'Rituales de vision', 'Lecturas para ampliar perspectiva'] },
  { name: 'Capricornio', start: [12, 22], end: [1, 19], element: 'Tierra', modality: 'Cardinal', energy: 'ambiciosa, estructurada y profundamente perseverante', mantra: 'Construyo una vida que se sostiene.', recommendations: ['Habitos de enfoque', 'Rutinas de planificaci?n elegante', 'Recursos para constancia y direcci?n'] },
  { name: 'Acuario', start: [1, 20], end: [2, 18], element: 'Aire', modality: 'Fijo', energy: 'original, visionaria y libre', mantra: 'Mi diferencia tambi?n es mi direcci?n.', recommendations: ['Exploraci?n creativa', 'Fotografia conceptual', 'Notas de identidad y prop?sito'] },
  { name: 'Piscis', start: [2, 19], end: [3, 20], element: 'Agua', modality: 'Mutable', energy: 'sensible, imaginativa y espiritual', mantra: 'Mi intuici?n tambi?n sabe el camino.', recommendations: ['Rituales lunares', 'Escritura intuitiva', 'Recursos de descanso y conexi?n emocional'] },
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

  const context = [birthTime ? `hora ${birthTime}` : null, birthPlace ? `lugar: ${birthPlace}` : null].filter(Boolean).join(' Â· ');

  return {
    sign,
    context,
    title: `Tu signo solar es ${sign.name}`,
    description: `Tu energ?a solar se siente ${sign.energy}. Esta lectura inicial usa tu fecha de nacimiento como punto de partida; m?s adelante puede ampliarse con ascendente, luna y casas astrol?gicas.`,
  };
}