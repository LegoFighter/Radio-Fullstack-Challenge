import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    STATION_DETAILS_API_BASE: process.env.STATION_DETAILS_API_BASE,
    STATIONS_API_URL: process.env.STATIONS_API_URL,
    REVALIDATE_SECONDS: process.env.REVALIDATE_SECONDS,
  },

  images: {
    domains: ["station-images-prod.radio-assets.com"],
  },
};

export default nextConfig;
