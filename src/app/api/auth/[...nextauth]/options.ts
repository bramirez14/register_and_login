import type { NextAuthOptions } from 'next-auth'
import credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const options: NextAuthOptions = {
    providers: [
      // credentials({
      //   name: "Custom Login",
      //   credentials: {
      //     email: {
      //       label: "Correo:",
      //       type: "email",
      //       placeholder: "correo@google.com",
      //     },
      //     password: {
      //       label: "Contraseña:",
      //       type: "password",
      //       placeholder: "Contraseña",
      //     },
      //   },
      //   async authorize(credentials) {
      //     const res = await fetch("http://localhost:4000/api/check/user", {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({
      //         username: credentials?.email,
      //         password: credentials?.password,
      //       }),
      //     });
  
      //     const user = await res.json();
  
      //     if (user) {
      //       // Any object returned will be saved in `user` property of the JWT
      //       return user;
      //     } else {
      //       // If you return null then an error will be displayed advising the user to check their details.
      //       return null;
  
      //       // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      //     }
      //   },
      // }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID!,
        clientSecret: process.env.GOOGLE_SECRET!,
      }),
    ],
    pages: {
      signIn: "/auth/login",
      newUser: "/auth/register",
    },
  
    //   // Callbacks
    jwt: {
      // secret: process.env.JWT_SECRET_SEED, // deprecated
    },
  
    session: {
      maxAge: 2592000, /// 30d
      strategy: "jwt",
      updateAge: 86400, // cada día
    },
  
    callbacks: {
      // async jwt({ token, account, user }) {
      //   // console.log({ token, account, user });
  
      //   if (account) {
      //     token.accessToken = account.access_token;
  
      //     switch (account.type) {
      //       case "oauth":
      //         // const { data } = await webApi.post("/oAuth/user", {
      //         //   email: user?.email || "",
      //         //   name: user?.name || "",
      //         // });
      //         const res = await fetch("http://localhost:4000/api/oAuth/user", {
      //           method: "POST",
      //           headers: {
      //             "Content-Type": "application/json",
      //           },
      //           body: JSON.stringify({
      //             email: user?.email || "",
      //             name: user?.name || "",
      //           }),
      //         });
  
      //         token.user = await res.json();
      //         break;
  
      //       case "credentials":
      //         token.user = user;
      //         break;
      //     }
      //   }
  
      //   return token;
      // },
  
      // async session({ session, token, user }) {
      //   session.user = token.user as any;
      //   return session;
      // },
    },
  }