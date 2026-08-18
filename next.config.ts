import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
  images: {
    qualities: [45, 55, 60, 65, 75],
  },
  async redirects() {
    return [
      {
        destination:
          "/countries/estados-unidos/silicon-valley/silicon-valley-microsoft-portrait-04.webp",
        permanent: true,
        source:
          "/countries/estados-unidos/silicon-valley/silicon-valley-microsoft-portrait-04.webp-3",
      },
    ];
  },
  async headers() {
    return [
      {
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
        source: "/:assetPath(videos|brand|allies|countries)/:path*",
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
