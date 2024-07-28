import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      _id: string;
      name: string;
      email: string;
      image: string;

      isAdmin: boolean;
      isVerified: boolean;
      password?: string;
      createdAt: Date;
      updatedAt: Date;
    };
  }
}
