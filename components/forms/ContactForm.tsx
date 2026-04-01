"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { MailCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { contactSchema, type ContactSchemaValues } from "@/lib/validations";

export default function ContactForm() {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset
  } = useForm<ContactSchemaValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = handleSubmit(async (values) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    });

    const payload = (await response.json()) as { message?: string; success?: boolean };

    if (!response.ok || !payload.success) {
      toast.error(payload.message ?? "Không thể gửi liên hệ lúc này.");
      return;
    }

    toast.success(payload.message ?? "Gửi liên hệ thành công.");
    reset();
  });

  return (
    <form className="grid gap-4" onSubmit={onSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <Input error={errors.name?.message} label="Họ tên" placeholder="Mai An" {...register("name")} />
        <Input
          error={errors.email?.message}
          label="Email"
          placeholder="ban@example.com"
          type="email"
          {...register("email")}
        />
      </div>

      <Input
        error={errors.subject?.message}
        label="Tiêu đề"
        placeholder="Tôi muốn trao đổi về khóa học Next.js"
        {...register("subject")}
      />

      <Textarea
        error={errors.message?.message}
        label="Nội dung"
        placeholder="Mô tả nhu cầu hoặc câu hỏi của bạn..."
        rows={6}
        {...register("message")}
      />

      <div className="flex flex-wrap items-center justify-between gap-4 rounded-md border border-gray-200 bg-gray-50 px-4 py-4">
        <p className="inline-flex items-center gap-2 text-sm text-ink/62">
          <MailCheck className="h-4 w-4 text-primary-700" />
          Phản hồi demo được mô phỏng qua API route nội bộ.
        </p>
        <Button disabled={isSubmitting} size="lg" type="submit">
          {isSubmitting ? "Đang gửi..." : "Gửi liên hệ"}
        </Button>
      </div>
    </form>
  );
}
