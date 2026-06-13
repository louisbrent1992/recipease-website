import { useState } from 'react';
import { Mail, MessageCircle, FileText, ChevronDown, Send } from 'lucide-react';
import Reveal from '../components/Reveal';
import { SUPPORT_EMAIL } from '../lib/links';

const supportOptions = [
  { icon: <Mail className="h-6 w-6" />, tint: 'clay', title: 'Email support', description: 'Detailed help, straight to your inbox.', contact: SUPPORT_EMAIL, meta: 'Replies within 24 hours' },
  { icon: <MessageCircle className="h-6 w-6" />, tint: 'saffron', title: 'Live chat', description: 'Real-time help inside the app.', contact: 'Coming soon', meta: 'Available in app' },
  { icon: <FileText className="h-6 w-6" />, tint: 'sage', title: 'Help center', description: 'Browse our knowledge base anytime.', contact: 'Self-service articles', meta: 'Immediate access' },
];

const tintMap: Record<string, string> = {
  clay: 'bg-clay-50 text-clay-600',
  saffron: 'bg-saffron/15 text-saffron-600',
  sage: 'bg-sage/15 text-sage-600',
};

const faqs = [
  { question: 'How do I import recipes from TikTok or Instagram?', answer: 'Tap “Import,” paste the TikTok or Instagram URL, and the AI extracts ingredients and instructions automatically.' },
  { question: 'How does AI Photo Import work?', answer: 'Tap the camera and snap any recipe — cookbook page, card, or handwriting. OCR digitizes the text and structures it into a recipe.' },
  { question: 'Can I use RecipEase offline?', answer: 'Yes. All saved recipes, collections and your discover cache are available without an internet connection.' },
  { question: 'What is the AI Kitchen Assistant?', answer: 'It’s “cook with what’s in my fridge.” List your ingredients and the AI Chef generates a recipe to help reduce food waste.' },
  { question: 'How do I cancel my subscription?', answer: 'Cancel anytime in app settings or via the App Store / Play Store. Access continues until the end of your billing period.' },
  { question: 'Is my recipe data secure?', answer: 'Yes. Recipes are encrypted and backed up securely, and we never share your personal recipe data with third parties.' },
];

const Support = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', category: 'general' });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '', category: 'general' });
    setTimeout(() => setSent(false), 4000);
  };

  const field =
    'w-full rounded-2xl border border-ink/10 bg-sand-50 px-4 py-3 text-ink placeholder-ink/40 transition-colors focus:border-clay-400 focus:outline-none focus:ring-4 focus:ring-clay/15';

  return (
    <div>
      {/* Hero */}
      <section className="grain relative isolate overflow-hidden bg-sand-50 pb-14 pt-36 sm:pt-40">
        <div className="pointer-events-none absolute -right-24 top-10 -z-10 h-[26rem] w-[26rem] rounded-full bg-clay-200/40 blur-[120px]" />
        <div className="container-x text-center">
          <Reveal>
            <span className="eyebrow">Here to help</span>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.04] tracking-tightest text-ink sm:text-6xl">
              Stuck on something?
              <span className="text-gradient italic"> We’ve got you.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-taupe">
              Get the help you need to make the most of RecipEase. Real answers, fast.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Options */}
      <section className="bg-sand-50 pb-8">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {supportOptions.map((o, i) => (
            <Reveal key={o.title} delay={i * 80}>
              <div className="h-full rounded-4xl border border-ink/[0.06] bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${tintMap[o.tint]}`}>
                  {o.icon}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">{o.title}</h3>
                <p className="mt-1.5 text-taupe">{o.description}</p>
                <p className="mt-4 font-semibold text-ink">{o.contact}</p>
                <p className="text-sm text-taupe">{o.meta}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section className="section bg-sand-50">
        <div className="container-x max-w-3xl">
          <Reveal className="text-center">
            <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">Send us a message</h2>
            <p className="mx-auto mt-4 max-w-lg text-taupe">
              Can’t find what you need? Tell us about it and we’ll get back to you soon.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={submit} className="mt-10 rounded-[2.25rem] border border-ink/[0.06] bg-white p-8 shadow-soft sm:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink/70">Full name</label>
                  <input id="name" name="name" value={form.name} onChange={update} required placeholder="Your name" className={field} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink/70">Email</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={update} required placeholder="you@example.com" className={field} />
                </div>
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="category" className="mb-2 block text-sm font-medium text-ink/70">Category</label>
                  <select id="category" name="category" value={form.category} onChange={update} className={field}>
                    <option value="general">General question</option>
                    <option value="technical">Technical issue</option>
                    <option value="billing">Billing & subscription</option>
                    <option value="feature">Feature request</option>
                    <option value="bug">Bug report</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-ink/70">Subject</label>
                  <input id="subject" name="subject" value={form.subject} onChange={update} required placeholder="Brief summary" className={field} />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink/70">Message</label>
                <textarea id="message" name="message" rows={6} value={form.message} onChange={update} required placeholder="Tell us what's going on…" className={`${field} resize-none`} />
              </div>
              <div className="mt-7 flex flex-col items-center gap-3">
                <button type="submit" className="btn-primary btn-lg w-full sm:w-auto">
                  <Send className="h-4 w-4" /> Send message
                </button>
                {sent && <p className="text-sm font-medium text-sage-600">Thanks! We’ll be in touch soon.</p>}
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-ink-900 text-sand-100">
        <div className="container-x max-w-3xl">
          <Reveal className="text-center">
            <span className="eyebrow border-white/15 bg-white/5 text-sand-100/70">FAQ</span>
            <h2 className="mt-5 font-display text-4xl font-bold text-sand-50 sm:text-5xl">Quick answers</h2>
          </Reveal>
          <div className="mt-12 space-y-3">
            {faqs.map((faq, i) => {
              const open = openFaq === i;
              return (
                <Reveal key={faq.question}>
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left transition-colors hover:bg-white/[0.06]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-display text-lg font-bold text-sand-50">{faq.question}</h3>
                      <ChevronDown className={`h-5 w-5 flex-shrink-0 text-clay-300 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                    </div>
                    <div className={`grid transition-all duration-300 ${open ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <p className="overflow-hidden text-sand-100/70">{faq.answer}</p>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
