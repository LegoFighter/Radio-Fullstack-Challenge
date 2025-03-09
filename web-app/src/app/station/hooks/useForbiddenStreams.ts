"use client";

import { checkStreamAccessibility } from "@/lib/utils";
import { useEffect, useState } from "react";

export function useForbiddenStreams(streams: { url: string }[] = []) {
  const [forbiddenStreams, setForbiddenStreams] = useState<string[]>([]);

  useEffect(() => {
    async function updateForbiddenStreams() {
      const inaccessibleStreams = await checkStreamAccessibility(streams);
      setForbiddenStreams(inaccessibleStreams);
    }
    updateForbiddenStreams();
  }, [streams]);

  return forbiddenStreams;
}
