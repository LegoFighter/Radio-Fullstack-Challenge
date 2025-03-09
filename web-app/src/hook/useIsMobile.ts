import { useEffect, useState } from "react";

export function useIsMobile(threshold = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < threshold : false
  );

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < threshold);

    // Check on mount
    checkMobile();

    // Listen for window resize
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [threshold]);

  return isMobile;
}