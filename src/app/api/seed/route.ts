import { connectDB } from '@/lib/mongodb';
import Product from '@/models/Product';
import SiteContent from '@/models/SiteContent';
import { requireAuth } from '@/lib/auth';
import { seedProducts, defaultSiteContent, toProductDoc } from '@/lib/seed-data';
import { errorResponse, jsonResponse } from '@/lib/utils';

export async function POST() {
  try {
    await requireAuth();
    await connectDB();

    const existingCount = await Product.countDocuments();
    if (existingCount > 0) {
      return errorResponse('Products already exist. Delete all products first to re-seed.', 409);
    }

    const products = await Product.insertMany(
      seedProducts.map((item, index) => toProductDoc(item, index))
    );

    for (const [section, data] of Object.entries(defaultSiteContent)) {
      await SiteContent.findOneAndUpdate(
        { section },
        { section, data },
        { upsert: true }
      );
    }

    return jsonResponse({ success: true, count: products.length });
  } catch (err) {
    if (err instanceof Error && err.message === 'Unauthorized') {
      return errorResponse('Unauthorized', 401);
    }
    console.error('Seed error:', err);
    return errorResponse('Seed failed', 500);
  }
}
