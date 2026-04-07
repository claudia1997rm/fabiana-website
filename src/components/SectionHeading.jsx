export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
}) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';
  const eyebrowClass = theme === 'dark' ? 'text-lavender' : 'text-plum/75';
  const titleClass = theme === 'dark' ? 'text-cloud' : 'text-ink';
  const descriptionClass = theme === 'dark' ? 'text-cloud/70' : 'text-ink/65';

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? <p className={`editorial-kicker mb-5 ${eyebrowClass}`}>{eyebrow}</p> : null}
      <h2 className={`font-display text-5xl leading-[0.9] tracking-[-0.03em] md:text-6xl ${titleClass}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-6 max-w-2xl text-base leading-8 md:text-lg ${descriptionClass} ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
