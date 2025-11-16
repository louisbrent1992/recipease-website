import React, { useState } from 'react';
import { Check, X, Star, Crown, Zap } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Free',
      icon: <Star className="h-8 w-8 text-blue-500" />,
      price: { monthly: 0, yearly: 0 },
      description: 'Perfect for casual home cooks getting started',
      features: [
        'Basic smart recipe generation (5 per month)',
        'Import up to 10 recipes',
        'Basic recipe organization',
        'Standard recipe search',
        'Community recipe access',
        'Basic shopping list'
      ],
      limitations: [
        'Limited AI generations',
        'Basic import features only',
        'Ads supported',
        'Standard support'
      ],
      cta: 'Get Started Free',
      popular: false,
      color: 'border-gray-200'
    },
    {
      name: 'Premium',
      icon: <Crown className="h-8 w-8 text-orange-500" />,
      price: { monthly: 9.99, yearly: 99.99 },
      description: 'Everything you need for serious cooking',
      features: [
        'Unlimited smart recipe generation',
        'Unlimited recipe imports',
        'Advanced recipe organization',
        'Smart categorization & tags',
        'Weekly personalized digest',
        'Smart shopping lists with store mapping',
        'Cross-platform sync',
        'Ad-free experience',
        'Priority customer support',
        'Advanced search & filters',
        'Meal planning tools',
        'Nutritional analysis'
      ],
      limitations: [],
      cta: 'Start Premium Trial',
      popular: true,
      color: 'border-orange-500'
    },
    {
      name: 'Family',
      icon: <Zap className="h-8 w-8 text-purple-500" />,
      price: { monthly: 14.99, yearly: 149.99 },
      description: 'Perfect for families and cooking enthusiasts',
      features: [
        'Everything in Premium',
        'Up to 6 family accounts',
        'Shared recipe collections',
        'Family meal planning',
        'Collaborative shopping lists',
        'Kid-friendly recipe filters',
        'Family cooking challenges',
        'Advanced dietary management',
        'Premium recipe collections',
        'Early access to new features'
      ],
      limitations: [],
      cta: 'Start Family Trial',
      popular: false,
      color: 'border-purple-500'
    }
  ];

  const faqs = [
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.'
    },
    {
      question: 'Is there a free trial for premium plans?',
      answer: 'Yes! We offer a 7-day free trial for both Premium and Family plans. No credit card required to start.'
    },
    {
      question: 'What happens to my recipes if I downgrade?',
      answer: 'Your recipes are always yours. If you downgrade, you\'ll keep all your imported recipes but may lose access to premium features.'
    },
    {
      question: 'Can I switch between monthly and yearly billing?',
      answer: 'Absolutely! You can change your billing frequency in your account settings at any time.'
    },
    {
      question: 'Do you offer student discounts?',
      answer: 'Yes, we offer a 50% discount for students with valid student ID. Contact our support team to apply.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and Google Pay through secure payment processing.'
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-green-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Simple,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"> Transparent</span>
            <br />Pricing
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Choose the plan that fits your cooking style. Start free, upgrade when you're ready.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-lg font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isYearly ? 'bg-orange-500' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                Save 17%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl border-2 ${plan.color} ${
                  plan.popular ? 'ring-4 ring-orange-200 scale-105' : ''
                } transition-all duration-300 hover:shadow-2xl`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
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
                        ${isYearly ? plan.price.yearly : plan.price.monthly}
                        {plan.price.monthly > 0 && (
                          <span className="text-lg text-gray-500 font-normal">
                            /{isYearly ? 'year' : 'month'}
                          </span>
                        )}
                      </div>
                      {isYearly && plan.price.monthly > 0 && (
                        <div className="text-sm text-gray-500">
                          ${(plan.price.yearly / 12).toFixed(2)}/month billed annually
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-gray-900">Features included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {plan.limitations.length > 0 && (
                      <>
                        <h4 className="font-semibold text-gray-900 mt-6">Limitations:</h4>
                        <ul className="space-y-3">
                          {plan.limitations.map((limitation, limitationIndex) => (
                            <li key={limitationIndex} className="flex items-start space-x-3">
                              <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  <button
                    className={`w-full py-4 px-6 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-lg'
                        : 'border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about RecipEase pricing and billing.
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
            <h2 className="text-4xl font-bold text-gray-900">Ready to Transform Your Cooking?</h2>
            <p className="text-xl text-gray-600">
              Join thousands of home chefs who have already discovered the joy of cooking with RecipEase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;