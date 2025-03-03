
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  period?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="card group">
      <div className="relative overflow-hidden">
        {/* Product Image */}
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="antiquity-image group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        
        {/* Quick actions */}
        <div className="absolute top-0 right-0 p-3">
          <button 
            className="bg-white rounded-full p-2 shadow-md hover:bg-stone-100 transition-colors"
            aria-label="Add to wishlist"
          >
            <Heart size={18} className="text-stone-600" />
          </button>
        </div>
        
        {/* Period tag */}
        {product.period && (
          <div className="absolute bottom-0 left-0 p-3">
            <span className="bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
              {product.period}
            </span>
          </div>
        )}
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <Link 
          to={`/category/${product.category}`} 
          className="text-xs uppercase tracking-wider text-amber-800 hover:text-amber-900 mb-1 inline-block"
        >
          {product.category}
        </Link>
        <h3 className="font-medium mb-2 text-stone-800 hover:text-amber-800">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-serif font-semibold">${product.price.toLocaleString()}</span>
          <button className="text-sm font-medium text-amber-800 hover:text-amber-900">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
