import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import User from "@/models/User";
import connectDB from "@/db/connectDb";

const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "github") {
        await connectDB();

        const currentUser = await User.findOne({ email: user.email });
        if (!currentUser) {
          const newUser = await User.create({
            email: user.email,
            username: user.email.split("@")[0],
          });

          user.name = newUser.username;
          console.log("New user created:", newUser);
        } else {
          console.log("User already exists:", currentUser);
          user.name = currentUser.username;
        }
      }
      return true;
    },
    async session({ session, token }) {
      await connectDB();

      const dbUser = await User.findOne({ email: session.user.email });
      session.user.name = dbUser.username;
      console.log(dbUser)
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
