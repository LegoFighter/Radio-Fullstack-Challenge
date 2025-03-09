"use client";

import { StationListItem } from "@/app/types";
import { motion } from "framer-motion";
import StationCard from "../StationCard";

interface StationListProps {
  stations: StationListItem[];
}

export default function StationList({ stations }: StationListProps) {
  return (
    <div className="station-list mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 px-4 py-8">
      {stations.map((station) => (
        <motion.div
          key={station.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <StationCard station={station} />
        </motion.div>
      ))}
    </div>
  );
}
