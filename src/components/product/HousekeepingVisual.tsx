"use client";

import {
  HousekeepingOperationsScreen,
  HousekeepingStepCard,
} from "@/components/product/HousekeepingOperationsScreen";
import { ProductFrame } from "@/components/product/ProductFrame";
import { cn } from "@/lib/utils";

const steps = [
  { id: "occupied", label: "Occupied", short: "In-house" },
  { id: "required", label: "Cleaning Required", short: "Check-out" },
  { id: "cleaning", label: "Cleaning", short: "In progress" },
  { id: "ready", label: "Ready", short: "Available" },
] as const;

function statusClass(step: number, index: number) {
  if (index < step) return "bg-brand text-white border-brand";
  if (index === step) {
    if (index === 0) return "status-occupied border-charcoal/20 shadow-md";
    if (index === 1) return "bg-yellow-soft text-charcoal border-yellow/40 shadow-md";
    if (index === 2) return "bg-amber-soft text-amber border-amber/40 shadow-md";
    return "bg-brand text-white border-brand shadow-md";
  }
  return "bg-white text-muted border-line";
}

export function HousekeepingPipeline({ activeStep }: { activeStep: number }) {
  return (
    <ol className="flex flex-col gap-2 sm:flex-row sm:gap-0">
      {steps.map((s, i) => (
        <li key={s.id} className="flex flex-1 items-center">
          <div className="flex flex-1 flex-col items-center text-center">
            <span
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full border-2 text-[11px] font-bold transition-all duration-500",
                statusClass(activeStep, i),
              )}
            >
              {i + 1}
            </span>
            <p
              className={cn(
                "mt-2 text-[10px] font-semibold uppercase tracking-wide transition-colors duration-500",
                i <= activeStep ? "text-charcoal" : "text-muted-2",
              )}
            >
              {s.label}
            </p>
            <p className="mt-0.5 hidden text-[10px] text-muted sm:block">{s.short}</p>
          </div>
          {i < steps.length - 1 && (
            <div
              className={cn(
                "mx-1 hidden h-0.5 flex-1 rounded-full transition-colors duration-500 sm:block",
                i < activeStep ? "bg-brand" : "bg-line",
              )}
            />
          )}
        </li>
      ))}
    </ol>
  );
}

export function HousekeepingProductVisual({ step }: { step: number }) {
  return (
    <ProductFrame className="min-h-[360px]">
      <HousekeepingOperationsScreen step={step} />
    </ProductFrame>
  );
}

export function HousekeepingMobileVisual({ step }: { step: number }) {
  return <HousekeepingStepCard step={step} />;
}
