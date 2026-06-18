import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import User from '@/models/User';
import { connectDB } from '@/lib/mongodb';
import {
  AUTH_COOKIE,
  signToken,
  verifyToken,
  type AuthPayload,
} from '@/lib/jwt';

export { AUTH_COOKIE, signToken, verifyToken, type AuthPayload };

export async function getAuthUser(): Promise<AuthPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE)?.value;
  if (!token) return null;
  return verifyToken(token);
}

export async function requireAuth(): Promise<AuthPayload> {
  const user = await getAuthUser();
  if (!user) {
    throw new Error('Unauthorized');
  }
  return user;
}

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 12);
}

export async function comparePassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export async function findUserByEmail(email: string) {
  await connectDB();
  return User.findOne({ email: email.toLowerCase() });
}
