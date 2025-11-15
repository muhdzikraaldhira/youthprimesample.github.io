
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const categoryColors: { [key in Article['category']]: string } = {
    'Style Guides': 'bg-electric-blue',
    'Reviews': 'bg-electric-blue',
    'News': 'bg-safety-orange',
  };

  const categoryColor = categoryColors[article.category] || 'bg-gray-500';

  return (
    <Link to={`/articles/${article.id}`} className="group block bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative">
        <img src={article.imageUrl} alt={article.title} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
        <span className={`absolute top-4 left-4 ${categoryColor} text-white text-xs font-bold font-heading tracking-widest px-3 py-1 rounded-full`}>{article.category.toUpperCase()}</span>
      </div>
      <div className="p-6">
        <h3 className="font-heading text-2xl text-matte-black mb-2 transition-colors duration-300 group-hover:text-electric-blue">{article.title}</h3>
        <p className="text-gray-600 font-body text-base leading-relaxed line-clamp-3">{article.excerpt}</p>
        <div className="mt-4 text-sm text-gray-500">
            <span>{article.author} &middot; {article.date}</span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
