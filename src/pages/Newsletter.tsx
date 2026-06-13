import { useState } from 'react';
import { ChefHat, Calendar, Star, Zap, DollarSign, Sparkles, Clock, Bell, Star as StarIcon } from 'lucide-react';
import Reveal from '../components/Reveal';

const categories = [
  { icon: <ChefHat className="h-5 w-5" />, tint: 'clay', title: 'Daily Inspiration', time: '2:00 PM daily', description: 'Handpicked recipes delivered straight to the recipe detail screen.' },
  { icon: <Calendar className="h-5 w-5" />, tint: 'sage', title: 'Meal Prep Sunday', time: 'Sunday · 9:00 AM', description: 'Batch-friendly recipes for the week ahead.' },
  { icon: <Star className="h-5 w-5" />, tint: 'saffron', title: 'Seasonal Recipes', time: 'Friday · 5:00 PM', description: 'Holiday and seasonal suggestions as they come around.' },
  { icon: <Zap className="h-5 w-5" />, tint: 'plum', title: 'Quick Meals', time: 'Tuesday · 5:00 PM', description: 'Fast, easy recipes for busy weeknights.' },
  { icon: <DollarSign className="h-5 w-5" />, tint: 'sage', title: 'Budget-Friendly', time: 'Wednesday · 6:00 PM', description: 'Affordable meal ideas under $10.' },
  { icon: <Sparkles className="h-5 w-5" />, tint: 'clay', title: 'Keto Spotlight', time: 'Monday · 12:00 PM', description: 'Low-carb recipe recommendations.' },
];

const tintMap: Record<string, string> = {
  clay: 'bg-clay-50 text-clay-600',
  saffron: 'bg-saffron/15 text-saffron-600',
  sage: 'bg-sage/15 text-sage-600',
  plum: 'bg-plum/10 text-plum',
};

const prefMeta: Record<string, { title: string; sub: string }> = {
  weeklyDigest: { title: 'Weekly Recipe Digest', sub: 'Personalized picks every Thursday' },
  newFeatures: { title: 'New Features & Updates', sub: 'Be first to hear what we ship' },
  cookingTips: { title: 'Cooking Tips & Techniques', sub: 'Level up your skills with expert tips' },
  specialOffers: { title: 'Special Offers', sub: 'Exclusive discounts and promotions' },
};

const testimonials = [
  { quote: 'The weekly digest completely changed my meal planning. I look forward to it every Thursday.', name: 'Sarah M.', role: 'Home cook · San Francisco' },
  { quote: 'The seasonal spotlights introduced me to so many new flavors. Love the cooking tips too.', name: 'Mike R.', role: 'Food enthusiast · Austin' },
];

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [prefs, setPrefs] = useState({ weeklyDigest: true, newFeatures: true, cookingTips: true, specialOffers: false });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setEmail('');
    setTimeout(() => setSent(false), 4000);
  };

  const toggle = (k: string) => setPrefs((p) => ({ ...p, [k]: !p[k as keyof typeof p] }));

  return (
    <div>
      {/* Hero */}
      <section className="grain relative isolate overflow-hidden bg-sand-50 pb-14 pt-36 sm:pt-40">
        <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-[26rem] w-[26rem] rounded-full bg-saffron-300/30 blur-[120px]" />
        <div className="container-x text-center">
          <Reveal>
            <span className="eyebrow">Stay inspired</span>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.04] tracking-tightest text-ink sm:text-6xl">
              Never run out of
              <span className="text-gradient italic"> dinner ideas.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-taupe">
              Personalized recipe recommendations through fully customizable notifications — daily
              inspiration, meal prep, seasonal picks and more.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Signup band */}
      <section className="bg-sand-50 pb-8">
        <div className="container-x">
          <Reveal>
            <div className="grain relative isolate overflow-hidden rounded-[2.5rem] bg-ink-900 px-6 py-14 text-center sm:px-12">
              <div className="pointer-events-none absolute -right-10 top-0 h-72 w-72 rounded-full bg-clay-500/25 blur-[120px]" />
              <h2 className="relative font-display text-3xl font-bold text-sand-50 sm:text-4xl">
                Join fellow food lovers
              </h2>
              <p className="relative mx-auto mt-3 max-w-xl text-sand-100/70">
                Free, personalized, delivered every Thursday. Unsubscribe anytime.
              </p>
              <form onSubmit={submit} className="relative mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="flex-1 rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-sand-50 placeholder-sand-100/50 focus:border-clay-400 focus:outline-none focus:ring-4 focus:ring-clay/20"
                />
                <button type="submit" className="btn-primary px-7 py-3.5">Subscribe</button>
              </form>
              {sent && <p className="relative mt-4 text-sm font-medium text-sage-300">You’re in! Check your inbox Thursday.</p>}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Categories */}
      <section className="section bg-sand-50">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Notification categories</span>
            <h2 className="mt-5 font-display text-4xl font-bold text-ink sm:text-5xl">
              Pick exactly what lands on your screen.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 80}>
                <div className="h-full rounded-3xl border border-ink/[0.06] bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="flex items-center gap-3">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${tintMap[c.tint]}`}>
                      {c.icon}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink">{c.title}</h3>
                      <p className="text-xs font-medium text-clay-600">{c.time}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-taupe">{c.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sample notification + preferences */}
      <section className="section bg-sand-100/50">
        <div className="container-x grid items-start gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-ink/[0.06] bg-white shadow-soft">
              <div className="flex items-center justify-between bg-clay-500 px-7 py-6 text-white">
                <div>
                  <h3 className="font-display text-2xl font-bold">Daily Inspiration</h3>
                  <p className="text-white/85">Delivered daily at 2:00 PM</p>
                </div>
                <Bell className="h-7 w-7 text-white/80" />
              </div>
              <div className="p-7">
                <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink/60">Today’s pick</h4>
                <div className="mt-4 flex items-start gap-4 rounded-2xl bg-sand-100/70 p-5">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-clay-500 text-white">
                    <ChefHat className="h-5 w-5" />
                  </span>
                  <div>
                    <h5 className="font-semibold text-ink">Mediterranean Quinoa Bowl</h5>
                    <p className="mt-1 text-sm text-taupe">A healthy, protein-packed meal for busy weekdays.</p>
                    <div className="mt-2 flex items-center gap-3 text-sm text-ink/60">
                      <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 25 min</span>
                      <span>·</span>
                      <span>Easy</span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-taupe">
                  Tap the notification to open this recipe directly in the app — deep linking takes
                  you straight there, no searching.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[2rem] border border-ink/[0.06] bg-white p-8 shadow-soft">
              <h3 className="font-display text-2xl font-bold text-ink">Customize your experience</h3>
              <p className="mt-2 text-taupe">Choose what you want to receive. Change it anytime in settings.</p>
              <div className="mt-6 space-y-5">
                {Object.entries(prefs).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-ink">{prefMeta[key].title}</h4>
                      <p className="text-sm text-taupe">{prefMeta[key].sub}</p>
                    </div>
                    <button
                      onClick={() => toggle(key)}
                      aria-pressed={value}
                      className={`relative inline-flex h-7 w-12 flex-shrink-0 items-center rounded-full transition-colors ${value ? 'bg-clay-500' : 'bg-ink/15'}`}
                    >
                      <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${value ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-sand-50">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">What subscribers say</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="h-full rounded-4xl border border-ink/[0.06] bg-white p-8 shadow-soft">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <StarIcon key={j} className="h-5 w-5 fill-saffron text-saffron" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-lg leading-relaxed text-ink/85">“{t.quote}”</blockquote>
                  <figcaption className="mt-5">
                    <p className="font-semibold text-ink">{t.name}</p>
                    <p className="text-sm text-taupe">{t.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
