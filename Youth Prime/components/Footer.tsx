
import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, PinterestIcon, TikTokIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-matte-black text-off-white font-body">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & Mission */}
          <div className="space-y-4">
            <h2 className="text-3xl font-heading tracking-wider">YouthPrime.Style</h2>
            <p className="text-sm text-stone-300 leading-relaxed pr-4">
              Curating the best in streetwear and casual fashion. We find the style so you can own it.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className="text-lg font-heading tracking-widest text-bold-yellow">Explore</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/" className="hover:text-electric-blue transition-colors">Home</Link></li>
              <li><Link to="/articles" className="hover:text-electric-blue transition-colors">Articles</Link></li>
              <li><Link to="/shop" className="hover:text-electric-blue transition-colors">Shop</Link></li>
              <li><Link to="/looks" className="hover:text-electric-blue transition-colors">Looks</Link></li>
              <li><Link to="/about" className="hover:text-electric-blue transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-lg font-heading tracking-widest text-bold-yellow">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-electric-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Terms of Service</a></li>
              <li><a href="#" className="font-bold hover:text-electric-blue transition-colors">Affiliate Disclaimer</a></li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h3 className="text-lg font-heading tracking-widest text-bold-yellow">Follow Us</h3>
            <div className="flex mt-4 space-x-6">
              <a href="#" aria-label="Instagram" className="text-off-white hover:text-safety-orange transition-colors">
                <InstagramIcon className="h-8 w-8" />
              </a>
              <a href="#" aria-label="Pinterest" className="text-off-white hover:text-safety-orange transition-colors">
                <PinterestIcon className="h-8 w-8" />
              </a>
              <a href="#" aria-label="TikTok" className="text-off-white hover:text-safety-orange transition-colors">
                <TikTokIcon className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-stone-700 text-center text-sm text-stone-400">
          <p>&copy; {new Date().getFullYear()} YouthPrime.Style. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
