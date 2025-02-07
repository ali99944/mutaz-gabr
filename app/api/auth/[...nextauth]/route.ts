import NextAuth, { NextAuthOptions, User } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import Credentials from "next-auth/providers/credentials";

const prisma = new PrismaClient();

const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt'
    },
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                    placeholder: 'admin'
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: 'password'
                }
            },
            async authorize(credentials) {
                const manager = await prisma.manager.findFirst({
                    where: {
                        email: credentials?.email,
                        password: credentials?.password
                    }
                });

                if (manager) {
                    return {
                        name: manager.name,
                        email: manager.email,
                    } as User
                }

                return null
            }
        })
    ],
    pages: {
        signIn: '/admin/login'
    }
}

export const { GET, POST } = {
    GET: NextAuth(authOptions),
    POST: NextAuth(authOptions)
}

