# NextJS Blog Learning Platform

Ứng dụng blog demo được xây bằng Next.js App Router để học và thực hành các khái niệm quan trọng như routing, Server/Client Components, data fetching, form validation và API routes.

## Mục tiêu dự án

- Xây một blog demo đủ thật để dùng làm project học Next.js.
- Bám sát flow trong spec: homepage, blog listing, blog detail, category page, contact form, comments mock.
- Giữ cấu trúc rõ ràng để dễ chia thành nhiều commit nhỏ khi học hoặc giảng dạy.

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod
- date-fns
- lucide-react
- react-hot-toast

## Tính năng hiện có

- Homepage hiển thị bài viết mới nhất
- Blog listing có search theo URL params
- Lọc bài viết theo category
- Blog detail với `generateStaticParams` và metadata SEO
- Parallel route cho comments
- Contact form với React Hook Form + Zod
- Comment form với optimistic update
- API routes nội bộ cho contact, posts và comments
- `loading.tsx`, `error.tsx`, `not-found.tsx`

## Cấu trúc thư mục

```text
app/
  (marketing)/
    page.tsx
    about/page.tsx
    contact/page.tsx
  blog/
    page.tsx
    [slug]/page.tsx
    [slug]/@comments/default.tsx
    category/[category]/page.tsx
  api/
    contact/route.ts
    posts/route.ts
    posts/[slug]/route.ts
    posts/[slug]/comments/route.ts
components/
  blog/
  forms/
  layout/
  ui/
lib/
  api.ts
  constants.ts
  utils.ts
  validations.ts
data/
  posts.json
  comments.json
types/
  index.ts
public/
  images/
```

## Cài đặt

Yêu cầu:

- Node.js 20+ hoặc mới hơn
- npm

Các bước:

```bash
npm install
```

Tạo file môi trường từ file mẫu:

```bash
cp .env.example .env.local
```

Nếu đang dùng PowerShell:

```powershell
Copy-Item .env.example .env.local
```

## Chạy local

```bash
npm run dev
```

Sau đó mở:

```text
http://localhost:3000
```

## Build production

```bash
npm run build
npm run start
```

## Biến môi trường

Xem file [.env.example](./.env.example):

```env
NEXT_PUBLIC_SITE_NAME="NextJS Blog"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
```

## Luồng dữ liệu

### Posts

- Dữ liệu bài viết được lấy từ `data/posts.json`
- Các hàm truy xuất dữ liệu nằm trong `lib/api.ts`
- Blog listing và blog detail đọc dữ liệu qua server components

### Comments

- Dữ liệu comment mẫu nằm trong `data/comments.json`
- Comment mới được thêm vào store in-memory trong `lib/api.ts`
- Đây là mock flow để demo, không phải database thật

### Forms

- Schema validation nằm trong `lib/validations.ts`
- Contact form và comment form dùng chung schema với API route

## Các route chính

- `/` : Trang chủ
- `/about` : Trang giới thiệu
- `/contact` : Trang liên hệ
- `/blog` : Danh sách bài viết
- `/blog/[slug]` : Chi tiết bài viết
- `/blog/category/[category]` : Danh sách bài viết theo danh mục
- `/api/contact` : API nhận form liên hệ
- `/api/posts` : API danh sách bài viết
- `/api/posts/[slug]` : API chi tiết bài viết
- `/api/posts/[slug]/comments` : API comments theo bài viết

## Gợi ý chia commit nhỏ

Nếu bạn muốn build lại từ đầu và commit dần, có thể tách theo các bước sau:

1. Khởi tạo cấu hình project
2. Thêm types và mock data
3. Thêm utility, constants, validations
4. Tạo UI components cơ bản
5. Dựng layout chung: header, footer, globals
6. Tạo homepage
7. Tạo blog components: card, list, content, search
8. Tạo lib/api cho posts, category, comments
9. Tạo blog listing và category page
10. Tạo blog detail + metadata + static params
11. Tạo contact form + comment form
12. Tạo API routes + loading/error/not-found

## Triển khai lên Vercel

### Cách 1: deploy qua Vercel dashboard

1. Push code lên GitHub
2. Đăng nhập `https://vercel.com`
3. Import repository
4. Thêm environment variables nếu cần
5. Deploy

### Cách 2: dùng Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

## Lưu ý

- Project đang dùng mock data, chưa có database thật
- Comments chỉ là mô phỏng để học optimistic UI và API route
- Nếu muốn production-ready, bạn nên thay `lib/api.ts` bằng database hoặc CMS thật

## Tài liệu nên đọc thêm

- Next.js App Router
- React Hook Form
- Zod
- Tailwind CSS

