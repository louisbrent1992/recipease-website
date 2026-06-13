import { Link } from 'react-router-dom';
import { ArrowUpRight, ChefHat } from 'lucide-react';
import StoreButtons from './StoreButtons';
import { COMPANY_EMAIL } from '../lib/links';

const columns = [
  {
    title: 'Product',
    links: [
      { name: 'Features', to: '/features' },
      { name: 'Gallery', to: '/gallery' },
      { name: 'Pricing', to: '/pricing' },
      { name: 'Newsletter', to: '/newsletter' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', to: '/about' },
      { name: 'Support', to: '/support' },
      { name: 'Contact', to: '/support' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy', to: '/privacy' },
      { name: 'Terms', to: '/terms' },
      { name: 'Cookies', to: '/cookies' },
      { name: 'Fair Use', to: '/fair-use' },
      { name: 'Data Deletion', to: '/data-deletion' },
    ],
  },
];

const Footer = () => (
  <footer className="relative overflow-hidden bg-ink-900 text-sand-100">
    {/* glow */}
    <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-clay-500/20 blur-[120px]" />

    <div className="container-x relative">
      {/* CTA strip */}
      <div className="grid gap-8 border-b border-white/10 py-16 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-display text-4xl font-bold leading-[1.05] text-sand-50 sm:text-5xl">
            Your whole recipe
            <br />
            collection, finally <span className="italic text-clay-300">organized.</span>
          </h2>
          <p className="mt-4 max-w-md text-sand-100/70">
            Free to start — 5 imports and 5 AI generations on the house. No card required.
          </p>
        </div>
        <div className="lg:justify-self-end">
          <StoreButtons size={58} />
        </div>
      </div>

      {/* Links */}
      <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="RecipEase" className="h-10 w-10 rounded-xl" />
            <span className="font-display text-2xl font-bold text-sand-50">RecipEase</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand-100/60">
            The AI kitchen that scans cookbooks, saves viral recipes, and cooks with what
            you already have.
          </p>
          <a
            href={`mailto:${COMPANY_EMAIL}`}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-clay-300 hover:text-clay-200"
          >
            {COMPANY_EMAIL}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-sand-100/40">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-sm text-sand-100/75 transition-colors hover:text-clay-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-sm text-sand-100/50 sm:flex-row">
        <p>© {new Date().getFullYear()} Advent Hub Solutions. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          <ChefHat className="h-4 w-4 text-clay-400" />
          Made for people who love to cook.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
