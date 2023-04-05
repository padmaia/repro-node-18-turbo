import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  try{
    let x = await fetch('http://localhost:3000/api/hello');
  console.log(await x.json());
  } catch (e) {
    console.error(e)
  }
  if (request.nextUrl.pathname === '/about') {
    return NextResponse.redirect(new URL('/redirected', request.url))
  }
  if (request.nextUrl.pathname === '/another') {
    return NextResponse.rewrite(new URL('/rewrite', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/about/:path*', '/another/:path*'],
}
