import type { NextConfig } from "next";

const repositoryName = "ArchersCourse";
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: isProd ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
