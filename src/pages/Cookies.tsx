import React, { useState } from 'react';
import { Cookie, Settings, Info, Shield } from 'lucide-react';

const Cookies = () => {
  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    analytics: true,
    marketing: false,
    personalization: true
  });

  const handleSettingChange = (key: string) => {
    if (key === 'essential') return; // Essential cookies cannot be disabled

    setCookieSettings(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const cookieTypes = [
    {
      icon: <Shield className="h-8 w-8 text-theme-accent" />,
      title: 'Essential Cookies',
      description: 'Required for the website to function properly',
      purpose: 'Authentication, security, and core functionality',
      required: true,
      key: 'essential'
    },
    {
      icon: <Info className="h-8 w-8 text-theme-secondary" />,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website',
      purpose: 'Usage statistics, performance monitoring, and improvements',
      required: false,
      key: 'analytics'
    },
    {
      icon: <Cookie className="h-8 w-8 text-theme-primary" />,
      title: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements and track campaigns',
      purpose: 'Targeted advertising and marketing effectiveness',
      required: false,
      key: 'marketing'
    },
    {
      icon: <Settings className="h-8 w-8 text-theme-purple" />,
      title: 'Personalization Cookies',
      description: 'Remember your preferences and provide customized experience',
      purpose: 'User preferences, language settings, and personalized content',
      required: false,
      key: 'personalization'
    }
  ];

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Last updated: March 1, 2025
          </p>
        </div>
      </section>

      {/* Cookie Overview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="text-center mb-8">
              <Cookie className="h-16 w-16 text-theme-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website.
                They help us provide you with a better experience by remembering your preferences and
                understanding how you use our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Types and Settings */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cookie Settings</h2>
            <p className="text-lg text-gray-600">
              Control which cookies you want to allow. Essential cookies cannot be disabled.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {cookieTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {type.icon}
                    <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                  </div>
                  <div className="flex items-center">
                    {type.required ? (
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                        Required
                      </span>
                    ) : (
                      <button
                        onClick={() => handleSettingChange(type.key)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${cookieSettings[type.key as keyof typeof cookieSettings] ? 'bg-theme-primary' : 'bg-gray-300'
                          }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${cookieSettings[type.key as keyof typeof cookieSettings] ? 'translate-x-6' : 'translate-x-1'
                            }`}
                        />
                      </button>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 mb-3">{type.description}</p>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>Purpose:</strong> {type.purpose}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-theme-primary to-theme-primary-dark text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-theme-primary-dark hover:to-theme-primary transition-all duration-200 transform hover:scale-105 shadow-lg">
              Save Cookie Preferences
            </button>
          </div>
        </div>
      </section>

      {/* Detailed Cookie Information */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  RecipEase Kitchen uses cookies to enhance your browsing experience and provide personalized services.
                  Here's how we use different types of cookies:
                </p>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>Authentication:</strong> Keep you logged in to your account</li>
                  <li><strong>Preferences:</strong> Remember your settings and preferences</li>
                  <li><strong>Analytics:</strong> Understand how you use our website to improve it</li>
                  <li><strong>Security:</strong> Protect against fraud and unauthorized access</li>
                  <li><strong>Performance:</strong> Optimize loading times and functionality</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We may also use third-party services that set their own cookies:
                </p>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>Google Analytics:</strong> Website traffic and usage analysis</li>
                  <li><strong>Social Media:</strong> Social sharing and login functionality</li>
                  <li><strong>Payment Processors:</strong> Secure payment processing</li>
                  <li><strong>Customer Support:</strong> Live chat and support services</li>
                </ul>
                <p>
                  These third parties have their own privacy policies and cookie practices,
                  which we encourage you to review.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  You can control cookies in several ways:
                </p>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies</li>
                  <li><strong>Our Cookie Settings:</strong> Use the controls above to manage our cookies</li>
                  <li><strong>Opt-out Tools:</strong> Use industry opt-out tools for advertising cookies</li>
                  <li><strong>Mobile Settings:</strong> Adjust tracking settings on mobile devices</li>
                </ul>
                <p>
                  Please note that disabling certain cookies may affect the functionality of our website.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Retention</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Different cookies have different lifespans:
                </p>
                <ul className="list-disc pl-4 space-y-2">
                  <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain for a set period (typically 1-2 years)</li>
                  <li><strong>Authentication Cookies:</strong> Expire when you log out or after inactivity</li>
                  <li><strong>Preference Cookies:</strong> Remain until you change your settings</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices
                  or for other operational, legal, or regulatory reasons. We will notify you of any
                  material changes by posting the updated policy on our website.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <div className="space-y-4 text-gray-600">
                <p>If you have any questions about our use of cookies, please contact us:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> privacy@recipease.kitchen</p>
                  <p><strong>Company:</strong> Advent Hub Solutions</p>
                  <p><strong>Address:</strong> San Francisco, California</p>
                </div>
              </div>
            </div>

            <div className="border-t pt-8">
              <p className="text-sm text-gray-500 text-center">
                This Cookie Policy is effective as of March 1, 2025, and applies to all visitors
                and users of the RecipEase Kitchen website and services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;