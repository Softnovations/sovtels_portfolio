import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link href="/" className={cn("group flex items-center gap-2.5", className)} aria-label="Sovtels home">
      <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md bg-white ring-1 ring-line">
        <Image src="/images/logo.png" alt="" fill className="object-contain p-[1px]" sizes="36px" priority />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="text-[1.05rem] font-semibold tracking-[0.14em] text-charcoal">SOVTELS</span>
          <span className="mt-0.5 hidden text-[9px] tracking-[0.14em] text-brand uppercase sm:block">
            Hotel & Motel Management
          </span>
        </span>
      )}
    </Link>
  );
}
