// RecipEase Picks — top-rated cookware featured on this site to drive traffic
// to the affiliate shop (picks.recipease.kitchen). Images are served from the
// shop itself, so they stay in sync. All outbound links carry a cross-traffic UTM.

const PICKS_BASE = 'https://picks.recipease.kitchen';
const PICKS_UTM = 'utm_source=recipease-app&utm_medium=referral&utm_campaign=picks';

// Central catalog API (single source of truth on Cloud Run / Firestore).
const PICKS_API =
  'https://recipease-app-server-826154873845.us-west2.run.app/api/picks';

/** Build a UTM-tagged URL into the RecipEase Picks shop. */
export function picksUrl(path = '/'): string {
  const url = `${PICKS_BASE}${path}`;
  return `${url}${url.includes('?') ? '&' : '?'}${PICKS_UTM}`;
}

/** Real Amazon product photo for an ASIN (stable image-CDN path). */
export function picksImage(asin: string): string {
  return `https://m.media-amazon.com/images/P/${asin}.01._SCLZZZZZZZ_.jpg`;
}

/**
 * Direct-to-Amazon affiliate link for a product. Uses the shop's cloaked
 * /go/<slug> redirect, which 302s straight to the Amazon product page with the
 * associate tag applied (kept server-side, changeable without a redeploy).
 */
export function goUrl(slug: string): string {
  return `${PICKS_BASE}/go/${slug}`;
}

export interface Pick {
  slug: string;
  asin: string;
  name: string;
  brand: string;
  category: string;
  rating: number;
  reviews: string;
  price: string;
  badge: string;
  blurb: string;
}

/** Hand-picked top-rated highlights (full catalog lives on the shop). */
export const PICKS: Pick[] = [
  {
    slug: 'lodge-cast-iron-skillet-10',
    asin: 'B00006JSUA',
    name: 'Lodge 10.25" Cast Iron Skillet',
    brand: 'Lodge',
    category: 'Cast Iron',
    rating: 4.7,
    reviews: '180k+',
    price: '$13.93',
    badge: 'Best Overall',
    blurb: "The do-everything pan that outlives the kitchen it's in.",
  },
  {
    slug: 'cuisinart-multiclad-12pc',
    asin: 'B009JXPS6U',
    name: 'Cuisinart MultiClad Pro 12-Pc Set',
    brand: 'Cuisinart',
    category: 'Stainless',
    rating: 4.8,
    reviews: '9k+',
    price: '$195.97',
    badge: 'Best Set',
    blurb: "Restaurant-grade tri-ply without the chef's-shop price.",
  },
  {
    slug: 'tramontina-dutch-oven-7',
    asin: 'B009HBK1E8',
    name: 'Tramontina 7-Qt Enameled Dutch Oven',
    brand: 'Tramontina',
    category: 'Dutch Ovens',
    rating: 4.7,
    reviews: '4.6k+',
    price: '$69.97',
    badge: 'Best Dutch Oven',
    blurb: 'Le Creuset looks and performance for a fraction of the cost.',
  },
  {
    slug: 'greenpan-valencia-pro-10',
    asin: 'B074CVZ7MM',
    name: 'GreenPan Valencia Pro 10" Ceramic Fry Pan',
    brand: 'GreenPan',
    category: 'Nonstick',
    rating: 4.6,
    reviews: '18k+',
    price: '$27.99',
    badge: 'Healthiest Nonstick',
    blurb: 'PFAS-free ceramic nonstick that eggs slide right off.',
  },
  {
    slug: 'nordic-ware-half-sheet-2pk',
    asin: 'B0049C2S32',
    name: 'Nordic Ware Half Sheet (2-Pack)',
    brand: 'Nordic Ware',
    category: 'Bakeware',
    rating: 4.8,
    reviews: '43k+',
    price: '$18.19',
    badge: 'Best Seller',
    blurb: 'The commercial-grade sheet pans every test kitchen owns.',
  },
  {
    slug: 'lecreuset-dutch-oven-55',
    asin: 'B0076NOGPY',
    name: 'Le Creuset 5.5-Qt Round Dutch Oven',
    brand: 'Le Creuset',
    category: 'Dutch Ovens',
    rating: 4.8,
    reviews: '6k+',
    price: '$293.97',
    badge: 'Heirloom',
    blurb: 'The forever French oven you cook in for decades.',
  },
  {
    slug: 'allclad-d3-fry-pan-10',
    asin: 'B00FUF5OIS',
    name: 'All-Clad D3 10" Stainless Fry Pan',
    brand: 'All-Clad',
    category: 'Stainless',
    rating: 4.7,
    reviews: '4.8k+',
    price: '$69.97',
    badge: 'Pro Pick',
    blurb: 'The tri-ply pan pros sear in — a buy-it-for-life skillet.',
  },
  {
    slug: 'lodge-combo-cooker',
    asin: 'B0009JKG9M',
    name: 'Lodge Cast Iron Combo Cooker',
    brand: 'Lodge',
    category: 'Cast Iron',
    rating: 4.8,
    reviews: '14k+',
    price: '$34.93',
    badge: 'Best for Bread',
    blurb: 'A deep pot and skillet lid — bakery-grade sourdough at home.',
  },
];

function reviewsShort(n: number): string {
  if (n >= 1000) {
    const k = n / 1000;
    return `${k >= 100 ? Math.round(k) : k.toFixed(Number.isInteger(k) ? 0 : 1)}k+`;
  }
  return n > 0 ? `${n}` : '';
}

/**
 * Load the live catalog from the central API. Falls back to the bundled PICKS
 * (above) if the API is unreachable, so the page always renders.
 */
export async function fetchPicks(): Promise<Pick[]> {
  try {
    const res = await fetch(PICKS_API);
    if (!res.ok) return PICKS;
    const data = await res.json();
    const list: unknown[] = Array.isArray(data?.products) ? data.products : [];
    const mapped = list
      .map((raw) => {
        const p = raw as Record<string, unknown>;
        return {
          slug: String(p.slug ?? ''),
          asin: String(p.affiliateRef ?? p.asin ?? ''),
          name: String(p.name ?? ''),
          brand: String(p.brand ?? ''),
          category: String(p.categorySlug ?? p.category ?? ''),
          rating: Number(p.rating) || 0,
          reviews: reviewsShort(Number(p.reviewCount) || 0),
          price: String(p.price ?? ''),
          badge: String(p.badge ?? ''),
          blurb: String(p.tagline ?? p.blurb ?? ''),
        } as Pick;
      })
      .filter((p) => p.slug);
    return mapped.length ? mapped : PICKS;
  } catch {
    return PICKS;
  }
}
