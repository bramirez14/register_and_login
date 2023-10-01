import NextAuth, { NextAuthOptions } from "next-auth";
import { options } from "./options";

// import GithubProvider from 'next-auth/providers/github';

// Initialize NextAuth

/* import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  pages: {
    signIn: '/signin'
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
 */

const handler = NextAuth(options);
export { handler as GET, handler as POST };