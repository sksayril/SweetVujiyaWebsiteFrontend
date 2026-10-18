import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Lead from '@/models/Lead';
import { requireAuth } from '@/lib/auth';
import { errorResponse, jsonResponse } from '@/lib/utils';

type RouteContext = { params: Promise<{ id: string }> };

export async function PATCH(request: NextRequest, context: RouteContext) {
  try {
    await requireAuth();
    await connectDB();
    const { id } = await context.params;
    const body = await request.json();

    const lead = await Lead.findById(id);
    if (!lead) return errorResponse('Lead not found', 404);

    if (body.status && ['new', 'contacted', 'completed', 'cancelled'].includes(body.status)) {
      lead.status = body.status;
    }
    if (body.notes !== undefined) {
      lead.notes = body.notes;
    }

    await lead.save();
    return jsonResponse({ success: true, lead });
  } catch (err) {
    if (err instanceof Error && err.message === 'Unauthorized') {
      return errorResponse('Unauthorized', 401);
    }
    console.error('PATCH lead error:', err);
    return errorResponse('Failed to update lead', 500);
  }
}

export async function DELETE(_request: NextRequest, context: RouteContext) {
  try {
    await requireAuth();
    await connectDB();
    const { id } = await context.params;

    const lead = await Lead.findById(id);
    if (!lead) return errorResponse('Lead not found', 404);

    await lead.deleteOne();
    return jsonResponse({ success: true });
  } catch (err) {
    if (err instanceof Error && err.message === 'Unauthorized') {
      return errorResponse('Unauthorized', 401);
    }
    console.error('DELETE lead error:', err);
    return errorResponse('Failed to delete lead', 500);
  }
}
