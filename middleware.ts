import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Si l'URL commence par /category/
  if (pathname.startsWith('/category/')) {
    // On force une redirection 301 (Permanente) vers l'accueil
    return NextResponse.redirect(new URL('/', request.url), 301);
  }
}

// Sécurité pour que le middleware ne s'exécute QUE sur ces routes
export const config = {
  matcher: '/category/:path*',
}