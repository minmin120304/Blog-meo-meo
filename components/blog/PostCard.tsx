"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";

import CategoryBadge from "@/components/blog/CategoryBadge";
import { Card } from "@/components/ui/Card";
import type { Post } from "@/types";
import { formatDate, formatReadingTime } from "@/lib/utils";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link className="group block h-full" href={`/blog/${post.slug}`}>
      <Card className="flex h-full flex-col gap-5 overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            alt={post.title}
            className="object-cover transition duration-500 group-hover:scale-105"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={post.coverImage}
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 p-6">
          <div className="flex items-center justify-between gap-3">
            <CategoryBadge
              href={`/blog/category/${post.category.slug}`}
              label={post.category.name}
            />
            <span className="text-xs uppercase tracking-[0.18em] text-ink/42">
              {formatDate(post.publishedAt)}
            </span>
          </div>
          <div className="space-y-3">
            <h3 className="font-display text-2xl leading-tight text-ink transition group-hover:text-primary-700">
              {post.title}
            </h3>
            <p className="line-clamp-3 text-sm leading-7 text-ink/68">{post.excerpt}</p>
          </div>
          <div className="mt-auto flex items-center justify-between text-sm text-ink/55">
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4" />
              {formatReadingTime(post.readingTime)}
            </span>
            <span className="inline-flex items-center gap-2 font-medium text-primary-700">
              Đọc tiếp
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
