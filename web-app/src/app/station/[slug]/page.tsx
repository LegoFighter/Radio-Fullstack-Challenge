import { TEXT } from "@/lib/text";
import { fetchStations } from "@/lib/utils";
import StationPageClient from "../components/StationPageClient";
import { fetchStationDetails } from "../lib/utils";

export const dynamicParams = false;
export const dynamic = "force-static";

export async function generateStaticParams() {
  const streams = await fetchStations(100);
  return streams.playables.map((stream) => ({ slug: stream.id }));
}

export default async function StationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [station] = await fetchStationDetails(slug);

  if (!station) {
    return <div>{TEXT.stationDetailsError.replace("{slug}", slug)}</div>;
  }

  return (
    <div className="mx-auto p-4">
      <StationPageClient station={station} />
    </div>
  );
}
