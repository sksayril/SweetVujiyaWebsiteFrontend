import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import EmployeeApplication from '@/models/EmployeeApplication';
import { requireAuth } from '@/lib/auth';
import { errorResponse, jsonResponse } from '@/lib/utils';

export async function GET(request: NextRequest) {
  try {
    await requireAuth();
    await connectDB();

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const search = searchParams.get('search');

    const filter: Record<string, unknown> = {};

    if (status && status !== 'all') {
      filter.status = status;
    }

    if (search && search.trim()) {
      const regex = new RegExp(search.trim(), 'i');
      filter.$or = [
        { fullName: regex },
        { email: regex },
        { phone: regex },
        { position: regex },
        { city: regex },
        { state: regex },
        { branchLocation: regex },
      ];
    }

    const [applications, totalCount, newCount, shortlistedCount] = await Promise.all([
      EmployeeApplication.find(filter).sort({ createdAt: -1 }).lean(),
      EmployeeApplication.countDocuments(),
      EmployeeApplication.countDocuments({ status: 'new' }),
      EmployeeApplication.countDocuments({ status: 'shortlisted' }),
    ]);

    return jsonResponse({
      applications,
      stats: {
        total: totalCount,
        new: newCount,
        shortlisted: shortlistedCount,
      },
    });
  } catch (err) {
    if (err instanceof Error && err.message === 'Unauthorized') {
      return errorResponse('Unauthorized', 401);
    }
    console.error('GET applications error:', err);
    return errorResponse('Failed to fetch employee applications', 500);
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();

    const {
      fullName,
      email,
      phone,
      address,
      city,
      state,
      pincode,
      position,
      experience,
      fssaiLicense,
      branchLocation,
      message,
    } = body;

    if (!fullName?.trim() || !email?.trim() || !phone?.trim() || !position?.trim()) {
      return errorResponse('Full name, email, phone, and position are required', 400);
    }

    const application = await EmployeeApplication.create({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      address: address?.trim() || '',
      city: city?.trim() || '',
      state: state?.trim() || '',
      pincode: pincode?.trim() || '',
      position: position.trim(),
      experience: experience?.trim() || 'Entry Level',
      fssaiLicense: fssaiLicense?.trim() || '',
      branchLocation: branchLocation?.trim() || '',
      message: message?.trim() || '',
      status: 'new',
      notes: '',
    });

    return jsonResponse({ success: true, application }, 201);
  } catch (err) {
    console.error('POST employee application error:', err);
    return errorResponse('Failed to submit job application', 500);
  }
}
