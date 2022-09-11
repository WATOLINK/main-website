import { NextResponse } from 'next/server'

export async function middleware(req) {
    const { pathname } = req.nextUrl.clone()
    if (pathname == "/") {
        return NextResponse.redirect(new URL('/about', req.nextUrl))
    }
    return NextResponse.next()
}