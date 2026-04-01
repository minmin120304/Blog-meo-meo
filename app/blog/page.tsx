import Link from "next/link";
import type { Metadata } from "next";

import PostList from "@/components/blog/PostList";
import SearchBar from "@/components/blog/SearchBar";
import { Card } from "@/components/ui/Card";
import { buildPageNumbers } from "@/lib/utils";
import { getCategories, getPostsPage } from "@/lib/api";

type BlogPageProps = {
  searchParams: Promise<{
    category?: string;
    page?: string;
    q?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Blog",
  description: "Danh sách toàn bộ bài viết demo trong ứng dụng blog Next.js."
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category, page, q } = await searchParams;
  const currentPage = Number(page ?? "1");

  const [result, categories] = await Promise.all([
    getPostsPage({
      category,
      page: Number.isNaN(currentPage) ? 1 : currentPage,
      search: q
    }),
    getCategories()
  ]);

  const makePageHref = (nextPage: number) => {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (category) params.set("category", category);
    if (nextPage > 1) params.set("page", String(nextPage));
    return params.toString() ? `/blog?${params.toString()}` : "/blog";
  };

  return (
    <div className="shell grid gap-10 py-12 md:py-16">
      <section className="grid gap-5">
        <p className="eyebrow">Blog library</p>
        <div className="grid gap-6 lg:grid-cols-[1fr_20rem]">
          <div className="space-y-4">
            <h1 className="section-title">Tất cả bài viết và bài học trong demo.</h1>
            <p className="max-w-3xl text-base leading-8 text-ink/66">
              Search chạy ở client bằng URL params, còn dữ liệu listing vẫn được render
              từ server để giữ SEO và cấu trúc rõ ràng cho mục tiêu đào tạo.
            </p>
          </div>
          <Card className="grid gap-3">
            <p className="text-xs uppercase tracking-[0.24em] text-ink/42">Thống kê</p>
            <p className="font-display text-4xl text-ink">{result.totalPosts}</p>
            <p className="text-sm leading-7 text-ink/62">bài viết hiện có trong dữ liệu mẫu.</p>
          </Card>
        </div>
      </section>

      <section className="grid gap-6">
        <SearchBar />
        <div className="flex flex-wrap gap-3">
          <Link
            className={`rounded-full px-4 py-2 text-sm transition ${
              !category ? "bg-ink text-mist" : "bg-white/75 text-ink/70 hover:bg-white"
            }`}
            href={q ? `/blog?q=${encodeURIComponent(q)}` : "/blog"}
          >
            Tất cả
          </Link>
          {categories.map((item) => {
            const params = new URLSearchParams();
            if (q) params.set("q", q);
            params.set("category", item.slug);

            return (
              <Link
                key={item.slug}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  category === item.slug
                    ? "bg-ink text-mist"
                    : "bg-white/75 text-ink/70 hover:bg-white"
                }`}
                href={`/blog?${params.toString()}`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <PostList posts={result.posts} />
      </section>

      {result.totalPages > 1 ? (
        <nav className="flex flex-wrap items-center justify-center gap-3">
          {buildPageNumbers(result.totalPages).map((pageNumber) => (
            <Link
              key={pageNumber}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-sm font-medium transition ${
                pageNumber === result.currentPage
                  ? "bg-ink text-mist"
                  : "bg-white/80 text-ink hover:bg-white"
              }`}
              href={makePageHref(pageNumber)}
            >
              {pageNumber}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
