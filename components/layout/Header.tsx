"use client";

import Link from "next/link";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";

import Navigation from "@/components/layout/Navigation";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-mist/85 backdrop-blur-xl">
      <div className="shell flex items-center justify-between gap-6 py-4">
        <Link className="flex items-center gap-3" href="/">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-mist">
            <Sparkles className="h-5 w-5" />
          </span>
          <span>
            <span className="block font-display text-xl text-ink">Blog Training</span>
            <span className="block text-xs uppercase tracking-[0.24em] text-ink/45">
              Next.js learning platform
            </span>
          </span>
        </Link>

        <Navigation />

        <div className="hidden items-center gap-3 md:flex">
          <Link
            className="rounded-full border border-ink/10 px-4 py-2 text-sm font-medium text-ink transition hover:bg-white"
            href="/contact"
          >
            Bắt đầu trao đổi
          </Link>
        </div>

        <button
          aria-label={open ? "Đóng menu" : "Mở menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-ink/10 bg-white/80 text-ink md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-ink/5 bg-mist/95 px-4 pb-4 md:hidden">
          <div className="shell flex flex-col gap-4 py-4">
            <Navigation compact onNavigate={() => setOpen(false)} />
            <Link
              className="rounded-full bg-ink px-4 py-3 text-center text-sm font-medium text-mist"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Bắt đầu trao đổi
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
