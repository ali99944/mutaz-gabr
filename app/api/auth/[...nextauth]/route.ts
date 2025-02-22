import NextAuth from "next-auth";

import { authOptions } from "@/src/utils/auth-options";




export const { GET, POST } = {
    GET: NextAuth(authOptions),
    POST: NextAuth(authOptions)
}

