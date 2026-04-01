"use client";

import { MessageSquareText } from "lucide-react";
import { useMemo, useState } from "react";

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

  const countLabel = useMemo(() => `${comments.length} bình luận`, [comments.length]);

  return (
    <Card className="sticky top-28 grid gap-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-ink/42">Parallel route</p>
          <h2 className="mt-2 font-display text-3xl text-ink">Thảo luận</h2>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-800">
          <MessageSquareText className="h-4 w-4" />
          {countLabel}
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
            <article
              key={comment.id}
              className="rounded-[1.6rem] border border-ink/8 bg-mist/72 p-5"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-medium text-ink">{comment.author}</h3>
                  <p className="text-xs uppercase tracking-[0.18em] text-ink/42">
                    {formatDate(comment.createdAt)}
                  </p>
                </div>
                {comment.pending ? (
                  <span className="rounded-full bg-gold/25 px-3 py-1 text-xs font-medium text-ink">
                    Đang gửi
                  </span>
                ) : null}
              </div>
              <p className="mt-3 text-sm leading-7 text-ink/72">{comment.content}</p>
            </article>
          ))
        ) : (
          <div className="rounded-[1.6rem] border border-dashed border-ink/12 px-4 py-10 text-center text-sm text-ink/58">
            Chưa có bình luận nào. Hãy mở đầu cuộc thảo luận.
          </div>
        )}
      </div>
    </Card>
  );
}
