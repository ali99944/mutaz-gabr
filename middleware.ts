import { NextRequest } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

export async function middleware(request: NextRequest) {
  const defaultLocale = request.headers.get("x-locale") || "ar";

  const handleI18nRouting = createIntlMiddleware(routing);

  const response = handleI18nRouting(request);

  response.headers.set("x-locale", defaultLocale);

  return response;
}

export const config = { matcher: ["/", "/((?!api|_next|_vercel|.*\\..*).*)"] };
// export const config = { matcher: ["/", "/((?!api|_next|_vercel|admin|.*\\..*).*)"] };
