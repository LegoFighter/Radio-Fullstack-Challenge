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
      <div className="station-card bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer">
        <Image
          src={station.logo100x100}
          alt={station.name}
          className="w-20 h-20 rounded-full mx-auto mb-4"
          width={100}
          height={100}
        />
        <h3 className="text-lg font-semibold text-center">{station.name}</h3>
        <p className="text-sm text-gray-500 text-center">
          {station.genres?.join(", ")}
        </p>
      </div>
    </Link>
  );
}
