import { NextResponse } from 'next/server'
export async function middleware(req) {
    const { pathname } = req.nextUrl
    if (pathname == '/') {
        return NextResponse.redirect('/about')
    }
    return NextResponse.next()
}
