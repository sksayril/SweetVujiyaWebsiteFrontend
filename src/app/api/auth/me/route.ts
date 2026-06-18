import { getAuthUser } from '@/lib/auth';
import { errorResponse, jsonResponse } from '@/lib/utils';

export async function GET() {
  const user = await getAuthUser();
  if (!user) return errorResponse('Not authenticated', 401);
  return jsonResponse({ user });
}
