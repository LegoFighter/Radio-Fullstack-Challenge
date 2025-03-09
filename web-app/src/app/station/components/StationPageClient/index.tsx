"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import StationCard from "../StationCard";
import { StationDetails } from "../../types";
import { useForbiddenStreams } from "../../hooks/useForbiddenStreams";
import { TEXT } from "@/lib/text";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

interface StationPageClientProps {
  station: StationDetails;
}

export default function StationPageClient({ station }: StationPageClientProps) {
  const forbiddenStreams = useForbiddenStreams(station.streams);
  const hasForbiddenStreams = forbiddenStreams.length > 0;

  return (
    <div>
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

      {hasForbiddenStreams && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>{TEXT.stationPage.streamAccessIssueTitle}</AlertTitle>
          <AlertDescription>
            {TEXT.stationPage.streamAccessIssueDescription}
          </AlertDescription>
        </Alert>
      )}
      <StationCard station={station} />
    </div>
  );
}
