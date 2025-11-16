import React, { useState } from 'react';
import { Mail, Clock, Star, ChefHat, Calendar, Sparkles } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState({
    weeklyDigest: true,
    newFeatures: true,
    cookingTips: true,
    specialOffers: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', { email, preferences });
    setEmail('');
  };

  const handlePreferenceChange = (key: string) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const digestFeatures = [
    {
      icon: <ChefHat className="h-8 w-8 text-orange-500" />,
      title: 'Personalized Recipes',
      description: 'Recipes tailored to your taste preferences and dietary needs'
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      title: 'Trending Dishes',
      description: 'Popular recipes from our community of home chefs'
    },
    {
      icon: <Calendar className="h-8 w-8 text-green-500" />,
      title: 'Seasonal Suggestions',
      description: 'Fresh recipes using seasonal ingredients and flavors'
    },
    {
      icon: <Sparkles className="h-8 w-8 text-purple-500" />,
      title: 'Cooking Tips',
      description: 'Expert tips and techniques to improve your culinary skills'
    }
  ];

  const sampleDigest = [
    {
      title: 'Mediterranean Quinoa Bowl',
      description: 'A healthy, protein-packed meal perfect for busy weekdays',
      time: '25 minutes',
      difficulty: 'Easy'
    },
    {
      title: 'Chocolate Lava Cake',
      description: 'Indulgent dessert that\'s surprisingly simple to make',
      time: '20 minutes',
      difficulty: 'Medium'
    },
    {
      title: 'Thai Green Curry',
      description: 'Aromatic and flavorful curry with fresh vegetables',
      time: '35 minutes',
      difficulty: 'Medium'
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-green-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Weekly Recipe
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"> Digest</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get personalized recipe recommendations, cooking tips, and culinary inspiration delivered to your inbox every week.
          </p>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-12 text-center text-white">
            <div className="space-y-8">
              <div className="space-y-4">
                <Mail className="h-16 w-16 mx-auto text-orange-100" />
                <h2 className="text-4xl font-bold">Join 50,000+ Food Lovers</h2>
                <p className="text-xl text-orange-100 max-w-2xl mx-auto">
                  Subscribe to our weekly digest and never run out of delicious recipe ideas. 
                  It's free, personalized, and delivered every Thursday.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-orange-300"
                  />
                  <button
                    type="submit"
                    className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Digest Features */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">What You'll Get Every Week</h2>
            <p className="text-xl text-gray-600">
              Our smart technology curates the perfect mix of recipes and content just for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {digestFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="space-y-4">
                  <div className="flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Digest */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Sample Weekly Digest</h2>
            <p className="text-xl text-gray-600">
              Here's what a typical RecipEase digest looks like
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">Your Weekly Recipe Digest</h3>
                  <p className="text-orange-100">Thursday, March 7, 2025</p>
                </div>
                <Mail className="h-8 w-8 text-orange-100" />
              </div>
            </div>
            
            <div className="p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">This Week's Recommended Recipes</h4>
                  <div className="space-y-4">
                    {sampleDigest.map((recipe, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="bg-orange-500 text-white p-2 rounded-full">
                          <ChefHat className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900">{recipe.title}</h5>
                          <p className="text-gray-600 text-sm mb-2">{recipe.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{recipe.time}</span>
                            </div>
                            <span>•</span>
                            <span>{recipe.difficulty}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">💡 Pro Tip of the Week</h4>
                  <p className="text-gray-600">
                    Add a splash of acid (lemon juice, vinegar, or wine) to your dishes just before serving 
                    to brighten flavors and make them pop!
                  </p>
                </div>

                <div className="border-t pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">🥬 Seasonal Ingredient Spotlight</h4>
                  <p className="text-gray-600">
                    Spring asparagus is at its peak! Try grilling it with olive oil and lemon zest for a simple, 
                    elegant side dish that celebrates the season.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Preferences */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Customize Your Experience</h2>
            <p className="text-lg text-gray-600">
              Choose what type of content you'd like to receive
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              {Object.entries(preferences).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {key === 'weeklyDigest' && 'Weekly Recipe Digest'}
                      {key === 'newFeatures' && 'New Features & Updates'}
                      {key === 'cookingTips' && 'Cooking Tips & Techniques'}
                      {key === 'specialOffers' && 'Special Offers & Promotions'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {key === 'weeklyDigest' && 'Get personalized recipe recommendations every Thursday'}
                      {key === 'newFeatures' && 'Be the first to know about new RecipEase features'}
                      {key === 'cookingTips' && 'Improve your culinary skills with expert tips'}
                      {key === 'specialOffers' && 'Receive exclusive discounts and promotions'}
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange(key)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      value ? 'bg-orange-500' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        value ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">What Our Subscribers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "The weekly digest has completely transformed my meal planning. I look forward to it every Thursday!"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Sarah M.</p>
                  <p className="text-gray-600 text-sm">Home Chef, San Francisco</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "The seasonal ingredient spotlights have introduced me to so many new flavors. Love the cooking tips too!"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Mike R.</p>
                  <p className="text-gray-600 text-sm">Food Enthusiast, Austin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;