"use client";

import { addGenre, getAllGenres, removeGenre } from "../../lib/utils";
import { StationListItem } from "@/app/types";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { TEXT } from "@/lib/text";
import { Plus } from "lucide-react";

interface StationFilterProps {
  stations: StationListItem[];
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedGenres: string[];
  setSelectedGenres: (genres: string[]) => void;
}

export default function StationFilter({
  stations,
  searchQuery,
  setSearchQuery,
  selectedGenres,
  setSelectedGenres,
}: StationFilterProps) {
  const allGenres = getAllGenres(stations);

  const handleAddGenre = (genre: string) => {
    setSelectedGenres(addGenre(selectedGenres, genre));
  };

  const handleRemoveGenre = (genre: string) => {
    setSelectedGenres(removeGenre(selectedGenres, genre));
  };

  return (
    <div>
      {/* Search input */}
      <div className="mb-4">
        <Input
          placeholder={TEXT.filterText}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {/* Separator */}
      <hr className="mb-4 border-gray-300" />
      {/* Display selected genres as badges */}
      <div className="mb-4 flex flex-wrap gap-2">
        {selectedGenres.map((genre) => (
          <Badge
            key={genre}
            variant="default"
            className="cursor-pointer bg-blue-500 text-white hover:bg-blue-600 flex items-center"
            onClick={() => handleRemoveGenre(genre)}
          >
            {genre}
            <span className="ml-1">×</span>
          </Badge>
        ))}
      </div>
      {/* Display all available genres with an option to add them */}
      <div className="mb-4 flex flex-wrap gap-2">
        {allGenres
          .filter((genre) => !selectedGenres.includes(genre))
          .map((genre) => (
            <Badge
              key={genre}
              variant="secondary"
              className="cursor-pointer opacity-60 hover:opacity-80 flex items-center"
              onClick={() => handleAddGenre(genre)}
            >
              {genre}
              <Plus className="h-4 w-4 ml-1" />
            </Badge>
          ))}
      </div>
    </div>
  );
}
