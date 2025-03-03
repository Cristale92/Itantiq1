
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

// Mock data for featured products
const featuredProducts = [
  {
    id: '1',
    name: 'Ancient Roman Coin - Silver Denarius',
    price: 1250,
    image: 'https://images.unsplash.com/photo-1618759287629-ca97956b5973?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80',
    category: 'ancient',
    period: '1st Century AD'
  },
  {
    id: '2',
    name: 'Medieval Illuminated Manuscript Page',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1532883130016-f3d311140985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    category: 'medieval',
    period: '14th Century'
  },
  {
    id: '3',
    name: 'Ming Dynasty Porcelain Vase',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1567225591450-06036b3392a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    category: 'asian',
    period: '16th Century'
  },
  {
    id: '4',
    name: 'Victorian Silver Pocket Watch',
    price: 950,
    image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1764&q=80',
    category: 'victorian',
    period: '19th Century'
  },
];

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    text: "I've been collecting antiquities for over 20 years, and Itantiq has become my go-to source. Their authentication process is thorough and their curation is excellent.",
    author: "James Morrison",
    role: "Private Collector",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    text: "As a curator for a small museum, I've found several exceptional pieces through Itantiq. Their provenance documentation is impeccable, which is essential for our acquisitions.",
    author: "Dr. Elena Vasquez",
    role: "Museum Curator",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    text: "The level of expertise at Itantiq is remarkable. They helped me identify a rare Byzantine artifact and provided detailed historical context that enhanced its value.",
    author: "Michael Chen",
    role: "Historian",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg"
  }
];

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Featured Antiquities</h2>
          <div className="product-grid mb-10">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/category/all" className="btn-secondary">
              View All Antiquities
            </Link>
          </div>
        </div>
      </section>
      
      {/* Story/About Section */}
      <section className="py-16 bg-antiquity-pattern">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Preserving History's Treasures</h2>
              <p className="text-stone-700 mb-6">
                At Itantiq, we believe that antiquities are more than just objects – they are tangible connections to our shared human history. Each piece in our collection has been carefully vetted for authenticity and provenance.
              </p>
              <p className="text-stone-700 mb-6">
                Our team of experts includes archaeologists, historians, and art specialists who work together to curate an exceptional collection spanning civilizations and centuries. We're committed to ethical acquisition and the preservation of cultural heritage.
              </p>
              <Link to="/about" className="btn-primary">
                Our Story
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                alt="Ancient pottery being examined" 
                className="rounded-lg shadow-md w-full h-64 object-cover mb-4"
              />
              <img 
                src="https://images.unsplash.com/photo-1577083288073-40892c0860a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                alt="Antique compass and map" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1566159199612-ac2f3df681a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                alt="Ancient manuscript" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1531873252757-8c22fa9e7a98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80" 
                alt="Museum interior with artifacts" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">What Our Collectors Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-medium text-stone-800">{testimonial.author}</h4>
                    <p className="text-sm text-stone-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-stone-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-rich-mahogany text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Join Our Collectors Circle</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Subscribe to receive exclusive previews of new acquisitions, expert insights on antiquities, and invitations to special events.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-md text-stone-800 focus:outline-none"
              aria-label="Email address"
            />
            <button 
              type="submit" 
              className="bg-antique-gold hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
