import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { createComment, getCommentsByPostId, getPostBySlug } from "@/lib/api";
import { commentSchema } from "@/lib/validations";

type CommentRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(_request: Request, { params }: CommentRouteProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }

  const comments = await getCommentsByPostId(post.id);
  return NextResponse.json({ comments });
}

export async function POST(request: Request, { params }: CommentRouteProps) {
  try {
    const { slug } = await params;
    const body = await request.json();
    const validated = commentSchema.parse(body);
    const comment = await createComment(slug, validated);

    return NextResponse.json({
      success: true,
      comment
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: error.errors[0]?.message ?? "Dữ liệu không hợp lệ",
          errors: error.errors
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Không thể thêm bình luận."
      },
      { status: 500 }
    );
  }
}
