import { useEffect, useState } from 'react';
import { Star, ArrowRight, ShoppingBag, ExternalLink, Check, ChefHat } from 'lucide-react';
import Reveal from '../components/Reveal';
import { PICKS, fetchPicks, picksUrl, picksImage, goUrl, type Pick } from '../lib/picks';

const reasons = [
  'Every pick is a real, top-rated product — sorted by average customer rating.',
  'Honest buying guides, not paid placements — we recommend the best, not the highest bidder.',
  'The cookware that makes the recipes you saved in RecipEase actually turn out great.',
];

const Stars = ({ rating }: { rating: number }) => (
  <span className="flex items-center gap-0.5" aria-label={`${rating} out of 5`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-3.5 w-3.5 ${
          i < Math.round(rating) ? 'fill-saffron text-saffron' : 'text-ink/15'
        }`}
      />
    ))}
  </span>
);

const Picks = () => {
  const [picks, setPicks] = useState<Pick[]>(PICKS);
  useEffect(() => {
    fetchPicks().then(setPicks).catch(() => {});
  }, []);

  return (
    <div className="overflow-hidden">
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="grain relative isolate overflow-hidden bg-sand-50 pb-16 pt-32 sm:pt-36">
        <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-[30rem] w-[30rem] rounded-full bg-clay-200/40 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 top-32 -z-10 h-[26rem] w-[26rem] rounded-full bg-saffron-300/30 blur-[120px]" />

        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              <ShoppingBag className="h-3.5 w-3.5 text-clay-500" />
              RecipEase Picks · Cookware shop
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.04] tracking-tightest text-ink sm:text-6xl">
              The gear behind the <span className="text-gradient italic">recipes.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-taupe">
              RecipEase saves your recipes. <strong className="text-ink">RecipEase Picks</strong>{' '}
              helps you cook them — hands-on reviews of the best cookware, ranked by real
              customer ratings, with honest buying guides.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={picksUrl('/')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-lg"
              >
                Shop all cookware
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={picksUrl('/compare')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost btn-lg"
              >
                Compare top picks
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Product grid ─────────────────────────────────── */}
      <section className="section bg-sand-50 pt-4">
        <div className="container-x">
          <Reveal className="mb-12 max-w-2xl">
            <span className="eyebrow">Top-rated right now</span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Tested, ranked, and worth your money.
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {picks.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 4) * 80}>
                <a
                  href={goUrl(p.slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/[0.06] bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-sand-100">
                    <img
                      src={picksImage(p.asin)}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-ink-900/90 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-sand-50">
                      {p.badge}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-clay-600">
                      {p.brand} · {p.category}
                    </p>
                    <h3 className="mt-1.5 font-display text-lg font-bold leading-tight text-ink">
                      {p.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-taupe">{p.blurb}</p>
                    <div className="mt-4 flex items-center gap-2">
                      <Stars rating={p.rating} />
                      <span className="text-xs font-medium text-ink/60">
                        {p.rating} · {p.reviews}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-ink/[0.06] pt-4">
                      <span className="font-display text-lg font-bold text-ink">{p.price}</span>
                      <span className="flex items-center gap-1 text-sm font-semibold text-clay-600 group-hover:text-clay-500">
                        View pick
                        <ExternalLink className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={picksUrl('/products')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark btn-lg"
            >
              See all 20 picks on the shop
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Why strip ────────────────────────────────────── */}
      <section className="section bg-sand-100/50">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Why RecipEase Picks</span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              From saved recipe to set table.
            </h2>
            <p className="mt-4 max-w-md text-lg text-taupe">
              You scanned the recipe in RecipEase. Now get the pan, pot, or sheet that makes
              it come out like the photo.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ul className="space-y-4">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-soft">
                  <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-sage/15 text-sage-600">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-ink/85">{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ─── Final CTA ────────────────────────────────────── */}
      <section className="section bg-sand-50">
        <div className="container-x">
          <Reveal>
            <div className="grain relative isolate overflow-hidden rounded-[2.5rem] bg-ink-900 px-6 py-20 text-center sm:px-12 sm:py-24">
              <div className="pointer-events-none absolute -left-10 top-0 h-80 w-80 rounded-full bg-clay-500/30 blur-[120px]" />
              <div className="pointer-events-none absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-saffron/20 blur-[120px]" />
              <span className="relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-sand-100/80">
                <ChefHat className="h-4 w-4 text-clay-300" />
                RecipEase Picks
              </span>
              <h2 className="relative mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-sand-50 sm:text-5xl">
                Stock the kitchen behind your cookbook.
              </h2>
              <p className="relative mx-auto mt-5 max-w-xl text-lg text-sand-100/70">
                Browse the full lineup of top-rated cookware, bakeware, and kitchen gear on the
                RecipEase Picks shop.
              </p>
              <div className="relative mt-9 flex justify-center">
                <a
                  href={picksUrl('/')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-lg"
                >
                  Visit RecipEase Picks
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Picks;
