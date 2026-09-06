import type { ImageLoaderProps } from 'next/image'
import { BASE_PATH } from './site'

export default function imageLoader({ src }: ImageLoaderProps): string {
  if (
    src.startsWith('http://') ||
    src.startsWith('https://') ||
    src.startsWith('data:') ||
    src.startsWith(BASE_PATH)
  ) {
    return src
  }

  const path = src.startsWith('/') ? src : `/${src}`
  return `${BASE_PATH}${path}`
}
