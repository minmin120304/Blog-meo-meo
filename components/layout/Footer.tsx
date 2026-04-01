import Link from "next/link";

import { HOME_FEATURES, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-white/65 py-16">
      <div className="shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-ink/45">Learning platform</p>
          <h2 className="max-w-xl font-display text-3xl text-ink">
            {SITE_NAME} được dựng như một demo đủ thật để dạy routing, rendering và
            form handling.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-ink/65">
            Dự án đi theo triết lý nhỏ nhưng có chiều sâu: mock data rõ ràng, route tổ
            chức tốt, component tách vai trò và giao diện đủ mạnh để demo trên lớp.
          </p>
        </div>
        <div className="grid gap-3 rounded-[2rem] border border-ink/8 bg-mist/85 p-6 shadow-card">
          <h3 className="font-display text-xl text-ink">Điểm nhấn</h3>
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
