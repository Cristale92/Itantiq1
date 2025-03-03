
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  // Mock authentication state (would be replaced with actual auth state management)
  const [isAuthenticated] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/category/all?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };
  
  const categories = [
    { id: 'ancient', name: 'Ancient Artifacts' },
    { id: 'medieval', name: 'Medieval Relics' },
    { id: 'renaissance', name: 'Renaissance Art' },
    { id: 'colonial', name: 'Colonial Pieces' },
    { id: 'asian', name: 'Asian Antiquities' },
  ];

  return (
    <header className="bg-white shadow-md">
      {/* Top bar with logo and search */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-serif font-bold text-rich-mahogany">ITANTIQ</span>
        </Link>
        
        {/* Search bar - desktop */}
        <form onSubmit={handleSearch} className="hidden md:flex items-center w-1/3 border border-stone-300 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Search for antiquities..."
            className="flex-grow focus:outline-none text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="text-stone-500 hover:text-stone-700">
            <Search size={18} />
          </button>
        </form>
        
        {/* Navigation Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative p-2" aria-label="Shopping Cart">
            <ShoppingCart size={22} className="text-stone-700" />
            <span className="absolute top-0 right-0 bg-amber-800 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              3
            </span>
          </Link>
          
          {isAuthenticated ? (
            <Link to="/account" className="p-2" aria-label="My Account">
              <User size={22} className="text-stone-700" />
            </Link>
          ) : (
            <Link to="/auth" className="text-stone-700 hover:text-amber-800 text-sm font-medium">
              Login / Register
            </Link>
          )}
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2" 
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Search bar - mobile */}
      <div className="md:hidden px-4 pb-4">
        <form onSubmit={handleSearch} className="flex items-center border border-stone-300 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Search for antiquities..."
            className="flex-grow focus:outline-none text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="text-stone-500 hover:text-stone-700">
            <Search size={18} />
          </button>
        </form>
      </div>
      
      {/* Categories Navigation */}
      <nav className="border-t border-stone-200 hidden md:block">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-8">
            {categories.map((category) => (
              <li key={category.id}>
                <Link 
                  to={`/category/${category.id}`} 
                  className="inline-block py-3 text-stone-600 hover:text-rich-mahogany font-medium text-sm"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 py-4">
          <div className="container mx-auto px-4">
            <h3 className="font-medium text-stone-800 mb-2">Categories</h3>
            <ul className="space-y-3 mb-4">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link 
                    to={`/category/${category.id}`} 
                    className="block py-1 text-stone-600 hover:text-rich-mahogany"
                    onClick={toggleMenu}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="font-medium text-stone-800 mb-2">Account</h3>
            <ul className="space-y-3">
              {isAuthenticated ? (
                <>
                  <li>
                    <Link 
                      to="/account" 
                      className="block py-1 text-stone-600 hover:text-rich-mahogany"
                      onClick={toggleMenu}
                    >
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/account/orders" 
                      className="block py-1 text-stone-600 hover:text-rich-mahogany"
                      onClick={toggleMenu}
                    >
                      My Orders
                    </Link>
                  </li>
                  <li>
                    <button 
                      className="block py-1 text-stone-600 hover:text-rich-mahogany"
                      onClick={() => {
                        // Handle logout logic here
                        toggleMenu();
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link 
                    to="/auth" 
                    className="block py-1 text-stone-600 hover:text-rich-mahogany"
                    onClick={toggleMenu}
                  >
                    Login / Register
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
