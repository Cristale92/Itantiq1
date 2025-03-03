
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ChevronRight } from 'lucide-react';

// Mock cart data
const initialCartItems = [
  {
    id: '1',
    name: 'Ancient Roman Coin - Silver Denarius',
    price: 1250,
    image: 'https://images.unsplash.com/photo-1618759287629-ca97956b5973?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80',
    quantity: 1
  },
  {
    id: '3',
    name: 'Ming Dynasty Porcelain Vase',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1567225591450-06036b3392a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    quantity: 1
  },
  {
    id: '4',
    name: 'Victorian Silver Pocket Watch',
    price: 950,
    image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1764&q=80',
    quantity: 2
  }
];

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState('');
  const [promoCodeApplied, setPromoCodeApplied] = useState(false);
  
  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 75; // Flat rate shipping
  const discount = promoCodeApplied ? subtotal * 0.1 : 0; // 10% discount if promo code applied
  const total = subtotal + shipping - discount;
  
  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  const handleApplyPromoCode = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate the promo code with an API call
    if (promoCode.toLowerCase() === 'itantiq10') {
      setPromoCodeApplied(true);
    } else {
      alert('Invalid promo code');
    }
  };
  
  return (
    <div className="bg-stone-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif font-bold mb-8">Your Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="border-b border-stone-200 pb-4 mb-4">
                  <h2 className="text-lg font-medium">Items ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})</h2>
                </div>
                
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row items-center border-b border-stone-200 pb-6">
                      <div className="w-full sm:w-24 h-24 mb-4 sm:mb-0 mr-0 sm:mr-6">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <Link to={`/product/${item.id}`} className="font-medium text-stone-800 hover:text-amber-800">
                          {item.name}
                        </Link>
                        <div className="text-lg font-medium text-amber-800 mt-1">${item.price.toLocaleString()}</div>
                      </div>
                      
                      <div className="flex items-center mt-4 sm:mt-0">
                        <div className="flex items-center border border-stone-300 rounded-md overflow-hidden">
                          <button 
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-stone-600"
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="px-4 py-1">{item.quantity}</span>
                          <button 
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-stone-600"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => handleRemoveItem(item.id)}
                          className="ml-4 text-stone-500 hover:text-red-600"
                          aria-label="Remove item"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex justify-between items-center">
                  <Link to="/category/all" className="text-amber-800 hover:text-amber-900 font-medium flex items-center">
                    <ChevronRight size={16} className="transform rotate-180 mr-1" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                <h2 className="text-lg font-medium mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-stone-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Shipping</span>
                    <span className="font-medium">${shipping.toLocaleString()}</span>
                  </div>
                  {promoCodeApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount (10%)</span>
                      <span>-${discount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="border-t border-stone-200 pt-4 mt-4">
                    <div className="flex justify-between font-serif">
                      <span className="font-bold text-lg">Total</span>
                      <span className="font-bold text-lg">${total.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-stone-500 mt-1">
                      Including VAT
                    </p>
                  </div>
                </div>
                
                {/* Promo Code */}
                <form onSubmit={handleApplyPromoCode} className="mb-6">
                  <label htmlFor="promo-code" className="block text-sm font-medium text-stone-700 mb-2">
                    Promo Code
                  </label>
                  <div className="flex">
                    <input
                      id="promo-code"
                      type="text"
                      className="input-field rounded-r-none"
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="bg-stone-200 hover:bg-stone-300 px-4 py-2 rounded-r-md text-stone-800 font-medium"
                    >
                      Apply
                    </button>
                  </div>
                  {promoCodeApplied && (
                    <p className="text-sm text-green-600 mt-1">
                      Promo code applied!
                    </p>
                  )}
                </form>
                
                <Link
                  to="/checkout"
                  className="block w-full btn-primary text-center"
                >
                  Proceed to Checkout
                </Link>
                
                <div className="mt-6">
                  <h3 className="font-medium text-sm mb-2">We Accept</h3>
                  <div className="flex space-x-2">
                    <img src="https://via.placeholder.com/40x25" alt="Visa" className="h-6" />
                    <img src="https://via.placeholder.com/40x25" alt="Mastercard" className="h-6" />
                    <img src="https://via.placeholder.com/40x25" alt="American Express" className="h-6" />
                    <img src="https://via.placeholder.com/40x25" alt="PayPal" className="h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-serif font-medium mb-4">Your cart is empty</h2>
            <p className="text-stone-600 mb-6">
              Looks like you haven't added any antiquities to your cart yet.
            </p>
            <Link to="/category/all" className="btn-primary">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
