import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
const JWT_SECRET = process.env.JWT_SECRET;
export function createToken(payload)
{
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
}

export function verifyToken(token)
{
  try
  {
    return jwt.verify(token, JWT_SECRET);
  } catch (err)
  {
    return null;
  }
}

export function getUserFromCookie()
{
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) return null;
  return verifyToken(token);
}
