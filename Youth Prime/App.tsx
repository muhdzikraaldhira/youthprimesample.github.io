
import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

const HomePage = lazy(() => import('./pages/HomePage'));
const ArticlesPage = lazy(() => import('./pages/ArticlesPage'));
const ArticleDetailPage = lazy(() => import('./pages/ArticleDetailPage'));
const ShopPage = lazy(() => import('./pages/ShopPage'));
const PlaceholderPage = lazy(() => import('./pages/PlaceholderPage'));

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center h-screen bg-off-white">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-electric-blue"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-off-white min-h-screen flex flex-col font-body">
        <Header />
        <main className="flex-grow pt-20">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/articles/:id" element={<ArticleDetailPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/looks" element={<PlaceholderPage title="Shop The Looks" />} />
              <Route path="/about" element={<PlaceholderPage title="About Us" />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
