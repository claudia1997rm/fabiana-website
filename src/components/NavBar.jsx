import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { navigation } from '../data/siteData';

export function NavBar() {
  const { user, isAdmin, signOut } = useAuth();
  const location = useLocation();
  const activeHref = location.hash || '#inicio';

  function handleBrandClick(event) {
    if (location.pathname === '/') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-plum/25 bg-white/70 backdrop-blur-xl transition duration-500">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-10">
        <Link to="/" onClick={handleBrandClick} className="group flex cursor-pointer items-center gap-3 text-deepPlum focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/20 focus-visible:ring-offset-4 focus-visible:ring-offset-cloud">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-plum bg-plum text-[10px] text-white shadow-lavender uppercase tracking-[0.3em] transition duration-500 group-hover:-translate-y-0.5 group-hover:border-deepPlum/55 group-hover:bg-deepPlum">
            FR
          </span>
          <span className="font-display text-[1.8rem] tracking-[0.08em] transition duration-500 group-hover:tracking-[0.1em]">FabuRose</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
          {navigation.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <a
                key={item.href}
                href={`/${item.href}`}
                aria-current={isActive ? 'page' : undefined}
                className={`relative text-[11px] uppercase tracking-[0.3em] transition duration-500 after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-plum after:transition-all after:duration-500 hover:text-plum focus-visible:outline-none focus-visible:text-plum ${isActive ? 'text-plum after:w-full' : 'text-ink/70 after:w-0 hover:after:w-full'}`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 rounded-full border border-plum/25 bg-lavenderMist/85 px-2 py-1.5 text-[11px] uppercase tracking-[0.28em] backdrop-blur-md">
          {user ? (
            <>
              {isAdmin ? <Link className="nav-action hidden md:inline-flex" to="/admin">Panel</Link> : null}
              <Link className="nav-action" to="/profile">Perfil</Link>
              <button className="nav-action hidden md:inline-flex" onClick={signOut}>Salir</button>
            </>
          ) : (
            <>
              <Link className="nav-action" to="/login">Entrar</Link>
              <Link className="rounded-full border border-plum/25 bg-white/70 px-4 py-2 text-plum transition duration-500 hover:-translate-y-0.5 hover:border-plum/45 hover:bg-lavenderMist hover:text-plum hover:shadow-lavender focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum/25" to="/signup">Crear cuenta</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
