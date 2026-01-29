import React, { useState } from 'react';
import { Mail, Clock, Star, ChefHat, Calendar, Sparkles, Zap, DollarSign, Bell } from 'lucide-react';

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

  const notificationCategories = [
    {
      icon: <ChefHat className="h-8 w-8 text-theme-primary" />,
      title: 'Daily Inspiration',
      time: '2:00 PM daily',
      description: 'Handpicked recipes delivered daily, navigating directly to recipe detail screen'
    },
    {
      icon: <Calendar className="h-8 w-8 text-theme-accent" />,
      title: 'Meal Prep Sunday',
      time: 'Sunday 9:00 AM',
      description: 'Batch-friendly recipes for weekly meal planning'
    },
    {
      icon: <Star className="h-8 w-8 text-theme-neutral" />,
      title: 'Seasonal Recipes',
      time: 'Friday 5:00 PM',
      description: 'Holiday and seasonal recipe suggestions'
    },
    {
      icon: <Zap className="h-8 w-8 text-theme-purple" />,
      title: 'Quick Meals',
      time: 'Tuesday 5:00 PM',
      description: 'Fast, easy recipes for busy weeknights'
    },
    {
      icon: <DollarSign className="h-8 w-8 text-theme-secondary" />,
      title: 'Budget-Friendly',
      time: 'Wednesday 6:00 PM',
      description: 'Affordable meal suggestions under $10'
    },
    {
      icon: <Sparkles className="h-8 w-8 text-theme-primary" />,
      title: 'Keto Spotlight',
      time: 'Monday 12:00 PM',
      description: 'Low-carb recipe recommendations'
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
            Smart
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-primary to-theme-primary-dark"> Notifications</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Receive personalized recipe recommendations through customizable notification categories. Daily inspiration, meal prep, seasonal recipes, and more - all fully customizable.
          </p>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-theme-primary to-theme-primary-dark rounded-2xl p-12 text-center text-white">
            <div className="space-y-8">
              <div className="space-y-4">
                <Mail className="h-16 w-16 mx-auto text-white/80" />
                <h2 className="text-4xl font-bold">Join 50,000+ Food Lovers</h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
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
                    className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-theme-primary/30"
                  />
                  <button
                    type="submit"
                    className="bg-white text-theme-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Notification Categories */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Notification Categories</h2>
            <p className="text-xl text-gray-600">
              Customize which notifications you want to receive. Each category uses optimized search tags for better discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notificationCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex justify-center">{category.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
                      <p className="text-sm text-theme-primary font-medium">{category.time}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Notifications */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">How Notifications Work</h2>
            <p className="text-xl text-gray-600">
              Notifications navigate directly to relevant screens with deep linking. Server-controlled content ensures fresh recommendations.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-theme-primary to-theme-primary-dark p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">Daily Inspiration</h3>
                  <p className="text-white/90">Delivered daily at 2:00 PM</p>
                </div>
                <Bell className="h-8 w-8 text-white/80" />
              </div>
            </div>

            <div className="p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Today's Recommended Recipe</h4>
                  <div className="space-y-4">
                    {sampleDigest.slice(0, 1).map((recipe, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="bg-theme-primary text-white p-2 rounded-full">
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
                  <p className="text-sm text-gray-500 mt-4">
                    Tap the notification to open this recipe directly in the app.
                  </p>
                </div>

                <div className="border-t pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Customizable Preferences</h4>
                  <p className="text-gray-600">
                    Enable or disable any notification category in your app settings. Each category uses
                    optimized search tags for better recipe discovery.
                  </p>
                </div>

                <div className="border-t pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Deep Linking</h4>
                  <p className="text-gray-600">
                    Notifications navigate directly to relevant screens - recipe details, discovery, or collections.
                    No need to search for the content manually.
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
                      {key === 'newFeatures' && 'Be the first to know about new RecipEase Kitchen features'}
                      {key === 'cookingTips' && 'Improve your culinary skills with expert tips'}
                      {key === 'specialOffers' && 'Receive exclusive discounts and promotions'}
                    </p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange(key)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${value ? 'bg-theme-primary' : 'bg-gray-300'
                      }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${value ? 'translate-x-6' : 'translate-x-1'
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