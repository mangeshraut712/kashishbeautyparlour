import createNextIntlPlugin from 'next-intl/plugin';
import { BASE_PATH } from './lib/site';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export' as const,
    basePath: BASE_PATH,
    assetPrefix: BASE_PATH,
    trailingSlash: true,
    reactStrictMode: true,
    images: {
        loader: 'custom' as const,
        loaderFile: './lib/image-loader.ts',
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
    },
    compress: true,
    poweredByHeader: false,
}

export default withNextIntl(nextConfig)
