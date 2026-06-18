export type ProductType = 'product' | 'sweet' | 'namkeen';

export interface Product {
  _id: string;
  name: string;
  slug: string;
  type: ProductType;
  category: string;
  image: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  offer?: string;
  rating: number;
  reviews: number;
  ingredients?: string;
  weight?: string;
  shelfLife?: string;
  spiceLevel?: string;
  featured: boolean;
  active: boolean;
  sortOrder: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface ProductFormData {
  name: string;
  type: ProductType;
  category: string;
  image: string;
  description: string;
  price: string;
  originalPrice: string;
  discount: string;
  offer: string;
  rating: number;
  reviews: number;
  ingredients: string;
  weight: string;
  shelfLife: string;
  spiceLevel: string;
  featured: boolean;
  active: boolean;
}

export const emptyProductForm: ProductFormData = {
  name: '',
  type: 'product',
  category: '',
  image: '',
  description: '',
  price: '',
  originalPrice: '',
  discount: '',
  offer: '',
  rating: 4.5,
  reviews: 0,
  ingredients: '',
  weight: '',
  shelfLife: '',
  spiceLevel: '',
  featured: false,
  active: true,
};
