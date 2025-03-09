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
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="container max-w-[800px] mx-auto bg-white rounded-lg shadow-lg p-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="text-blue-600 hover:underline"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage className="font-semibold text-gray-800">
                {station.name}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {hasForbiddenStreams && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-5 w-5" />
            <AlertTitle>{TEXT.stationPage.streamAccessIssueTitle}</AlertTitle>
            <AlertDescription>
              {TEXT.stationPage.streamAccessIssueDescription}
            </AlertDescription>
          </Alert>
        )}

        <StationCard station={station} />
      </div>
    </main>
  );
}
