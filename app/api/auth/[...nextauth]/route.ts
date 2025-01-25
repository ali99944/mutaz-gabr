// export { GET, POST } from "@/app/(control-panel)/auth";

import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";


const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },

    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                username: {
                    label: 'Username',
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
                if (credentials?.username === 'admin' && credentials.password === 'password') {
                    return { id: '1', name: 'Admin', email: '7hNvR@example.com' }
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