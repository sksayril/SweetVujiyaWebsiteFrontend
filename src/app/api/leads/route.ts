import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Lead from '@/models/Lead';
import { requireAuth } from '@/lib/auth';
import { errorResponse, jsonResponse } from '@/lib/utils';

export async function GET(request: NextRequest) {
  try {
    await requireAuth();
    await connectDB();

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const type = searchParams.get('type');
    const search = searchParams.get('search');

    const filter: Record<string, unknown> = {};

    if (status && status !== 'all') {
      filter.status = status;
    }

    if (type && type !== 'all') {
      filter.type = type;
    }

    if (search && search.trim()) {
      const regex = new RegExp(search.trim(), 'i');
      filter.$or = [
        { name: regex },
        { phone: regex },
        { email: regex },
        { productName: regex },
        { message: regex },
      ];
    }

    const [leads, totalCount, newCount, contactedCount, completedCount] = await Promise.all([
      Lead.find(filter).sort({ createdAt: -1 }).lean(),
      Lead.countDocuments(),
      Lead.countDocuments({ status: 'new' }),
      Lead.countDocuments({ status: 'contacted' }),
      Lead.countDocuments({ status: 'completed' }),
    ]);

    return jsonResponse({
      leads,
      stats: {
        total: totalCount,
        new: newCount,
        contacted: contactedCount,
        completed: completedCount,
      },
    });
  } catch (err) {
    if (err instanceof Error && err.message === 'Unauthorized') {
      return errorResponse('Unauthorized', 401);
    }
    console.error('GET leads error:', err);
    return errorResponse('Failed to fetch leads', 500);
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();

    const name = body.name?.trim();
    const phone = body.phone?.trim();

    if (!name || !phone) {
      return errorResponse('Name and Phone number are required', 400);
    }

    const lead = await Lead.create({
      name,
      phone,
      email: body.email?.trim() || '',
      productName: body.productName?.trim() || '',
      quantity: body.quantity?.trim() || '',
      message: body.message?.trim() || '',
      type: body.type || 'price_inquiry',
      status: 'new',
      notes: '',
    });

    return jsonResponse({ success: true, lead }, 201);
  } catch (err) {
    console.error('POST lead error:', err);
    return errorResponse('Failed to submit inquiry', 500);
  }
}
