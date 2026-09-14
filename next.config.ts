import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Workers (static assets) deployment:
  // site is fully static; /api/log-search is served by a separate Worker (KV-backed).
  output: "export",
  trailingSlash: true,
  distDir: "out",
  images: { unoptimized: true }
};

export default nextConfig;
