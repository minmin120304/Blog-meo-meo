import PostCard from "@/components/blog/PostCard";
import type { Post } from "@/types";

type PostListProps = {
  posts: Post[];
};

export default async function PostList({ posts }: PostListProps) {
  if (!posts.length) {
    return (
      <div className="rounded-[2rem] border border-dashed border-ink/15 bg-white/60 px-6 py-14 text-center">
        <p className="font-display text-2xl text-ink">Chưa có bài viết phù hợp.</p>
        <p className="mt-3 text-sm text-ink/60">
          Thử đổi từ khóa tìm kiếm hoặc chuyển sang danh mục khác.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
