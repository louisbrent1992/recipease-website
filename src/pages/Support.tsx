import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, FileText, Search, HelpCircle } from 'lucide-react';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      category: 'general'
    });
  };

  const supportOptions = [
    {
      icon: <Mail className="h-12 w-12 text-theme-primary" />,
      title: 'Email Support',
      description: 'Get help via email with detailed responses',
      contact: 'support@recipease.kitchen',
      responseTime: 'Within 24 hours'
    },
    {
      icon: <MessageCircle className="h-12 w-12 text-theme-accent" />,
      title: 'Live Chat (Coming Soon)',
      description: 'Chat with our support team in real-time',
      contact: 'Available in app',
      responseTime: 'Instant response'
    },
    {
      icon: <FileText className="h-12 w-12 text-theme-secondary" />,
      title: 'Help Center',
      description: 'Browse our comprehensive knowledge base',
      contact: 'Self-service articles',
      responseTime: 'Immediate access'
    }
  ];

  const commonQuestions = [
    {
      question: 'How do I import recipes from Instagram?',
      answer: 'Open the RecipEase app, tap the "Import" button, and paste the Instagram post URL. Our AI will automatically extract and format the recipe for you.'
    },
    {
      question: 'Can I use RecipEase offline?',
      answer: 'Yes! All your saved recipes are available offline. However, you\'ll need an internet connection for AI recipe generation and importing new recipes.'
    },
    {
      question: 'How does the AI recipe generator work?',
      answer: 'Our smart technology analyzes your preferences, dietary restrictions, and available ingredients to create personalized recipes. The more you use it, the better it gets at understanding your taste.'
    },
    {
      question: 'Can I share my recipes with family?',
      answer: 'Absolutely! You can share individual recipes or create shared collections with family members. Premium users can also create collaborative shopping lists.'
    },
    {
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel your subscription anytime in the app settings or by contacting our support team. Your access will continue until the end of your billing period.'
    },
    {
      question: 'Is my recipe data secure?',
      answer: 'Yes, we take data security seriously. All your recipes are encrypted and backed up securely. We never share your personal recipe data with third parties.'
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-green-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            We're Here to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-primary to-theme-primary-dark"> Help</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get the support you need to make the most of RecipEase. Our team is ready to assist you with any questions or issues.
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Multiple Ways to Get Support</h2>
            <p className="text-xl text-gray-600">
              Choose the support method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center">
                <div className="space-y-4">
                  <div className="flex justify-center">{option.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{option.title}</h3>
                  <p className="text-gray-600">{option.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">{option.contact}</p>
                    <p className="text-sm text-gray-500">{option.responseTime}</p>
                  </div>
                  <button className="bg-gradient-to-r from-theme-primary to-theme-primary-dark text-white px-6 py-3 rounded-full font-semibold hover:from-theme-primary-dark hover:to-theme-primary transition-all duration-200 transform hover:scale-105">
                    Get Help
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Send Us a Message</h2>
            <p className="text-xl text-gray-600">
              Can't find what you're looking for? Send us a detailed message and we'll get back to you soon.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-colors"
                  >
                    <option value="general">General Question</option>
                    <option value="technical">Technical Issue</option>
                    <option value="billing">Billing & Subscription</option>
                    <option value="feature">Feature Request</option>
                    <option value="bug">Bug Report</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-colors"
                    placeholder="Brief description of your inquiry"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-colors resize-none"
                  placeholder="Please provide as much detail as possible about your question or issue..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-theme-primary to-theme-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-theme-primary-dark hover:to-theme-primary transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about RecipEase
            </p>
          </div>

          <div className="space-y-6">
            {commonQuestions.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-full flex-shrink-0">
                    <HelpCircle className="h-5 w-5 text-theme-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-gradient-to-r from-theme-primary to-theme-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">Need More Help?</h2>
            <p className="text-xl text-white/90">
              Explore our comprehensive help resources or connect with our community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-theme-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Browse Help Center
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-theme-primary transition-all duration-200">
                Join Community Forum
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;