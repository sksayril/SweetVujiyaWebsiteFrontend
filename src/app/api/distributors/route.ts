import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import DistributorApplication from '@/models/DistributorApplication';
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
        { companyName: regex },
        { contactPerson: regex },
        { email: regex },
        { phone: regex },
        { city: regex },
        { state: regex },
        { businessType: regex },
      ];
    }

    const [applications, totalCount, newCount, approvedCount] = await Promise.all([
      DistributorApplication.find(filter).sort({ createdAt: -1 }).lean(),
      DistributorApplication.countDocuments(),
      DistributorApplication.countDocuments({ status: 'new' }),
      DistributorApplication.countDocuments({ status: 'approved' }),
    ]);

    return jsonResponse({
      applications,
      stats: {
        total: totalCount,
        new: newCount,
        approved: approvedCount,
      },
    });
  } catch (err) {
    if (err instanceof Error && err.message === 'Unauthorized') {
      return errorResponse('Unauthorized', 401);
    }
    console.error('GET distributors error:', err);
    return errorResponse('Failed to fetch distributor applications', 500);
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();

    const {
      companyName,
      contactPerson,
      email,
      phone,
      address,
      city,
      state,
      pincode,
      businessType,
      experience,
      monthlyVolume,
      message,
    } = body;

    if (!companyName?.trim() || !contactPerson?.trim() || !email?.trim() || !phone?.trim()) {
      return errorResponse('Company name, contact person, email, and phone are required', 400);
    }

    const application = await DistributorApplication.create({
      companyName: companyName.trim(),
      contactPerson: contactPerson.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      address: address?.trim() || '',
      city: city?.trim() || '',
      state: state?.trim() || '',
      pincode: pincode?.trim() || '',
      businessType: businessType?.trim() || 'General Distributor',
      experience: experience?.trim() || 'Not specified',
      monthlyVolume: monthlyVolume?.trim() || 'Not specified',
      message: message?.trim() || '',
      status: 'new',
      notes: '',
    });

    return jsonResponse({ success: true, application }, 201);
  } catch (err) {
    console.error('POST distributor application error:', err);
    return errorResponse('Failed to submit distributor application', 500);
  }
}
