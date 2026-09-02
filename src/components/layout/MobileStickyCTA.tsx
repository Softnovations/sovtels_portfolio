"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-[60] border-t border-line bg-white/95 px-5 py-3 backdrop-blur-md transition-transform duration-300 md:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <Button href="/demo" size="lg" className="w-full">
        Request Demo
      </Button>
    </div>
  );
}
