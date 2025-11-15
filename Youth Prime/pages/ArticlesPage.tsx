
import React, { useState, useMemo } from 'react';
import { articles } from '../data/mockData';
import ArticleCard from '../components/ArticleCard';
import { Article } from '../types';

const ArticlesPage: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  const categories = ['All', 'Style Guides', 'Reviews', 'News'];

  const filteredAndSortedArticles = useMemo(() => {
    let filtered = articles;

    if (categoryFilter !== 'All') {
      filtered = articles.filter(article => article.category === categoryFilter);
    }

    return [...filtered].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
  }, [categoryFilter, sortOrder]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="font-heading text-6xl tracking-wider">The Style Journal</h1>
        <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">Your source for streetwear news, in-depth reviews, and essential style guides.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 p-4 bg-white rounded-lg shadow-md">
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
          <span className="font-bold text-sm mr-2">Category:</span>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-4 py-2 text-sm rounded-full transition-colors font-semibold whitespace-nowrap ${
                categoryFilter === cat ? 'bg-electric-blue text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <label htmlFor="sortOrder" className="font-bold text-sm mr-2">Sort by:</label>
          <select 
            id="sortOrder"
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value as 'newest' | 'oldest')}
            className="rounded-full px-3 py-2 border-gray-300 shadow-sm focus:border-electric-blue focus:ring focus:ring-electric-blue focus:ring-opacity-50"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      {/* Article Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredAndSortedArticles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
