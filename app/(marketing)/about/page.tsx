import type { Metadata } from "next";
import { GraduationCap, LayoutTemplate, SearchCheck, Server } from "lucide-react";

import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: "Thông tin về dự án blog training được xây bằng Next.js App Router."
};

const values = [
  {
    title: "Dễ dạy",
    description:
      "Cấu trúc route, component và data model đủ sạch để đi từ cơ bản đến nâng cao trong lớp học.",
    icon: GraduationCap
  },
  {
    title: "Dễ mở rộng",
    description:
      "Có thể thêm dashboard, auth hoặc CMS thật sau này mà không cần phá cấu trúc đang có.",
    icon: LayoutTemplate
  },
  {
    title: "SEO rõ ràng",
    description:
      "Metadata, detail page và prerender được đưa vào ngay từ đầu để người học nhìn thấy giá trị thật.",
    icon: SearchCheck
  },
  {
    title: "Server-first",
    description:
      "Server Component là mặc định; chỉ đẩy phần tương tác cần thiết sang client.",
    icon: Server
  }
];

export default function AboutPage() {
  return (
    <div className="grid gap-10">
      <section className="max-w-3xl space-y-5">
        <p className="eyebrow">About this project</p>
        <h1 className="section-title">Một blog training được dựng để dạy đúng trọng tâm.</h1>
        <p className="text-base leading-8 text-ink/68">
          Thay vì làm một landing page quá mỏng hoặc một sản phẩm quá lớn, dự án này chọn
          đúng ngưỡng vừa đủ: nhiều loại route, nhiều kiểu render, forms có validation và
          luồng dữ liệu nội bộ để học viên thấy được tư duy xây ứng dụng bằng Next.js.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <Card key={value.title} className="grid gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                <Icon className="h-6 w-6" />
              </span>
              <h2 className="font-display text-3xl text-ink">{value.title}</h2>
              <p className="text-sm leading-7 text-ink/68">{value.description}</p>
            </Card>
          );
        })}
      </section>
    </div>
  );
}
