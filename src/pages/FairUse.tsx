import React from 'react';
import { Scale, Shield, Users, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const FairUse = () => {
  const usageGuidelines = [
    {
      icon: <CheckCircle className="h-8 w-8 text-theme-accent" />,
      title: 'Acceptable Use',
      items: [
        'Personal recipe creation and management',
        'Importing recipes for personal use',
        'Sharing recipes with family and friends',
        'Using smart features for meal planning',
        'Creating shopping lists from recipes',
        'Educational and non-commercial use'
      ]
    },
    {
      icon: <XCircle className="h-8 w-8 text-red-500" />,
      title: 'Prohibited Use',
      items: [
        'Commercial redistribution of recipes without permission',
        'Bulk downloading or scraping of content',
        'Creating competing recipe applications',
        'Violating copyright of imported recipes',
        'Sharing account credentials with others',
        'Using the service for illegal activities'
      ]
    }
  ];

  const limits = [
    {
      tier: 'Free Account',
      limits: [
        '5 smart recipe generations per month',
        'Up to 10 imported recipes',
        'Basic recipe organization',
        'Standard support response time'
      ]
    },
    {
      tier: 'Premium Account',
      limits: [
        'Unlimited smart recipe generations',
        'Unlimited recipe imports',
        'Advanced features access',
        'Priority support'
      ]
    },
    {
      tier: 'Family Account',
      limits: [
        'All Premium features',
        'Up to 6 family members',
        'Shared collections',
        'Collaborative features'
      ]
    }
  ];

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Fair Use Policy</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Last updated: March 1, 2025
          </p>
        </div>
      </section>

      {/* Policy Overview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="text-center mb-8">
              <Scale className="h-16 w-16 text-theme-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Fair Use Commitment</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                RecipEase is designed to enhance your cooking experience while respecting the rights of content creators 
                and maintaining a sustainable service for all users. This Fair Use Policy outlines acceptable usage 
                guidelines and limitations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Usage Guidelines</h2>
            <p className="text-lg text-gray-600">
              Understanding what's allowed and what's not when using RecipEase
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {usageGuidelines.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-3 mb-6">
                  {section.icon}
                  <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        section.title === 'Acceptable Use' ? 'bg-theme-accent' : 'bg-red-500'
                      }`}></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Account Limits */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Account Limits & Tiers</h2>
            <p className="text-lg text-gray-600">
              Usage limits vary by account type to ensure fair access for all users
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {limits.map((tier, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tier.tier}</h3>
                <ul className="space-y-3">
                  {tier.limits.map((limit, limitIndex) => (
                    <li key={limitIndex} className="flex items-start space-x-3">
                      <div className="bg-theme-primary rounded-full p-1 mt-1.5">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{limit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Policy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Recipe Import Guidelines</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  When importing recipes from external sources, users must:
                </p>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Only import recipes for personal, non-commercial use</li>
                  <li>Respect copyright and attribution requirements of original creators</li>
                  <li>Not redistribute imported recipes without proper permission</li>
                  <li>Comply with the terms of service of source platforms</li>
                  <li>Report any copyright violations to our support team</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Smart-Generated Content</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our smart recipe generation feature is subject to fair use principles:
                </p>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Generated recipes are for personal use and inspiration</li>
                  <li>Users may share smart-generated recipes with proper attribution to RecipEase</li>
                  <li>Commercial use of smart-generated content requires explicit permission</li>
                  <li>We reserve the right to limit smart feature usage to prevent abuse</li>
                  <li>Quality and accuracy of smart-generated content may vary</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Service Limitations</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  To maintain service quality and availability:
                </p>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Rate limits apply to API requests and feature usage</li>
                  <li>Excessive usage may result in temporary restrictions</li>
                  <li>Automated or bulk operations are prohibited without permission</li>
                  <li>Service availability is not guaranteed 100% of the time</li>
                  <li>We may implement additional limits as needed</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Content Sharing & Community</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  When sharing content within the RecipEase community:
                </p>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Only share content you have the right to distribute</li>
                  <li>Respect other users' privacy and intellectual property</li>
                  <li>Follow community guidelines and maintain respectful interactions</li>
                  <li>Report inappropriate content or behavior</li>
                  <li>Understand that shared content may be visible to other users</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Enforcement & Violations</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Violations of this Fair Use Policy may result in:
                </p>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Warning notifications and usage guidance</li>
                  <li>Temporary restrictions on specific features</li>
                  <li>Account suspension or termination</li>
                  <li>Legal action in cases of severe violations</li>
                  <li>Cooperation with law enforcement when required</li>
                </ul>
                <p>
                  We reserve the right to investigate suspected violations and take appropriate action 
                  to protect our service and community.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Reporting Violations</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  If you encounter violations of this policy or have concerns about content:
                </p>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Report issues through our in-app reporting system</li>
                  <li>Contact our support team with detailed information</li>
                  <li>Provide evidence when reporting copyright violations</li>
                  <li>Allow reasonable time for investigation and response</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Policy Updates</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  This Fair Use Policy may be updated periodically to reflect:
                </p>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Changes in service features and capabilities</li>
                  <li>Legal and regulatory requirements</li>
                  <li>Community feedback and evolving best practices</li>
                  <li>Technical improvements and limitations</li>
                </ul>
                <p>
                  Users will be notified of significant policy changes through the app or email.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
              <div className="space-y-4 text-gray-600">
                <p>For questions about this Fair Use Policy or to report violations:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> fairuse@recipease.kitchen</p>
                  <p><strong>Support:</strong> support@recipease.kitchen</p>
                  <p><strong>Company:</strong> Advent Hub Solutions</p>
                  <p><strong>Address:</strong> San Francisco, California</p>
                </div>
              </div>
            </div>

            <div className="border-t pt-8">
              <p className="text-sm text-gray-500 text-center">
                This Fair Use Policy is effective as of March 1, 2025, and applies to all users 
                of the RecipEase application and services. By using RecipEase, you agree to comply 
                with these guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-theme-primary to-theme-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Questions About Fair Use?</h2>
            <p className="text-xl text-white/90">
              Our support team is here to help clarify any questions about acceptable usage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-theme-primary px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Contact Support
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-theme-primary transition-all duration-200">
                View Terms of Service
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FairUse;