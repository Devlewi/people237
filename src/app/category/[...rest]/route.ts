import { NextResponse } from "next/server";

export function GET() {
  return new NextResponse("Cette section a été supprimée.", {
    status: 410,
    headers: {
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
