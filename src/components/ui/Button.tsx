import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "onDark";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-bright transition-colors",
  secondary:
    "border border-line-strong bg-white text-charcoal hover:border-brand hover:text-brand transition-colors",
  ghost: "text-muted hover:text-brand transition-colors",
  onDark:
    "border border-white/35 bg-transparent text-white hover:border-white hover:bg-white/10 transition-colors",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-xs tracking-[0.12em] uppercase",
  md: "h-11 px-5 text-[13px] tracking-[0.12em] uppercase",
  lg: "h-12 px-7 text-sm tracking-[0.14em] uppercase",
};

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const cls = cn(
    "inline-flex items-center justify-center rounded-md font-medium whitespace-nowrap",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
