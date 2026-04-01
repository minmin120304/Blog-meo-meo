import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";

import CategoryBadge from "@/components/blog/CategoryBadge";
import PostContent from "@/components/blog/PostContent";
import PostList from "@/components/blog/PostList";
import { Card } from "@/components/ui/Card";
import { formatDate, formatReadingTime } from "@/lib/utils";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/api";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({
  params
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage]
    }
  };
}

export const revalidate = 3600;

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post, 3);

  return (
    <article className="grid gap-10">
      <div className="space-y-5">
        <Link className="inline-flex items-center gap-2 text-sm font-medium text-primary-700" href="/blog">
          <ArrowLeft className="h-4 w-4" />
          Quay lại blog
        </Link>
        <CategoryBadge
          href={`/blog/category/${post.category.slug}`}
          label={post.category.name}
          subtle
        />
        <h1 className="font-display text-5xl leading-tight text-ink md:text-6xl">
          {post.title}
        </h1>
        <p className="max-w-3xl text-base leading-8 text-ink/66">{post.excerpt}</p>
        <div className="flex flex-wrap items-center gap-6 text-sm text-ink/56">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            {formatDate(post.publishedAt)}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock3 className="h-4 w-4" />
            {formatReadingTime(post.readingTime)}
          </span>
          <span>Tác giả: {post.author.name}</span>
        </div>
      </div>

      <div className="relative aspect-[16/8] overflow-hidden rounded-[2.2rem] border border-white/70 shadow-soft">
        <Image
          alt={post.title}
          className="object-cover"
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 900px"
          src={post.coverImage}
        />
      </div>

      <Card className="grid gap-8">
        <div className="flex items-center gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border border-ink/10">
            <Image alt={post.author.name} fill sizes="56px" src={post.author.avatar} />
          </div>
          <div>
            <h2 className="font-medium text-ink">{post.author.name}</h2>
            <p className="text-sm text-ink/58">{post.author.bio}</p>
          </div>
        </div>
        <PostContent content={post.content} />
      </Card>

      {relatedPosts.length ? (
        <section className="grid gap-6">
          <div>
            <p className="eyebrow">Related posts</p>
            <h2 className="mt-2 font-display text-4xl text-ink">Đọc tiếp theo</h2>
          </div>
          <PostList posts={relatedPosts} />
        </section>
      ) : null}
    </article>
  );
}
