import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const allLocales = ["en", "ar"];

export const routing = defineRouting({
  locales: allLocales,
  defaultLocale: "en",
  // localePrefix: ,
});

export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
