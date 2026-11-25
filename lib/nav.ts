/**
 * Whether a header nav link is the current page.
 *
 * `pathname` is the locale-stripped path from `@/i18n/routing`'s usePathname.
 * The static export uses `trailingSlash: true`, so it arrives as "/about/";
 * normalise that before comparing so Home ("/") is active only on the home
 * page and nested pages (e.g. "/blog/123/") keep their section highlighted.
 */
export function isNavActive(pathname: string, href: string): boolean {
  if (!pathname) return false
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') || '/' : pathname
  const target = href.length > 1 ? href.replace(/\/+$/, '') : href
  if (target === '/') return path === '/'
  return path === target || path.startsWith(`${target}/`)
}
