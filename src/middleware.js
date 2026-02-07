
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req)
{
  const token = await getToken({ req, secret });
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/admin'))
  {
    if (pathname !== '/admin/login' && !token)
    {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
    if (pathname === '/admin/login' && token)
    {
      return NextResponse.redirect(new URL('/admin/dashboard', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
