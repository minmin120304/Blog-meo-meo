"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { commentSchema, type CommentSchemaValues } from "@/lib/validations";
import type { Comment } from "@/types";

type CommentFormProps = {
  postId: string;
  postSlug: string;
  onCommit: (tempId: string, comment: Comment) => void;
  onOptimisticAdd: (comment: Comment) => void;
  onRollback: (tempId: string) => void;
};

export default function CommentForm({
  postId,
  postSlug,
  onCommit,
  onOptimisticAdd,
  onRollback
}: CommentFormProps) {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset
  } = useForm<CommentSchemaValues>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      author: "",
      email: "",
      content: ""
    }
  });

  const onSubmit = handleSubmit(async (values) => {
    const tempId = `temp-${Date.now()}`;
    const optimisticComment: Comment = {
      id: tempId,
      postId,
      author: values.author,
      email: values.email,
      content: values.content,
      createdAt: new Date().toISOString(),
      pending: true
    };

    onOptimisticAdd(optimisticComment);
    reset();

    try {
      const response = await fetch(`/api/posts/${postSlug}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });

      const payload = (await response.json()) as {
        comment?: Comment;
        message?: string;
        success?: boolean;
      };

      if (!response.ok || !payload.success || !payload.comment) {
        throw new Error(payload.message ?? "Không thể gửi bình luận.");
      }

      onCommit(tempId, payload.comment);
      toast.success("Bình luận đã được thêm.");
    } catch (error) {
      onRollback(tempId);
      toast.error(error instanceof Error ? error.message : "Không thể gửi bình luận.");
    }
  });

  return (
    <form className="grid gap-4" onSubmit={onSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <Input error={errors.author?.message} label="Tên hiển thị" {...register("author")} />
        <Input
          error={errors.email?.message}
          label="Email"
          type="email"
          {...register("email")}
        />
      </div>

      <Textarea
        error={errors.content?.message}
        label="Bình luận"
        placeholder="Chia sẻ suy nghĩ của bạn về bài viết này..."
        rows={4}
        {...register("content")}
      />

      <div className="flex justify-end">
        <Button disabled={isSubmitting} type="submit" variant="outline">
          {isSubmitting ? "Đang gửi..." : "Gửi bình luận"}
        </Button>
      </div>
    </form>
  );
}
