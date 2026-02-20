import { Star, Smartphone, Brain, BookOpen, Camera, Wifi, Layout } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Camera className="h-12 w-12 text-theme-primary" />,
      title: "AI Photo Import",
      description: "Transform your physical recipe collection into a digital cookbook. Snap a photo of cards, pages, or handwritten notes—our OCR does the rest!"
    },
    {
      icon: <Smartphone className="h-12 w-12 text-theme-accent" />,
      title: "Save TikTok & Social Media",
      description: "Never lose a viral recipe again. Import directly from TikTok and Instagram Reels. AI extracts ingredients and instructions instantly."
    },
    {
      icon: <Brain className="h-12 w-12 text-theme-secondary" />,
      title: "AI Kitchen Assistant",
      description: "Stuck with random ingredients? Use 'Cook with what's in my fridge' to generate custom meal plans and reduce food waste."
    },
    {
      icon: <BookOpen className="h-12 w-12 text-theme-purple" />,
      title: "Ultimate Recipe Organizer",
      description: "Build your digital recipe book with Smart Collections. Automatically sort scanned notes, social imports, and family favorites."
    },
    {
      icon: <Wifi className="h-12 w-12 text-theme-primary" />,
      title: "Offline Access",
      description: "Your personal recipe archive works anywhere. Access your saved recipes and collections even without an internet connection."
    },
    {
      icon: <Layout className="h-12 w-12 text-theme-secondary" />,
      title: "Smart Features",
      description: "Dietary filters for gluten-free/keto, weekly meal planning, and community imports to see what others are cooking."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Home Chef",
      content: "RecipEase Kitchen has completely transformed how I cook! The AI suggestions are spot-on, and I love how easy it is to import recipes from Instagram.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Food Blogger",
      content: "As a food blogger, I needed a way to organize my recipes efficiently. RecipEase Kitchen is perfect for that and more!",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Busy Mom",
      content: "The weekly digest feature saves me so much time planning meals. My family loves the variety of recipes we try now!",
      rating: 5
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 w-fit">
                  <img src="/logo.png" alt="RecipEase" className="h-12 w-12" />
                  <span className="text-lg font-semibold text-theme-primary">RecipEase Kitchen</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Scan Cookbooks,
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-primary to-theme-primary-dark"> Save TikToks</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Snap photos of cookbooks or import recipes from TikTok & Instagram instantly! Organize your kitchen with the ultimate AI recipe saver and scanner.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://apps.apple.com/us/app/recipease-ai-recipe-scanner/id6748662065?itscg=30200&itsct=apps_box_badge&mttnsubad=6748662065" style={{ display: 'inline-block' }}>
                  <img src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1765238400" alt="Download on the App Store" style={{ width: '246px', height: '82px', verticalAlign: 'middle', objectFit: 'contain' }} />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.recipease.kitchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-block' }}
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" style={{ height: '82px', width: 'auto' }} />
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="font-medium">4.9/5</span>
                </div>
                <div className="h-4 w-px bg-gray-300"></div>
                <span>10,000+ downloads</span>
                <div className="h-4 w-px bg-gray-300"></div>
                <span>Featured on Google Play</span>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-theme-background to-theme-neutral rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-center space-y-4">
                    <div className="bg-theme-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                      <Brain className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">AI Recipe Generator</h3>
                    <p className="text-gray-600">Generate personalized recipes with custom ingredients, dietary restrictions, and preferences</p>
                    <div className="bg-gray-50 rounded-lg p-4 text-left">
                      <div className="text-sm text-gray-500 mb-2">Input: chicken, gluten-free, 30 min</div>
                      <div className="text-sm font-medium text-gray-900">Generated: Gluten-Free Chicken Stir-Fry</div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="absolute -top-4 -right-4 bg-theme-accent text-white p-3 rounded-full shadow-lg">
                <Star className="h-6 w-6 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Everything You Need to Cook Better</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RecipEase Kitchen combines intelligent technology with intuitive design to make cooking more enjoyable and efficient than ever before.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="space-y-4">
                  <div className="flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Loved by Home Chefs Everywhere</h2>
            <p className="text-xl text-gray-600">See what our users have to say about RecipEase Kitchen</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-theme-primary to-theme-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">Ready to Transform Your Cooking?</h2>
            <p className="text-xl text-white/90">
              Join thousands of home chefs who have already discovered the joy of cooking with RecipEase Kitchen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://apps.apple.com/us/app/recipease-ai-recipe-scanner/id6748662065?itscg=30200&itsct=apps_box_badge&mttnsubad=6748662065" style={{ display: 'inline-block' }}>
                <img src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1765238400" alt="Download on the App Store" style={{ width: '246px', height: '82px', verticalAlign: 'middle', objectFit: 'contain' }} />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.recipease.kitchen"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-block' }}
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" style={{ height: '82px', width: 'auto' }} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;