import { StationDetailsResponse } from "../types";
import { config } from "./config";

export async function fetchStationDetails(
  id: string
): Promise<StationDetailsResponse> {
  const url = new URL(config.stationDetailsEndpointUrl);
  url.searchParams.set("stationIds", id);

  const response = await fetch(url.toString(), {
    next: { revalidate: config.revalidateSeconds },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch details for station: ${id}`);
  }
  return response.json();
}
