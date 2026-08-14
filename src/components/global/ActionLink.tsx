import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { BrandIcon } from "./BrandIcons";

type ActionLinkVariant = "primary" | "secondary" | "solid";

type ActionLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
  variant?: ActionLinkVariant;
};

const baseClass =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[4px] px-5 py-3 text-sm font-semibold outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-4";

const variantClasses: Record<ActionLinkVariant, string> = {
  primary:
    "bg-[var(--gw-grad-brand-90)] text-white shadow-[0_12px_26px_rgba(28,110,164,0.22)] hover:shadow-[0_14px_32px_rgba(34,181,115,0.28)] focus-visible:ring-[var(--gw-green)]",
  secondary:
    "border border-[var(--color-border)] bg-white !text-[var(--gw-green)] hover:border-[var(--gw-green)] hover:bg-[var(--gw-sand)] hover:!text-[var(--gw-blue)] focus-visible:ring-[var(--gw-blue)]",
  solid:
    "border border-[var(--gw-green)] bg-[var(--gw-green)] text-white shadow-[0_14px_30px_rgba(34,181,115,0.22)] hover:border-[var(--gw-blue)] hover:bg-[var(--gw-blue)] focus-visible:ring-[var(--gw-green)]",
};

export function actionLinkClassName(
  variant: ActionLinkVariant = "primary",
  className = "",
) {
  return `${baseClass} ${variantClasses[variant]} ${className}`.trim();
}

export function ActionLink({
  children,
  className,
  href,
  variant = "primary",
}: ActionLinkProps) {
  return (
    <Link className={actionLinkClassName(variant, className)} href={href}>
      <span>{children}</span>
      <BrandIcon className="h-4 w-4" name="arrowRight" />
    </Link>
  );
}
