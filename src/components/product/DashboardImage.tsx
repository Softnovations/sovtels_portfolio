import Image from "next/image";
import { productScreenshots, type ProductScreenshotKey } from "@/data/product-screenshots";
import { cn } from "@/lib/utils";

export function ProductScreenImage({
  screen,
  className,
  priority = false,
  framed = true,
}: {
  screen: ProductScreenshotKey;
  className?: string;
  priority?: boolean;
  framed?: boolean;
}) {
  const shot = productScreenshots[screen];

  const image = (
    <Image
      src={shot.src}
      alt={shot.alt}
      width={shot.width}
      height={shot.height}
      className="h-auto w-full"
      priority={priority}
      sizes="(max-width: 768px) 100vw, 65vw"
    />
  );

  if (!framed) return <div className={className}>{image}</div>;

  return <div className={cn("product-stage overflow-hidden", className)}>{image}</div>;
}

/** @deprecated Use ProductScreenImage with screen="dashboard" */
export function SovtelsDashboardImage({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return <ProductScreenImage screen="dashboard" className={className} priority={priority} />;
}
