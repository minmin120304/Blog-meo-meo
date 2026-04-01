"use client";

import { Button } from "@/components/ui/Button";

export default function BlogError({
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="shell py-16">
      <div className="rounded-[2rem] border border-red-100 bg-white p-8 shadow-card">
        <p className="eyebrow text-red-500">Blog error</p>
        <h1 className="mt-3 font-display text-4xl text-ink">Không thể tải danh sách bài viết.</h1>
        <div className="mt-6">
          <Button onClick={reset}>Thử lại</Button>
        </div>
      </div>
    </div>
  );
}
