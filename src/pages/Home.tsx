import { Link } from 'react-router-dom';
import {
  ScanLine,
  Sparkles,
  FolderHeart,
  Compass,
  WifiOff,
  Bell,
  ArrowRight,
  Check,
  Quote,
  Camera,
  Link2,
  ChefHat,
  ShoppingBag,
} from 'lucide-react';
import Reveal from '../components/Reveal';
import StoreButtons from '../components/StoreButtons';
import DeviceFrame from '../components/DeviceFrame';
import { PICKS, picksImage } from '../lib/picks';

const sources = [
  'TikTok',
  'Instagram Reels',
  'YouTube',
  'AllRecipes',
  'Food Network',
  'BBC Food',
  'Handwritten cards',
  'Cookbook pages',
];

const steps = [
  {
    icon: <Camera className="h-6 w-6" />,
    kicker: 'Capture',
    title: 'Snap it or paste it',
    body: 'Photograph a cookbook page or handwritten card, or drop a TikTok, Reel or recipe link.',
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    kicker: 'Extract',
    title: 'AI does the typing',
    body: 'Ingredients, steps, times and photos are pulled out and structured in seconds — no copy-paste.',
  },
  {
    icon: <FolderHeart className="h-6 w-6" />,
    kicker: 'Cook',
    title: 'Organize & cook offline',
    body: 'Drop it into a smart collection, scale servings, and pull it up in the kitchen even with no signal.',
  },
];

const showcase = [
  {
    badge: 'AI Photo Import',
    icon: <ScanLine className="h-5 w-5" />,
    title: 'Turn any cookbook into tappable recipes',
    body: 'Point your camera at a recipe card, a magazine page, or grandma’s handwriting. Our OCR reads it, cleans it up, and saves a perfectly formatted recipe — original photo and all.',
    points: ['Reads handwriting & print', 'Auto-detects ingredients and steps', 'Keep the original image'],
    img: '/app/import.png',
    alt: 'AI photo import and smart scan screen',
  },
  {
    badge: 'Pantry Chef',
    icon: <Sparkles className="h-5 w-5" />,
    title: 'Cook with what’s already in your fridge',
    body: 'Out of dinner ideas? List what you have and let the AI Chef generate a recipe around it — tuned to your diet, cuisine and how much time you’ve got. Less waste, more dinners.',
    points: ['Cook with leftovers', 'Dietary & cuisine filters', 'Adjustable cook time & servings'],
    img: '/app/generate.png',
    alt: 'Pantry Chef AI recipe generator screen',
    flip: true,
  },
  {
    badge: 'Smart Collections',
    icon: <FolderHeart className="h-5 w-5" />,
    title: 'Every recipe, beautifully organized',
    body: 'Scanned notes, saved Reels and AI creations all live together in collections you control — Meal Prep, Keto, Family Favorites, whatever you cook. Search across all of it instantly.',
    points: ['Unlimited custom collections', 'Powerful recipe search', 'Auto icons & colors'],
    img: '/app/captured.png',
    alt: 'Captured recipes collection screen',
  },
  {
    badge: 'Discover',
    icon: <Compass className="h-5 w-5" />,
    title: 'Find your next favorite meal',
    body: 'Browse a world of recipes by craving, cuisine or comfort food. Tap once to save the good ones straight into your cookbook.',
    points: ['Endless recipe discovery', 'One-tap save', 'Fresh picks every day'],
    img: '/app/discover.png',
    alt: 'Recipe discovery and search screen',
    flip: true,
  },
];

const marqueeShots = [
  { src: '/app/detail.png', alt: 'Butter chicken recipe detail' },
  { src: '/app/generate.png', alt: 'Pantry chef generator' },
  { src: '/app/discover.png', alt: 'Recipe discovery' },
  { src: '/app/ai_created.png', alt: 'AI created salmon recipe' },
  { src: '/app/captured.png', alt: 'Captured recipes' },
  { src: '/app/import.png', alt: 'Smart import' },
  { src: '/app/shrimp.png', alt: 'Shrimp and grits recipe' },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Home cook',
    quote:
      'It completely changed how I cook. Importing recipes from Instagram is stupidly easy, and the AI ideas are actually good.',
  },
  {
    name: 'Mike Chen',
    role: 'Food blogger',
    quote:
      'I’ve tried every recipe app. This is the first one that handles my screenshots, links and old cookbooks in one place.',
  },
  {
    name: 'Emily Davis',
    role: 'Busy parent',
    quote:
      'The daily inspiration and meal-prep reminders save my weeknights. My family eats way more variety now.',
  },
];

const freeIncludes = [
  '5 recipe imports',
  '5 AI recipe generations',
  'Unlimited recipe discovery',
  'Smart notifications',
  'Credits never expire',
];

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="grain relative isolate overflow-hidden bg-sand-50 pb-20 pt-32 sm:pb-28 sm:pt-36">
        {/* decorative warm glows */}
        <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-[30rem] w-[30rem] rounded-full bg-clay-200/40 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 top-40 -z-10 h-[26rem] w-[26rem] rounded-full bg-saffron-300/30 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-[20rem] w-[20rem] rounded-full bg-sage-light/20 blur-[120px]" />

        <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5 text-clay-500" />
              AI recipe scanner · iOS &amp; Android
            </span>

            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tightest text-ink sm:text-6xl lg:text-7xl">
              Every recipe
              <br />
              you love, in
              <br />
              <span className="text-gradient italic">one cookbook.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-taupe">
              RecipEase scans cookbooks, saves viral TikTok &amp; Instagram recipes, and
              invents new ones from what’s in your fridge — then keeps it all organized and
              ready to cook, even offline.
            </p>

            <div className="mt-8">
              <StoreButtons size={56} />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-ink/70">
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-sage" /> Free to start
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-sage" /> No credit card
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-sage" /> Works offline
              </span>
            </div>
          </Reveal>

          {/* Phone + floating chips */}
          <Reveal delay={120} className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-clay-100/60 to-saffron-300/30 blur-2xl" />
            <div className="animate-float-slow">
              <DeviceFrame src="/app/detail.png" alt="RecipEase recipe detail screen" className="w-[260px] sm:w-[280px]" />
            </div>

            {/* chip: import */}
            <div className="absolute -left-2 top-10 hidden rounded-2xl border border-ink/[0.06] bg-white/90 px-4 py-3 shadow-lift backdrop-blur sm:flex sm:items-center sm:gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-clay-50 text-clay-600">
                <Link2 className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-xs text-taupe">Imported from</p>
                <p className="text-sm font-semibold text-ink">TikTok ✓</p>
              </div>
            </div>

            {/* chip: AI */}
            <div className="absolute -right-3 top-1/3 hidden rounded-2xl border border-ink/[0.06] bg-white/90 px-4 py-3 shadow-lift backdrop-blur sm:flex sm:items-center sm:gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-saffron/15 text-saffron-600">
                <Sparkles className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-xs text-taupe">AI generated</p>
                <p className="text-sm font-semibold text-ink">in 4 seconds</p>
              </div>
            </div>

            {/* chip: offline */}
            <div className="absolute -bottom-3 left-6 hidden rounded-2xl border border-ink/[0.06] bg-white/90 px-4 py-3 shadow-lift backdrop-blur sm:flex sm:items-center sm:gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sage/15 text-sage-600">
                <WifiOff className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-xs text-taupe">Works offline</p>
                <p className="text-sm font-semibold text-ink">in the kitchen</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Source marquee ───────────────────────────────── */}
      <section className="border-y border-ink/[0.06] bg-sand-100/60 py-7">
        <p className="container-x mb-5 text-center text-xs font-semibold uppercase tracking-[0.22em] text-taupe">
          Import recipes from anywhere
        </p>
        <div className="mask-fade-x overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-10 pr-10">
            {[...sources, ...sources].map((s, i) => (
              <span
                key={i}
                className="whitespace-nowrap font-display text-2xl font-semibold text-ink/35"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How it works (dark band) ─────────────────────── */}
      <section className="section relative overflow-hidden bg-ink-900 text-sand-100">
        <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-clay-500/20 blur-[120px]" />
        <div className="container-x relative">
          <Reveal className="max-w-2xl">
            <span className="eyebrow border-white/15 bg-white/5 text-sand-100/70">
              How it works
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-sand-50 sm:text-5xl">
              From a photo to a cooked dinner in three taps.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <div className="group relative h-full rounded-4xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-300 hover:bg-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-clay-500/15 text-clay-300">
                      {step.icon}
                    </span>
                    <span className="font-display text-5xl font-bold text-white/10">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-clay-300">
                    {step.kicker}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-sand-50">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-sand-100/65">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Feature showcase ─────────────────────────────── */}
      <section className="section bg-sand-50">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Why people switch</span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              A kitchen that does the boring parts for you.
            </h2>
          </Reveal>

          <div className="mt-20 space-y-24 sm:space-y-32">
            {showcase.map((f) => (
              <div
                key={f.title}
                className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
              >
                <Reveal className={f.flip ? 'lg:order-2' : ''}>
                  <span className="inline-flex items-center gap-2 rounded-full bg-clay-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-clay-600">
                    {f.icon}
                    {f.badge}
                  </span>
                  <h3 className="mt-5 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
                    {f.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-taupe">{f.body}</p>
                  <ul className="mt-6 space-y-3">
                    {f.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-ink/80">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sage/15 text-sage-600">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal
                  delay={120}
                  className={`relative flex justify-center ${f.flip ? 'lg:order-1' : ''}`}
                >
                  <div className="absolute inset-0 -z-10 mx-auto h-3/4 w-3/4 self-center rounded-[3rem] bg-gradient-to-br from-clay-100/70 to-saffron-300/30 blur-2xl" />
                  <DeviceFrame src={f.img} alt={f.alt} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Screenshot marquee ───────────────────────────── */}
      <section className="overflow-hidden bg-sand-100/60 py-20">
        <Reveal className="container-x mb-12 max-w-xl">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Designed to feel like a cookbook you’d keep.
          </h2>
          <p className="mt-3 text-taupe">
            Warm, tactile and fast — a screen at a time.
          </p>
        </Reveal>
        <div className="mask-fade-x overflow-hidden">
          <div className="flex w-max animate-marquee gap-6 pr-6">
            {[...marqueeShots, ...marqueeShots].map((shot, i) => (
              <DeviceFrame
                key={i}
                src={shot.src}
                alt={shot.alt}
                className="w-[180px] shrink-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─────────────────────────────────── */}
      <section className="section bg-sand-50">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Loved by home cooks</span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              People don’t go back to screenshots.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="flex h-full flex-col rounded-4xl border border-ink/[0.06] bg-white p-8 shadow-soft">
                  <Quote className="h-8 w-8 text-clay-300" />
                  <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-ink/85">
                    “{t.quote}”
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-clay-50 font-display text-lg font-bold text-clay-600">
                      {t.name.charAt(0)}
                    </div>
                    <figcaption>
                      <p className="font-semibold text-ink">{t.name}</p>
                      <p className="text-sm text-taupe">{t.role}</p>
                    </figcaption>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RecipEase Picks (cookware shop) ──────────────── */}
      <section className="section bg-sand-50">
        <div className="container-x">
          <Reveal>
            <div className="grain relative isolate overflow-hidden rounded-[2.5rem] border border-ink/[0.06] bg-sand-100/70 px-6 py-14 sm:px-12">
              <div className="pointer-events-none absolute -right-16 -top-10 h-72 w-72 rounded-full bg-clay-200/50 blur-[110px]" />
              <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
                <div>
                  <span className="eyebrow">
                    <ShoppingBag className="h-3.5 w-3.5 text-clay-500" />
                    RecipEase Picks
                  </span>
                  <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
                    The cookware behind <br className="hidden sm:block" />
                    the recipes.
                  </h2>
                  <p className="mt-4 max-w-md text-lg text-taupe">
                    Saved a recipe? Now get the gear to cook it. RecipEase Picks reviews the
                    best cast iron, nonstick, dutch ovens, and bakeware — ranked by real
                    customer ratings.
                  </p>
                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <Link to="/picks" className="btn-primary btn-lg">
                      Shop top-rated cookware
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                  {PICKS.slice(0, 4).map((p) => (
                    <Link
                      key={p.slug}
                      to="/picks"
                      className="group overflow-hidden rounded-2xl border border-ink/[0.06] bg-white shadow-soft transition-transform duration-300 hover:-translate-y-1"
                    >
                      <div className="aspect-square overflow-hidden bg-sand-100">
                        <img
                          src={picksImage(p.asin)}
                          alt={p.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <p className="truncate px-3 py-2 text-xs font-semibold text-ink/70">
                        {p.brand}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Pricing teaser ───────────────────────────────── */}
      <section className="section bg-sand-100/50">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Start free</span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Free to begin. Upgrade only when you’re hooked.
            </h2>
            <p className="mt-4 max-w-md text-lg text-taupe">
              Every new cook gets credits to try the magic — imports, AI generations and the
              full kitchen. No card, no expiry, no pressure.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/pricing" className="btn-primary btn-lg">
                See all plans
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/features" className="btn-ghost btn-lg">
                Explore features
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative rounded-5xl border border-ink/[0.06] bg-white p-8 shadow-lift sm:p-10">
              <div className="absolute -top-3 right-8 rounded-full bg-ink-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-sand-50">
                Most popular start
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold text-ink">Free</span>
                <span className="text-taupe">forever to try</span>
              </div>
              <ul className="mt-7 space-y-3.5">
                {freeIncludes.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-ink/85">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sage/15 text-sage-600">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <StoreButtons size={52} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Final CTA ────────────────────────────────────── */}
      <section className="section bg-sand-50">
        <div className="container-x">
          <Reveal>
            <div className="grain relative isolate overflow-hidden rounded-[2.5rem] bg-ink-900 px-6 py-20 text-center sm:px-12 sm:py-28">
              <div className="pointer-events-none absolute -left-10 top-0 h-80 w-80 rounded-full bg-clay-500/30 blur-[120px]" />
              <div className="pointer-events-none absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-saffron/20 blur-[120px]" />

              <span className="relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-sand-100/80">
                <ChefHat className="h-4 w-4 text-clay-300" />
                Your new kitchen companion
              </span>
              <h2 className="relative mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-sand-50 sm:text-6xl">
                Stop losing recipes.
                <br />
                <span className="italic text-clay-300">Start cooking them.</span>
              </h2>
              <p className="relative mx-auto mt-5 max-w-xl text-lg text-sand-100/70">
                Download RecipEase and turn the chaos of links, screenshots and cookbooks into
                one kitchen you actually use.
              </p>
              <div className="relative mt-9 flex justify-center">
                <StoreButtons size={58} />
              </div>
              <p className="relative mt-5 flex items-center justify-center gap-1.5 text-sm text-sand-100/55">
                <Bell className="h-4 w-4" /> Free to start · iOS &amp; Android
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
