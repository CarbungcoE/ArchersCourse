import type { NextConfig } from "next";
import { basePath, isPagesBuild } from "./utils/deployment";

const nextConfig: NextConfig = {
  output: isPagesBuild ? "export" : undefined,
  // Each build discovers the OAuth callback and proxy files it can run.
  pageExtensions: ["tsx", "ts", "jsx", "js", isPagesBuild ? "pages.tsx" : "server.ts"],
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  experimental: {
    agentUpgrade: "security",
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        condition: { not: { path: /\.module\.css$/ } },
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
