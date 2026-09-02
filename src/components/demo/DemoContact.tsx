"use client";

import { siteConfig } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, Copy, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useId, useState } from "react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.17 2.09 16.06 2 14.79 2 12.15 2 10 3.66 10 6.7V9.5H7.5v4H10V22h4z" />
    </svg>
  );
}

const viberCopyValue = siteConfig.viber.label.replace(/\s/g, "");

export function DemoContact() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const reduce = useReducedMotion();
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  async function copyNumber() {
    try {
      await navigator.clipboard.writeText(viberCopyValue);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <div className="overflow-hidden rounded-xl border border-line bg-white shadow-[0_8px_28px_rgba(26,31,28,0.06)]">
        <div className="border-b border-line px-5 py-5 sm:px-6">
          <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.14em] text-muted uppercase">
            <Phone className="h-3.5 w-3.5 text-brand" />
            Phone
          </p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-8">
            {siteConfig.phones.map((phone) => (
              <p
                key={phone.label}
                className="font-mono text-[clamp(1.15rem,3vw,1.35rem)] font-medium text-charcoal"
              >
                {phone.label}
              </p>
            ))}
          </div>
        </div>

        <div className="grid border-b border-line sm:grid-cols-2">
          <div className="border-b border-line px-5 py-5 sm:border-r sm:border-b-0 sm:px-6">
            <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.14em] text-muted uppercase">
              <MessageCircle className="h-3.5 w-3.5 text-brand" />
              Viber
            </p>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mt-3 inline-flex items-center gap-2 font-mono text-[17px] font-medium text-charcoal transition-colors hover:text-brand"
            >
              {siteConfig.viber.label}
            </button>
            <p className="mt-1.5 text-[12px] text-muted">Tap to copy and chat</p>
          </div>
          <div className="px-5 py-5 sm:px-6">
            <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.14em] text-muted uppercase">
              <FacebookIcon className="h-3.5 w-3.5 text-brand" />
              Facebook
            </p>
            <a
              href={siteConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-[16px] font-medium text-charcoal hover:text-brand"
            >
              facebook.com/sovtels
            </a>
          </div>
        </div>

        <div className="bg-paper px-5 py-4 sm:px-6">
          <p className="text-[13px] leading-relaxed text-muted">
            Best for hotel owners and managers evaluating a connected property system in Myanmar
            and similar markets.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[90] flex items-end justify-center p-4 sm:items-center">
            <motion.button
              type="button"
              aria-label="Close"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-charcoal/45 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-md overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_64px_rgba(26,31,28,0.18)]"
            >
              <div className="bg-mesh-light px-6 pt-6 pb-5">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-white hover:text-charcoal"
                    aria-label="Close Viber details"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <h3 id={titleId} className="font-display mt-4 text-[1.75rem] leading-tight text-charcoal">
                  Chat on Viber
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">
                  Copy this number, then open Viber and paste it to start a chat with Sovtels.
                </p>
              </div>

              <div className="px-6 py-5">
                <p className="text-[11px] font-medium tracking-[0.14em] text-muted uppercase">Viber number</p>
                <p className="font-mono mt-2 text-[clamp(1.35rem,4vw,1.7rem)] font-medium text-charcoal">
                  {siteConfig.viber.label}
                </p>
                <Button
                  type="button"
                  size="lg"
                  onClick={copyNumber}
                  className={cn("mt-5 w-full gap-2", copied && "bg-charcoal hover:bg-charcoal")}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy number
                    </>
                  )}
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
