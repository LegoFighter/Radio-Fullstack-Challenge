"use client";

import { StationListItem } from "@/app/types";
import Link from "next/link";
import Image from "next/image";

interface StationCardProps {
  station: StationListItem;
}

export default function StationCard({ station }: StationCardProps) {
  return (
    <Link href={`/station/${station.id}`} passHref>
      <div className="station-card bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-gray-300 transform hover:-translate-y-1 transition-transform flex flex-col items-center justify-center w-36 h-36">
        <Image
          src={station.logo100x100}
          alt={station.name}
          className="w-16 h-16 rounded-full"
          width={64}
          height={64}
          priority={true}
        />
        <h3 className="text-sm font-medium text-gray-900 mt-2 text-center leading-tight">
          {station.name}
        </h3>
        <p className="text-xs text-gray-500 text-center truncate w-full">
          {station.genres?.join(", ")}
        </p>
      </div>
    </Link>
  );
}
