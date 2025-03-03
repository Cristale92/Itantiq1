import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Mock product data
const PRODUCT = {
  id: '1',
  name: 'Antique Brass Telescope',
  price: 1299.99,
  description: 'A beautifully preserved 19th century brass telescope with original optics and leather wrapping. This exquisite piece features precision craftsmanship and historical significance, making it both a functional instrument and a distinguished decorative element.',
  details: [
    'Origin: England, circa 1870',
    'Materials: Brass, glass, leather',
    'Dimensions: 28" extended, 9" collapsed',
    'Condition: Excellent, fully functional',
    'Provenance: Private collection, London'
  ],
  images: [
    'https://images.unsplash.com/photo-1594222082337-52204cb50da8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1594222081429-9d7356a8debf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
  ],
  category: 'Navigation',
  era: '19th Century'
};

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  // In a real app, you would fetch the product based on the ID
  const product = PRODUCT;

  const handleAddToCart = () => {
    // In a real app, this would add the item to the cart
    console.log(`Added ${quantity} of ${product.name} to cart`);
    alert(`Added ${quantity} of ${product.name} to cart`);
  };

  return (
    <div className="bg-stone-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="mb-6 text-sm">
          <Link to="/" className="text-stone-500 hover:text-amber-800">Home</Link>
          <span className="mx-2 text-stone-400">/</span>
          <Link to={`/category/${product.category.toLowerCase()}`} className="text-stone-500 hover:text-amber-800">{product.category}</Link>
          <span className="mx-2 text-stone-400">/</span>
          <span className="text-stone-700">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="rounded-lg overflow-hidden bg-white border border-stone-200 mb-4">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-auto object-cover aspect-square"
              />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`rounded-md overflow-hidden border-2 ${activeImage === index ? 'border-amber-800' : 'border-transparent'}`}
                >
                  <img
                    src={image}
                    alt={`${product.name} - View ${index + 1}`}
                    className="w-full h-auto object-cover aspect-square"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-2">{product.name}</h1>
            <div className="text-2xl text-amber-800 font-medium mb-6">${product.price.toLocaleString()}</div>

            <div className="mb-8">
              <p className="text-stone-700 leading-relaxed mb-4">{product.description}</p>

              <ul className="space-y-2 text-stone-700">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-amber-800 mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-6 mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-32">
                  <label htmlFor="quantity" className="block text-sm text-stone-600 mb-1">Quantity</label>
                  <div className="flex">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 border border-r-0 border-stone-300 rounded-l bg-white text-stone-700"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full text-center py-2 border-y border-stone-300 bg-white"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 border border-l-0 border-stone-300 rounded-r bg-white text-stone-700"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full py-3 bg-amber-800 text-white rounded-md font-medium hover:bg-amber-900 transition-colors mb-4"
              >
                Add to Cart
              </button>

              <div className="flex items-center justify-center gap-6 text-sm text-stone-600">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  Secure Payment
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  Free Returns
                </div>
              </div>
            </div>

            <div className="border-t border-stone-200 pt-6">
              <h3 className="text-lg font-medium text-stone-900 mb-2">Shipping & Returns</h3>
              <p className="text-stone-700 text-sm mb-2">
                This item includes complimentary white-glove delivery service to ensure safe transport. Please allow 3-5 business days for delivery.
              </p>
              <p className="text-stone-700 text-sm">
                Returns accepted within 14 days of delivery. Item must be in original condition with all packaging materials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;