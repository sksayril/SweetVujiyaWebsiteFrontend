import { NextRequest, NextResponse } from 'next/server';
import { verifyTokenEdge, AUTH_COOKIE } from '@/lib/jwt-edge';

const publicAdminPaths = ['/admin/login', '/admin/signup'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(AUTH_COOKIE)?.value;
  const user = token ? await verifyTokenEdge(token) : null;

  if (!pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  const isPublicPath = publicAdminPaths.some((path) => pathname.startsWith(path));

  if (isPublicPath) {
    if (user) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
    return NextResponse.next();
  }

  if (!user) {
    const loginUrl = new URL('/admin/login', request.url);
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
};
