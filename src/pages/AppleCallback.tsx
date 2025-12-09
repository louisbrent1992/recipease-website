import React, { useEffect, useState } from 'react';
import { Apple, CheckCircle, XCircle, Loader } from 'lucide-react';

const AppleCallback = () => {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    const error = urlParams.get('error');

    if (error) {
      setStatus('error');
      setMessage(getErrorMessage(error));
      return;
    }

    if (code && state) {
      // Process the authorization code
      handleAppleSignIn(code, state);
    } else {
      setStatus('error');
      setMessage('Missing required parameters for Apple Sign In');
    }
  }, []);

  const getErrorMessage = (error: string) => {
    switch (error) {
      case 'user_cancelled_authorize':
        return 'Sign in was cancelled. You can close this window and try again.';
      case 'invalid_request':
        return 'Invalid request. Please try signing in again.';
      case 'invalid_client':
        return 'Invalid client configuration. Please contact support.';
      case 'invalid_grant':
        return 'Invalid authorization grant. Please try signing in again.';
      case 'unsupported_response_type':
        return 'Unsupported response type. Please contact support.';
      default:
        return 'An error occurred during sign in. Please try again.';
    }
  };

  const handleAppleSignIn = async (code: string, state: string) => {
    try {
      // In a real implementation, you would send this to your backend
      // For now, we'll simulate the process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate successful authentication
      setStatus('success');
      setMessage('Successfully signed in with Apple! Redirecting to the app...');
      
      // Redirect to app after a delay
      setTimeout(() => {
        // Try to open the app with a deep link
        window.location.href = 'recipease://auth/success';
        
        // Fallback: redirect to app store if deep link fails
        setTimeout(() => {
          window.location.href = 'https://play.google.com/store/apps/details?id=com.recipease.kitchen';
        }, 1000);
      }, 3000);
      
    } catch (error) {
      setStatus('error');
      setMessage('Failed to complete sign in. Please try again.');
    }
  };

  const handleRetry = () => {
    // Redirect back to the app to retry sign in
    window.location.href = 'recipease://auth/retry';
    
    // Fallback: redirect to app store
    setTimeout(() => {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.recipease.kitchen';
    }, 1000);
  };

  const handleCloseWindow = () => {
    // Try to close the window (works if opened by the app)
    if (window.opener) {
      window.close();
    } else {
      // Fallback: redirect to homepage
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mb-6">
            <div className="bg-black rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Apple className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Apple Sign In</h1>
            <p className="text-gray-600">Completing your authentication...</p>
          </div>

          <div className="mb-8">
            {status === 'loading' && (
              <div className="space-y-4">
                <Loader className="h-12 w-12 text-theme-primary mx-auto animate-spin" />
                <p className="text-gray-600">Processing your sign in...</p>
              </div>
            )}

            {status === 'success' && (
              <div className="space-y-4">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
                <div className="space-y-2">
                  <p className="text-green-600 font-semibold">Sign In Successful!</p>
                  <p className="text-gray-600 text-sm">{message}</p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="space-y-4">
                <XCircle className="h-12 w-12 text-red-500 mx-auto" />
                <div className="space-y-2">
                  <p className="text-red-600 font-semibold">Sign In Failed</p>
                  <p className="text-gray-600 text-sm">{message}</p>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-3">
            {status === 'error' && (
              <button
                onClick={handleRetry}
                className="w-full bg-gradient-to-r from-theme-primary to-theme-primary-dark text-white py-3 px-6 rounded-full font-semibold hover:from-theme-primary-dark hover:to-theme-primary transition-all duration-200"
              >
                Try Again
              </button>
            )}
            
            <button
              onClick={handleCloseWindow}
              className="w-full border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-full font-semibold hover:border-theme-primary hover:text-theme-primary transition-all duration-200"
            >
              {status === 'success' ? 'Continue to App' : 'Close'}
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Having trouble? Contact our support team at{' '}
              <a href="mailto:support@recipease.kitchen" className="text-theme-primary hover:underline">
                support@recipease.kitchen
              </a>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Powered by{' '}
            <span className="font-semibold text-theme-primary">RecipEase</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppleCallback;