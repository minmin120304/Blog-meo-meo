import commentsData from "@/data/comments.json";
import postsData from "@/data/posts.json";
import type {
  Category,
  Comment,
  CommentFormData,
  Post,
  PostsPageResult
} from "@/types";

const posts = (postsData as Post[]).sort((a, b) =>
  a.publishedAt < b.publishedAt ? 1 : -1
);

let commentStore = [...(commentsData as Comment[])];

async function delay(ms = 250) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

function applyPostFilters(
  source: Post[],
  options?: {
    search?: string;
    category?: string;
  }
) {
  let filtered = [...source];

  if (options?.search) {
    const search = options.search.toLowerCase().trim();
    filtered = filtered.filter((post) => {
      const haystack = [
        post.title,
        post.excerpt,
        post.category.name,
        post.tags.join(" ")
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(search);
    });
  }

  if (options?.category) {
    filtered = filtered.filter((post) => post.category.slug === options.category);
  }

  return filtered;
}

export async function getAllPosts() {
  await delay(150);
  return posts;
}

export async function getPosts(options?: {
  limit?: number;
  search?: string;
  category?: string;
}) {
  await delay();
  const filtered = applyPostFilters(posts, {
    search: options?.search,
    category: options?.category
  });

  if (options?.limit) {
    return filtered.slice(0, options.limit);
  }

  return filtered;
}

export async function getPostsPage(options?: {
  search?: string;
  category?: string;
  page?: number;
  pageSize?: number;
}): Promise<PostsPageResult> {
  await delay();

  const filtered = applyPostFilters(posts, {
    search: options?.search,
    category: options?.category
  });

  const pageSize = options?.pageSize ?? 6;
  const totalPosts = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalPosts / pageSize));
  const currentPage = Math.min(Math.max(options?.page ?? 1, 1), totalPages);
  const start = (currentPage - 1) * pageSize;

  return {
    posts: filtered.slice(start, start + pageSize),
    currentPage,
    pageSize,
    totalPages,
    totalPosts
  };
}

export async function getPostBySlug(slug: string) {
  await delay(180);
  return posts.find((post) => post.slug === slug) ?? null;
}

export async function getRelatedPosts(post: Post, limit = 3) {
  await delay(120);
  return posts
    .filter(
      (candidate) =>
        candidate.id !== post.id &&
        (candidate.category.slug === post.category.slug ||
          candidate.tags.some((tag) => post.tags.includes(tag)))
    )
    .slice(0, limit);
}

export async function getCategories(): Promise<Category[]> {
  await delay(120);
  const map = new Map<string, Category>();

  posts.forEach((post) => {
    map.set(post.category.slug, post.category);
  });

  return Array.from(map.values());
}

export async function getCategoryBySlug(slug: string) {
  const categories = await getCategories();
  return categories.find((category) => category.slug === slug) ?? null;
}

export async function getCommentsByPostId(postId: string) {
  await delay(120);
  return commentStore
    .filter((comment) => comment.postId === postId)
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export async function createComment(postSlug: string, data: CommentFormData) {
  await delay(450);
  const post = await getPostBySlug(postSlug);

  if (!post) {
    throw new Error("Post not found");
  }

  const comment: Comment = {
    id: `cm-${Date.now()}`,
    postId: post.id,
    author: data.author,
    email: data.email,
    content: data.content,
    createdAt: new Date().toISOString()
  };

  commentStore = [comment, ...commentStore];
  return comment;
}
