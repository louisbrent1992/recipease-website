// RecipEase Picks — top-rated cookware featured on this site to drive traffic
// to the affiliate shop (picks.recipease.kitchen). Images are served from the
// shop itself, so they stay in sync. All outbound links carry a cross-traffic UTM.

const PICKS_BASE = 'https://picks.recipease.kitchen';
const PICKS_UTM = 'utm_source=recipease-app&utm_medium=referral&utm_campaign=picks';

/** Build a UTM-tagged URL into the RecipEase Picks shop. */
export function picksUrl(path = '/'): string {
  const url = `${PICKS_BASE}${path}`;
  return `${url}${url.includes('?') ? '&' : '?'}${PICKS_UTM}`;
}

/** Product image hosted on the shop. */
export function picksImage(slug: string): string {
  return `${PICKS_BASE}/images/products/${slug}.svg`;
}

export interface Pick {
  slug: string;
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
    name: 'Lodge 10.25" Cast Iron Skillet',
    brand: 'Lodge',
    category: 'Cast Iron',
    rating: 4.7,
    reviews: '180k+',
    price: '$19.90',
    badge: 'Best Overall',
    blurb: "The do-everything pan that outlives the kitchen it's in.",
  },
  {
    slug: 'cuisinart-multiclad-12pc',
    name: 'Cuisinart MultiClad Pro 12-Pc Set',
    brand: 'Cuisinart',
    category: 'Stainless',
    rating: 4.8,
    reviews: '9k+',
    price: '$279.95',
    badge: 'Best Set',
    blurb: "Restaurant-grade tri-ply without the chef's-shop price.",
  },
  {
    slug: 'tramontina-dutch-oven-7',
    name: 'Tramontina 7-Qt Enameled Dutch Oven',
    brand: 'Tramontina',
    category: 'Dutch Ovens',
    rating: 4.7,
    reviews: '4.6k+',
    price: '$99.95',
    badge: 'Best Dutch Oven',
    blurb: 'Le Creuset looks and performance for a fraction of the cost.',
  },
  {
    slug: 'sensarte-nonstick-fry-pan-95',
    name: 'SENSARTE 9.5" Nonstick Frying Pan',
    brand: 'SENSARTE',
    category: 'Nonstick',
    rating: 4.6,
    reviews: '41k+',
    price: '$18.99',
    badge: 'Budget Pick',
    blurb: 'A featherlight everyday pan that eggs slide right off.',
  },
  {
    slug: 'nordic-ware-half-sheet-2pk',
    name: 'Nordic Ware Half Sheet (2-Pack)',
    brand: 'Nordic Ware',
    category: 'Bakeware',
    rating: 4.8,
    reviews: '43k+',
    price: '$25.99',
    badge: 'Best Seller',
    blurb: 'The commercial-grade sheet pans every test kitchen owns.',
  },
  {
    slug: 'lecreuset-dutch-oven-55',
    name: 'Le Creuset 5.5-Qt Round Dutch Oven',
    brand: 'Le Creuset',
    category: 'Dutch Ovens',
    rating: 4.8,
    reviews: '6k+',
    price: '$419.95',
    badge: 'Heirloom',
    blurb: 'The forever French oven you cook in for decades.',
  },
  {
    slug: 'allclad-d3-fry-pan-10',
    name: 'All-Clad D3 10" Stainless Fry Pan',
    brand: 'All-Clad',
    category: 'Stainless',
    rating: 4.7,
    reviews: '4.8k+',
    price: '$99.95',
    badge: 'Pro Pick',
    blurb: 'The tri-ply pan pros sear in — a buy-it-for-life skillet.',
  },
  {
    slug: 'lodge-combo-cooker',
    name: 'Lodge Cast Iron Combo Cooker',
    brand: 'Lodge',
    category: 'Cast Iron',
    rating: 4.8,
    reviews: '14k+',
    price: '$49.90',
    badge: 'Best for Bread',
    blurb: 'A deep pot and skillet lid — bakery-grade sourdough at home.',
  },
];
