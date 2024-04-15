import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth; 

/* Middleware file must export a single function, 
  either as a default export or named middleware. 
  Note that multiple middleware from the same file are not supported. 
*/

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};