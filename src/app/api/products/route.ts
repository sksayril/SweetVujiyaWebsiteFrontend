import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Product from '@/models/Product';
import { requireAuth } from '@/lib/auth';
import { slugify, errorResponse, jsonResponse } from '@/lib/utils';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const featured = searchParams.get('featured');
    const activeOnly = searchParams.get('active') !== 'false';

    const filter: Record<string, unknown> = {};
    if (type) filter.type = type;
    if (featured === 'true') filter.featured = true;
    if (activeOnly) filter.active = true;

    const products = await Product.find(filter).sort({ sortOrder: 1, createdAt: -1 }).lean();
    return jsonResponse({ products });
  } catch (err) {
    console.error('GET products error:', err);
    return errorResponse('Failed to fetch products', 500);
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireAuth();
    await connectDB();
    const body = await request.json();

    if (!body.name?.trim() || !body.price?.trim()) {
      return errorResponse('Name and price are required');
    }

    let slug = slugify(body.name);
    const existing = await Product.findOne({ slug });
    if (existing) slug = `${slug}-${Date.now()}`;

    const product = await Product.create({
      name: body.name.trim(),
      slug,
      type: body.type || 'product',
      category: body.category || 'General',
      image: body.image || '',
      description: body.description || '',
      price: body.price,
      originalPrice: body.originalPrice || '',
      discount: body.discount || '',
      offer: body.offer || '',
      rating: Number(body.rating) || 4.5,
      reviews: Number(body.reviews) || 0,
      ingredients: body.ingredients || '',
      weight: body.weight || '',
      shelfLife: body.shelfLife || '',
      spiceLevel: body.spiceLevel || '',
      featured: Boolean(body.featured),
      active: body.active !== false,
      sortOrder: Number(body.sortOrder) || 0,
    });

    return jsonResponse({ product }, 201);
  } catch (err) {
    if (err instanceof Error && err.message === 'Unauthorized') {
      return errorResponse('Unauthorized', 401);
    }
    console.error('POST product error:', err);
    return errorResponse('Failed to create product', 500);
  }
}
