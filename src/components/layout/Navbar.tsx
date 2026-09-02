"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mobileNavLinks, navLinks } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[80] transition-all duration-300",
          scrolled || open
            ? "border-b border-line bg-white/95 shadow-[0_8px_30px_rgba(26,31,28,0.06)] backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-5 sm:px-8">
          <Logo />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[12px] tracking-[0.14em] uppercase transition-colors",
                  pathname === link.href ? "text-brand" : "text-muted hover:text-charcoal",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Button href="/demo" size="sm">
              Request Demo
            </Button>
          </div>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center text-charcoal lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu — compact, fast */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={reduce ? false : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-line bg-white lg:hidden"
            >
              <nav className="mx-auto max-w-[1200px] px-5 py-4" aria-label="Mobile">
                <ul className="space-y-1">
                  {mobileNavLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "block rounded-lg px-3 py-3 text-[15px] font-medium transition-colors",
                          pathname === link.href
                            ? "bg-brand-soft text-brand"
                            : "text-charcoal hover:bg-paper-2",
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button href="/demo" size="lg" className="mt-4 w-full">
                  Request Demo
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
