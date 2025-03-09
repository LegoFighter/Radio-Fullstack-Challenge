import { StationListItem } from "../types";

export const filteredStations = (
  stations: StationListItem[],
  searchQuery: string,
  selectedGenres: string[]
): StationListItem[] => {
  const queryLower = searchQuery.trim().toLowerCase();
  const selectedGenresLower = selectedGenres.map((g) => g.toLowerCase());

  return stations.filter((station) => {
    const nameLower = station.name.toLowerCase();
    const genresLower = (station.genres || []).map((g) => g.toLowerCase());

    // Genre filter: station must match at least one selected genre (OR logic)
    const matchesGenres =
      selectedGenresLower.length === 0 || // If no genres selected, include all
      selectedGenresLower.some((genre) => genresLower.includes(genre));

    // Search query filter: station name or genres must include the query
    const matchesQuery =
      queryLower === "" || // If no search query, include all
      nameLower.includes(queryLower) || // Search in name
      genresLower.some((g) => g.includes(queryLower)); // Search in genres

    // Station must satisfy both conditions
    return matchesGenres && matchesQuery;
  });
};

export function getAllGenres(stations: StationListItem[]): string[] {
  return Array.from(
    new Set(stations.flatMap((station) => station.genres || []).filter(Boolean))
  ).sort();
}

export function addGenre(selectedGenres: string[], genre: string): string[] {
  if (!selectedGenres.includes(genre)) {
    return [...selectedGenres, genre];
  }
  return selectedGenres;
}

export function removeGenre(selectedGenres: string[], genre: string): string[] {
  return selectedGenres.filter((g) => g !== genre);
}
