import Link from "next/link";

import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="shell flex min-h-[60vh] items-center justify-center py-20">
      <div className="max-w-xl rounded-[2rem] border border-ink/8 bg-white/85 p-10 text-center shadow-soft">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-display text-5xl text-ink">Không tìm thấy nội dung.</h1>
        <p className="mt-4 text-sm leading-7 text-ink/66">
          Route này không tồn tại hoặc bài viết đã bị gỡ khỏi dữ liệu mẫu.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/">
            <Button>Về trang chủ</Button>
          </Link>
          <Link href="/blog">
            <Button variant="outline">Đi tới blog</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
