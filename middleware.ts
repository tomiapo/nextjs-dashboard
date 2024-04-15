import { NextRequest } from "next/server";
import { auth } from "@/auth";

export async function middleware(request : NextRequest){

    // const session = await auth()

    // if (session?.user && !request.nextUrl.pathname.startsWith('/dashboard')) {  // usuario logueado, pero no esta en /dashboard
    //     return Response.redirect(new URL('/dashboard', request.url))
    // }

    // if (!session?.user && !request.nextUrl.pathname.startsWith('/login'))  {    // usuario no logueado, y no esta en /login
    //     return Response.redirect(new URL('/login', request.url))
    // }

}

// El archivo solo puede exportar una funcion llamada 'middleware' o bien un default export con cualquier nombre.

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};