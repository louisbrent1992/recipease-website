import { useState } from 'react';
import { Check, Star, Crown, Zap, Gift, Infinity as InfinityIcon, Brain, BookOpen, ChevronDown, ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import StoreButtons from '../components/StoreButtons';

const freeTier = {
  features: [
    '5 free recipe imports',
    '5 free recipe generations',
    'Unlimited recipe discovery',
    'Basic recipe organization',
    'Standard recipe search',
    'Smart notifications',
    'Credits never expire',
  ],
  limitations: ['Ad supported', 'Limited to 5 free credits', 'Standard support'],
};

const bundles = [
  { name: 'Quick Import Pack', icon: <Gift className="h-5 w-5" />, price: 2.49, description: '15 recipe imports', features: ['15 recipe import credits', 'One-time purchase', 'Credits never expire'], popular: false },
  { name: 'Ad-Free', icon: <Zap className="h-5 w-5" />, price: 4.99, description: 'Permanent ad removal', features: ['Permanent ad removal', 'One-time purchase', 'No expiration'], popular: false },
  { name: '25 Recipe Imports', icon: <BookOpen className="h-5 w-5" />, price: 3.99, description: '25 import credits', features: ['25 recipe import credits', 'One-time purchase', 'Credits never expire'], popular: false },
  { name: '25 Recipe Generations', icon: <Brain className="h-5 w-5" />, price: 3.99, description: '25 generation credits', features: ['25 recipe generation credits', 'One-time purchase', 'Credits never expire'], popular: false },
  { name: 'Ad-Free + 25 Imports', icon: <Crown className="h-5 w-5" />, price: 7.99, description: 'Ad removal + 25 imports', features: ['Permanent ad removal', '25 recipe import credits', 'One-time purchase'], popular: false },
  { name: 'Ad-Free + 25 Generations', icon: <Crown className="h-5 w-5" />, price: 9.99, description: 'Ad removal + 25 generations', features: ['Permanent ad removal', '25 recipe generation credits', 'One-time purchase'], popular: false },
  { name: 'Ultimate Bundle', icon: <Crown className="h-5 w-5" />, price: 11.99, description: 'Best value — save 27%', features: ['Permanent ad removal', '25 recipe import credits', '25 recipe generation credits', 'Total: 50 credits', 'One-time purchase'], popular: true },
];

const subscriptions = [
  {
    name: 'Premium Monthly', icon: <Crown className="h-5 w-5" />, price: { monthly: 6.99, yearly: null }, description: 'Perfect for regular cooking',
    features: ['7-day free trial: UNLIMITED imports & generations', 'After trial: 25 import credits / month', 'After trial: 25 generation credits / month', 'Ad-free experience', 'Monthly credit refresh'],
    popular: false, badge: null as string | null,
  },
  {
    name: 'Premium Yearly', icon: <Crown className="h-5 w-5" />, price: { monthly: null, yearly: 44.99 }, description: 'Best value — save 46%',
    features: ['7-day free trial: UNLIMITED imports & generations', '300 import + 300 generation credits / year', 'Ad-free experience', 'Only $3.75/month equivalent'],
    popular: true, badge: 'SAVE 46%',
  },
  {
    name: 'Premium Unlimited Monthly', icon: <InfinityIcon className="h-5 w-5" />, price: { monthly: 19.99, yearly: null }, description: 'For power users',
    features: ['Unlimited recipe imports', 'Unlimited recipe generations', 'Ad-free experience', 'No credit limits', 'Cook as much as you want'],
    popular: false, badge: null,
  },
  {
    name: 'Premium Unlimited Yearly', icon: <InfinityIcon className="h-5 w-5" />, price: { monthly: null, yearly: 79.99 }, description: 'Best unlimited — save 67%',
    features: ['Unlimited recipe imports', 'Unlimited recipe generations', 'Ad-free experience', 'Only $6.67/month equivalent'],
    popular: false, badge: 'SAVE 67%',
  },
];

const faqs = [
  { question: 'What is the welcome bonus?', answer: 'A 7-day free trial with UNLIMITED recipe imports and generations (no credit limits) when you start a premium subscription. This is separate from the 5 free imports and 5 free generations all new users get on signup.' },
  { question: 'Can I use import credits for generations or vice versa?', answer: 'No. Import credits and generation credits are separate and cannot be interchanged. Import credits only import recipes; generation credits only power AI generation.' },
  { question: 'Do one-time purchase credits expire?', answer: 'Never. All one-time (bundle) credits stay in your account until you use them.' },
  { question: 'What happens during the 7-day free trial?', answer: 'You get UNLIMITED imports and generations with no limits or deductions. After the trial ends, your plan’s credit limits apply.' },
  { question: 'Can I cancel anytime?', answer: 'Yes. Cancel whenever you like — access continues until the end of your current billing period.' },
  { question: 'What payment methods do you accept?', answer: 'All major cards, PayPal and Google Pay, processed securely through the App Store and Google Play.' },
  { question: 'Can I change my plan?', answer: 'Yes — upgrade or downgrade anytime. Changes take effect at your next billing cycle.' },
  { question: 'Do subscriptions auto-renew?', answer: 'Yes, to keep access uninterrupted. Cancel anytime and you keep access through the current period.' },
];

const Pricing = () => {
  const [showBundles, setShowBundles] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      {/* Hero */}
      <section className="grain relative isolate overflow-hidden bg-sand-50 pb-12 pt-36 sm:pt-40">
        <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-[26rem] w-[26rem] rounded-full bg-saffron-300/30 blur-[120px]" />
        <div className="container-x text-center">
          <Reveal>
            <span className="eyebrow">Simple pricing</span>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.04] tracking-tightest text-ink sm:text-6xl">
              Start free.
              <span className="text-gradient italic"> Pay only when you’re hooked.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-taupe">
              Begin with 5 imports and 5 generations. Then choose one-time credits or a
              subscription that matches how you cook.
            </p>

            <div className="mt-9 inline-flex rounded-full border border-ink/10 bg-white p-1.5 shadow-soft">
              <button
                onClick={() => setShowBundles(false)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${!showBundles ? 'bg-ink-900 text-sand-50' : 'text-ink/60 hover:text-ink'}`}
              >
                Subscriptions
              </button>
              <button
                onClick={() => setShowBundles(true)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${showBundles ? 'bg-ink-900 text-sand-50' : 'text-ink/60 hover:text-ink'}`}
              >
                One-time purchases
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Free tier */}
      <section className="bg-sand-50 pb-8 pt-10">
        <div className="container-x">
          <Reveal>
            <div className="grid items-center gap-8 rounded-[2.25rem] border border-ink/[0.06] bg-white p-8 shadow-soft lg:grid-cols-[1.1fr_1fr] sm:p-10">
              <div>
                <div className="flex items-center gap-2 text-clay-600">
                  <Star className="h-5 w-5 fill-clay-500 text-clay-500" />
                  <span className="text-xs font-semibold uppercase tracking-[0.16em]">Free forever to try</span>
                </div>
                <h2 className="mt-3 font-display text-4xl font-bold text-ink">Free</h2>
                <p className="mt-2 text-taupe">No credit card required — the whole kitchen, on the house to start.</p>
                <div className="mt-6"><StoreButtons size={52} /></div>
                <p className="mt-4 text-xs text-taupe">
                  Heads up: upgrade later and your first 7 days are unlimited imports &amp; generations.
                </p>
              </div>
              <div className="rounded-3xl bg-sand-100/70 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink/60">What you get</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {freeTier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ink/85">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage-600" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Plans */}
      <section className="section bg-sand-50 pt-12">
        <div className="container-x">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              {showBundles ? 'One-time purchases' : 'Premium subscriptions'}
            </h2>
            <p className="mt-3 text-taupe">
              {showBundles
                ? 'Buy credits and features that never expire. Perfect for occasional use.'
                : 'Monthly credit refresh, ad-free, and a 7-day unlimited free trial.'}
            </p>
          </Reveal>

          {showBundles ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {bundles.map((b, i) => (
                <Reveal key={b.name} delay={(i % 3) * 80}>
                  <div
                    className={`relative flex h-full flex-col rounded-4xl border p-7 transition-all duration-300 ${
                      b.popular
                        ? 'border-clay-300 bg-white shadow-lift ring-2 ring-clay-200'
                        : 'border-ink/[0.06] bg-white shadow-soft hover:-translate-y-1 hover:shadow-lift'
                    }`}
                  >
                    {b.popular && (
                      <span className="absolute -top-3 left-7 rounded-full bg-clay-500 px-3.5 py-1 text-xs font-semibold text-white">
                        Best value
                      </span>
                    )}
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-clay-50 text-clay-600">
                      {b.icon}
                    </span>
                    <h3 className="mt-5 font-display text-xl font-bold text-ink">{b.name}</h3>
                    <p className="mt-1 text-sm text-taupe">{b.description}</p>
                    <p className="mt-4 font-display text-4xl font-bold text-ink">${b.price}</p>
                    <ul className="mt-5 flex-1 space-y-2.5">
                      {b.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-ink/80">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage-600" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6"><StoreButtons size={46} /></div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {subscriptions.map((p, i) => {
                const perMonth = p.price.monthly ?? (p.price.yearly ? p.price.yearly / 12 : 0);
                return (
                  <Reveal key={p.name} delay={(i % 2) * 80}>
                    <div
                      className={`relative flex h-full flex-col rounded-4xl border p-8 transition-all duration-300 ${
                        p.popular
                          ? 'border-clay-300 bg-white shadow-lift ring-2 ring-clay-200'
                          : 'border-ink/[0.06] bg-white shadow-soft hover:-translate-y-1 hover:shadow-lift'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-clay-50 text-clay-600">
                          {p.icon}
                        </span>
                        {p.badge && (
                          <span className="rounded-full bg-sage/15 px-3 py-1 text-xs font-semibold text-sage-600">
                            {p.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-5 font-display text-2xl font-bold text-ink">{p.name}</h3>
                      <p className="mt-1 text-sm text-taupe">{p.description}</p>
                      <div className="mt-4 flex items-baseline gap-1.5">
                        <span className="font-display text-4xl font-bold text-ink">${perMonth.toFixed(2)}</span>
                        <span className="text-taupe">/month</span>
                      </div>
                      {p.price.yearly && (
                        <p className="mt-1 text-sm text-taupe">${p.price.yearly}/year billed annually</p>
                      )}
                      <ul className="mt-6 flex-1 space-y-3">
                        {p.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-sm text-ink/80">
                            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage-600" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-7"><StoreButtons size={48} /></div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-sand-100/50">
        <div className="container-x max-w-3xl">
          <Reveal className="text-center">
            <span className="eyebrow">Questions</span>
            <h2 className="mt-5 font-display text-4xl font-bold text-ink sm:text-5xl">Good to know</h2>
          </Reveal>

          <div className="mt-12 space-y-3">
            {faqs.map((faq, i) => {
              const open = openFaq === i;
              return (
                <Reveal key={faq.question}>
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full rounded-3xl border border-ink/[0.06] bg-white p-6 text-left shadow-soft transition-shadow hover:shadow-lift"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-display text-lg font-bold text-ink">{faq.question}</h3>
                      <ChevronDown
                        className={`h-5 w-5 flex-shrink-0 text-clay-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                      />
                    </div>
                    <div
                      className={`grid transition-all duration-300 ${open ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <p className="overflow-hidden text-taupe">{faq.answer}</p>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-sand-50">
        <div className="container-x">
          <Reveal>
            <div className="grain relative isolate overflow-hidden rounded-[2.5rem] bg-ink-900 px-6 py-16 text-center sm:px-12 sm:py-20">
              <div className="pointer-events-none absolute -right-10 top-0 h-72 w-72 rounded-full bg-clay-500/25 blur-[120px]" />
              <h2 className="relative font-display text-4xl font-bold text-sand-50 sm:text-5xl">
                Ready to start cooking?
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-lg text-sand-100/70">
                Download free and get 5 imports + 5 generations to play with today.
              </p>
              <div className="relative mt-8 flex justify-center"><StoreButtons size={56} /></div>
              <a href="/features" className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-clay-300 hover:text-clay-200">
                See everything you get <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
