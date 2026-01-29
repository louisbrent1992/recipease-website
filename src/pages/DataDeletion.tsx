import React from 'react';
import { Trash2, Mail, AlertTriangle } from 'lucide-react';

const DataDeletion = () => {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Data Deletion Instructions</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            According to the Facebook Platform rules and other privacy regulations, we provide the following instructions for users who wish to delete their data.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Trash2 className="h-6 w-6 text-theme-primary mr-2" />
                How to Delete Your Data
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  If you wish to delete your RecipEase Kitchen account and all associated data, you can do so directly within the mobile application. Please follow these steps:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Open the <strong>RecipEase Kitchen</strong> app on your mobile device.</li>
                  <li>Go to your <strong>Profile</strong> tab.</li>
                  <li>Tap on the <strong>Settings</strong> icon (gear icon).</li>
                  <li>Select <strong>Manage Account</strong> or <strong>Privacy Settings</strong>.</li>
                  <li>Tap on <strong>Delete Account</strong>.</li>
                  <li>Confirm your choice when prompted.</li>
                </ol>
                <p className="mt-4 text-sm text-gray-500 bg-gray-50 p-4 rounded">
                  <strong>Note:</strong> This action is irreversible. Once confirmed, your account, recipes, and preferences will be permanently deleted from our servers.
                </p>
              </div>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Mail className="h-6 w-6 text-theme-secondary mr-2" />
                Alternative Method (Email Request)
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  If you are unable to access the app or prefer to request deletion via email, please contact our support team:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="mb-2"><strong>Email:</strong> <a href="mailto:privacy@recipease.kitchen" className="text-theme-primary hover:underline">privacy@recipease.kitchen</a></p>
                  <p className="mb-2"><strong>Subject:</strong> Data Deletion Request</p>
                  <p><strong>Body:</strong> Please include your account email address and a statement requesting the deletion of your account data.</p>
                </div>
                <p>
                  We will process your request and delete your data within 30 days of receiving your email. You will receive a confirmation once the process is complete.
                </p>
              </div>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-theme-neutral mr-2" />
                Data Retention
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Upon deletion, your personal information, recipe data, and preferences are removed from our active databases.
                  Some data may remain in our backups for a limited period (up to 90 days) as part of our disaster recovery procedures,
                  after which it will be permanently overwritten.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default DataDeletion;

