import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the current domain
  const currentDomain = request.headers.get("host") || ""

  // CORS headers
  const headers = new Headers()
  headers.set("Access-Control-Allow-Origin", "*")
  headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization")

  // Security headers
  headers.set("X-DNS-Prefetch-Control", "on")
  headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains")
  headers.set("X-Frame-Options", "SAMEORIGIN")
  headers.set("X-Content-Type-Options", "nosniff")
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), interest-cohort=()")

  // Content Security Policy
  headers.set(
    "Content-Security-Policy",
    `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com;
      child-src *.youtube.com *.google.com *.twitter.com;
      style-src 'self' 'unsafe-inline' *.googleapis.com;
      img-src * blob: data:;
      media-src 'none';
      connect-src *;
      font-src 'self';
    `
      .replace(/\s{2,}/g, " ")
      .trim(),
  )

  // Domain-specific routing
  if (currentDomain.includes("likhon.sheikh.codes")) {
    // Handle blog subdomain
    const url = request.nextUrl.clone()
    url.pathname = `/blog${request.nextUrl.pathname}`
    return NextResponse.rewrite(url)
  }

  const response = NextResponse.next()

  // Apply all headers
  Object.entries(headers).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}

