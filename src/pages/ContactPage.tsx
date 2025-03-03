
import React from 'react';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle the form submission
    alert('Thank you for your message. We will respond shortly.');
  };
  
  return (
    <div className="bg-stone-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-stone-900 mb-6 text-center">Contact Us</h1>
          <p className="text-center text-stone-600 max-w-2xl mx-auto mb-12">
            We're here to assist you with any inquiries about our collection, services, or to schedule a private viewing.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-stone-700 mb-1">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
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
                    name="email"
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
                    className="w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-1">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="inquiry">Product Inquiry</option>
                    <option value="appointment">Schedule an Appointment</option>
                    <option value="authentication">Authentication Services</option>
                    <option value="support">Customer Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full p-3 border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input
                    id="subscribe"
                    name="subscribe"
                    type="checkbox"
                    className="h-4 w-4 text-amber-800 focus:ring-amber-500 border-stone-300 rounded mt-1"
                  />
                  <label htmlFor="subscribe" className="ml-2 block text-sm text-stone-600">
                    Keep me informed about new acquisitions and events
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 bg-amber-800 text-white rounded-md font-medium hover:bg-amber-900 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-lg border border-stone-200 mb-8">
                <h2 className="text-xl font-serif font-medium text-stone-900 mb-4">Visit Our Galleries</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-stone-900 mb-1">London</h3>
                    <p className="text-stone-600 mb-1">42 Berkeley Square, Mayfair<br />London W1J 5AW, United Kingdom</p>
                    <p className="text-stone-600">
                      <span className="font-medium">Hours:</span> Tuesday–Saturday, 10am–6pm
                    </p>
                    <p className="text-stone-600">
                      <span className="font-medium">Phone:</span> +44 20 7123 4567
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-stone-900 mb-1">New York</h3>
                    <p className="text-stone-600 mb-1">389 East 65th Street, Upper East Side<br />New York, NY 10065, USA</p>
                    <p className="text-stone-600">
                      <span className="font-medium">Hours:</span> Tuesday–Saturday, 10am–6pm
                    </p>
                    <p className="text-stone-600">
                      <span className="font-medium">Phone:</span> +1 212 555 7890
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-stone-900 mb-1">Paris</h3>
                    <p className="text-stone-600 mb-1">16 Rue de la Paix<br />75002 Paris, France</p>
                    <p className="text-stone-600">
                      <span className="font-medium">Hours:</span> Tuesday–Saturday, 10am–6pm
                    </p>
                    <p className="text-stone-600">
                      <span className="font-medium">Phone:</span> +33 1 42 60 12 34
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg border border-stone-200">
                <h2 className="text-xl font-serif font-medium text-stone-900 mb-4">General Inquiries</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-800 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-stone-900">Email</p>
                      <p className="text-stone-600">info@itantiq.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-800 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium text-stone-900">International</p>
                      <p className="text-stone-600">+44 20 7123 4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-800 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-stone-900">Response Time</p>
                      <p className="text-stone-600">Within 24 hours during business days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="aspect-[16/6] overflow-hidden rounded-xl mb-12">
            {/* In a real application, this would be an embedded map */}
            <div className="w-full h-full bg-stone-200 flex items-center justify-center">
              <p className="text-stone-600 text-lg">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-serif font-medium text-stone-900 mb-4">Join Our Community</h2>
            <p className="text-stone-600 mb-6 max-w-2xl mx-auto">
              Follow us on social media for exclusive previews of new acquisitions, event announcements, and insights into the world of antiquities.
            </p>
            
            <div className="flex justify-center gap-4">
              <a href="#" className="w-12 h-12 bg-amber-800 text-white rounded-full flex items-center justify-center hover:bg-amber-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              
              <a href="#" className="w-12 h-12 bg-amber-800 text-white rounded-full flex items-center justify-center hover:bg-amber-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              
              <a href="#" className="w-12 h-12 bg-amber-800 text-white rounded-full flex items-center justify-center hover:bg-amber-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              
              <a href="#" className="w-12 h-12 bg-amber-800 text-white rounded-full flex items-center justify-center hover:bg-amber-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
