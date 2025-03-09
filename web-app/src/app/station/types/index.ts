export type StationDetailsResponse = StationDetails[];

export interface StationDetails {
  id: string; // Unique identifier (e.g., "1live")
  name: string; // Station name (e.g., "1LIVE")
  city: string; // City (e.g., "Cologne")
  country: string; // Country (e.g., "Germany")
  continent: string; // Continent (e.g., "Europe")
  region: string; // Region (e.g., "North Rhine-Westphalia")
  genres: string[]; // Genres (e.g., ["Pop"])
  languages: string[]; // Languages (e.g., ["German"])
  families: string[]; // Families (e.g., ["1LIVE"])
  description: string; // Station description (e.g., "Einslive is a German-language...")
  shortDescription: string; // Short description (e.g., "Einslive is a German-language...")
  homepageUrl: string; // Homepage URL (e.g., "http://www1.wdr.de/radio/1live/index.html")
  logo44x44: string; // Logo URL (44x44)
  logo100x100: string; // Logo URL (100x100)
  logo175x175: string; // Logo URL (175x175)
  logo300x300: string; // Logo URL (300x300)
  logo630x630: string; // Logo URL (630x630)
  logo1200x1200: string; // Logo URL (1200x1200)
  logo2160x2160: string; // Logo URL (2160x2160)
  strikingColor1: string; // Primary striking color (e.g., "#ff0099")
  strikingColor2: string; // Secondary striking color (e.g., "#727271")
  lastModified: number; // Timestamp of last modification (e.g., 1728634285)
  streams: {
    url: string; // Stream URL (e.g., "https://wdr-1live-live.icecastssl.wdr.de/...")
    contentFormat: string; // Format (e.g., "audio/mpeg")
    status: "VALID" | "INVALID"; // Stream status
  }[];
  hasValidStreams: boolean; // Indicates if streams are valid (e.g., true)
  type: "STATION"; // Type of station (e.g., "STATION")
  adParams: string; // Advertising parameters
  hideReferer: boolean; // Hide referer flag (e.g., false)
  rank: number; // Station rank (e.g., 311)
  enabled: boolean; // Enabled status (e.g., true)
  seoRelevantIn: string[]; // SEO-relevant regions (e.g., ["en_IE", "de_DE"])
  relevantIn: string[]; // Relevant regions (e.g., ["pt_PT", "de_DE"])
  aliases: string[]; // Aliases (e.g., ["einslive"])
  blockingInformation: {
    isBlocked: boolean; // Blocked status (e.g., false)
    isBlockedIn: string[]; // Regions where blocked (e.g., [])
  };
  frequencies: {
    area: string; // Frequency area (e.g., "Aachen/Stolberg")
    type: "FM"; // Frequency type (e.g., "FM")
    value: number; // Frequency value (e.g., 106.4)
  }[];
  genreTags: {
    systemName: string; // Genre system name (e.g., "Pop")
    name: string; // Genre name (e.g., "Pop")
    slug: string; // Genre slug (e.g., "pop")
    count: number; // Genre count (e.g., 13454)
  }[];
  cityTag: {
    systemName: string; // City system name (e.g., "Cologne")
    name: string; // City name (e.g., "Cologne")
    slug: string; // City slug (e.g., "cologne")
    count: number; // City count (e.g., 462)
  };
  parentTag: {
    systemName: string; // Parent system name (e.g., "Westdeutscher Rundfunk")
    name: string; // Parent name (e.g., "Westdeutscher Rundfunk")
    slug: string; // Parent slug (e.g., "westdeutscher-rundfunk")
    count: number; // Parent count (e.g., 43)
  };
  familyTag: {
    systemName: string; // Family system name (e.g., "1LIVE")
    name: string; // Family name (e.g., "1LIVE")
    slug: string; // Family slug (e.g., "1live")
    count: number; // Family count (e.g., 14)
  };
  languageTags: {
    systemName: string; // Language system name (e.g., "German")
    name: string; // Language name (e.g., "German")
    slug: string; // Language slug (e.g., "german")
    count: number; // Language count (e.g., 15395)
  }[];
  regionTag: {
    systemName: string; // Region system name (e.g., "North Rhine-Westphalia")
    name: string; // Region name (e.g., "North Rhine-Westphalia")
    slug: string; // Region slug (e.g., "north-rhine-westphalia")
    count: number; // Region count (e.g., 2681)
  };
  countryTag: {
    systemName: string; // Country system name (e.g., "Germany")
    name: string; // Country name (e.g., "Germany")
    slug: string; // Country slug (e.g., "germany")
    count: number; // Country count (e.g., 14455)
  };
}

export interface IConfig {
  stationDetailsEndpointUrl: string;
  revalidateSeconds: number;
}
