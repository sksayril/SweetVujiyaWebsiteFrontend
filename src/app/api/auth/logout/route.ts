import { AUTH_COOKIE, authCookieOptions } from '@/lib/cookie-options';
import { jsonResponse } from '@/lib/utils';

export async function POST() {
  const response = jsonResponse({ success: true });
  response.cookies.set(AUTH_COOKIE, '', { ...authCookieOptions(0), maxAge: 0 });
  return response;
}
