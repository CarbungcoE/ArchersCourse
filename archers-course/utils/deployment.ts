export const isPagesBuild = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";

const defaultBasePath = process.env.NODE_ENV === "production" ? "/ArchersCourse" : "";

export const basePath = isPagesBuild
  ? process.env.NEXT_PUBLIC_GITHUB_PAGES_BASE_PATH ?? defaultBasePath
  : defaultBasePath;
