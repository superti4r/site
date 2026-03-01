/**
 * Configure proxy for i18n user language from cookies/headers browser request
 * @proxy @i18n
 */

import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const LOCALES = ["en", "id"] as const;
type Locale = (typeof LOCALES)[number];

const DEFAULT_LOCALE: Locale = "en";
const COOKIE_NAME = "i18n";

const LOCALE_SET = new Set<Locale>(LOCALES);

function IS_LOCALE(value: string): value is Locale {
  return LOCALE_SET.has(value as Locale);
}

function NORMALIZE_LANG_TAG(tag: string): string {
  return tag.replace(/^in(?=-|$)/i, "id");
}

function GET_COOKIE_LOCALE(request: NextRequest): Locale | null {
  const value = request.cookies.get(COOKIE_NAME)?.value;
  return value && IS_LOCALE(value) ? value : null;
}

function GET_HEADER_LOCALE(request: NextRequest): Locale {
  const AcceptLanguage = request.headers.get("accept-language") ?? "";
  if (!AcceptLanguage) return DEFAULT_LOCALE;

  const Languages = new Negotiator({
    headers: { "accept-language": AcceptLanguage },
  })
    .languages()
    .map(NORMALIZE_LANG_TAG);

  const resolved = match(Languages, [...LOCALES], DEFAULT_LOCALE);
  return IS_LOCALE(resolved) ? resolved : DEFAULT_LOCALE;
}

function GET_LOCALE(request: NextRequest): Locale {
  return GET_COOKIE_LOCALE(request) ?? GET_HEADER_LOCALE(request);
}

function HAS_LOCALE_PREFIX(pathname: string): boolean {
  const seg = pathname.split("/")[1];
  return seg !== undefined && IS_LOCALE(seg);
}

function WITH_LOCALE(pathname: string, locale: Locale): string {
  if (pathname === "/") return `/${locale}`;
  return `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`;
}

export function PROXY(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (HAS_LOCALE_PREFIX(pathname)) {
    return NextResponse.next();
  }

  const locale = GET_LOCALE(request);

  const url = request.nextUrl.clone();
  url.pathname = WITH_LOCALE(pathname, locale);

  const response = NextResponse.redirect(url);

  response.cookies.set(COOKIE_NAME, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 180,
    sameSite: "lax",
    httpOnly: true,
    secure: request.nextUrl.protocol === "https:",
  });

  return response;
}

export const config = {
  matcher: ["/((?!_next|api|assets|sitemap\\.xml|robots\\.txt|favicon\\.ico).*)"],
};