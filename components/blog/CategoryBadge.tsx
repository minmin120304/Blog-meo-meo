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
    "inline-flex rounded-md px-2.5 py-1 text-xs font-medium uppercase tracking-[0.08em] transition",
    subtle ? "bg-gray-100 text-primary-700" : "bg-gray-100 text-ink hover:bg-gray-200"
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
