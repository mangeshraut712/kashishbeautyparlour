export const BASE_PATH = '/kashishbeautyparlour'

export const SITE_URL = 'https://mangeshraut712.github.io/kashishbeautyparlour'

export function withBasePath(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${BASE_PATH}${normalized}`
}
