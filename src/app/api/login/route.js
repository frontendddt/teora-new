
import { db } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import { createToken } from '@/lib/auth';

export async function POST(req) {
  const { email, password } = await req.json();

  const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  const user = rows[0];

  if (!user) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 401 });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  }

  const token = createToken({ id: user.id, email: user.email });
  const response = NextResponse.json({ success: true });
  response.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', 
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 *24, 
  });

  return response;
}










