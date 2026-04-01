"use client";

import Link from "next/link";
import { Menu, PenSquare, X } from "lucide-react";
import { useState } from "react";

import Navigation from "@/components/layout/Navigation";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="shell flex items-center justify-between gap-6 py-4">
        <Link className="flex items-center gap-3" href="/">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-600 text-white">
            <PenSquare className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-lg font-semibold text-ink">Blog Training</span>
            <span className="block text-xs text-ink/50">Next.js learning platform</span>
          </span>
        </Link>

        <Navigation />

        <div className="hidden items-center gap-3 md:flex">
          <Link
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-ink transition hover:bg-gray-50"
            href="/contact"
          >
            Liên hệ
          </Link>
        </div>

        <button
          aria-label={open ? "Đóng menu" : "Mở menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-ink md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-gray-200 bg-white px-4 pb-4 md:hidden">
          <div className="shell flex flex-col gap-4 py-4">
            <Navigation compact onNavigate={() => setOpen(false)} />
            <Link
              className="rounded-md bg-primary-600 px-4 py-3 text-center text-sm font-medium text-white"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Liên hệ
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
