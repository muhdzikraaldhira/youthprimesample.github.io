
import React from 'react';
import { Link } from 'react-router-dom';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center text-center h-[60vh]">
      <h1 className="font-heading text-6xl tracking-wider text-matte-black">{title}</h1>
      <p className="mt-4 text-xl text-gray-600 max-w-2xl">This page is currently under construction. Check back soon for amazing new content!</p>
      <img src="https://picsum.photos/seed/placeholder/500/300" alt="Under construction" className="mt-8 rounded-lg shadow-xl" />
      <Link 
        to="/" 
        className="mt-12 bg-electric-blue text-white font-heading text-xl tracking-wider py-3 px-10 rounded-md transition-transform duration-300 hover:scale-105"
      >
        Return to Homepage
      </Link>
    </div>
  );
};

export default PlaceholderPage;
