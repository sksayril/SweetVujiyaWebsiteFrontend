import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import SiteContent from '@/models/SiteContent';
import { requireAuth } from '@/lib/auth';
import { errorResponse, jsonResponse } from '@/lib/utils';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const section = searchParams.get('section');

    if (section) {
      const content = await SiteContent.findOne({ section }).lean();
      return jsonResponse({ content: content || { section, data: {} } });
    }

    const contents = await SiteContent.find().lean();
    return jsonResponse({ contents });
  } catch (err) {
    console.error('GET site content error:', err);
    return errorResponse('Failed to fetch content', 500);
  }
}

export async function PUT(request: NextRequest) {
  try {
    await requireAuth();
    await connectDB();
    const { section, data } = await request.json();

    if (!section) return errorResponse('Section is required');

    const content = await SiteContent.findOneAndUpdate(
      { section },
      { section, data },
      { upsert: true, new: true }
    );

    return jsonResponse({ content });
  } catch (err) {
    if (err instanceof Error && err.message === 'Unauthorized') {
      return errorResponse('Unauthorized', 401);
    }
    console.error('PUT site content error:', err);
    return errorResponse('Failed to update content', 500);
  }
}
