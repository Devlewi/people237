import { NextResponse } from "next/server";

export function GET(request: Request) {
  const { pathname } = new URL(request.url);

  // 1. Si l'URL contient "/Home/" (ex: /Home/category/decouvertes)
  // 2. Si c'est la catégorie "events" qui est supprimée
  // 3. Ou n'importe quelle autre route capturée par [...rest]
  
  console.log(`Redirection 301 de : ${pathname}`);

  // On redirige tout ce qui tombe ici vers l'accueil proprement
  return NextResponse.redirect(new URL("/", request.url), 301);
}