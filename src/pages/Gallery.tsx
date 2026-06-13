import { useState, useEffect } from 'react';
import { X, Maximize2, ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import StoreButtons from '../components/StoreButtons';

type Item = {
  id: number;
  category: 'screens' | 'graphics';
  kind: 'device' | 'graphic';
  title: string;
  description: string;
  url: string;
};

const items: Item[] = [
  { id: 1, category: 'screens', kind: 'device', title: 'Recipe Detail', description: 'A warm, readable recipe view with photo, timings and steps.', url: '/app/detail.png' },
  { id: 2, category: 'screens', kind: 'device', title: 'Smart Import', description: 'Paste a link or scan a card — AI structures the recipe.', url: '/app/import.png' },
  { id: 3, category: 'screens', kind: 'device', title: 'Pantry Chef', description: 'Generate a recipe from whatever is in your fridge.', url: '/app/generate.png' },
  { id: 4, category: 'screens', kind: 'device', title: 'Discover', description: 'Browse and search a world of recipes by craving.', url: '/app/discover.png' },
  { id: 5, category: 'screens', kind: 'device', title: 'Captured Recipes', description: 'Everything you saved, organized and searchable.', url: '/app/captured.png' },
  { id: 6, category: 'screens', kind: 'device', title: 'AI Created', description: 'Fresh, original recipes generated just for you.', url: '/app/ai_created.png' },
  { id: 7, category: 'graphics', kind: 'graphic', title: 'AI Recipe Generator', description: 'Unlock your culinary creativity.', url: '/screenshots/recipe_generator.png' },
  { id: 8, category: 'graphics', kind: 'graphic', title: 'AI Photo Import', description: 'Instant recipe parsing with advanced AI.', url: '/screenshots/ai_photo_import.png' },
  { id: 9, category: 'graphics', kind: 'graphic', title: 'TikTok Import', description: 'Save viral recipes in one tap.', url: '/screenshots/tiktok_import.png' },
  { id: 10, category: 'graphics', kind: 'graphic', title: 'AI Kitchen Assistant', description: 'Cook with what you have.', url: '/screenshots/ai_kitchen_assistant.png' },
  { id: 11, category: 'graphics', kind: 'graphic', title: 'My Collections', description: 'Organize recipes beautifully.', url: '/screenshots/my_collections.png' },
  { id: 12, category: 'graphics', kind: 'graphic', title: 'Offline Access', description: 'Your recipes, anywhere — even offline.', url: '/screenshots/offline_access.png' },
  { id: 13, category: 'graphics', kind: 'graphic', title: 'Smart Notifications', description: 'Daily inspiration and meal-prep nudges.', url: '/screenshots/smart_notifications.png' },
  { id: 14, category: 'graphics', kind: 'graphic', title: 'Recipe Collections', description: 'Curated collections for every craving.', url: '/screenshots/recipe_collections.png' },
];

const filters = [
  { id: 'all', label: 'All media' },
  { id: 'screens', label: 'App screens' },
  { id: 'graphics', label: 'Feature graphics' },
];

const Gallery = () => {
  const [active, setActive] = useState<'all' | 'screens' | 'graphics'>('all');
  const [expanded, setExpanded] = useState<Item | null>(null);

  const visible = active === 'all' ? items : items.filter((i) => i.category === active);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setExpanded(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = expanded ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [expanded]);

  return (
    <div>
      {/* Hero */}
      <section className="grain relative isolate overflow-hidden bg-sand-50 pb-14 pt-36 sm:pt-40">
        <div className="pointer-events-none absolute -right-24 top-10 -z-10 h-[26rem] w-[26rem] rounded-full bg-sage-light/25 blur-[120px]" />
        <div className="container-x text-center">
          <Reveal>
            <span className="eyebrow">A look inside</span>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.04] tracking-tightest text-ink sm:text-6xl">
              See the kitchen
              <span className="text-gradient italic"> before you download.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-taupe">
              Real screens, real recipes. Here’s what cooking with RecipEase actually looks like.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="section bg-sand-50 pt-4">
        <div className="container-x">
          <Reveal className="mb-12 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id as typeof active)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  active === f.id
                    ? 'bg-ink-900 text-sand-50'
                    : 'border border-ink/10 bg-white text-ink/70 hover:border-ink/30'
                }`}
              >
                {f.label}
              </button>
            ))}
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item, i) => (
              <Reveal key={item.id} delay={(i % 3) * 70}>
                <button
                  onClick={() => setExpanded(item)}
                  className="group block w-full overflow-hidden rounded-4xl border border-ink/[0.06] bg-white text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div
                    className={`relative flex items-center justify-center overflow-hidden ${
                      item.kind === 'device'
                        ? 'bg-gradient-to-br from-sand-100 to-sand-200 p-6'
                        : 'bg-sand-100'
                    }`}
                  >
                    <img
                      src={item.url}
                      alt={item.title}
                      loading="lazy"
                      className={`transition-transform duration-500 group-hover:scale-[1.04] ${
                        item.kind === 'device'
                          ? 'max-h-72 w-auto rounded-2xl shadow-lift'
                          : 'aspect-square w-full object-cover'
                      }`}
                    />
                    <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 shadow-lift backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                      <Maximize2 className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-taupe">{item.description}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-sand-100/50">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">
              Better in your hands.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-taupe">
              Screenshots are nice — but the app is where it clicks. Try it free.
            </p>
            <div className="mt-8 flex justify-center"><StoreButtons size={56} /></div>
            <a href="/features" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-clay-600 hover:text-clay-700">
              Explore the features <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Lightbox */}
      {expanded && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-900/80 p-4 backdrop-blur-md"
          onClick={() => setExpanded(null)}
        >
          <button
            onClick={() => setExpanded(null)}
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-ink shadow-lift transition-colors hover:bg-white"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="flex max-h-[88vh] max-w-3xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={expanded.url}
              alt={expanded.title}
              className="max-h-[78vh] w-auto rounded-3xl shadow-device"
            />
            <p className="mt-5 text-center font-display text-xl font-semibold text-sand-50">
              {expanded.title}
            </p>
            <p className="mt-1 text-center text-sm text-sand-100/70">{expanded.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
