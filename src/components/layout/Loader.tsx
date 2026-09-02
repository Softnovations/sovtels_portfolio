"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const rooms = ["101", "205", "302", "407", "502"];
const statuses = ["Ready", "Occupied", "Cleaning", "Reserved", "Available"];

export function Loader() {
  const reduce = useReducedMotion();
  const pathname = usePathname();
  const [visible, setVisible] = useState(pathname === "/");
  const [progress, setProgress] = useState(0);
  const [roomIndex, setRoomIndex] = useState(0);

  useEffect(() => {
    if (pathname !== "/") {
      setVisible(false);
      return;
    }
    if (sessionStorage.getItem("sovtels-loaded") === "1" || reduce) {
      setVisible(false);
      return;
    }

    const start = performance.now();
    const duration = 1800;
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setProgress(t);
      setRoomIndex(Math.floor(t * rooms.length) % rooms.length);
      if (t < 1) raf = requestAnimationFrame(tick);
      else {
        sessionStorage.setItem("sovtels-loaded", "1");
        setTimeout(() => setVisible(false), 220);
      }
    };

    const timeout = window.setTimeout(() => {
      sessionStorage.setItem("sovtels-loaded", "1");
      setVisible(false);
    }, 2600);

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timeout);
    };
  }, [reduce, pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-[#fafbf9]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="relative mb-6 h-16 w-16 overflow-hidden rounded-xl bg-white ring-1 ring-line">
            <Image src="/images/logo.png" alt="" fill className="object-contain p-1" sizes="64px" priority />
          </div>
          <p className="text-sm tracking-[0.14em] text-charcoal">SOVTELS</p>
          <div className="mt-8 w-48">
            <div className="h-0.5 w-full bg-line">
              <motion.div className="h-0.5 bg-brand" style={{ width: `${progress * 100}%` }} />
            </div>
            <div className="mt-3 flex justify-between font-mono text-[10px] text-muted">
              <span>Room {rooms[roomIndex]}</span>
              <span>{statuses[roomIndex]}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
