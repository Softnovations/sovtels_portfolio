"use client";

import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Scroll to top"
      className={cn(
        "fixed right-3 z-[70] flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-charcoal shadow-[0_8px_28px_rgba(26,31,28,0.12)] transition-all duration-300 hover:border-brand hover:bg-brand hover:text-white sm:right-5 sm:h-11 sm:w-11",
        "bottom-28 md:bottom-8",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUp className="h-5 w-5" strokeWidth={2} />
    </button>
  );
}
