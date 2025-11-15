
import { Product, Article } from '../types';

export const products: Product[] = [
  { id: 1, name: 'Tech Fleece Windrunner', brand: 'Nike', price: 120, imageUrl: 'https://picsum.photos/seed/p1/500/500', category: 'Hoodies', subCategory: 'Fleece', color: 'Grey', affiliateLink: '#' },
  { id: 2, name: 'UltraBoost 5.0 DNA', brand: 'Adidas', price: 180, imageUrl: 'https://picsum.photos/seed/p2/500/500', category: 'Sneakers', subCategory: 'Running', color: 'Black', affiliateLink: '#' },
  { id: 3, name: 'Classic Leather Jacket', brand: 'Schott', price: 900, imageUrl: 'https://picsum.photos/seed/p3/500/500', category: 'Jackets', subCategory: 'Leather', color: 'Black', affiliateLink: '#' },
  { id: 4, name: '501 Original Fit Jeans', brand: 'Levi\'s', price: 98, imageUrl: 'https://picsum.photos/seed/p4/500/500', category: 'Denim', subCategory: 'Jeans', color: 'Blue', affiliateLink: '#' },
  { id: 5, name: 'Beanie Hat', brand: 'Carhartt', price: 25, imageUrl: 'https://picsum.photos/seed/p5/500/500', category: 'Accessories', subCategory: 'Hats', color: 'Orange', affiliateLink: '#' },
  { id: 6, name: 'Oversized Graphic Tee', brand: 'Stüssy', price: 45, imageUrl: 'https://picsum.photos/seed/p6/500/500', category: 'T-Shirts', subCategory: 'Graphic Tees', color: 'White', affiliateLink: '#' },
  { id: 7, name: 'Chuck 70 High Top', brand: 'Converse', price: 85, imageUrl: 'https://picsum.photos/seed/p7/500/500', category: 'Sneakers', subCategory: 'High Tops', color: 'White', affiliateLink: '#' },
  { id: 8, name: 'Cargo Pants', brand: 'Dickies', price: 60, imageUrl: 'https://picsum.photos/seed/p8/500/500', category: 'Pants', subCategory: 'Cargo', color: 'Green', affiliateLink: '#' },
  { id: 9, name: 'Box Logo Hoodie', brand: 'Supreme', price: 168, imageUrl: 'https://picsum.photos/seed/p9/500/500', category: 'Hoodies', subCategory: 'Streetwear', color: 'Red', affiliateLink: '#' },
  { id: 10, name: 'Air Force 1 \'07', brand: 'Nike', price: 110, imageUrl: 'https://picsum.photos/seed/p10/500/500', category: 'Sneakers', subCategory: 'Low Tops', color: 'White', affiliateLink: '#' },
  { id: 11, name: 'Retro-X Fleece Jacket', brand: 'Patagonia', price: 199, imageUrl: 'https://picsum.photos/seed/p11/500/500', category: 'Jackets', subCategory: 'Fleece', color: 'Beige', affiliateLink: '#' },
  { id: 12, name: 'Daypack Backpack', brand: 'The North Face', price: 75, imageUrl: 'https://picsum.photos/seed/p12/500/500', category: 'Accessories', subCategory: 'Bags', color: 'Black', affiliateLink: '#' },
];

export const articles: Article[] = [
  {
    id: 'essential-sneakers-2024',
    title: '10 ESSENTIAL SNEAKERS EVERY STREETWEAR FAN NEEDS IN 2024',
    excerpt: 'From classic silhouettes to bold new releases, discover the must-have kicks that define modern street style.',
    imageUrl: 'https://picsum.photos/seed/sneakers-collection/800/600',
    author: 'YouthPrime Staff',
    date: 'March 15, 2024',
    category: 'Style Guides',
    content: [
      'The sneaker world is constantly evolving, but some trends have serious staying power. This year, we\'re seeing a huge resurgence of 90s basketball silhouettes, alongside the ever-popular minimalist runners. Comfort is still king, but style is right there with it.',
      'One of the standout pairs has to be the latest from Adidas. Their comfort and design are unmatched.',
      { type: 'product_block', productId: 2 },
      'For a more classic, everyday look, you can never go wrong with a pair of crisp white sneakers. They are versatile and timeless.',
      { type: 'product_block', productId: 10 },
    ],
    mentionedProductIds: [2, 7, 10]
  },
  {
    id: 'winter-layering-guide',
    title: 'HOW TO LAYER LIKE A PRO: WINTER STREETWEAR ESSENTIALS',
    excerpt: 'Master the art of layering with our comprehensive guide to staying warm while looking fresh this season.',
    imageUrl: 'https://picsum.photos/seed/winter-layering/800/600',
    author: 'YouthPrime Staff',
    date: 'March 12, 2024',
    category: 'Style Guides',
    content: ['Full content for winter layering guide...'],
    mentionedProductIds: [1, 3, 11]
  },
  {
    id: 'nike-dunk-low-review',
    title: 'NIKE DUNK LOW REVIEW: ARE THEY WORTH THE HYPE?',
    excerpt: 'An honest, in-depth review of one of the most popular sneakers in streetwear culture right now.',
    imageUrl: 'https://picsum.photos/seed/nike-dunks/800/600',
    author: 'Guest Contributor',
    date: 'March 10, 2024',
    category: 'Reviews',
    content: ['Full content for the Nike Dunk Low review...'],
    mentionedProductIds: [10]
  },
    {
    id: 'streetwear-brands-to-watch',
    title: 'Top Streetwear Brands to Watch in the Coming Year',
    excerpt: 'Discover the emerging labels and underground brands that are set to define the future of streetwear fashion.',
    imageUrl: 'https://picsum.photos/seed/a4/800/600',
    author: 'Chloe Bailey',
    date: 'September 30, 2023',
    category: 'News',
    content: ['Content about new streetwear brands...'],
    mentionedProductIds: [6, 9]
  }
];
