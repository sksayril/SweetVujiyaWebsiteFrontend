import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Product from '@/models/Product';
import { requireAuth } from '@/lib/auth';
import { deleteFromS3 } from '@/lib/s3';
import { slugify, errorResponse, jsonResponse } from '@/lib/utils';

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_request: NextRequest, context: RouteContext) {
  try {
    await connectDB();
    const { id } = await context.params;
    const product = await Product.findById(id).lean();
    if (!product) return errorResponse('Product not found', 404);
    return jsonResponse({ product });
  } catch (err) {
    console.error('GET product error:', err);
    return errorResponse('Failed to fetch product', 500);
  }
}

export async function PUT(request: NextRequest, context: RouteContext) {
  try {
    await requireAuth();
    await connectDB();
    const { id } = await context.params;
    const body = await request.json();

    const product = await Product.findById(id);
    if (!product) return errorResponse('Product not found', 404);

    if (body.name?.trim()) {
      product.name = body.name.trim();
      if (body.updateSlug) {
        product.slug = slugify(body.name);
      }
    }
    if (body.type) product.type = body.type;
    if (body.category !== undefined) product.category = body.category;
    if (body.image !== undefined) {
      if (product.image && product.image.includes('amazonaws.com') && body.image !== product.image) {
        await deleteFromS3(product.image);
      }
      product.image = body.image;
    }
    if (body.description !== undefined) product.description = body.description;
    if (body.price !== undefined) product.price = body.price;
    if (body.originalPrice !== undefined) product.originalPrice = body.originalPrice;
    if (body.discount !== undefined) product.discount = body.discount;
    if (body.offer !== undefined) product.offer = body.offer;
    if (body.rating !== undefined) product.rating = Number(body.rating);
    if (body.reviews !== undefined) product.reviews = Number(body.reviews);
    if (body.ingredients !== undefined) product.ingredients = body.ingredients;
    if (body.weight !== undefined) product.weight = body.weight;
    if (body.shelfLife !== undefined) product.shelfLife = body.shelfLife;
    if (body.spiceLevel !== undefined) product.spiceLevel = body.spiceLevel;
    if (body.featured !== undefined) product.featured = Boolean(body.featured);
    if (body.active !== undefined) product.active = Boolean(body.active);
    if (body.sortOrder !== undefined) product.sortOrder = Number(body.sortOrder);

    await product.save();
    return jsonResponse({ product });
  } catch (err) {
    if (err instanceof Error && err.message === 'Unauthorized') {
      return errorResponse('Unauthorized', 401);
    }
    console.error('PUT product error:', err);
    return errorResponse('Failed to update product', 500);
  }
}

export async function DELETE(_request: NextRequest, context: RouteContext) {
  try {
    await requireAuth();
    await connectDB();
    const { id } = await context.params;

    const product = await Product.findById(id);
    if (!product) return errorResponse('Product not found', 404);

    if (product.image?.includes('amazonaws.com')) {
      await deleteFromS3(product.image);
    }

    await product.deleteOne();
    return jsonResponse({ success: true });
  } catch (err) {
    if (err instanceof Error && err.message === 'Unauthorized') {
      return errorResponse('Unauthorized', 401);
    }
    console.error('DELETE product error:', err);
    return errorResponse('Failed to delete product', 500);
  }
}
