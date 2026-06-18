'use client';

import { useEffect, useState } from 'react';
import { Product, ProductType } from '@/types/product';

export function useProducts(type?: ProductType, featured?: boolean) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams();
    if (type) params.set('type', type);
    if (featured) params.set('featured', 'true');

    fetch(`/api/products?${params}`)
      .then((r) => r.json())
      .then((d) => {
        setProducts(d.products || []);
        setError(null);
      })
      .catch(() => setError('Failed to load products'))
      .finally(() => setLoading(false));
  }, [type, featured]);

  return { products, loading, error };
}

export function mapProductForDisplay(p: Product, index: number) {
  return {
    id: index + 1,
    _id: p._id,
    name: p.name,
    category: p.category,
    image: p.image,
    price: p.price,
    originalPrice: p.originalPrice,
    discount: p.discount,
    offer: p.offer,
    rating: p.rating,
    reviews: p.reviews,
    description: p.description,
    ingredients: p.ingredients,
    weight: p.weight,
    shelfLife: p.shelfLife,
    spiceLevel: p.spiceLevel,
  };
}
