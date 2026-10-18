import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import EmployeeApplication from '@/models/EmployeeApplication';
import { requireAuth } from '@/lib/auth';
import { errorResponse, jsonResponse } from '@/lib/utils';

type RouteContext = { params: Promise<{ id: string }> };

export async function PATCH(request: NextRequest, context: RouteContext) {
  try {
    await requireAuth();
    await connectDB();
    const { id } = await context.params;
    const body = await request.json();

    const application = await EmployeeApplication.findById(id);
    if (!application) return errorResponse('Application not found', 404);

    if (
      body.status &&
      ['new', 'shortlisted', 'interviewed', 'hired', 'rejected'].includes(body.status)
    ) {
      application.status = body.status;
    }
    if (body.notes !== undefined) {
      application.notes = body.notes;
    }

    await application.save();
    return jsonResponse({ success: true, application });
  } catch (err) {
    if (err instanceof Error && err.message === 'Unauthorized') {
      return errorResponse('Unauthorized', 401);
    }
    console.error('PATCH application error:', err);
    return errorResponse('Failed to update application', 500);
  }
}

export async function DELETE(_request: NextRequest, context: RouteContext) {
  try {
    await requireAuth();
    await connectDB();
    const { id } = await context.params;

    const application = await EmployeeApplication.findById(id);
    if (!application) return errorResponse('Application not found', 404);

    await application.deleteOne();
    return jsonResponse({ success: true });
  } catch (err) {
    if (err instanceof Error && err.message === 'Unauthorized') {
      return errorResponse('Unauthorized', 401);
    }
    console.error('DELETE application error:', err);
    return errorResponse('Failed to delete application', 500);
  }
}
