import { fetchStations } from "@/lib/utils";
import HomePageClient from "./components/HomePageClient";

export const dynamic = "force-static";

export default async function HomePage() {
  const stationsData = await fetchStations(100);
  return <HomePageClient stations={stationsData.playables} />;
}
