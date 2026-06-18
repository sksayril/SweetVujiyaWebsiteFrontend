import { jwtVerify } from 'jose';

export const AUTH_COOKIE = 'admin_token';

export interface AuthPayload {
  userId: string;
  email: string;
  name: string;
}

function getSecretKey() {
  return new TextEncoder().encode(process.env.JWT_SECRET || 'fallback-dev-secret');
}

export async function verifyTokenEdge(token: string): Promise<AuthPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getSecretKey(), {
      algorithms: ['HS256'],
    });

    const userId = payload.userId as string | undefined;
    const email = payload.email as string | undefined;
    const name = payload.name as string | undefined;

    if (!userId || !email || !name) return null;

    return { userId, email, name };
  } catch {
    return null;
  }
}
