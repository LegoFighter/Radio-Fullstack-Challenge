import { IConfig } from "@/types";

export const config: IConfig = {
  stationsEndpointUrl: process.env.STATIONS_API_URL || "",
  revalidateSeconds: +(process.env.REVALIDATE_SECONDS || 86400),
};
