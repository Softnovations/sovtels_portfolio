"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    const go = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) return;
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const timer = window.setTimeout(go, 80);
    window.addEventListener("hashchange", go);
    window.addEventListener("popstate", go);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", go);
      window.removeEventListener("popstate", go);
    };
  }, [pathname]);

  return null;
}
