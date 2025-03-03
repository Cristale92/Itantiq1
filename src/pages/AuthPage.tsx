import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would authenticate the user
    if (isLogin) {
      alert('Login successful!');
    } else {
      alert('Account created successfully!');
    }
  };

  return (
    <div className="bg-stone-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white p-8 border border-stone-200 rounded-lg">
          <h1 className="text-2xl font-serif font-medium text-stone-900 mb-6 text-center">
            {isLogin ? 'Sign In' : 'Create Account'}
          </h1>

          <div>
            {isLogin ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="password" className="block text-sm font-medium text-stone-700">Password</label>
                    <button type="button" className="text-sm text-amber-800 hover:text-amber-900">
                      Forgot password?
                    </button>
                  </div>
                  <input
                    type="password"
                    id="password"
                    required
                    className="w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    className="h-4 w-4 text-amber-800 focus:ring-amber-500 border-stone-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-stone-600">
                    Remember me
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-amber-800 text-white rounded-md font-medium hover:bg-amber-900 transition-colors"
                >
                  Sign In
                </button>

                <div className="mt-6 text-center">
                  <p className="text-sm text-stone-600">
                    Don't have an account?{' '}
                    <button
                      type="button"
                      className="text-amber-800 hover:text-amber-900 font-medium"
                      onClick={() => setIsLogin(false)}
                    >
                      Create one
                    </button>
                  </p>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-stone-700 mb-1">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-stone-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-stone-700 mb-1">Password</label>
                  <input
                    type="password"
                    id="password"
                    required
                    className="w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    placeholder="••••••••"
                  />
                  <p className="mt-1 text-xs text-stone-500">
                    Password must be at least 8 characters long and include a number and a special character.
                  </p>
                </div>

                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-amber-800 focus:ring-amber-500 border-stone-300 rounded"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-stone-600">
                    <span>
                      I agree to the{' '}
                      <Link to="/terms" className="text-amber-800 hover:text-amber-900">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="text-amber-800 hover:text-amber-900">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-amber-800 text-white rounded-md font-medium hover:bg-amber-900 transition-colors"
                >
                  Create Account
                </button>

                <div className="mt-6 text-center">
                  <p className="text-sm text-stone-600">
                    Already have an account?{' '}
                    <button
                      type="button"
                      className="text-amber-800 hover:text-amber-900 font-medium"
                      onClick={() => setIsLogin(true)}
                    >
                      Login
                    </button>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;