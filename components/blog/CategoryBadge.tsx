import Link from "next/link";

import { cn } from "@/lib/utils";

type CategoryBadgeProps = {
  href?: string;
  label: string;
  subtle?: boolean;
};

export default function CategoryBadge({
  href,
  label,
  subtle = false
}: CategoryBadgeProps) {
  const className = cn(
    "inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] transition",
    subtle
      ? "bg-primary-50 text-primary-700"
      : "bg-ink text-mist hover:bg-primary-700"
  );

  if (!href) {
    return <span className={className}>{label}</span>;
  }

  return (
    <Link className={className} href={href}>
      {label}
    </Link>
  );
}
