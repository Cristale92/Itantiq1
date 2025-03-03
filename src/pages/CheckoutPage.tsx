
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CheckoutPage: React.FC = () => {
  // Form states 
  const [activeStep, setActiveStep] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);
  
  // Shipping info form state
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
  });
  
  // Payment info form state
  const [paymentInfo, setPaymentInfo] = useState({
    cardName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: '',
  });
  
  const handleShippingInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setShippingInfo({
      ...shippingInfo,
      [name]: value
    });
  };
  
  const handlePaymentInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: value
    });
  };
  
  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate the shipping form
    setActiveStep(2);
    window.scrollTo(0, 0);
  };
  
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would process the payment
    setOrderComplete(true);
    window.scrollTo(0, 0);
  };
  
  if (orderComplete) {
    return (
      <div className="bg-stone-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center py-12">
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            
            <h1 className="text-3xl font-serif font-medium text-stone-900 mb-4">Thank You for Your Order!</h1>
            <p className="text-lg text-stone-600 mb-8">
              Your order has been placed successfully. You will receive a confirmation email shortly.
            </p>
            
            <div className="bg-white border border-stone-200 rounded-lg p-6 mb-8">
              <div className="mb-4 pb-4 border-b border-stone-100">
                <p className="text-sm text-stone-500">Order Number</p>
                <p className="text-lg font-medium text-stone-900">#ITQ2023-7845</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-stone-700">
                  <span className="font-medium">Estimated Delivery:</span> 5-7 Business Days
                </p>
                <p className="text-stone-700">
                  <span className="font-medium">Shipping Method:</span> White Glove Delivery
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/account" className="py-3 px-6 bg-amber-800 text-white rounded-md font-medium hover:bg-amber-900 transition-colors">
                View Order Details
              </Link>
              <Link to="/" className="py-3 px-6 border border-stone-300 text-stone-700 rounded-md font-medium hover:bg-stone-50 transition-colors">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-stone-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-serif font-medium text-stone-900 mb-8">Checkout</h1>
          
          {/* Checkout Steps */}
          <div className="flex justify-between mb-8">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeStep >= 1 ? 'bg-amber-800 text-white' : 'bg-stone-200 text-stone-600'} mb-2`}>
                1
              </div>
              <span className={`text-sm ${activeStep >= 1 ? 'text-stone-900 font-medium' : 'text-stone-500'}`}>Shipping</span>
            </div>
            
            <div className="w-1/3 pt-5">
              <div className={`h-1 ${activeStep >= 2 ? 'bg-amber-800' : 'bg-stone-200'}`}></div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeStep >= 2 ? 'bg-amber-800 text-white' : 'bg-stone-200 text-stone-600'} mb-2`}>
                2
              </div>
              <span className={`text-sm ${activeStep >= 2 ? 'text-stone-900 font-medium' : 'text-stone-500'}`}>Payment</span>
            </div>
            
            <div className="w-1/3 pt-5">
              <div className={`h-1 ${activeStep >= 3 ? 'bg-amber-800' : 'bg-stone-200'}`}></div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeStep >= 3 ? 'bg-amber-800 text-white' : 'bg-stone-200 text-stone-600'} mb-2`}>
                3
              </div>
              <span className={`text-sm ${activeStep >= 3 ? 'text-stone-900 font-medium' : 'text-stone-500'}`}>Confirmation</span>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Form */}
            <div className="lg:w-2/3">
              {activeStep === 1 && (
                <div className="bg-white border border-stone-200 rounded-lg p-6">
                  <h2 className="text-xl font-serif font-medium text-stone-900 mb-6">Shipping Information</h2>
                  
                  <form onSubmit={handleShippingSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-stone-700 mb-1">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={shippingInfo.firstName}
                          onChange={handleShippingInfoChange}
                          required
                          className="w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-stone-700 mb-1">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={shippingInfo.lastName}
                          onChange={handleShippingInfoChange}
                          required
                          className="w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={shippingInfo.email}
                          onChange={handleShippingInfoChange}
                          required
                          className="w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={shippingInfo.phone}
                          onChange={handleShippingInfoChange}
                          required
                          className="w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-stone-700 mb-1">Street Address</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={shippingInfo.address}
                        onChange={handleShippingInfoChange}
                        required
                        className="w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-stone-700 mb-1">City</label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={shippingInfo.city}
                          onChange={handleShippingInfoChange}
                          required
                          className="w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-stone-700 mb-1">State/Province</label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={shippingInfo.state}
                          onChange={handleShippingInfoChange}
                          required
                          className="w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-stone-700 mb-1">ZIP/Postal Code</label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={shippingInfo.zipCode}
                          onChange={handleShippingInfoChange}
                          required
                          className="w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-stone-700 mb-1">Country</label>
                      <select
                        id="country"
                        name="country"
                        value={shippingInfo.country}
                        onChange={handleShippingInfoChange}
                        required
                        className="w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      >
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Australia">Australia</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                      </select>
                    </div>
                    
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full py-3 bg-amber-800 text-white rounded-md font-medium hover:bg-amber-900 transition-colors"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  </form>
                </div>
              )}
              
              {activeStep === 2 && (
                <div className="bg-white border border-stone-200 rounded-lg p-6">
                  <h2 className="text-xl font-serif font-medium text-stone-900 mb-6">Payment Method</h2>
                  
                  <form onSubmit={handlePaymentSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="cardName" className="block text-sm font-medium text-stone-700 mb-1">Name on Card</label>
                      <input
                        type="text"
                        id="cardName"
                        name="cardName"
                        value={paymentInfo.cardName}
                        onChange={handlePaymentInfoChange}
                        required
                        className="w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-stone-700 mb-1">Card Number</label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={paymentInfo.cardNumber}
                        onChange={handlePaymentInfoChange}
                        required
                        placeholder="•••• •••• •••• ••••"
                        className="w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="expMonth" className="block text-sm font-medium text-stone-700 mb-1">Exp. Month</label>
                        <select
                          id="expMonth"
                          name="expMonth"
                          value={paymentInfo.expMonth}
                          onChange={handlePaymentInfoChange}
                          required
                          className="w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                        >
                          <option value="">Month</option>
                          {Array.from({ length: 12 }, (_, i) => (
                            <option key={i+1} value={String(i+1).padStart(2, '0')}>
                              {String(i+1).padStart(2, '0')}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="expYear" className="block text-sm font-medium text-stone-700 mb-1">Exp. Year</label>
                        <select
                          id="expYear"
                          name="expYear"
                          value={paymentInfo.expYear}
                          onChange={handlePaymentInfoChange}
                          required
                          className="w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                        >
                          <option value="">Year</option>
                          {Array.from({ length: 10 }, (_, i) => (
                            <option key={i} value={String(new Date().getFullYear() + i)}>
                              {new Date().getFullYear() + i}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-stone-700 mb-1">CVV</label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          value={paymentInfo.cvv}
                          onChange={handlePaymentInfoChange}
                          required
                          placeholder="•••"
                          className="w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-4">
                      <input
                        id="saveCard"
                        name="saveCard"
                        type="checkbox"
                        className="h-4 w-4 text-amber-800 focus:ring-amber-500 border-stone-300 rounded"
                      />
                      <label htmlFor="saveCard" className="text-sm text-stone-600">
                        Save this card for future purchases
                      </label>
                    </div>
                    
                    <div className="pt-4 flex gap-4">
                      <button
                        type="button"
                        onClick={() => setActiveStep(1)}
                        className="w-1/3 py-3 border border-stone-300 text-stone-700 rounded-md font-medium hover:bg-stone-50 transition-colors"
                      >
                        Back
                      </button>
                      
                      <button
                        type="submit"
                        className="w-2/3 py-3 bg-amber-800 text-white rounded-md font-medium hover:bg-amber-900 transition-colors"
                      >
                        Place Order
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
            
            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white border border-stone-200 rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-serif font-medium text-stone-900 mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-stone-100 rounded overflow-hidden flex-shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1594222082337-52204cb50da8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                        alt="Antique Brass Telescope"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-stone-900">Antique Brass Telescope</h3>
                      <p className="text-sm text-stone-600">19th Century, England</p>
                      <div className="flex justify-between mt-1">
                        <p className="text-sm text-stone-600">Qty: 1</p>
                        <p className="font-medium text-stone-900">$1,299.99</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-stone-200 pt-4 mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-stone-600">Subtotal</span>
                    <span className="font-medium text-stone-900">$1,299.99</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-stone-600">Shipping</span>
                    <span className="font-medium text-stone-900">$0.00</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-stone-600">Tax</span>
                    <span className="font-medium text-stone-900">$104.00</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-stone-200 mt-2">
                    <span className="font-medium text-stone-900">Total</span>
                    <span className="font-medium text-xl text-amber-800">$1,403.99</span>
                  </div>
                </div>
                
                <div className="border-t border-stone-200 pt-4">
                  <h3 className="font-medium text-stone-900 mb-2">Shipping</h3>
                  
                  {shippingInfo.firstName ? (
                    <div className="text-stone-600 text-sm">
                      <p>{shippingInfo.firstName} {shippingInfo.lastName}</p>
                      <p>{shippingInfo.address}</p>
                      <p>{shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}</p>
                      <p>{shippingInfo.country}</p>
                    </div>
                  ) : (
                    <p className="text-sm text-stone-500">No shipping information provided yet</p>
                  )}
                </div>
              
                <div className="text-xs text-stone-500 mt-4">
                  <p>
                    By placing your order, you agree to our <Link to="/terms" className="text-amber-800 hover:text-amber-900">Terms of Service</Link> and <Link to="/privacy" className="text-amber-800 hover:text-amber-900">Privacy Policy</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
