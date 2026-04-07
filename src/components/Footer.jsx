import { footer, integrationNotes } from '../data/siteData';

export function Footer() {
  return (
    <footer className="border-t border-plum/25 bg-[linear-gradient(180deg,#F6F4FB,#ebe5f6)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:px-10 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:py-16">
        <div>
          <p className="font-display text-5xl leading-none tracking-[0.04em] text-ink">FabuRose</p>
          <p className="mt-5 max-w-md leading-7 text-ink/66">{footer.closing}</p>
        </div>
        <div>
          <p className="editorial-kicker">Redes</p>
          <div className="mt-4 flex flex-col gap-3">
            {footer.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-fit text-sm text-ink/72 transition duration-300 hover:translate-x-1 hover:text-plum"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="editorial-kicker">Preparado para crecer</p>
          <div className="mt-4 space-y-3 text-sm leading-6 text-ink/66">
            {integrationNotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
          <a href={`mailto:${footer.contact}`} className="mt-5 inline-block text-sm text-ink transition hover:text-gold">
            {footer.contact}
          </a>
        </div>
      </div>
    </footer>
  );
}
