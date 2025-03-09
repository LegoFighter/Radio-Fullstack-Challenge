"use client";

import { StationListItem } from "../../types";
import StationCard from "../StationCard";

interface StationListProps {
  stations: StationListItem[];
}

export default function StationList({ stations }: StationListProps) {
  return (
    <div className="station-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {stations.map((station) => (
        <StationCard key={station.id} station={station} />
      ))}
    </div>
  );
}
