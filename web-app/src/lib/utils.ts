import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { ListBySystemNameResponse } from "@/app/types";
import { config } from "./config";

export async function fetchStations(
  top?: number
): Promise<ListBySystemNameResponse> {
  const url = new URL(config.stationsEndpointUrl);
  url.searchParams.set("systemName", "STATIONS_TOP");

  if (top) {
    url.searchParams.set("count", `${top}`);
  }

  const response = await fetch(url.toString(), {
    next: { revalidate: config.revalidateSeconds },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch top stations data");
  }

  return response.json();
}

export async function checkStreamAccessibility(
  streams: { url: string }[] = []
): Promise<string[]> {
  const forbiddenStreams: string[] = [];

  for (const stream of streams) {
    try {
      const response = await fetch(stream.url, { method: "HEAD" });
      if (response.status === 403) {
        forbiddenStreams.push(stream.url);
      }
    } catch {
      forbiddenStreams.push(stream.url);
    }
  }

  return forbiddenStreams;
}
