"use client";

import { Button } from "@/components/ui/Button";

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="shell flex min-h-[60vh] items-center justify-center py-20">
      <div className="max-w-xl rounded-[2rem] border border-red-100 bg-white p-8 text-center shadow-card">
        <p className="eyebrow text-red-500">Application error</p>
        <h1 className="mt-3 font-display text-4xl text-ink">Có lỗi xảy ra trong ứng dụng.</h1>
        <p className="mt-4 text-sm leading-7 text-ink/64">
          {error.message || "Hãy thử tải lại trang hoặc thực hiện lại thao tác của bạn."}
        </p>
        <div className="mt-6 flex justify-center">
          <Button onClick={reset}>Thử lại</Button>
        </div>
      </div>
    </div>
  );
}
