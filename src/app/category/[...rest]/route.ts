import { NextResponse } from "next/server";

export function GET(request: Request) {
  // On récupère l'URL de base (l'accueil)
  const url = new URL("/", request.url);
  
  // On renvoie une redirection 301 au lieu du code 410
  return NextResponse.redirect(url, 301);
}