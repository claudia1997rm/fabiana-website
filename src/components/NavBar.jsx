import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { navigation } from '../data/siteData';
import { BrandLogo } from './BrandLogo';

export function NavBar() {
  const { user, isAdmin, signOut } = useAuth();
  const location = useLocation();
  const activeHref = location.hash || '#inicio';
  const [isOpen, setIsOpen] = useState(false);

  function handleBrandClick(event) {
    setIsOpen(false);
    if (location.pathname === '/') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function closeMenu() {
    setIsOpen(false);
  }

  const authLinks = user
    ? [
        ...(isAdmin ? [{ label: 'Panel', to: '/admin' }] : []),
        { label: 'Perfil', to: '/profile' },
      ]
    : [
        { label: 'Entrar', to: '/login' },
        { label: 'Crear cuenta', to: '/signup', featured: true },
      ];

  return (
    <header className="sticky top-0 z-40 border-b border-plum/20 bg-lavenderMist/90 text-deepPlum shadow-[0_10px_36px_rgba(42,34,53,0.06)] backdrop-blur-xl transition duration-500">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 md:px-10 md:py-4">
        <Link to="/" onClick={handleBrandClick} className="group flex cursor-pointer items-center gap-3 text-deepPlum focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum/25 focus-visible:ring-offset-4 focus-visible:ring-offset-cloud">
          <BrandLogo />
          <span className="font-display text-[1.45rem] tracking-[0.08em] transition duration-500 group-hover:tracking-[0.1em] sm:text-[1.8rem]">FabuRose</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegacion principal">
          {navigation.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <a
                key={item.href}
                href={`/${item.href}`}
                aria-current={isActive ? 'page' : undefined}
                className={`relative text-[11px] uppercase tracking-[0.3em] transition duration-500 after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-plum after:transition-all after:duration-500 hover:text-plum focus-visible:outline-none focus-visible:text-plum ${isActive ? 'text-plum after:w-full' : 'text-deepPlum/70 after:w-0 hover:after:w-full'}`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 rounded-full border border-plum/20 bg-white/60 px-2 py-1.5 text-[11px] uppercase tracking-[0.28em] backdrop-blur-md lg:flex">
          {user ? (
            <>
              {isAdmin ? <Link className="nav-action" to="/admin">Panel</Link> : null}
              <Link className="nav-action" to="/profile">Perfil</Link>
              <button className="nav-action" onClick={signOut}>Salir</button>
            </>
          ) : (
            <>
              <Link className="nav-action" to="/login">Entrar</Link>
              <Link className="rounded-full border border-plum/25 bg-plum px-4 py-2 text-cloud transition duration-500 hover:-translate-y-0.5 hover:border-deepPlum hover:bg-deepPlum hover:text-white hover:shadow-lavender focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum/25" to="/signup">Crear cuenta</Link>
            </>
          )}
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-plum/20 bg-white/70 text-deepPlum shadow-soft transition duration-500 hover:border-plum/40 hover:bg-lavender lg:hidden"
        >
          <span className="sr-only">Abrir menu</span>
          <span className="flex w-4 flex-col gap-1.5">
            <span className={`h-px bg-current transition duration-300 ${isOpen ? 'translate-y-[3px] rotate-45' : ''}`} />
            <span className={`h-px bg-current transition duration-300 ${isOpen ? '-translate-y-[3px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      <div id="mobile-menu" className={`border-t border-plum/20 bg-lavenderMist/95 px-5 transition-all duration-500 lg:hidden ${isOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 overflow-hidden opacity-0'}`}>
        <div className="mx-auto flex max-w-7xl flex-col gap-2 py-4">
          {navigation.map((item) => (
            <a key={item.href} href={`/${item.href}`} onClick={closeMenu} className="rounded-[1.15rem] border border-transparent px-4 py-3 text-[11px] uppercase tracking-[0.28em] text-deepPlum/70 transition duration-300 hover:border-plum/20 hover:bg-lavender hover:text-plum">
              {item.label}
            </a>
          ))}
          <div className="mt-3 grid gap-2 border-t border-plum/20 pt-4">
            {authLinks.map((item) => (
              <Link key={item.to} to={item.to} onClick={closeMenu} className={`rounded-full border px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.26em] transition duration-300 ${item.featured ? 'border-plum bg-plum text-cloud hover:bg-deepPlum' : 'border-plum/20 bg-white/70 text-deepPlum hover:bg-lavender hover:text-plum'}`}>
                {item.label}
              </Link>
            ))}
            {user ? <button onClick={() => { closeMenu(); signOut(); }} className="rounded-full border border-plum/20 bg-white/70 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-deepPlum transition duration-300 hover:bg-lavender hover:text-plum">Salir</button> : null}
          </div>
        </div>
      </div>
    </header>
  );
}