"use client";

import { StationListItem } from "@/app/types";
import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { filteredStations } from "../../lib/utils";
import StationFilter from "../StationFilter";
import StationList from "../StationList";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface HomePageClientProps {
  stations: StationListItem[];
}

export default function HomePageClient({ stations }: HomePageClientProps) {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [loadedStations, setLoadedStations] = useState<StationListItem[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const count = 20;

  const observerRef = useRef<IntersectionObserver | null>(null);

  // Check if the device is mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Memoize filtered stations to prevent re-creation on every render
  const filtered = useMemo(
    () => filteredStations(stations, searchQuery, selectedGenres),
    [stations, searchQuery, selectedGenres]
  );

  const totalCount = filtered.length;
  const totalPages = Math.ceil(totalCount / count);

  // Reset pagination when search or filters change
  useEffect(() => {
    setPage(1);
  }, [searchQuery, selectedGenres]);

  // Load more stations when page changes
  useEffect(() => {
    setLoadedStations(filtered.slice(0, page * count));
  }, [page, filtered]);

  useEffect(() => {
    if (isMobile) {
      // INFINITE SCROLL — accumulate stations
      setLoadedStations(filtered.slice(0, page * count));
    } else {
      // STANDARD PAGINATION — only show the batch for this page
      const startIndex = (page - 1) * count;
      const endIndex = page * count;
      setLoadedStations(filtered.slice(startIndex, endIndex));
    }
  }, [page, filtered, isMobile]);

  // Infinite scroll observer for mobile
  const lastStationRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (!isMobile || !node || page >= totalPages) return;

      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setPage((prev) => prev + 1);
          }
        },
        {
          root: null,
          rootMargin: "200px",
          threshold: 0.0,
        }
      );

      observerRef.current.observe(node);
    },
    [isMobile, page, totalPages]
  );

  return (
    <main className="container max-w-[800px] mx-auto p-4">
      {/* Filter Component */}
      <StationFilter
        stations={stations}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
      />

      {/* Station List */}
      <StationList stations={loadedStations} />

      {/* Infinite Scroll Loader (only on mobile) */}
      {isMobile && page < totalPages && (
        <div ref={lastStationRef} className="text-center text-gray-500 py-4">
          Loading more...
        </div>
      )}

      {/* Pagination for Larger Screens */}
      {!isMobile && (
        <Pagination className="mt-6">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={page > 1 ? () => setPage(page - 1) : undefined}
                className={page === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem key={index + 1}>
                <PaginationLink
                  isActive={page === index + 1}
                  onClick={() => setPage(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={
                  page < totalPages ? () => setPage(page + 1) : undefined
                }
                className={
                  page === totalPages ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </main>
  );
}
