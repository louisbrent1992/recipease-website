import React from 'react';
import { Brain, BookOpen, Smartphone, Users, Calendar, Search, Bell, FolderOpen, Edit, Image, Zap, Shield, Globe, Download, Settings, Star, Camera, Wifi } from 'lucide-react';

const Features = () => {
  const coreFeatures = [
    {
      icon: <Camera className="h-16 w-16 text-theme-primary" />,
      title: "AI Photo Import",
      description: "Transform your physical recipe collection into a digital cookbook. Snap a photo of old recipe cards, cookbook pages, or notes.",
      details: [
        "Digitize handwritten recipes instantly",
        "Scan cookbook pages with OCR technology",
        "Automatic ingredient and instruction extraction",
        "Preserve original recipe images",
        "Edit transcribed text for accuracy"
      ]
    },
    {
      icon: <Smartphone className="h-16 w-16 text-theme-accent" />,
      title: "Save TikTok & Social Media",
      description: "Never lose a viral recipe again. Use RecipEase Kitchen as your TikTok recipe saver and Instagram organizer.",
      details: [
        "Import from TikTok, Instagram Reels, YouTube",
        "Support for Food Network, BBC Food, AllRecipes",
        "Automatic data extraction from links",
        "Convert cooking videos to text recipes",
        "Keep social media inspiration organized"
      ]
    },
    {
      icon: <Brain className="h-16 w-16 text-theme-secondary" />,
      title: "AI Kitchen Assistant",
      description: "Stuck with random ingredients? Use our 'Cook with what's in my fridge' feature to generate custom meal plans.",
      details: [
        "Generate recipes from available ingredients",
        "Custom meal planning based on leftovers",
        "Reduce food waste with smart suggestions",
        "Specify dietary restrictions and preferences",
        "Adjust serving sizes and difficulty"
      ]
    },
    {
      icon: <FolderOpen className="h-16 w-16 text-theme-purple" />,
      title: "Ultimate Recipe Organizer",
      description: "Build your own digital recipe book. Create custom collections for 'Meal Prep,' 'Keto,' or 'Family Favorites.'",
      details: [
        "Unlimited custom smart collections",
        "Separate scanned notes from social imports",
        "Automatic icon and color assignment",
        "Organize by meal type, cuisine, or occasion",
        "New paginated collection views"
      ]
    },
    {
      icon: <Wifi className="h-16 w-16 text-theme-primary" />,
      title: "Offline Access",
      description: "Your personal recipe archive works anywhere, even without WiFi. Access your recipes anytime.",
      details: [
        "Full offline recipe access",
        "Local storage for recipes and collections",
        "Syncs automatically when online",
        "View ingredients and instructions offline",
        "Perfect for kitchens with poor signal"
      ]
    },
    {
      icon: <Bell className="h-16 w-16 text-theme-accent" />,
      title: "Smart Notifications",
      description: "Receive personalized recipe recommendations, meal prep reminders, and seasonal inspiration.",
      details: [
        "Daily cooking inspiration",
        "Meal Prep Sunday reminders",
        "Seasonal recipe suggestions",
        "Budget-friendly meal alerts",
        "Customizable notification preferences"
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
            Discover all the powerful features that make RecipEase Kitchen the ultimate recipe scanner and organizer.
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
                Get 5 free recipe imports and 5 free recipe generations when you sign up for RecipEase Kitchen.
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
