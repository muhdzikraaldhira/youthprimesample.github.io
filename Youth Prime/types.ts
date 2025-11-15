
export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  category: string;
  subCategory: string;
  color: string;
  affiliateLink: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
  category: 'Style Guides' | 'Reviews' | 'News';
  content: (string | { type: 'product_block'; productId: number })[];
  mentionedProductIds: number[];
}
