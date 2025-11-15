
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { articles, products } from '../data/mockData';
import AffiliateProductBlock from '../components/AffiliateProductBlock';
import ProductCard from '../components/ProductCard';

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const article = articles.find(a => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
        <div className="text-center py-20">
            <h1 className="font-heading text-4xl">Article Not Found</h1>
            <p className="mt-4">Sorry, we couldn't find the article you're looking for.</p>
            <button onClick={() => navigate(-1)} className="mt-8 bg-electric-blue text-white font-heading text-xl tracking-wider py-3 px-10 rounded-md">
                Go Back
            </button>
        </div>
    );
  }

  const mentionedProducts = products.filter(p => article.mentionedProductIds.includes(p.id));

  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-8">
          <p className="font-heading text-safety-orange tracking-widest">{article.category}</p>
          <h1 className="font-heading text-4xl md:text-6xl mt-2 text-matte-black">{article.title}</h1>
          <p className="mt-4 text-gray-500">By {article.author} on {article.date}</p>
        </header>

        <img src={article.imageUrl} alt={article.title} className="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-lg" />
        
        <article className="prose prose-lg max-w-none mx-auto mt-12 text-matte-black font-body leading-relaxed">
          {article.content.map((item, index) => {
            if (typeof item === 'string') {
              return <p key={index}>{item}</p>;
            }
            if (item.type === 'product_block') {
              const product = products.find(p => p.id === item.productId);
              if (!product) return null;
              return <AffiliateProductBlock key={`prod-${index}`} product={product} />;
            }
            return null;
          })}
        </article>

        {mentionedProducts.length > 0 && (
          <section className="mt-16 border-t pt-8">
            <h2 className="font-heading text-3xl text-center tracking-wider mb-8">Shop All Products Mentioned</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mentionedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ArticleDetailPage;
