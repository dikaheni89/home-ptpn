/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracing: false, // https://github.com/vercel/next.js/issues/40760
  basePath: process.env.APP_BASE_PATH || '',
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_APP_NAME: process.env.APP_NAME,
    NEXT_PUBLIC_APP_DESCRIPTION: process.env.APP_DESCRIPTION,
    NEXT_PUBLIC_APP_OWNER: process.env.APP_OWNER,
    NEXT_PUBLIC_APP_OWNER_URL: process.env.APP_OWNER_URL,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
