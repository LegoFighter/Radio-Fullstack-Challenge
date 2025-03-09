import {
  filteredStations,
  getAllGenres,
  addGenre,
  removeGenre,
} from "../../../../../app/lib/utils";
import { StationListItem } from "../../../../../app/types";

const mockStations: StationListItem[] = [
  {
    id: "1",
    name: "Jazz FM",
    city: "New York",
    country: "USA",
    genres: ["Jazz", "Blues"],
    topics: ["Music", "Live"],
    logo44x44: "",
    logo100x100: "",
    logo175x175: "",
    logo300x300: "",
    logo630x630: "",
    logo1200x1200: "",
    logo2160x2160: "",
    strikingColor1: "#FF0000",
    strikingColor2: "#000000",
    lastModified: 1609459200,
    streams: [
      {
        url: "https://radio.jazzfm.com/stream",
        contentFormat: "audio/mpeg",
        status: "VALID",
      },
    ],
    hasValidStreams: true,
    type: "STATION",
    adParams: "",
    seoRelevantIn: ["en_US"],
    relevantIn: ["en_US"],
    blockingInformation: { isBlocked: false, isBlockedIn: [] },
  },
  {
    id: "2",
    name: "Rock Nation",
    city: "London",
    country: "UK",
    genres: ["Rock", "Metal"],
    topics: ["Live Concerts"],
    logo44x44: "",
    logo100x100: "",
    logo175x175: "",
    logo300x300: "",
    logo630x630: "",
    logo1200x1200: "",
    logo2160x2160: "",
    strikingColor1: "#0000FF",
    strikingColor2: "#FFFFFF",
    lastModified: 1609459200,
    streams: [
      {
        url: "https://radio.rocknation.com/stream",
        contentFormat: "audio/mpeg",
        status: "VALID",
      },
    ],
    hasValidStreams: true,
    type: "STATION",
    adParams: "",
    seoRelevantIn: ["en_GB"],
    relevantIn: ["en_GB"],
    blockingInformation: { isBlocked: false, isBlockedIn: [] },
  },
  {
    id: "3",
    name: "Classical Harmony",
    city: "Berlin",
    country: "Germany",
    genres: ["Classical", "Orchestra"],
    topics: ["Music", "Relaxation"],
    logo44x44: "",
    logo100x100: "",
    logo175x175: "",
    logo300x300: "",
    logo630x630: "",
    logo1200x1200: "",
    logo2160x2160: "",
    strikingColor1: "#FFD700",
    strikingColor2: "#8B4513",
    lastModified: 1609459200,
    streams: [
      {
        url: "https://radio.classicalharmony.com/stream",
        contentFormat: "audio/mpeg",
        status: "VALID",
      },
    ],
    hasValidStreams: true,
    type: "STATION",
    adParams: "",
    seoRelevantIn: ["de_DE"],
    relevantIn: ["de_DE"],
    blockingInformation: { isBlocked: false, isBlockedIn: [] },
  },
];

describe("filteredStations", () => {
  test("returns all stations when search query and genres are empty", () => {
    const result = filteredStations(mockStations, "", []);
    expect(result).toEqual(mockStations);
  });

  test("filters stations by search query (name match)", () => {
    const result = filteredStations(mockStations, "Jazz", []);
    expect(result).toEqual([mockStations[0]]);
  });

  test("filters stations by search query (case insensitive)", () => {
    const result = filteredStations(mockStations, "rock", []);
    expect(result).toEqual([mockStations[1]]);
  });

  test("filters stations by search query (partial match)", () => {
    const result = filteredStations(mockStations, "Class", []);
    expect(result).toEqual([mockStations[2]]);
  });

  test("filters stations by selected genres (single genre)", () => {
    const result = filteredStations(mockStations, "", ["Rock"]);
    expect(result).toEqual([mockStations[1]]);
  });

  test("filters stations by selected genres (multiple genres)", () => {
    const result = filteredStations(mockStations, "", ["Jazz", "Classical"]);
    expect(result).toEqual([mockStations[0], mockStations[2]]);
  });

  test("filters stations by both search query and selected genres", () => {
    const result = filteredStations(mockStations, "class", ["Orchestra"]);
    expect(result).toEqual([mockStations[2]]);
  });

  test("returns an empty array when no stations match", () => {
    const result = filteredStations(mockStations, "Hip-Hop", []);
    expect(result).toEqual([]);
  });

  test("returns an empty array when no stations match selected genres", () => {
    const result = filteredStations(mockStations, "", ["Reggae"]);
    expect(result).toEqual([]);
  });
});

describe("getAllGenres", () => {
  test("returns all unique genres sorted alphabetically", () => {
    const result = getAllGenres(mockStations);
    expect(result).toEqual([
      "Blues",
      "Classical",
      "Jazz",
      "Metal",
      "Orchestra",
      "Rock",
    ]);
  });

  test("returns an empty array when there are no genres", () => {
    const result = getAllGenres([]);
    expect(result).toEqual([]);
  });

  test("handles stations with missing genres", () => {
    const stationsWithoutGenres = [
      ...mockStations,
      { ...mockStations[0], genres: undefined },
    ];
    const result = getAllGenres(stationsWithoutGenres);
    expect(result).toEqual([
      "Blues",
      "Classical",
      "Jazz",
      "Metal",
      "Orchestra",
      "Rock",
    ]);
  });
});

describe("addGenre", () => {
  test("adds a genre if it's not already in the list", () => {
    expect(addGenre(["Rock"], "Jazz")).toEqual(["Rock", "Jazz"]);
  });

  test("does not add a duplicate genre", () => {
    expect(addGenre(["Rock"], "Rock")).toEqual(["Rock"]);
  });

  test("adds a genre to an empty list", () => {
    expect(addGenre([], "Jazz")).toEqual(["Jazz"]);
  });
});

describe("removeGenre", () => {
  test("removes a genre from the list", () => {
    expect(removeGenre(["Rock", "Jazz"], "Rock")).toEqual(["Jazz"]);
  });

  test("does nothing if the genre is not in the list", () => {
    expect(removeGenre(["Rock", "Jazz"], "Pop")).toEqual(["Rock", "Jazz"]);
  });

  test("returns an empty array if the last genre is removed", () => {
    expect(removeGenre(["Rock"], "Rock")).toEqual([]);
  });

  test("does nothing to an empty list", () => {
    expect(removeGenre([], "Jazz")).toEqual([]);
  });
});
