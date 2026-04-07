import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { navigation } from '../data/siteData';

export function NavBar() {
  const { user, isAdmin, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cloud/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-10">
        <Link to="/" className="flex items-center gap-3 text-ink">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 bg-white/60 text-[10px] uppercase tracking-[0.3em]">
            FR
          </span>
          <span className="font-display text-[1.8rem] tracking-[0.08em]">FabuRosa</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={`/${item.href}`}
              className="relative text-[11px] uppercase tracking-[0.3em] text-ink/72 transition duration-300 hover:text-ink after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-ink after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em]">
          {user ? (
            <>
              {isAdmin ? <Link className="hidden text-ink/70 transition hover:text-ink md:inline" to="/admin">Admin</Link> : null}
              <Link className="text-ink/70 transition hover:text-ink" to="/profile">Profile</Link>
              <button className="hidden text-ink/70 transition hover:text-ink md:inline" onClick={signOut}>Log out</button>
            </>
          ) : (
            <>
              <Link className="text-ink/70 transition hover:text-ink" to="/login">Login</Link>
              <Link className="rounded-full border border-ink/15 bg-white/60 px-4 py-2 text-ink transition hover:border-ink/35" to="/signup">Sign up</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}