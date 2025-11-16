import React from 'react';
import { Brain, BookOpen, Smartphone, Users, Calendar, Search, Bell, FolderOpen, Edit, Image, Zap, Shield, Globe, Download, Settings, Star } from 'lucide-react';

const Features = () => {
  const coreFeatures = [
    {
      icon: <Brain className="h-16 w-16 text-theme-primary" />,
      title: "AI-Powered Recipe Generation",
      description: "Generate unique, personalized recipes using advanced AI technology. Full control over ingredients, dietary restrictions, cuisine types, cooking time, and difficulty level.",
      details: [
        "Custom recipe creation with flexible input options",
        "Specify ingredients, dietary restrictions, and cuisine types",
        "Default random values if no inputs provided",
        "Smart recipe parsing and automatic data extraction",
        "Full recipe customization before generation"
      ]
    },
    {
      icon: <BookOpen className="h-16 w-16 text-theme-accent" />,
      title: "Recipe Import from Social Media",
      description: "Seamlessly import recipes from Instagram, TikTok, YouTube, Food Network, BBC Food, AllRecipes, and many more popular cooking websites.",
      details: [
        "Multi-platform support (Instagram, TikTok, YouTube, etc.)",
        "One-tap import from any app via share sheet",
        "Automatic data extraction (ingredients, instructions, images)",
        "URL import - paste recipe links directly",
        "Deep linking integration with social media",
        "Manual editing of imported recipes"
      ]
    },
    {
      icon: <Search className="h-16 w-16 text-theme-secondary" />,
      title: "Advanced Recipe Discovery",
      description: "Browse thousands of recipes with powerful search and filtering capabilities. Find exactly what you're looking for with smart tag systems.",
      details: [
        "Curated recipe library from various sources",
        "Search by ingredients, dietary tags, cuisine type",
        "Filter by difficulty level and cooking time",
        "Smart tag system with hyphen/space normalization",
        "Multi-tag filtering and phrase matching",
        "Random recipe discovery for inspiration"
      ]
    },
    {
      icon: <FolderOpen className="h-16 w-16 text-theme-purple" />,
      title: "Smart Recipe Collections",
      description: "Create unlimited custom collections with intelligent organization. Automatic color and icon assignment based on collection names.",
      details: [
        "Unlimited custom recipe collections",
        "Organize by meal type, cuisine, occasion, or custom categories",
        "Automatic keyword-based icon and color assignment",
        "Color-coded visual organization system",
        "Long-press context menu for quick actions",
        "Add recipes to multiple collections"
      ]
    },
    {
      icon: <Bell className="h-16 w-16 text-theme-primary" />,
      title: "Smart Notifications",
      description: "Receive personalized recipe recommendations through customizable notification categories. Daily inspiration, meal prep, seasonal recipes, and more.",
      details: [
        "Daily Inspiration (2:00 PM daily)",
        "Meal Prep Sunday (Sunday 9:00 AM)",
        "Seasonal Recipes (Friday 5:00 PM)",
        "Quick Meals (Tuesday 5:00 PM)",
        "Budget-Friendly (Wednesday 6:00 PM)",
        "Keto Spotlight (Monday 12:00 PM)",
        "Fully customizable notification preferences"
      ]
    },
    {
      icon: <Edit className="h-16 w-16 text-theme-accent" />,
      title: "Recipe Management",
      description: "Full control over your recipe collection with comprehensive editing, organization, and management features.",
      details: [
        "Complete recipe CRUD operations",
        "Edit ingredients, instructions, cooking times",
        "Add/remove tags and update images",
        "Duplicate detection to prevent duplicates",
        "Two-column layout for tablets and desktops",
        "Recipe details view with full information"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: <Image className="h-8 w-8 text-theme-primary" />,
      title: "Image Management",
      description: "High-quality recipe photos with refresh capability and Google Image Search integration"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-theme-secondary" />,
      title: "Cross-Platform Sync",
      description: "Access recipes across iOS and Android with cloud synchronization"
    },
    {
      icon: <Settings className="h-8 w-8 text-theme-purple" />,
      title: "Responsive Design",
      description: "Mobile-first design optimized for smartphones, tablets, and desktops"
    },
    {
      icon: <Zap className="h-8 w-8 text-theme-accent" />,
      title: "Offline Support",
      description: "Access saved recipes without internet connection"
    },
    {
      icon: <Shield className="h-8 w-8 text-theme-primary" />,
      title: "Secure Authentication",
      description: "Email/password, Google Sign-In, and Apple Sign-In support"
    },
    {
      icon: <Globe className="h-8 w-8 text-theme-secondary" />,
      title: "Dynamic UI",
      description: "Server-controlled updates without app releases"
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-green-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Complete Feature
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-primary to-theme-primary-dark"> Overview</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover all the powerful features that make RecipEase the ultimate recipe management app for home cooks and food enthusiasts.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Core Recipe Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create, import, discover, and organize recipes
            </p>
          </div>

          <div className="space-y-20">
            {coreFeatures.map((feature, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    {feature.icon}
                    <h2 className="text-3xl font-bold text-gray-900">{feature.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <div className="bg-theme-primary rounded-full p-1 mt-1.5">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-theme-background to-theme-neutral rounded-2xl p-8 shadow-lg">
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <div className="text-center space-y-4">
                        <div className="flex justify-center">{feature.icon}</div>
                        <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                        <div className="bg-gray-50 rounded-lg p-4 text-left">
                          <div className="text-sm text-gray-600">
                            {feature.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Additional Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More powerful tools to enhance your cooking experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="space-y-4">
                  <div className="flex justify-center">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-sm text-center">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Tier Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-theme-primary to-theme-primary-dark rounded-2xl p-12 text-center text-white">
            <div className="space-y-6">
              <Star className="h-16 w-16 mx-auto text-white/90" />
              <h2 className="text-3xl font-bold">Start Free Today</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Get 5 free recipe imports and 5 free recipe generations when you sign up. 
                No credit card required. Credits never expire.
              </p>
              <button className="bg-white text-theme-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 mx-auto">
                <Download className="h-5 w-5" />
                <span>Download Free</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
