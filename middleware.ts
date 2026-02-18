import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const urlLower = pathname.toLowerCase();

  // 1. GESTION DES ANCIENNES URLS (CODE 410 - GONE)
  // On cible /Home, /home et les paramètres index.php/html de l'ancien WordPress
  if (urlLower.startsWith('/home') || pathname.includes('index.php') || pathname.includes('index.html')) {
    return new NextResponse(null, {
      status: 410,
      statusText: 'Gone',
    });
  }

  // 2. EXCLUSION PRIORITAIRE : On laisse passer les flux RSS
  if (pathname.endsWith('/feed') || pathname.endsWith('/feed/')) {
    return NextResponse.next();
  }

  // 3. REDIRECTION DES CATÉGORIES (CODE 301)
  if (pathname.startsWith('/category/')) {
    return NextResponse.redirect(new URL('/', request.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  // On ajoute /home et /Home au matcher pour que le middleware s'active dessus
  matcher: ['/category/:path*', '/home/:path*', '/Home/:path*'],
}