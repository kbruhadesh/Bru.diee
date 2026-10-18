/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Site has no API routes, server actions, or per-request data — it's a fully
  // client-rendered "desktop". Static export means production serves plain
  // files via nginx instead of keeping a Node process resident in RAM.
  output: "export",
  images: {
    // Next's image optimizer needs a running server; unoptimized just serves
    // the files as-is, which is fine since the pixel-art PNGs are tiny already.
    unoptimized: true,
  },
};

export default nextConfig;
