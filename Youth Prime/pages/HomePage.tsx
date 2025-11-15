
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ArticleCard from '../components/ArticleCard';
import { products, articles } from '../data/mockData';

const HomePage: React.FC = () => {
  const featuredArticles = articles.slice(0, 3);
  const topPicks = products.slice(0, 8);
  const categories = [
    { name: 'Sneakers', image: 'https://picsum.photos/seed/cat1/400/400' },
    { name: 'Hoodies', image: 'https://picsum.photos/seed/cat2/400/400' },
    { name: 'Jackets', image: 'https://picsum.photos/seed/cat3/400/400' },
    { name: 'Accessories', image: 'https://picsum.photos/seed/cat4/400/400' },
  ];

  const shopTheLookProduct = products[2];

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* 1. Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] bg-cover bg-center text-white" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="font-heading text-5xl md:text-8xl tracking-wider">Curated Streetwear</h1>
          <p className="font-heading text-3xl md:text-5xl tracking-wider text-bold-yellow mt-2">for the Global Citizen</p>
          <Link to="/shop" className="mt-8 bg-electric-blue text-white font-heading text-xl tracking-wider py-3 px-10 rounded-md transition-transform duration-300 hover:scale-105 hover:bg-blue-700">
            Explore Latest Drops
          </Link>
        </div>
      </section>

      {/* 2. Featured Articles */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-baseline mb-8">
          <h2 className="font-heading text-4xl tracking-wider">FEATURED ARTICLES</h2>
          <Link to="/articles" className="text-electric-blue font-semibold hover:underline whitespace-nowrap">
            View All Articles →
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredArticles.map(article => <ArticleCard key={article.id} article={article} />)}
        </div>
      </section>

      {/* 3. Shop by Category */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-4xl text-center tracking-wider">Shop by Category</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {categories.map(cat => (
            <Link key={cat.name} to="/shop" className="group relative aspect-square overflow-hidden rounded-lg shadow-lg">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="font-heading text-white text-3xl tracking-widest">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Shop the Look */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img src="https://picsum.photos/seed/look/800/1000" alt="AI Avatar Look" className="rounded-lg object-cover w-full h-full" loading="lazy" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <p className="font-heading text-safety-orange text-2xl tracking-wider">Complete the Fit</p>
            <h2 className="font-heading text-5xl mt-2 tracking-wider">Shop The Look</h2>
            <p className="mt-4 text-gray-600 max-w-md mx-auto md:mx-0">Get this entire curated look, featuring standout pieces from top brands. Effortless style, delivered.</p>
            <div className="mt-6 border-t pt-6">
              <ProductCard product={shopTheLookProduct} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Curated Product Carousel */}
      <section className="max-w-full">
        <h2 className="font-heading text-4xl text-center tracking-wider">Top Picks Under $100</h2>
        <div className="mt-8 flex overflow-x-auto space-x-8 pb-4 pl-4 sm:pl-6 lg:pl-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {topPicks.map(product => (
            <div key={product.id} className="flex-shrink-0 w-80">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* 6. Email Newsletter Signup */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-bold-yellow rounded-lg p-8 md:p-12 text-center">
          <h2 className="font-heading text-matte-black text-4xl tracking-wider">Join The Inner Circle</h2>
          <p className="text-matte-black/80 mt-2 max-w-2xl mx-auto">Get exclusive style guides, early access to deals, and the best of streetwear culture delivered to your inbox.</p>
          <form className="mt-6 max-w-lg mx-auto flex flex-col sm:flex-row gap-2">
            <input type="email" placeholder="Enter your email" required className="flex-grow p-3 rounded-md border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-matte-black"/>
            <button type="submit" className="bg-matte-black text-white font-heading tracking-wider py-3 px-8 rounded-md transition-colors hover:bg-electric-blue">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
