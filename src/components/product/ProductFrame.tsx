import { cn } from "@/lib/utils";

export function ProductFrame({
  children,
  className,
  scale = 1,
}: {
  children: React.ReactNode;
  className?: string;
  /** Visual scale for marketing embeds. Uses zoom so layout height shrinks with it. */
  scale?: number;
}) {
  return (
    <div
      className={cn(
        "product-stage overflow-hidden p-0 [&_.sovtels-app-shell]:rounded-none [&_.sovtels-app-shell]:border-0 [&_.sovtels-app-shell]:shadow-none",
        className,
      )}
    >
      <div
        className="w-full"
        style={scale < 1 ? ({ zoom: scale } as React.CSSProperties) : undefined}
      >
        {children}
      </div>
    </div>
  );
}
