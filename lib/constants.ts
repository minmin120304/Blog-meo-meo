export const SITE_NAME =
  process.env.NEXT_PUBLIC_SITE_NAME || "NextJS Blog Learning Platform";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const SITE_DESCRIPTION =
  "Ứng dụng blog cá nhân bằng Next.js App Router, dùng để học routing, rendering, forms và data fetching theo spec đào tạo.";

export const NAV_ITEMS = [
  { label: "Trang chủ", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Giới thiệu", href: "/about" },
  { label: "Liên hệ", href: "/contact" }
];

export const HOME_FEATURES = [
  "App Router với route group, dynamic route và parallel route",
  "Server Component cho listing và detail page, Client Component cho search và forms",
  "React Hook Form + Zod cho validation rõ ràng",
  "API routes nội bộ để demo luồng client/server"
];
