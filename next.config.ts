import type { NextConfig } from "next";
import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
});

const nextConfig = {
  outputFileTracingIncludes: {
    "/api/**/*": ["./generated/prisma/**/*"],
  },
  // suas outras configs...
};

export default withSerwist(nextConfig);
