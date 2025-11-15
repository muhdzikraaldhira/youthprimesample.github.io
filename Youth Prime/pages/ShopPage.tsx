
import React, { useState, useMemo } from 'react';
import { products } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import { ChevronDownIcon } from '../components/icons';

const ShopPage: React.FC = () => {
    const [filters, setFilters] = useState({
        category: 'All',
        brand: 'All',
        price: 1000,
        color: 'All'
    });
    const [openFilters, setOpenFilters] = useState<string[]>(['category', 'brand', 'price', 'color']);

    const uniqueCategories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
    const uniqueBrands = ['All', ...Array.from(new Set(products.map(p => p.brand)))];
    const uniqueColors = ['All', ...Array.from(new Set(products.map(p => p.color)))];

    const handleFilterChange = (filterName: string, value: string | number) => {
        setFilters(prev => ({ ...prev, [filterName]: value }));
    };
    
    const toggleFilter = (filterName: string) => {
        setOpenFilters(prev => 
            prev.includes(filterName) 
            ? prev.filter(f => f !== filterName) 
            : [...prev, filterName]
        );
    };

    const filteredProducts = useMemo(() => {
        return products.filter(p => 
            (filters.category === 'All' || p.category === filters.category) &&
            (filters.brand === 'All' || p.brand === filters.brand) &&
            (p.price <= filters.price) &&
            (filters.color === 'All' || p.color === filters.color)
        );
    }, [filters]);

    const FilterSection: React.FC<{title: string, filterKey: string, children: React.ReactNode}> = ({title, filterKey, children}) => (
        <div className="py-6 border-b border-gray-200">
            <button onClick={() => toggleFilter(filterKey)} className="w-full flex justify-between items-center text-left">
                <h3 className="font-semibold text-matte-black">{title}</h3>
                <ChevronDownIcon className={`h-5 w-5 transition-transform ${openFilters.includes(filterKey) ? 'rotate-180' : ''}`} />
            </button>
            {openFilters.includes(filterKey) && <div className="mt-4 space-y-2">{children}</div>}
        </div>
    );
    
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="font-heading text-6xl tracking-wider">The Shop</h1>
                <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">A curated collection of affiliate products from the best brands in the game.</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Filters Sidebar */}
                <aside className="lg:w-1/4">
                    <div className="sticky top-24 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="font-heading text-2xl border-b pb-4">Filters</h2>
                        
                        <FilterSection title="Category" filterKey="category">
                           {uniqueCategories.map(cat => (
                                <button key={cat} onClick={() => handleFilterChange('category', cat)} className={`block text-left w-full px-2 py-1 rounded ${filters.category === cat ? 'bg-blue-100 text-electric-blue font-semibold' : 'hover:bg-gray-100'}`}>{cat}</button>
                            ))}
                        </FilterSection>

                        <FilterSection title="Brand" filterKey="brand">
                            {uniqueBrands.map(brand => (
                                <button key={brand} onClick={() => handleFilterChange('brand', brand)} className={`block text-left w-full px-2 py-1 rounded ${filters.brand === brand ? 'bg-blue-100 text-electric-blue font-semibold' : 'hover:bg-gray-100'}`}>{brand}</button>
                            ))}
                        </FilterSection>

                        <FilterSection title="Price Range" filterKey="price">
                             <label htmlFor="price" className="block text-sm font-medium text-gray-700">Max Price: <span className="font-bold text-electric-blue">${filters.price}</span></label>
                             <input type="range" id="price" min="0" max="1000" step="10" value={filters.price} onChange={e => handleFilterChange('price', Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-electric-blue" />
                        </FilterSection>

                        <FilterSection title="Color" filterKey="color">
                           <div className="flex flex-wrap gap-2">
                             {uniqueColors.map(color => (
                                <button key={color} onClick={() => handleFilterChange('color', color)} className={`px-3 py-1 text-sm rounded-full border-2 ${filters.color === color ? 'border-electric-blue bg-blue-100' : 'border-gray-200'}`}>{color}</button>
                            ))}
                           </div>
                        </FilterSection>
                    </div>
                </aside>
                {/* Product Grid */}
                <main className="lg:w-3/4">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                     {filteredProducts.length === 0 && (
                        <div className="text-center py-20 bg-white rounded-lg shadow-md">
                            <h2 className="font-heading text-3xl">No Products Found</h2>
                            <p className="mt-2 text-gray-600">Try adjusting your filters to find what you're looking for.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default ShopPage;
