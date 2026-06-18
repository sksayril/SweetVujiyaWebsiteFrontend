import { NextRequest } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { uploadToS3 } from '@/lib/s3';
import { errorResponse, jsonResponse } from '@/lib/utils';

export async function POST(request: NextRequest) {
  try {
    await requireAuth();
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) return errorResponse('No file provided');

    const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowed.includes(file.type)) {
      return errorResponse('Only JPEG, PNG, WebP and GIF images are allowed');
    }

    if (file.size > 5 * 1024 * 1024) {
      return errorResponse('File size must be under 5MB');
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const url = await uploadToS3(buffer, file.name, file.type);

    return jsonResponse({ url });
  } catch (err) {
    if (err instanceof Error && err.message === 'Unauthorized') {
      return errorResponse('Unauthorized', 401);
    }
    console.error('Upload error:', err);
    return errorResponse('Upload failed', 500);
  }
}
