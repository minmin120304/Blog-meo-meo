export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  email?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: Author;
  category: Category;
  publishedAt: string;
  tags: string[];
  readingTime: number;
}

export interface Comment {
  id: string;
  postId: string;
  author: string;
  email: string;
  content: string;
  createdAt: string;
  pending?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface CommentFormData {
  author: string;
  email: string;
  content: string;
}

export interface PostsPageResult {
  posts: Post[];
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalPosts: number;
}
