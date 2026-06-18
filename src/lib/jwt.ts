import jwt from 'jsonwebtoken';
import { AUTH_COOKIE } from '@/lib/cookie-options';

export { AUTH_COOKIE };

export interface AuthPayload {
  userId: string;
  email: string;
  name: string;
}

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-dev-secret';

export function signToken(payload: AuthPayload) {
  return jwt.sign(payload, JWT_SECRET, { algorithm: 'HS256', expiresIn: '7d' });
}

export function verifyToken(token: string): AuthPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] }) as AuthPayload;
    if (!decoded.userId || !decoded.email || !decoded.name) return null;
    return decoded;
  } catch {
    return null;
  }
}
