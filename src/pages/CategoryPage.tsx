import React from 'react';

const CategoryPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold text-rich-mahogany mb-6">Category Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Category products will be loaded here */}
        <p className="text-gray-700">Loading products...</p>
      </div>
    </div>
  );
};

export default CategoryPage;