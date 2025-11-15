import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm text-gray-500">{product.brand}</h3>
        <p className="mt-1 text-lg font-medium text-matte-black truncate">{product.name}</p>
        <div className="flex justify-between items-center mt-4">
            <p className="text-xl font-bold text-matte-black">${product.price}</p>
             <a
                href={product.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-electric-blue text-white font-heading tracking-wider py-2 px-4 rounded-md transition-all duration-300 hover:bg-matte-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-blue"
                >
                Check Price
            </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
