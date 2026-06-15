import { Link } from 'react-router-dom';
import { ArrowUpRight, ChefHat, Instagram, Facebook, Youtube } from 'lucide-react';
import StoreButtons from './StoreButtons';
import { COMPANY_EMAIL, SHOP_URL_UTM, SOCIALS } from '../lib/links';

// lucide has no TikTok glyph — inline it.
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const socials = [
  { label: 'Instagram', href: SOCIALS.instagram, Icon: Instagram },
  { label: 'TikTok', href: SOCIALS.tiktok, Icon: TikTokIcon },
  { label: 'Facebook', href: SOCIALS.facebook, Icon: Facebook },
  { label: 'YouTube', href: SOCIALS.youtube, Icon: Youtube },
];

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
          {SHOP_URL_UTM && (
            <a
              href={SHOP_URL_UTM}
              target="_blank"
              rel="noopener"
              className="mt-3 flex items-center gap-1.5 text-sm font-medium text-clay-300 hover:text-clay-200"
            >
              Shop our cookware picks
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-sand-100/70 transition-colors hover:border-clay-400/40 hover:bg-white/5 hover:text-clay-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
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
