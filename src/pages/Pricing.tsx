import React, { useState } from 'react';
import { Check, X, Star, Crown, Zap, Gift, Infinity, Brain, BookOpen } from 'lucide-react';

const Pricing = () => {
  const [showBundles, setShowBundles] = useState(false);

  const freeTier = {
    name: 'Free',
    icon: <Star className="h-8 w-8 text-theme-secondary" />,
    price: 0,
    description: 'Perfect for trying RecipEase',
    features: [
      '5 free recipe imports',
      '5 free recipe generations',
      'Access to recipe discovery',
      'Basic recipe organization',
      'Standard recipe search',
      'Smart notifications',
      'Credits never expire'
    ],
    limitations: [
      'Ads supported',
      'Limited to 5 free credits',
      'Standard support'
    ],
    cta: 'Get Started Free',
    popular: false
  };

  const bundles = [
    {
      name: 'Quick Import Pack',
      icon: <Gift className="h-8 w-8 text-theme-primary" />,
      price: 2.49,
      description: '15 recipe imports',
      features: ['15 recipe import credits', 'One-time purchase', 'Credits never expire'],
      cta: 'Buy Now',
      popular: false
    },
    {
      name: 'Ad-Free',
      icon: <Zap className="h-8 w-8 text-theme-accent" />,
      price: 4.99,
      description: 'Permanent ad removal',
      features: ['Permanent ad removal', 'One-time purchase', 'No expiration'],
      cta: 'Buy Now',
      popular: false
    },
    {
      name: '25 Recipe Imports',
      icon: <BookOpen className="h-8 w-8 text-theme-secondary" />,
      price: 3.99,
      description: '25 import credits',
      features: ['25 recipe import credits', 'One-time purchase', 'Credits never expire'],
      cta: 'Buy Now',
      popular: false
    },
    {
      name: '25 Recipe Generations',
      icon: <Brain className="h-8 w-8 text-theme-purple" />,
      price: 3.99,
      description: '25 generation credits',
      features: ['25 recipe generation credits', 'One-time purchase', 'Credits never expire'],
      cta: 'Buy Now',
      popular: false
    },
    {
      name: 'Ad-Free + 25 Imports',
      icon: <Crown className="h-8 w-8 text-theme-primary" />,
      price: 7.99,
      description: 'Ad removal + 25 imports',
      features: ['Permanent ad removal', '25 recipe import credits', 'One-time purchase'],
      cta: 'Buy Now',
      popular: false
    },
    {
      name: 'Ad-Free + 25 Generations',
      icon: <Crown className="h-8 w-8 text-theme-primary" />,
      price: 9.99,
      description: 'Ad removal + 25 generations',
      features: ['Permanent ad removal', '25 recipe generation credits', 'One-time purchase'],
      cta: 'Buy Now',
      popular: false
    },
    {
      name: 'Ultimate Bundle',
      icon: <Crown className="h-8 w-8 text-theme-primary" />,
      price: 11.99,
      description: 'BEST VALUE - Save 27%',
      features: [
        'Permanent ad removal',
        '25 recipe import credits',
        '25 recipe generation credits',
        'Total: 50 credits',
        'One-time purchase'
      ],
      cta: 'Buy Now',
      popular: true
    }
  ];

  const subscriptions = [
    {
      name: 'Premium Monthly',
      icon: <Crown className="h-8 w-8 text-theme-primary" />,
      price: { monthly: 6.99, yearly: null },
      description: 'Perfect for regular cooking',
      features: [
        '7-day free trial: UNLIMITED imports and generations (no credit limits!)',
        'After trial: 25 recipe import credits per month',
        'After trial: 25 recipe generation credits per month',
        'Ad-free experience',
        'Monthly credit refresh',
        'Separate credit types (imports and generations cannot be interchanged)'
      ],
      limitations: [],
      cta: 'Start Free Trial',
      popular: false,
      badge: null
    },
    {
      name: 'Premium Yearly',
      icon: <Crown className="h-8 w-8 text-theme-primary" />,
      price: { monthly: null, yearly: 44.99 },
      description: 'Best value - Save 46%',
      features: [
        '7-day free trial: UNLIMITED imports and generations (no credit limits!)',
        'After trial: 25 recipe import credits per month',
        'After trial: 25 recipe generation credits per month',
        '300 import + 300 generation credits per year',
        'Ad-free experience',
        'Only $3.75/month equivalent',
        'Separate credit types (imports and generations cannot be interchanged)'
      ],
      limitations: [],
      cta: 'Start Free Trial',
      popular: true,
      badge: 'SAVE 46%'
    },
    {
      name: 'Premium Unlimited Monthly',
      icon: <Infinity className="h-8 w-8 text-theme-purple" />,
      price: { monthly: 19.99, yearly: null },
      description: 'Perfect for power users',
      features: [
        'Unlimited recipe imports',
        'Unlimited recipe generations',
        'Ad-free experience',
        'No credit limits',
        'Cook as much as you want'
      ],
      limitations: [],
      cta: 'Start Free Trial',
      popular: false,
      badge: null
    },
    {
      name: 'Premium Unlimited Yearly',
      icon: <Infinity className="h-8 w-8 text-theme-purple" />,
      price: { monthly: null, yearly: 79.99 },
      description: 'Best value for unlimited - Save 67%',
      features: [
        'Unlimited recipe imports',
        'Unlimited recipe generations',
        'Ad-free experience',
        'No credit limits',
        'Only $6.67/month equivalent'
      ],
      limitations: [],
      cta: 'Start Free Trial',
      popular: false,
      badge: 'SAVE 67%'
    }
  ];

  const faqs = [
    {
      question: 'What is the welcome bonus?',
      answer: 'The welcome bonus is the 7-day free trial with UNLIMITED recipe imports and generations (no credit limits or deductions) that you receive when you start a premium subscription. This is separate from the 5 free recipe imports and 5 free recipe generations that all new users receive on signup.'
    },
    {
      question: 'Can I use import credits for generations or vice versa?',
      answer: 'No. Recipe import credits and recipe generation credits are separate and cannot be interchanged. Import credits can only be used for importing recipes, and generation credits can only be used for AI recipe generation.'
    },
    {
      question: 'Do one-time purchase credits expire?',
      answer: 'No! All one-time purchase credits (bundles) never expire. Use them whenever you want.'
    },
    {
      question: 'What happens during the 7-day free trial?',
      answer: 'During the 7-day free trial, you get UNLIMITED recipe imports and generations with no credit limits or deductions. You can import and generate as many recipes as you want during the trial period. After the trial ends, your subscription plan credit limits apply.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and Google Pay through secure payment processing via the App Store and Google Play.'
    },
    {
      question: 'Can I share my subscription with family?',
      answer: 'Yes! Ad-free features are shareable with family members where applicable. Subscription credits are tied to individual accounts.'
    },
    {
      question: 'What happens if my payment fails?',
      answer: 'We offer a 3-day grace period for payment issues. During this time, you\'ll still have access to your subscription. If payment isn\'t resolved, your subscription will be paused.'
    },
    {
      question: 'Can I change my subscription plan?',
      answer: 'Yes! You can upgrade or downgrade your subscription plan anytime. Changes will take effect at your next billing cycle, and you\'ll be charged or credited accordingly.'
    },
    {
      question: 'Do subscriptions auto-renew?',
      answer: 'Yes, subscriptions automatically renew to ensure uninterrupted access. You can cancel anytime, and your subscription will remain active until the end of your current billing period.'
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-green-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Simple,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-primary to-theme-primary-dark"> Transparent</span>
            <br />Pricing
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Start free with 5 imports and 5 generations. Choose one-time purchases or subscriptions that fit your cooking style.
          </p>
          
          {/* Toggle between Bundles and Subscriptions */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <button
              onClick={() => setShowBundles(true)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                showBundles
                  ? 'bg-theme-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              One-Time Purchases
            </button>
            <button
              onClick={() => setShowBundles(false)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                !showBundles
                  ? 'bg-theme-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Subscriptions
            </button>
          </div>
        </div>
      </section>

      {/* Free Tier */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Free</h2>
            <p className="text-lg text-gray-600">No credit card required</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8">
            <div className="text-center space-y-4 mb-8">
              <div className="flex justify-center">{freeTier.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900">{freeTier.name}</h3>
              <p className="text-gray-600">{freeTier.description}</p>
              <div className="text-4xl font-bold text-gray-900">Free</div>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="font-semibold text-gray-900">What You Get:</h4>
              <ul className="space-y-3">
                {freeTier.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-theme-accent mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-theme-background rounded-lg border border-theme-primary/20">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Welcome Bonus:</span> When you upgrade to a premium subscription, you'll receive a 7-day free trial with <span className="font-semibold">UNLIMITED</span> recipe imports and generations (no credit limits!).
                </p>
              </div>
              
              <h4 className="font-semibold text-gray-900 mt-6">Limitations:</h4>
              <ul className="space-y-3">
                {freeTier.limitations.map((limitation, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{limitation}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full py-4 px-6 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 border-2 border-theme-primary text-theme-primary hover:bg-theme-primary hover:text-white">
              {freeTier.cta}
            </button>
          </div>
        </div>
      </section>

      {/* One-Time Purchases (Bundles) */}
      {showBundles && (
        <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold text-gray-900">One-Time Purchases</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Buy credits and features that never expire. Perfect for occasional use.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bundles.map((bundle, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-xl border-2 ${
                    bundle.popular ? 'border-theme-primary ring-4 ring-theme-primary/20' : 'border-gray-200'
                  } transition-all duration-300 hover:shadow-2xl`}
                >
                  {bundle.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-theme-primary to-theme-primary-dark text-white px-6 py-2 rounded-full text-sm font-semibold">
                        BEST VALUE
                      </span>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="text-center space-y-4 mb-6">
                      <div className="flex justify-center">{bundle.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900">{bundle.name}</h3>
                      <p className="text-gray-600 text-sm">{bundle.description}</p>
                      <div className="text-3xl font-bold text-gray-900">
                        ${bundle.price}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {bundle.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-theme-accent mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="w-full py-3 px-6 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 bg-gradient-to-r from-theme-primary to-theme-primary-dark text-white hover:from-theme-primary-dark hover:to-theme-primary">
                      {bundle.cta}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Subscriptions */}
      {!showBundles && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold text-gray-900">Premium Subscriptions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Monthly credit refresh. 7-day free trial with UNLIMITED imports and generations (no credit limits!).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {subscriptions.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-xl border-2 ${
                    plan.popular ? 'border-theme-primary ring-4 ring-theme-primary/20 scale-105' : 'border-gray-200'
                  } transition-all duration-300 hover:shadow-2xl`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-theme-primary to-theme-primary-dark text-white px-6 py-2 rounded-full text-sm font-semibold">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  
                  {plan.badge && (
                    <div className="absolute -top-4 right-4">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="text-center space-y-4 mb-8">
                      <div className="flex justify-center">{plan.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                      <p className="text-gray-600">{plan.description}</p>
                      <div className="space-y-2">
                        <div className="text-4xl font-bold text-gray-900">
                          ${plan.price.monthly || (plan.price.yearly && (plan.price.yearly / 12).toFixed(2))}
                          <span className="text-lg text-gray-500 font-normal">/month</span>
                        </div>
                        {plan.price.yearly && (
                          <div className="text-sm text-gray-500">
                            ${plan.price.yearly}/year billed annually
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <Check className="h-5 w-5 text-theme-accent mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="w-full py-4 px-6 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 bg-gradient-to-r from-theme-primary to-theme-primary-dark text-white hover:from-theme-primary-dark hover:to-theme-primary shadow-lg">
                      {plan.cta}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about RecipEase pricing
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">Ready to Start Cooking?</h2>
            <p className="text-xl text-gray-600">
              Download RecipEase free and get 5 imports + 5 generations to start.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-theme-primary to-theme-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-theme-primary-dark hover:to-theme-primary transition-all duration-200 transform hover:scale-105 shadow-lg">
                Download Free
              </button>
              <button className="border-2 border-theme-primary text-theme-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-theme-primary hover:text-white transition-all duration-200">
                View Features
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
