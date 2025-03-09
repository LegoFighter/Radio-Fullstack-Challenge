"use client";

import { StationListItem } from "@/app/types";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";
import { filteredStations } from "../../lib/utils";
import StationFilter from "../StationFilter";
import StationList from "../StationList";

interface HomePageClientProps {
  stations: StationListItem[];
}

export default function HomePageClient({ stations }: HomePageClientProps) {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const count = 10;

  useEffect(() => {
    setPage(1);
  }, [searchQuery, selectedGenres]);

  const filtered = filteredStations(stations, searchQuery, selectedGenres);

  const totalCount = filtered.length;
  const totalPages = Math.ceil(totalCount / count);
  const paginatedStations = filtered.slice((page - 1) * count, page * count);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <main className="container mx-auto p-4">
      {/* Render the filter component and pass down the state and setter functions */}
      <StationFilter
        stations={stations}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
      />

      {/* Station list with filtered and paginated stations */}
      <StationList stations={paginatedStations} />

      {/* Pagination controls */}
      <Pagination className="mt-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={page > 1 ? () => handlePageChange(page - 1) : undefined}
              className={page === 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationItem key={index + 1}>
              <PaginationLink
                isActive={page === index + 1}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={
                page < totalPages ? () => handlePageChange(page + 1) : undefined
              }
              className={
                page === totalPages ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
}
