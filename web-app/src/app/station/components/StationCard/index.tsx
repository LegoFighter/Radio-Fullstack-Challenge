"use client";

import Image from "next/image";
import { StationDetails } from "../../types";

interface StationCardProps {
  station: StationDetails;
}

export default function StationCard({ station }: StationCardProps) {
  return (
    <div className="station-details-card bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col items-center space-y-4">
        <Image
          src={station.logo300x300}
          alt={station.name}
          className="w-32 h-32 rounded-full"
          width={300}
          height={300}
        />
        <h1 className="text-2xl font-bold text-center">{station.name}</h1>
        <p className="text-lg text-gray-600 text-center">
          {station.city && station.country
            ? `${station.city}, ${station.country}`
            : station.city || station.country || "Location not available"}
        </p>
        <p className="text-sm text-gray-500 text-center">
          {station.genres?.join(", ")}
        </p>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700">{station.description}</p>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Stream</h2>
        {station.streams.map((stream, index) => (
          <div key={index} className="mb-2">
            <audio controls className="w-full">
              <source src={stream.url} type={stream.contentFormat} />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
}
