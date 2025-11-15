
import React from 'react';
import { NavLink } from 'react-router-dom';
import { SearchIcon } from './icons';

const Header: React.FC = () => {
  const navItems = ['Home', 'Articles', 'Shop', 'Looks', 'About'];

  const getPath = (item: string) => {
    if (item === 'Home') return '/';
    return `/${item.toLowerCase()}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-off-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-3xl font-heading text-matte-black tracking-wider">
              YouthPrime.Style
            </NavLink>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item}
                  to={getPath(item)}
                  className={({ isActive }) => 
                    `font-heading text-lg tracking-wide px-3 py-2 rounded-md transition-colors duration-300 ${
                      isActive 
                        ? 'text-electric-blue' 
                        : 'text-matte-black hover:text-electric-blue'
                    }`
                  }
                >
                  {item}
                </NavLink>
              ))}
            </div>
          </nav>

          <div className="flex items-center">
            <div className="relative">
              <input 
                type="search"
                placeholder="Search styles, brands, articles..."
                className="bg-stone-200 text-matte-black placeholder-gray-500 rounded-full py-2 pl-4 pr-10 w-40 md:w-64 focus:outline-none focus:ring-2 focus:ring-electric-blue transition-all duration-300"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
