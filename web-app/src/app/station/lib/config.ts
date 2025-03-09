import { IConfig } from "../types";

export const config: IConfig = {
  stationDetailsEndpointUrl: process.env.STATION_DETAILS_API_BASE || "",
  revalidateSeconds: +(process.env.REVALIDATE_SECONDS || 86400),
};
