import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-stone-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-stone-900 mb-8 text-center">About Itantiq</h1>

          <div className="mb-12 aspect-video overflow-hidden rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1615529162924-f8605388461d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
              alt="Itantiq showroom" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-stone prose-lg max-w-none mb-12">
            <h2>Our Heritage</h2>
            <p>
              Founded in 2005 by renowned antiquities expert Eleanora Vincent, Itantiq has established itself as a premier destination for discerning collectors and enthusiasts of fine antiques and historical artifacts.
            </p>
            <p>
              What began as a small gallery in London's Mayfair district has evolved into a global presence, connecting rare and significant pieces with those who appreciate their beauty, craftsmanship, and historical importance.
            </p>

            <h2>Our Philosophy</h2>
            <p>
              At Itantiq, we believe that antiquities are not merely objects but vessels of human history and creativity. Each piece in our collection has been carefully selected for its authenticity, condition, and cultural significance.
            </p>
            <p>
              We are committed to the ethical acquisition and responsible stewardship of historical artifacts. All items in our collection are accompanied by detailed provenance documentation, ensuring transparency and legitimacy in every transaction.
            </p>

            <h2>Our Expertise</h2>
            <p>
              Our team of specialists includes historians, conservators, and antiquities experts with decades of combined experience. Their knowledge spans numerous periods and cultures, from Renaissance Europe to Ancient Egypt, from Imperial China to Pre-Columbian Americas.
            </p>
            <p>
              This expertise allows us to offer our clients unparalleled guidance in building meaningful collections that reflect their personal interests while maintaining investment value.
            </p>

            <h2>Our Services</h2>
            <p>
              Beyond our curated marketplace, Itantiq offers a range of services designed to enhance your experience with antiquities:
            </p>
            <ul>
              <li>Personalized collection consultation</li>
              <li>Authentication and appraisal services</li>
              <li>Conservation and restoration referrals</li>
              <li>White-glove delivery and installation</li>
              <li>Private viewing appointments</li>
            </ul>
            <p>
              We also maintain an active calendar of exhibitions, lectures, and events that celebrate the rich cultural heritage embodied in our collections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg border border-stone-200">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-2">Authenticity Guaranteed</h3>
              <p className="text-stone-600">Every item is thoroughly examined by our experts and comes with a certificate of authenticity.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-stone-200">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-2">Secure Transactions</h3>
              <p className="text-stone-600">Our payment and shipping processes prioritize security and privacy for all our clients.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-stone-200">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-2">Expert Consultation</h3>
              <p className="text-stone-600">Our specialists are available to provide guidance on acquisitions and collection development.</p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-serif font-medium text-stone-900 mb-4">Visit Our Galleries</h2>
            <p className="text-stone-600 mb-6">Experience our collection in person at one of our gallery locations.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium text-stone-900">London</h3>
                <p className="text-stone-600">42 Berkeley Square<br />Mayfair, London W1J 5AW</p>
              </div>

              <div>
                <h3 className="font-medium text-stone-900">New York</h3>
                <p className="text-stone-600">389 East 65th Street<br />Upper East Side, NY 10065</p>
              </div>

              <div>
                <h3 className="font-medium text-stone-900">Paris</h3>
                <p className="text-stone-600">16 Rue de la Paix<br />75002 Paris, France</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;