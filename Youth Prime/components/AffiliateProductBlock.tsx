
import React from 'react';
import { Product } from '../types';

interface AffiliateProductBlockProps {
  product: Product;
}

const AffiliateProductBlock: React.FC<AffiliateProductBlockProps> = ({ product }) => {
  return (
    <div className="my-8 flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <div className="md:w-1/3">
        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="md:w-2/3 p-6">
        <h3 className="text-sm text-gray-500">{product.brand}</h3>
        <h2 className="font-heading text-3xl text-matte-black mt-1">{product.name}</h2>
        <div className="my-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-bold text-green-600">PROS</h4>
            <ul className="list-disc list-inside mt-1 text-gray-700">
              <li>High-quality materials</li>
              <li>Exceptional comfort</li>
              <li>Versatile design</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-red-600">CONS</h4>
            <ul className="list-disc list-inside mt-1 text-gray-700">
              <li>Premium price point</li>
            </ul>
          </div>
        </div>
        <a 
          href={product.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-safety-orange text-white font-heading text-lg tracking-wider py-3 px-8 rounded-md transition-all duration-300 hover:bg-matte-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-safety-orange"
        >
          Check Price on Amazon
        </a>
      </div>
    </div>
  );
};

export default AffiliateProductBlock;
