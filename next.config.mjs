/** @type {import('next').NextConfig} */

// When deployed to GitHub Pages the site is served from a subpath:
//   https://gekgrind.github.io/indulge-2/
// In local dev it stays at the root (http://localhost:3000).
const isProd = process.env.NODE_ENV === "production";
const repo = "indulge-2";

const nextConfig = {
  // Emit a fully static site into ./out for GitHub Pages.
  output: "export",
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
