import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { APP_STORE_URL } from '../lib/links';

const navigation = [
  { name: 'Features', href: '/features' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Shop', href: '/picks' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Support', href: '/support' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change.
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-x">
        <nav
          className={`mt-3 flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5 ${
            scrolled || open
              ? 'border border-ink/[0.07] bg-sand-50/85 shadow-soft backdrop-blur-xl'
              : 'border border-transparent bg-transparent'
          }`}
        >
          <Link to="/" className="group flex items-center gap-2.5 pl-1">
            <img
              src="/logo.png"
              alt="RecipEase"
              className="h-9 w-9 rounded-xl shadow-sm transition-transform duration-300 group-hover:-rotate-6"
            />
            <span className="font-display text-xl font-bold tracking-tight text-ink">
              RecipEase
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => {
              const active = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    active ? 'text-clay-600' : 'text-ink/70 hover:text-ink'
                  }`}
                >
                  {item.name}
                  {active && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-clay-500" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-5 py-2.5 text-sm"
            >
              Get the app
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="mt-2 rounded-3xl border border-ink/[0.07] bg-sand-50/95 p-3 shadow-lift backdrop-blur-xl md:hidden">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block rounded-2xl px-4 py-3 text-base font-medium ${
                  location.pathname === item.href
                    ? 'bg-clay-50 text-clay-600'
                    : 'text-ink/80 hover:bg-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 w-full"
            >
              Get the app
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
