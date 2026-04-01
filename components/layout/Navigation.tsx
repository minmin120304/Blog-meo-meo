"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type NavigationProps = {
  compact?: boolean;
  onNavigate?: () => void;
};

export default function Navigation({ compact = false, onNavigate }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex items-center gap-2",
        compact ? "flex-col items-stretch" : "hidden md:flex"
      )}
    >
      {NAV_ITEMS.map((item) => {
        const active =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition",
              active
                ? "bg-ink text-mist"
                : "text-ink/72 hover:bg-white/80 hover:text-ink",
              compact && "w-full text-left"
            )}
            href={item.href}
            onClick={onNavigate}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
