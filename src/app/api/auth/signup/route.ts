import { NextRequest } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import User from '@/models/User';
import { hashPassword, signToken } from '@/lib/auth';
import { AUTH_COOKIE, authCookieOptions } from '@/lib/cookie-options';
import { errorResponse, jsonResponse } from '@/lib/utils';

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();

    if (!name?.trim() || !email?.trim() || !password) {
      return errorResponse('Name, email and password are required');
    }

    if (password.length < 6) {
      return errorResponse('Password must be at least 6 characters');
    }

    await connectDB();

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return errorResponse('Email already registered', 409);
    }

    const user = await User.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: await hashPassword(password),
    });

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
    console.error('Signup error:', err);
    return errorResponse('Failed to create account', 500);
  }
}
