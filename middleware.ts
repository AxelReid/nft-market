import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  const token = request.cookies.get('token')
  if (!token) return NextResponse.redirect(new URL('/sign-in', request.url))
  // if (request.nextUrl.pathname.startsWith('/dashboard/seller')) {
  //   return NextResponse.redirect(new URL('/dashboard', request.url))
  // }
  return response
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard/:path*'],
}
