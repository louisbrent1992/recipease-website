import React, { useState } from 'react';
import { Download, Image, Video, Smartphone, Monitor, Tablet } from 'lucide-react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Media', icon: <Image className="h-4 w-4" /> },
    { id: 'screenshots', name: 'Screenshots', icon: <Smartphone className="h-4 w-4" /> },
    { id: 'features', name: 'Feature Graphics', icon: <Monitor className="h-4 w-4" /> },
    { id: 'branding', name: 'Branding', icon: <Tablet className="h-4 w-4" /> }
  ];

  const mediaItems = [
    {
      id: 1,
      category: 'screenshots',
      title: 'Recipe Import Screen',
      description: 'Seamlessly import recipes from social media and websites',
      type: 'image',
      url: 'https://images.pexels.com/photos/4099235/pexels-photo-4099235.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      category: 'screenshots',
      title: 'AI Recipe Generator',
      description: 'Generate personalized recipes with AI technology',
      type: 'image',
      url: 'https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      category: 'screenshots',
      title: 'Recipe Collection',
      description: 'Organize and manage your recipe collection',
      type: 'image',
      url: 'https://images.pexels.com/photos/4099236/pexels-photo-4099236.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      category: 'features',
      title: 'Smart Shopping List',
      description: 'Automatically generated shopping lists from recipes',
      type: 'image',
      url: 'https://images.pexels.com/photos/4099134/pexels-photo-4099134.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      category: 'features',
      title: 'Weekly Digest',
      description: 'Personalized recipe recommendations every week',
      type: 'image',
      url: 'https://images.pexels.com/photos/4099141/pexels-photo-4099141.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      category: 'branding',
      title: 'RecipEase Logo',
      description: 'Official RecipEase brand logo and variations',
      type: 'image',
      url: 'https://images.pexels.com/photos/4099237/pexels-photo-4099237.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 7,
      category: 'features',
      title: 'Cross-Platform Sync',
      description: 'Access recipes across all your devices',
      type: 'image',
      url: 'https://images.pexels.com/photos/4099239/pexels-photo-4099239.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 8,
      category: 'screenshots',
      title: 'Recipe Detail View',
      description: 'Beautiful, interactive recipe display',
      type: 'image',
      url: 'https://images.pexels.com/photos/4099240/pexels-photo-4099240.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeCategory);

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-green-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Media
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"> Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore RecipEase through screenshots, feature graphics, and brand assets. 
            See how our beautiful design meets powerful functionality.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white text-gray-900 p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                        <Download className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">App Walkthrough</h2>
            <p className="text-xl text-gray-600">
              See RecipEase in action with our comprehensive app demonstration
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Video className="h-16 w-16 text-white mx-auto" />
                <h3 className="text-2xl font-bold text-white">Coming Soon</h3>
                <p className="text-gray-300">Full app walkthrough video will be available here</p>
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200">
                  Watch Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Media Kit */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-12 text-center text-white">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Download Media Kit</h2>
              <p className="text-xl text-orange-100">
                Get high-resolution logos, screenshots, and brand assets for press and media coverage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Download High-Res Assets</span>
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-500 transition-all duration-200">
                  Brand Guidelines
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;