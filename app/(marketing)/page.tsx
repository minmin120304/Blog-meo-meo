import Link from "next/link";
import { ArrowRight } from "lucide-react";

import PostList from "@/components/blog/PostList";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { HOME_FEATURES } from "@/lib/constants";
import { getCategories, getPosts } from "@/lib/api";

export default async function HomePage() {
  const [posts, categories] = await Promise.all([getPosts({ limit: 6 }), getCategories()]);

  return (
    <div className="grid gap-12">
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="eyebrow">Next.js Blog Learning Platform</p>
          <h1 className="text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Blog demo đủ thật để dạy từ routing tới form validation.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-ink/68">
            Sản phẩm này bám sát spec đào tạo: homepage, blog listing, detail page,
            category page, search CSR, contact form, comments mock, API routes và các
            trạng thái loading hoặc error cần thiết cho việc giảng dạy.
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
                className="rounded-md border border-gray-300 px-3 py-2 text-sm text-ink/70 transition hover:bg-gray-50 hover:text-primary-700"
                href={`/blog/category/${category.slug}`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        <Card className="grid gap-4">
          <div className="grid gap-3">
            <h2 className="text-xl font-semibold text-ink">Nội dung chính</h2>
            {HOME_FEATURES.map((feature) => (
              <p key={feature} className="text-sm leading-7 text-ink/66">
                {feature}
              </p>
            ))}
          </div>
          <div className="grid gap-2 border-t border-gray-200 pt-4 text-sm text-ink/68">
            <p>3 pha học: basics, routing/forms, advanced features.</p>
            <p>12 step nhỏ để bạn commit dần lên Git.</p>
            <p>Phù hợp làm demo cho lớp học hoặc starter project.</p>
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
