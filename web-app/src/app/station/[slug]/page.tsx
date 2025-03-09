import { fetchStations } from "@/lib/utils";
import StationPageClient from "../components/StationPageClient";
import { TEXT } from "@/lib/text";
import { fetchStationDetails } from "../lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>{station.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <StationPageClient station={station} />
    </div>
  );
}
