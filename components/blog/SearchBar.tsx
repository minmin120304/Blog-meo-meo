"use client";

import { Search, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [, startTransition] = useTransition();

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (query.trim()) {
        params.set("q", query.trim());
      } else {
        params.delete("q");
      }

      params.delete("page");

      const nextUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;
      const currentUrl = searchParams.toString()
        ? `${pathname}?${searchParams.toString()}`
        : pathname;

      if (nextUrl !== currentUrl) {
        startTransition(() => {
          router.replace(nextUrl, { scroll: false });
        });
      }
    }, 350);

    return () => window.clearTimeout(timeoutId);
  }, [pathname, query, router, searchParams]);

  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/35" />
      <input
        className="w-full rounded-md border border-gray-300 bg-white py-3 pl-10 pr-12 text-sm text-ink outline-none transition placeholder:text-ink/35 focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Tìm theo tiêu đề, tag hoặc chủ đề..."
        value={query}
      />
      {query ? (
        <button
          aria-label="Xóa từ khóa"
          className="absolute right-3 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-ink/55 transition hover:bg-gray-100 hover:text-primary-700"
          onClick={() => setQuery("")}
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      ) : null}
    </div>
  );
}
