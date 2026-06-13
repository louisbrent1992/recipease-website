import { Heart, Users, Target, Globe, ChefHat, ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import StoreButtons from '../components/StoreButtons';
import { COMPANY_EMAIL } from '../lib/links';

const capabilities = [
  { word: 'Scan', label: 'cookbooks & cards' },
  { word: 'Import', label: 'TikTok & Reels' },
  { word: 'Generate', label: 'from your fridge' },
  { word: 'Organize', label: 'smart collections' },
];

const values = [
  { icon: <Heart className="h-6 w-6" />, tint: 'clay', title: 'Joy in cooking', description: 'Cooking should feel creative and easy — for every skill level, every night of the week.' },
  { icon: <Users className="h-6 w-6" />, tint: 'saffron', title: 'Cooks first', description: 'We build from real feedback. The people in the kitchen shape what we make next.' },
  { icon: <Target className="h-6 w-6" />, tint: 'sage', title: 'Useful AI', description: 'We use AI to remove drudgery — typing, sorting, searching — not to add gimmicks.' },
  { icon: <Globe className="h-6 w-6" />, tint: 'plum', title: 'For everyone', description: 'Great food and recipe knowledge should be available to anyone, anywhere.' },
];

const tintMap: Record<string, string> = {
  clay: 'bg-clay-50 text-clay-600',
  saffron: 'bg-saffron/15 text-saffron-600',
  sage: 'bg-sage/15 text-sage-600',
  plum: 'bg-plum/10 text-plum',
};

const timeline = [
  { year: '2023', title: 'The idea', description: 'Founded to make cooking more accessible and enjoyable with AI.' },
  { year: '2024', title: 'Beta launch', description: 'Shipped core AI recipe generation and import features.' },
  { year: '2024', title: 'Community growth', description: 'Grew an early community of cooks and added the weekly digest from their feedback.' },
  { year: '2025', title: 'RecipEase Kitchen', description: 'Rebranded with AI Photo Import and TikTok integration.' },
  { year: '2026', title: 'Going global', description: 'Expanding worldwide with localized content and more languages.' },
];

const About = () => (
  <div>
    {/* Hero */}
    <section className="grain relative isolate overflow-hidden bg-sand-50 pb-16 pt-36 sm:pt-40">
      <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-[26rem] w-[26rem] rounded-full bg-clay-200/40 blur-[120px]" />
      <div className="container-x text-center">
        <Reveal>
          <span className="eyebrow">Our story</span>
          <h1 className="mx-auto mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.04] tracking-tightest text-ink sm:text-6xl">
            We’re turning the chaos of recipes into
            <span className="text-gradient italic"> one calm kitchen.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-taupe">
            RecipEase brings physical cookbooks and social-media inspiration together into a
            single, intelligent place to cook from.
          </p>
        </Reveal>
      </div>
    </section>

    {/* Mission + stats */}
    <section className="section bg-sand-50">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <h2 className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">Our mission</h2>
          <p className="mt-5 text-lg leading-relaxed text-taupe">
            We believe everyone deserves great home-cooked meals — regardless of experience or how
            busy life gets. Our platform changes how people discover, create and organize recipes.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-taupe">
            We’re not just building an app. We’re building a culinary companion that learns your
            tastes, respects your diet, and helps you cook with confidence.
          </p>
          <div className="mt-7 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-clay-500 text-white">
              <ChefHat className="h-6 w-6" />
            </span>
            <span className="font-display text-lg font-semibold text-ink">
              Empowering home cooks worldwide
            </span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[2.25rem] border border-ink/[0.06] bg-white p-8 shadow-soft sm:p-10">
            <h3 className="font-display text-2xl font-bold text-ink">What you can do</h3>
            <div className="mt-6 grid grid-cols-2 gap-6">
              {capabilities.map((c) => (
                <div key={c.word} className="rounded-3xl bg-sand-100/70 p-6 text-center">
                  <div className="font-display text-3xl font-bold text-gradient">{c.word}</div>
                  <div className="mt-1 text-sm text-taupe">{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Values */}
    <section className="section bg-ink-900 text-sand-100">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow border-white/15 bg-white/5 text-sand-100/70">What we value</span>
          <h2 className="mt-5 font-display text-4xl font-bold text-sand-50 sm:text-5xl">
            The principles behind every build.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 4) * 80}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:bg-white/[0.06]">
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tintMap[v.tint]}`}>
                  {v.icon}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-sand-50">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-100/65">{v.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section bg-sand-50">
      <div className="container-x max-w-3xl">
        <Reveal className="text-center">
          <span className="eyebrow">The journey</span>
          <h2 className="mt-5 font-display text-4xl font-bold text-ink sm:text-5xl">From idea to global kitchen</h2>
        </Reveal>

        <div className="relative mt-14 space-y-8 before:absolute before:left-[1.65rem] before:top-2 before:h-full before:w-px before:bg-ink/10">
          {timeline.map((t, i) => (
            <Reveal key={t.title + i} delay={i * 60}>
              <div className="relative flex gap-6">
                <span className="z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-clay-500 font-display text-sm font-bold text-white shadow-soft">
                  {t.year}
                </span>
                <div className="flex-1 rounded-3xl border border-ink/[0.06] bg-white p-6 shadow-soft">
                  <h3 className="font-display text-xl font-bold text-ink">{t.title}</h3>
                  <p className="mt-1.5 text-taupe">{t.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Company */}
    <section className="section bg-sand-100/50">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <span className="eyebrow">The team</span>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Built by Advent Hub Solutions
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-taupe">
            RecipEase is proudly built by Advent Hub Solutions, a technology company focused on
            intelligent consumer apps that make everyday life simpler and more enjoyable.
          </p>
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink/60">Contact</h4>
              <a href={`mailto:${COMPANY_EMAIL}`} className="mt-1 block text-clay-600 hover:text-clay-700">
                {COMPANY_EMAIL}
              </a>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink/60">Based in</h4>
              <p className="mt-1 text-ink/80">San Francisco, California</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[2.25rem] border border-ink/[0.06] bg-white p-10 text-center shadow-soft">
            <img src="/logo.png" alt="RecipEase" className="mx-auto h-20 w-20 rounded-3xl shadow-soft" />
            <h3 className="mt-5 font-display text-2xl font-bold text-ink">Advent Hub Solutions</h3>
            <p className="mt-2 text-taupe">The company behind RecipEase Kitchen</p>
            <div className="mt-6 rounded-2xl bg-sand-100/70 p-5 text-left text-sm leading-relaxed text-ink/75">
              A technology company creating innovative, AI-powered solutions that make everyday
              tasks more efficient and a lot more enjoyable.
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* CTA */}
    <section className="section bg-sand-50">
      <div className="container-x">
        <Reveal>
          <div className="grain relative isolate overflow-hidden rounded-[2.5rem] bg-ink-900 px-6 py-16 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -left-10 top-0 h-72 w-72 rounded-full bg-saffron/20 blur-[120px]" />
            <h2 className="relative font-display text-4xl font-bold text-sand-50 sm:text-5xl">
              Join the culinary revolution
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-sand-100/70">
              Be part of a community changing the way the world cooks — one recipe at a time.
            </p>
            <div className="relative mt-8 flex justify-center"><StoreButtons size={56} /></div>
            <a href="/support" className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-clay-300 hover:text-clay-200">
              Get in touch <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default About;
