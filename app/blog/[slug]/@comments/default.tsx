import { notFound } from "next/navigation";

import CommentsPanel from "@/components/blog/CommentsPanel";
import { getCommentsByPostId, getPostBySlug } from "@/lib/api";

type CommentsSlotProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CommentsSlot({ params }: CommentsSlotProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const comments = await getCommentsByPostId(post.id);

  return <CommentsPanel initialComments={comments} postId={post.id} postSlug={post.slug} />;
}
