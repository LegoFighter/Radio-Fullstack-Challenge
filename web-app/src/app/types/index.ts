export interface ListBySystemNameResponse {
    systemName: string;
    title: string;
    playables: StationListItem[];
    displayType: string;
    count: number;
    offset: number;
    totalCount: number;
  }
  
  export interface StationListItem {
    id: string; // Unique identifier (e.g., "talksport")
    name: string; // Station name (e.g., "talkSPORT")
    city: string; // City (e.g., "London")
    country: string; // Country (e.g., "United Kingdom")
    genres?: string[]; // Genres (optional, e.g., ["Pop", "Rock"])
    topics?: string[]; // Topics (e.g., ["Football / Soccer", "Sports"])
    logo44x44: string; // Logo URL (44x44) (e.g., "https://station-images-prod.radio-assets.com/44/talksport.png")
    logo100x100: string; // Logo URL (100x100)
    logo175x175: string; // Logo URL (175x175)
    logo300x300: string; // Logo URL (300x300)
    logo630x630: string; // Logo URL (630x630, may be empty)
    logo1200x1200: string; // Logo URL (1200x1200, may be empty)
    logo2160x2160: string; // Logo URL (2160x2160, may be empty)
    strikingColor1?: string; // Primary striking color (e.g., "#ff0099", optional)
    strikingColor2?: string; // Secondary striking color (e.g., "#727271", optional)
    lastModified: number; // Timestamp of last modification (e.g., 1609459200)
    streams: {
      url: string; // Stream URL (e.g., "https://radio.talksport.com/stream")
      contentFormat: string; // Format (e.g., "audio/mpeg")
      status: "VALID" | "INVALID"; // Stream status
    }[];
    hasValidStreams: boolean; // Indicates if streams are valid (e.g., true)
    type: "STATION"; // Type of playable (e.g., "STATION")
    adParams?: string; // Advertising parameters (optional)
    seoRelevantIn: string[]; // SEO-relevant regions (e.g., ["en_GB", "de_DE"])
    relevantIn: string[]; // Relevant regions (e.g., ["en_GB", "de_DE"])
    blockingInformation: {
      isBlocked: boolean; // Blocked status (e.g., false)
      isBlockedIn: string[]; // Regions where blocked (e.g., [])
    };
  }
  