
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative">
      <div 
        className="h-[70vh] bg-cover bg-center relative" 
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1550965002-7b739ab8d849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1924&q=80)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Discover Treasures of the Past
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
              Explore our curated collection of rare antiquities from civilizations across history. Each piece tells a story worth preserving.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/category/all" 
                className="btn-primary"
              >
                Explore Collection
              </Link>
              <Link 
                to="/about" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-stone-900 px-6 py-3 rounded-md transition-colors font-medium"
              >
                Our Heritage
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Categories Banner */}
      <div className="container mx-auto px-4 py-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-serif font-semibold mb-2">Ancient Civilizations</h3>
            <p className="text-sm text-stone-600 mb-4">
              Artifacts from Egypt, Greece, Rome, and Mesopotamia
            </p>
            <Link 
              to="/category/ancient" 
              className="text-amber-800 hover:text-amber-900 font-medium text-sm"
            >
              Explore Category →
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-serif font-semibold mb-2">Medieval Treasures</h3>
            <p className="text-sm text-stone-600 mb-4">
              European artifacts from the 5th to the 15th century
            </p>
            <Link 
              to="/category/medieval" 
              className="text-amber-800 hover:text-amber-900 font-medium text-sm"
            >
              Explore Category →
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-serif font-semibold mb-2">Asian Antiquities</h3>
            <p className="text-sm text-stone-600 mb-4">
              Rare pieces from China, Japan, India, and Southeast Asia
            </p>
            <Link 
              to="/category/asian" 
              className="text-amber-800 hover:text-amber-900 font-medium text-sm"
            >
              Explore Category →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
