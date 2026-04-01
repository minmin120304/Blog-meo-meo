import Link from "next/link";
import { ArrowRight, BookOpen, Layers3, Workflow } from "lucide-react";

import PostList from "@/components/blog/PostList";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { HOME_FEATURES } from "@/lib/constants";
import { getCategories, getPosts } from "@/lib/api";

export default async function HomePage() {
  const [posts, categories] = await Promise.all([
    getPosts({ limit: 6 }),
    getCategories()
  ]);

  return (
    <div className="grid gap-16">
      <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div className="space-y-6">
          <p className="eyebrow">Next.js Blog Learning Platform</p>
          <h1 className="font-display text-5xl leading-[1.02] text-ink md:text-7xl">
            Blog demo đủ thật để dạy từ routing tới form validation.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-ink/68">
            Sản phẩm này bám sát spec đào tạo: homepage, blog listing, detail page,
            category page, search CSR, contact form, comments mock, API routes và các
            trạng thái loading or error cần thiết cho việc giảng dạy.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog">
              <Button size="lg">
                Xem blog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Liên hệ
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                className="rounded-full border border-ink/10 bg-white/75 px-4 py-2 text-sm text-ink/70 transition hover:border-primary-200 hover:text-primary-700"
                href={`/blog/category/${category.slug}`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        <Card className="grid gap-5 bg-gradient-to-br from-white to-primary-50/60">
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-[1.8rem] bg-ink p-6 text-mist">
              <BookOpen className="h-6 w-6 text-gold" />
              <p className="mt-5 text-xs uppercase tracking-[0.24em] text-mist/55">Module</p>
              <h2 className="mt-2 font-display text-3xl">3 pha học</h2>
              <p className="mt-3 text-sm leading-7 text-mist/72">
                Basics, routing/forms và advanced data fetching.
              </p>
            </div>
            <div className="rounded-[1.8rem] bg-primary-600 p-6 text-mist">
              <Workflow className="h-6 w-6 text-gold" />
              <h2 className="mt-5 font-display text-3xl">12 bước commit</h2>
              <p className="mt-3 text-sm leading-7 text-mist/78">
                Dễ theo dõi khi dạy hoặc khi bạn muốn push dần lên Git.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-ink/8 bg-mist/85 p-6">
              <Layers3 className="h-6 w-6 text-primary-700" />
              <h2 className="mt-5 font-display text-3xl text-ink">App Router</h2>
              <p className="mt-3 text-sm leading-7 text-ink/68">
                Route groups, dynamic routes và parallel routes trong một flow rõ ràng.
              </p>
            </div>
          </div>
          <div className="grid gap-3 rounded-[1.8rem] border border-dashed border-ink/10 bg-white/80 p-6">
            {HOME_FEATURES.map((feature) => (
              <p key={feature} className="text-sm leading-7 text-ink/66">
                {feature}
              </p>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Latest posts</p>
            <h2 className="section-title mt-2">Bài viết mới nhất</h2>
          </div>
          <Link className="text-sm font-medium text-primary-700" href="/blog">
            Xem tất cả
          </Link>
        </div>
        <PostList posts={posts} />
      </section>
    </div>
  );
}
