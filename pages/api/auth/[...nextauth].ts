import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import {AuthOptions} from "next-auth";
import User from "@/models/User";
import connectDB from "@/lib/db.config";

const options: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "email", placeholder: "email"},
                password: {label: "Password", type: "password"},
            },

            // @ts-ignore
            async authorize(credentials: Record<"email" | "password", string> | undefined): Promise<IUser | null> {
                if (!credentials) throw new Error("Please enter your email and password");

                await connectDB();

                const user = await User.findOne({email: credentials.email}).select('+password');
                if (!user || (user && !user.password)) {
                    throw new Error("No user found with this email")
                }
                ;

                const isMatch = await user.comparePassword(credentials.password);
                if (!isMatch) throw new Error("Incorrect email or password");

                user.password = undefined;
                return user;
            }
        }),
    ],
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                console.log('------------- JWT CALLBACK Start --------')
                token.user = user;
                console.log("token - ", user)
                console.log("token - ", token)
                console.log('------------- JWT CALLBACK End --------')
            }
            return token
        },
        async session({session, token}) {
            if (token) {
                console.log('------------- SESSION CALLBACK Start --------')
                // @ts-ignore
                session.user = token.user;
                console.log("session - ", session)
                console.log("session - ", token)
                console.log('------------- SESSION CALLBACK End --------')
            }
            return session
        }
    },
    pages: {
        signIn: "/",
    },
    secret: process.env.NEXT_PUBLIC_SECRET,
}
export default NextAuth(options);

