'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import ProductForm from '@/components/admin/ProductForm';
import { ProductFormData } from '@/types/product';

export default function EditProductPage() {
  const params = useParams();
  const id = params.id as string;
  const [initialData, setInitialData] = useState<ProductFormData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((r) => r.json())
      .then((d) => {
        const p = d.product;
        if (p) {
          setInitialData({
            name: p.name,
            type: p.type,
            category: p.category,
            image: p.image,
            description: p.description,
            price: p.price,
            originalPrice: p.originalPrice || '',
            discount: p.discount || '',
            offer: p.offer || '',
            rating: p.rating,
            reviews: p.reviews,
            ingredients: p.ingredients || '',
            weight: p.weight || '',
            shelfLife: p.shelfLife || '',
            spiceLevel: p.spiceLevel || '',
            featured: p.featured,
            active: p.active,
          });
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-orange-600" />
      </div>
    );
  }

  if (!initialData) {
    return <p className="text-red-600">Product not found</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-cinzel font-bold text-gray-900 mb-8">Edit Product</h1>
      <ProductForm mode="edit" productId={id} initialData={initialData} />
    </div>
  );
}
