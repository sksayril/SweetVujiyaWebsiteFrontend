import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import User from '@/models/User';
import { comparePassword, signToken } from '@/lib/auth';
import { AUTH_COOKIE, authCookieOptions } from '@/lib/cookie-options';
import { errorResponse, jsonResponse } from '@/lib/utils';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email?.trim() || !password) {
      return errorResponse('Email and password are required');
    }

    await connectDB();
    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user || !(await comparePassword(password, user.password))) {
      return errorResponse('Invalid email or password', 401);
    }

    const token = signToken({
      userId: user._id.toString(),
      email: user.email,
      name: user.name,
    });

    const response = jsonResponse({
      user: { id: user._id, name: user.name, email: user.email },
    });

    response.cookies.set(AUTH_COOKIE, token, authCookieOptions());

    return response;
  } catch (err) {
    console.error('Login error:', err);
    return errorResponse('Login failed', 500);
  }
}
