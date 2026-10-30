const DEFAULT_BASE_PATH = '/kashishbeautyparlour'
const DEFAULT_SITE_URL = 'https://mangeshraut712.github.io/kashishbeautyparlour'

function normalizeBasePath(value: string | undefined): string {
  const path = value === undefined ? DEFAULT_BASE_PATH : value.trim()

  if (!path || path === '/') return ''

  return `/${path.replace(/^\/+|\/+$/g, '')}`
}

function normalizeSiteUrl(value: string | undefined): string {
  const url = (value || DEFAULT_SITE_URL).trim()
  return url.replace(/\/+$/, '')
}

export const BASE_PATH = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH)

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL)

export function withBasePath(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${BASE_PATH}${normalized}`
}
