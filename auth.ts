import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { getUser, addUser } from "@/app/lib/db"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google,],
  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth
    },
    signIn: async ({ user, account, profile }) => {
      if (!user?.email) {
        return false;
      }
      const existingUser = await getUser(user.email);
      if (existingUser == null) {
        await addUser(user.name, user.email, user.image);
      }
      return true;
    }
  },
})