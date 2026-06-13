import {
  Camera,
  Smartphone,
  Sparkles,
  FolderHeart,
  WifiOff,
  Bell,
  Image as ImageIcon,
  RefreshCw,
  LayoutGrid,
  Shield,
  Globe,
  Check,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import StoreButtons from '../components/StoreButtons';
import DeviceFrame from '../components/DeviceFrame';

const coreFeatures = [
  {
    icon: <Camera className="h-6 w-6" />,
    tint: 'clay',
    title: 'AI Photo Import',
    description:
      'Turn a shoebox of recipe cards and dog-eared cookbooks into a searchable digital library. Snap a photo — OCR handles the rest.',
    details: [
      'Digitize handwritten recipes instantly',
      'Scan cookbook pages with OCR',
      'Auto-extract ingredients & steps',
      'Keep the original recipe photo',
    ],
    img: '/app/import.png',
    alt: 'AI photo import screen',
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    tint: 'saffron',
    title: 'Save TikTok & Social',
    description:
      'Never lose a viral recipe again. Paste a link and RecipEase pulls a clean, structured recipe out of the video or post.',
    details: [
      'TikTok, Instagram Reels & YouTube',
      'Food Network, BBC Food, AllRecipes',
      'Cooking videos → text recipes',
      'Keep your inspiration organized',
    ],
    img: '/app/discover.png',
    alt: 'Recipe discovery screen',
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    tint: 'sage',
    title: 'AI Kitchen Assistant',
    description:
      'Random ingredients, no plan? “Cook with what’s in my fridge” builds a recipe around what you already have.',
    details: [
      'Generate recipes from your pantry',
      'Custom plans that cut food waste',
      'Set dietary needs & preferences',
      'Adjust servings & difficulty',
    ],
    img: '/app/generate.png',
    alt: 'Pantry chef generator screen',
  },
  {
    icon: <FolderHeart className="h-6 w-6" />,
    tint: 'plum',
    title: 'Ultimate Organizer',
    description:
      'Build your own digital recipe book with smart collections for “Meal Prep,” “Keto,” or “Family Favorites.”',
    details: [
      'Unlimited custom collections',
      'Separate scans from social imports',
      'Auto icon & color assignment',
      'Paginated, tidy collection views',
    ],
    img: '/app/captured.png',
    alt: 'Captured recipes collection screen',
  },
];

const tintMap: Record<string, string> = {
  clay: 'bg-clay-50 text-clay-600',
  saffron: 'bg-saffron/15 text-saffron-600',
  sage: 'bg-sage/15 text-sage-600',
  plum: 'bg-plum/10 text-plum',
};

const secondaryFeatures = [
  {
    icon: <WifiOff className="h-5 w-5" />,
    title: 'Offline Access',
    description: 'Your whole recipe archive works without WiFi — perfect for a busy kitchen.',
  },
  {
    icon: <Bell className="h-5 w-5" />,
    title: 'Smart Notifications',
    description: 'Daily inspiration, meal-prep reminders and seasonal picks — fully customizable.',
  },
  {
    icon: <ImageIcon className="h-5 w-5" />,
    title: 'Image Management',
    description: 'High-quality recipe photos with refresh and image-search integration.',
  },
  {
    icon: <RefreshCw className="h-5 w-5" />,
    title: 'Cross-Platform Sync',
    description: 'Access your recipes across iOS and Android with cloud sync.',
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Secure Sign-In',
    description: 'Email, Google Sign-In and Apple Sign-In — your data stays private.',
  },
  {
    icon: <LayoutGrid className="h-5 w-5" />,
    title: 'Responsive Design',
    description: 'Built mobile-first and tuned for phones, tablets and desktops.',
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: 'Dynamic UI',
    description: 'Server-controlled updates roll out improvements without an app release.',
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'Dietary Filters',
    description: 'Gluten-free, keto and more — filter recipes to fit how you eat.',
  },
];

const Features = () => (
  <div>
    {/* Hero */}
    <section className="grain relative isolate overflow-hidden bg-sand-50 pb-16 pt-36 sm:pb-20 sm:pt-40">
      <div className="pointer-events-none absolute -right-24 top-10 -z-10 h-[26rem] w-[26rem] rounded-full bg-clay-200/40 blur-[120px]" />
      <div className="container-x text-center">
        <Reveal>
          <span className="eyebrow">Everything inside</span>
          <h1 className="mx-auto mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.04] tracking-tightest text-ink sm:text-6xl">
            One app that replaces your
            <span className="text-gradient italic"> screenshots, bookmarks &amp; cookbooks.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-taupe">
            Scan, import, generate and organize — every feature is built to get a recipe into
            your kitchen with as little friction as possible.
          </p>
        </Reveal>
      </div>
    </section>

    {/* Core features — alternating editorial rows */}
    <section className="section bg-sand-50">
      <div className="container-x space-y-24 sm:space-y-32">
        {coreFeatures.map((f, i) => {
          const flip = i % 2 === 1;
          return (
            <div key={f.title} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal className={flip ? 'lg:order-2' : ''}>
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${tintMap[f.tint]}`}
                >
                  {f.icon}
                  {f.title}
                </span>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
                  {f.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-taupe">{f.description}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {f.details.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-ink/80">
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage-600">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={120} className={`relative flex justify-center ${flip ? 'lg:order-1' : ''}`}>
                <div className="absolute inset-0 -z-10 mx-auto h-3/4 w-3/4 self-center rounded-[3rem] bg-gradient-to-br from-clay-100/70 to-saffron-300/30 blur-2xl" />
                <DeviceFrame src={f.img} alt={f.alt} />
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>

    {/* Secondary features grid */}
    <section className="section bg-ink-900 text-sand-100">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow border-white/15 bg-white/5 text-sand-100/70">And the details</span>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-sand-50 sm:text-5xl">
            Thoughtful touches, all the way down.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {secondaryFeatures.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 80}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:bg-white/[0.06]">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-clay-500/15 text-clay-300">
                  {f.icon}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-sand-50">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-100/65">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Free tier CTA */}
    <section className="section bg-sand-50">
      <div className="container-x">
        <Reveal>
          <div className="grain relative isolate overflow-hidden rounded-[2.5rem] border border-ink/[0.06] bg-white px-6 py-16 text-center shadow-soft sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -left-10 -top-10 h-72 w-72 rounded-full bg-clay-200/40 blur-[110px]" />
            <h2 className="relative font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Start free today
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-taupe">
              Get 5 recipe imports and 5 AI generations when you sign up. No credit card. Credits
              never expire.
            </p>
            <div className="relative mt-8 flex justify-center">
              <StoreButtons size={56} />
            </div>
            <Link
              to="/pricing"
              className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-clay-600 hover:text-clay-700"
            >
              Compare all plans
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default Features;
