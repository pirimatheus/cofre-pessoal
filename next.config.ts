import type { NextConfig } from "next";
import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
});

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/**/*": ["./generated/prisma/**/*"],
    "app/api/**/*": ["./generated/prisma/**/*"],
  },
};

export default withSerwist(nextConfig);