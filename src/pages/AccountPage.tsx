import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AccountPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('orders');

  // Mock data for orders
  const orders = [
    {
      id: 'ITQ2023-7845',
      date: 'May 15, 2023',
      total: 1403.99,
      status: 'Delivered',
      items: [
        {
          id: '1',
          name: 'Antique Brass Telescope',
          price: 1299.99,
          image: 'https://images.unsplash.com/photo-1594222082337-52204cb50da8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        }
      ]
    },
    {
      id: 'ITQ2023-6932',
      date: 'April 2, 2023',
      total: 2849.50,
      status: 'Delivered',
      items: [
        {
          id: '2',
          name: 'Victorian Mahogany Chair',
          price: 849.99,
          image: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        },
        {
          id: '3',
          name: 'Art Deco Wall Clock',
          price: 599.99,
          image: 'https://images.unsplash.com/photo-1507646227500-4d702b921262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
        }
      ]
    }
  ];

  // Mock data for favorites
  const favorites = [
    {
      id: '1',
      name: 'Antique Brass Telescope',
      price: 1299.99,
      image: 'https://images.unsplash.com/photo-1594222082337-52204cb50da8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Navigation',
      era: '19th Century'
    },
    {
      id: '4',
      name: 'Renaissance Oil Painting',
      price: 3499.99,
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Art',
      era: 'Renaissance'
    }
  ];

  // Mock user info
  const userInfo = {
    name: 'Elizabeth Parker',
    email: 'elizabeth.parker@example.com',
    phone: '+1 (555) 123-4567',
    address: {
      street: '123 Main Street',
      city: 'Boston',
      state: 'MA',
      zipCode: '02108',
      country: 'United States'
    }
  };

  return (
    <div className="bg-stone-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif font-medium text-stone-900 mb-8">My Account</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white border border-stone-200 rounded-lg p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center text-2xl font-serif text-amber-800 mx-auto mb-4">
                  {userInfo.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h2 className="font-medium text-stone-900">{userInfo.name}</h2>
                <p className="text-sm text-stone-600">{userInfo.email}</p>
              </div>

              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center gap-2 ${activeTab === 'orders' ? 'bg-amber-50 text-amber-800' : 'text-stone-700 hover:bg-stone-50'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Orders
                </button>

                <button
                  onClick={() => setActiveTab('favorites')}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center gap-2 ${activeTab === 'favorites' ? 'bg-amber-50 text-amber-800' : 'text-stone-700 hover:bg-stone-50'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Favorites
                </button>

                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center gap-2 ${activeTab === 'profile' ? 'bg-amber-50 text-amber-800' : 'text-stone-700 hover:bg-stone-50'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Profile
                </button>

                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center gap-2 ${activeTab === 'settings' ? 'bg-amber-50 text-amber-800' : 'text-stone-700 hover:bg-stone-50'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Settings
                </button>

                <button
                  className="w-full text-left px-4 py-2 rounded-md flex items-center gap-2 text-red-600 hover:bg-red-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {activeTab === 'orders' && (
              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <h2 className="text-xl font-serif font-medium text-stone-900 mb-6">Order History</h2>

                {orders.length > 0 ? (
                  <div className="space-y-8">
                    {orders.map(order => (
                      <div key={order.id} className="border border-stone-200 rounded-lg overflow-hidden">
                        <div className="bg-stone-50 px-6 py-4 flex flex-wrap justify-between gap-2">
                          <div>
                            <p className="text-sm text-stone-500">Order Number</p>
                            <p className="font-medium text-stone-900">#{order.id}</p>
                          </div>
                          <div>
                            <p className="text-sm text-stone-500">Date</p>
                            <p className="font-medium text-stone-900">{order.date}</p>
                          </div>
                          <div>
                            <p className="text-sm text-stone-500">Total</p>
                            <p className="font-medium text-stone-900">${order.total.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-stone-500">Status</p>
                            <p className="font-medium text-green-600">{order.status}</p>
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="font-medium text-stone-900 mb-4">Items</h3>
                          <div className="space-y-4">
                            {order.items.map(item => (
                              <div key={item.id} className="flex gap-4">
                                <div className="w-16 h-16 bg-stone-100 rounded overflow-hidden flex-shrink-0">
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="flex-grow">
                                  <h4 className="font-medium text-stone-900">{item.name}</h4>
                                  <p className="text-sm text-stone-600">${item.price.toLocaleString()}</p>
                                </div>
                                <div>
                                  <Link
                                    to={`/product/${item.id}`}
                                    className="text-sm text-amber-800 hover:text-amber-900"
                                  >
                                    View Product
                                  </Link>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-stone-600">You haven't placed any orders yet.</p>
                    <Link
                      to="/"
                      className="inline-block mt-4 py-2 px-4 bg-amber-800 text-white rounded-md font-medium hover:bg-amber-900 transition-colors"
                    >
                      Start Shopping
                    </Link>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'favorites' && (
              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <h2 className="text-xl font-serif font-medium text-stone-900 mb-6">Favorites</h2>

                {favorites.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {favorites.map(item => (
                      <div key={item.id} className="border border-stone-200 rounded-lg overflow-hidden">
                        <div className="aspect-square bg-stone-100 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-stone-900">{item.name}</h3>
                          <p className="text-amber-800 font-medium">${item.price.toLocaleString()}</p>
                          <div className="mt-4 flex gap-2">
                            <Link
                              to={`/product/${item.id}`}
                              className="flex-1 py-2 bg-amber-800 text-white rounded-md font-medium hover:bg-amber-900 transition-colors text-center"
                            >
                              View
                            </Link>
                            <button
                              className="p-2 border border-stone-300 rounded-md text-stone-600 hover:bg-stone-50 transition-colors"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-stone-600">You haven't added any items to your favorites yet.</p>
                    <Link
                      to="/"
                      className="inline-block mt-4 py-2 px-4 bg-amber-800 text-white rounded-md font-medium hover:bg-amber-900 transition-colors"
                    >
                      Explore Products
                    </Link>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <h2 className="text-xl font-serif font-medium text-stone-900 mb-6">Profile Information</h2>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-stone-500">Full Name</p>
                      <p className="font-medium text-stone-900">{userInfo.name}</p>
                    </div>

                    <div>
                      <p className="text-sm text-stone-500">Email Address</p>
                      <p className="font-medium text-stone-900">{userInfo.email}</p>
                    </div>

                    <div>
                      <p className="text-sm text-stone-500">Phone Number</p>
                      <p className="font-medium text-stone-900">{userInfo.phone}</p>
                    </div>
                  </div>

                  <div className="border-t border-stone-200 pt-6">
                    <h3 className="font-medium text-stone-900 mb-4">Default Shipping Address</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm text-stone-500">Street Address</p>
                        <p className="font-medium text-stone-900">{userInfo.address.street}</p>
                      </div>

                      <div>
                        <p className="text-sm text-stone-500">City</p>
                        <p className="font-medium text-stone-900">{userInfo.address.city}</p>
                      </div>

                      <div>
                        <p className="text-sm text-stone-500">State/Province</p>
                        <p className="font-medium text-stone-900">{userInfo.address.state}</p>
                      </div>

                      <div>
                        <p className="text-sm text-stone-500">ZIP/Postal Code</p>
                        <p className="font-medium text-stone-900">{userInfo.address.zipCode}</p>
                      </div>

                      <div>
                        <p className="text-sm text-stone-500">Country</p>
                        <p className="font-medium text-stone-900">{userInfo.address.country}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="py-2 px-4 bg-amber-800 text-white rounded-md font-medium hover:bg-amber-900 transition-colors">
                      Edit Profile
                    </button>
                    <button className="py-2 px-4 border border-stone-300 text-stone-700 rounded-md font-medium hover:bg-stone-50 transition-colors">
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <h2 className="text-xl font-serif font-medium text-stone-900 mb-6">Account Settings</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-stone-900 mb-3">Notification Preferences</h3>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4 text-amber-800 focus:ring-amber-500 border-stone-300 rounded" defaultChecked />
                        <span className="text-stone-700">Order updates</span>
                      </label>

                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4 text-amber-800 focus:ring-amber-500 border-stone-300 rounded" defaultChecked />
                        <span className="text-stone-700">New arrivals</span>
                      </label>

                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4 text-amber-800 focus:ring-amber-500 border-stone-300 rounded" defaultChecked />
                        <span className="text-stone-700">Special promotions</span>
                      </label>

                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4 text-amber-800 focus:ring-amber-500 border-stone-300 rounded" />
                        <span className="text-stone-700">Newsletter</span>
                      </label>
                    </div>
                  </div>

                  <div className="border-t border-stone-200 pt-6">
                    <h3 className="font-medium text-stone-900 mb-3">Privacy Settings</h3>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4 text-amber-800 focus:ring-amber-500 border-stone-300 rounded" defaultChecked />
                        <span className="text-stone-700">Share my purchase history for personalized recommendations</span>
                      </label>

                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4 text-amber-800 focus:ring-amber-500 border-stone-300 rounded" />
                        <span className="text-stone-700">Allow third-party analytics</span>
                      </label>
                    </div>
                  </div>

                  <div className="border-t border-stone-200 pt-6">
                    <h3 className="font-medium text-stone-900 mb-3">Account Actions</h3>

                    <div className="flex flex-col gap-2">
                      <button className="text-left text-red-600 hover:text-red-700">
                        Deactivate account
                      </button>
                      <button className="text-left text-red-600 hover:text-red-700">
                        Delete account
                      </button>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button className="py-2 px-4 bg-amber-800 text-white rounded-md font-medium hover:bg-amber-900 transition-colors">
                      Save Settings
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;