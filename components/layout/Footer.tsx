import Link from "next/link";

import { HOME_FEATURES, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12">
      <div className="shell grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/50">
            Learning platform
          </p>
          <h2 className="max-w-xl text-2xl font-semibold text-ink">
            {SITE_NAME} là một demo blog đơn giản để học Next.js.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-ink/65">
            Dự án giữ giao diện cơ bản để bạn tập trung vào routing, rendering, form
            handling và data fetching theo đúng spec.
          </p>
        </div>
        <div className="grid gap-3 rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-ink">Điểm chính</h3>
          {HOME_FEATURES.map((feature) => (
            <p key={feature} className="text-sm leading-7 text-ink/68">
              {feature}
            </p>
          ))}
          <Link className="mt-2 text-sm font-medium text-primary-700" href="/blog">
            Xem toàn bộ bài viết
          </Link>
        </div>
      </div>
    </footer>
  );
}
