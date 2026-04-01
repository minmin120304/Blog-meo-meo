import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PostList from "@/components/blog/PostList";
import { getCategories, getCategoryBySlug, getPosts } from "@/lib/api";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({
    category: category.slug
  }));
}

export async function generateMetadata({
  params
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const data = await getCategoryBySlug(category);

  if (!data) {
    return {};
  }

  return {
    title: `Danh mục ${data.name}`,
    description: data.description
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryInfo = await getCategoryBySlug(category);

  if (!categoryInfo) {
    notFound();
  }

  const posts = await getPosts({ category });

  return (
    <div className="shell grid gap-8 py-12 md:py-16">
      <div className="space-y-4">
        <p className="eyebrow">Category</p>
        <h1 className="section-title">{categoryInfo.name}</h1>
        <p className="max-w-2xl text-base leading-8 text-ink/66">
          {categoryInfo.description || "Danh mục bài viết trong ứng dụng blog training."}
        </p>
        <Link className="text-sm font-medium text-primary-700" href="/blog">
          Quay lại tất cả bài viết
        </Link>
      </div>
      <PostList posts={posts} />
    </div>
  );
}
