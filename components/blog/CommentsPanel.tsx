"use client";

import { MessageSquareText } from "lucide-react";
import { useState } from "react";

import CommentForm from "@/components/forms/CommentForm";
import { Card } from "@/components/ui/Card";
import type { Comment } from "@/types";
import { formatDate } from "@/lib/utils";

type CommentsPanelProps = {
  initialComments: Comment[];
  postId: string;
  postSlug: string;
};

export default function CommentsPanel({
  initialComments,
  postId,
  postSlug
}: CommentsPanelProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);

  return (
    <Card className="sticky top-24 grid gap-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/42">
            Parallel route
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-ink">Thảo luận</h2>
        </div>
        <span className="inline-flex items-center gap-2 rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-ink">
          <MessageSquareText className="h-4 w-4" />
          {comments.length} bình luận
        </span>
      </div>

      <CommentForm
        onCommit={(tempId, nextComment) =>
          setComments((current) =>
            current.map((comment) => (comment.id === tempId ? nextComment : comment))
          )
        }
        onOptimisticAdd={(comment) => setComments((current) => [comment, ...current])}
        onRollback={(tempId) =>
          setComments((current) => current.filter((comment) => comment.id !== tempId))
        }
        postId={postId}
        postSlug={postSlug}
      />

      <div className="grid gap-4">
        {comments.length ? (
          comments.map((comment) => (
            <article key={comment.id} className="rounded-md border border-gray-200 bg-gray-50 p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-medium text-ink">{comment.author}</h3>
                  <p className="text-xs uppercase tracking-[0.08em] text-ink/42">
                    {formatDate(comment.createdAt)}
                  </p>
                </div>
                {comment.pending ? (
                  <span className="rounded-md bg-yellow-100 px-2.5 py-1 text-xs font-medium text-ink">
                    Đang gửi
                  </span>
                ) : null}
              </div>
              <p className="mt-3 text-sm leading-7 text-ink/72">{comment.content}</p>
            </article>
          ))
        ) : (
          <div className="rounded-md border border-dashed border-gray-300 px-4 py-8 text-center text-sm text-ink/58">
            Chưa có bình luận nào. Hãy mở đầu cuộc thảo luận.
          </div>
        )}
      </div>
    </Card>
  );
}
