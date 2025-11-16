import React from 'react';
import { Target, Heart, Users, Award, ChefHat, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-12 w-12 text-red-500" />,
      title: 'Passion for Cooking',
      description: 'We believe cooking should be joyful, creative, and accessible to everyone, regardless of skill level.'
    },
    {
      icon: <Users className="h-12 w-12 text-blue-500" />,
      title: 'Community First',
      description: 'Our users are at the heart of everything we do. We build features based on real needs and feedback.'
    },
    {
      icon: <Target className="h-12 w-12 text-green-500" />,
      title: 'Innovation',
      description: 'We harness cutting-edge intelligent technology to solve real problems and enhance the cooking experience.'
    },
    {
      icon: <Globe className="h-12 w-12 text-purple-500" />,
      title: 'Accessibility',
      description: 'Great food and cooking knowledge should be available to everyone, everywhere.'
    }
  ];

  const stats = [
    { number: '100K+', label: 'Active Users' },
    { number: '500K+', label: 'Recipes Created' },
    { number: '50+', label: 'Countries' },
    { number: '4.9', label: 'App Store Rating' }
  ];

  const timeline = [
    {
      year: '2023',
      title: 'The Idea',
      description: 'Founded with a vision to make cooking more accessible and enjoyable using AI technology.'
    },
    {
      year: '2024',
      title: 'Beta Launch',
      description: 'Launched beta version with core AI recipe generation and import features.'
    },
    {
      year: '2024',
      title: 'Community Growth',
      description: 'Reached 10,000 users and introduced weekly digest feature based on user feedback.'
    },
    {
      year: '2025',
      title: 'Global Expansion',
      description: 'Expanded to 50+ countries with localized content and multi-language support.'
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-green-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"> RecipEase</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're on a mission to revolutionize home cooking by making it easier, more creative, 
            and more enjoyable for everyone through intelligent technology.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At RecipEase, we believe that everyone deserves to enjoy delicious, home-cooked meals regardless 
                of their cooking experience or busy lifestyle. Our intelligent platform transforms the way people 
                discover, create, and organize recipes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're not just building an app – we're creating a smart culinary companion that learns your preferences, 
                understands your dietary needs, and helps you become a more confident cook.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-orange-500 text-white p-3 rounded-full">
                  <ChefHat className="h-6 w-6" />
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  Empowering home chefs worldwide
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="space-y-2">
                      <div className="text-3xl font-bold text-orange-500">{stat.number}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="space-y-4">
                  <div className="flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8">
              <div className="text-center space-y-6">
                <div className="bg-orange-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Advent Hub Solutions</h3>
                  <p className="text-gray-600">The company behind RecipEase</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-left">
                  <p className="text-gray-700 text-sm">
                    A technology company focused on creating innovative solutions that make everyday tasks 
                    more efficient and enjoyable through artificial intelligence.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Built by Advent Hub Solutions</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                RecipEase is proudly developed by Advent Hub Solutions, a forward-thinking technology company 
                specializing in intelligent consumer applications. Our team combines deep technical expertise 
                with a passion for solving real-world problems.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Contact Information</h4>
                  <p className="text-gray-600">admin@adventhubsolutions.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Headquarters</h4>
                  <p className="text-gray-600">San Francisco, California</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Journey</h2>
            <p className="text-xl text-gray-600">
              From idea to global platform
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="bg-orange-500 text-white p-3 rounded-full font-bold min-w-[4rem] text-center">
                  {item.year}
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">Join Our Culinary Revolution</h2>
            <p className="text-xl text-orange-100">
              Be part of a community that's transforming the way the world cooks, one recipe at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Download RecipEase
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-500 transition-all duration-200">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;