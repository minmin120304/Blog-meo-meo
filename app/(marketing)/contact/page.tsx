import type { Metadata } from "next";

import ContactForm from "@/components/forms/ContactForm";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Gửi tin nhắn cho nhóm xây dựng demo blog Next.js."
};

export default function ContactPage() {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
      <section className="space-y-5">
        <p className="eyebrow">Contact</p>
        <h1 className="section-title">Liên hệ để bàn về roadmap học hoặc demo trên lớp.</h1>
        <p className="text-base leading-8 text-ink/68">
          Form này sử dụng React Hook Form, Zod và API route nội bộ để minh hoạ đầy đủ
          flow validation từ client sang server.
        </p>
      </section>

      <Card className="p-6">
        <ContactForm />
      </Card>
    </div>
  );
}
