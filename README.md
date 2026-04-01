# NextJS Blog Learning Platform

README này không chỉ để chạy project, mà để hướng dẫn build lại project theo từng bước nhỏ.

## 1. Mục tiêu

Xây một web blog bằng Next.js App Router có:

- Trang chủ
- Trang blog listing
- Trang chi tiết bài viết
- Trang lọc theo category
- Form liên hệ
- Form bình luận
- API routes nội bộ
- Loading, error, not-found

## 2. Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod
- date-fns
- lucide-react
- react-hot-toast

## 3. Cách chạy project hiện tại

### Bước 1: cài package

```bash
npm install
```

### Bước 2: tạo file môi trường

```powershell
Copy-Item .env.example .env.local
```

### Bước 3: chạy local

```bash
npm run dev
```

### Bước 4: build production

```bash
npm run build
```

## 4. Hướng dẫn build project từ đầu theo từng bước

Phần này là phần chính.

## Bước 1: Khởi tạo project Next.js

Mục tiêu:

- Có project chạy được với Next.js + TypeScript
- Có script `dev`, `build`, `start`

Việc cần làm:

- Tạo `package.json`
- Tạo `tsconfig.json`
- Tạo `next-env.d.ts`
- Tạo `next.config.ts`

File liên quan:

- `package.json`
- `tsconfig.json`
- `next-env.d.ts`
- `next.config.ts`

Kết quả mong đợi:

- Chạy được `npm install`
- Chạy được `npm run dev`

Commit gợi ý:

```bash
git commit -m "chore: bootstrap Next.js project"
```

## Bước 2: Cấu hình Tailwind CSS

Mục tiêu:

- Dùng Tailwind để viết UI nhanh

Việc cần làm:

- Tạo `tailwind.config.ts`
- Tạo `postcss.config.js`
- Tạo `app/globals.css`

File liên quan:

- `tailwind.config.ts`
- `postcss.config.js`
- `app/globals.css`

Kết quả mong đợi:

- Có class Tailwind hoạt động trong app

Commit gợi ý:

```bash
git commit -m "feat: add Tailwind CSS setup"
```

## Bước 3: Tạo type cho dữ liệu

Mục tiêu:

- Có model rõ ràng cho `Post`, `Category`, `Author`, `Comment`

Việc cần làm:

- Tạo file type chung

File liên quan:

- `types/index.ts`

Kết quả mong đợi:

- Toàn bộ app dùng chung type thay vì viết tay từng nơi

Commit gợi ý:

```bash
git commit -m "feat: add core TypeScript models"
```

## Bước 4: Tạo mock data

Mục tiêu:

- Có dữ liệu mẫu để dựng UI trước khi nối backend thật

Việc cần làm:

- Tạo danh sách bài viết
- Tạo danh sách bình luận

File liên quan:

- `data/posts.json`
- `data/comments.json`

Kết quả mong đợi:

- Có dữ liệu để render homepage, listing, detail, comments

Commit gợi ý:

```bash
git commit -m "feat: add mock posts and comments data"
```

## Bước 5: Tạo utility và cấu hình dùng chung

Mục tiêu:

- Gom các hàm helper, constants, validation vào một chỗ

Việc cần làm:

- Tạo constants cho site
- Tạo helper format date, className
- Tạo schema validation bằng Zod

File liên quan:

- `lib/constants.ts`
- `lib/utils.ts`
- `lib/validations.ts`

Kết quả mong đợi:

- App có nền tảng dùng chung cho nhiều page/component

Commit gợi ý:

```bash
git commit -m "feat: add shared constants utils and validations"
```

## Bước 6: Tạo data access layer

Mục tiêu:

- Không đọc `json` trực tiếp ở page
- Tách logic lấy dữ liệu ra `lib/api.ts`

Việc cần làm:

- Viết `getPosts`
- Viết `getPostBySlug`
- Viết `getCategories`
- Viết `getCommentsByPostId`
- Viết `createComment`

File liên quan:

- `lib/api.ts`

Kết quả mong đợi:

- Page chỉ gọi hàm từ `lib/api.ts`

Commit gợi ý:

```bash
git commit -m "feat: add mock data access layer"
```

## Bước 7: Dựng bộ UI cơ bản

Mục tiêu:

- Có component nền để tái sử dụng

Việc cần làm:

- Tạo `Button`
- Tạo `Input`
- Tạo `Textarea`
- Tạo `Card`

File liên quan:

- `components/ui/Button.tsx`
- `components/ui/Input.tsx`
- `components/ui/Textarea.tsx`
- `components/ui/Card.tsx`

Kết quả mong đợi:

- Không phải lặp lại UI primitive ở nhiều nơi

Commit gợi ý:

```bash
git commit -m "feat: add reusable UI primitives"
```

## Bước 8: Dựng layout chung

Mục tiêu:

- Toàn site dùng chung header, footer, layout

Việc cần làm:

- Tạo `Header`
- Tạo `Navigation`
- Tạo `Footer`
- Tạo root layout

File liên quan:

- `components/layout/Header.tsx`
- `components/layout/Navigation.tsx`
- `components/layout/Footer.tsx`
- `app/layout.tsx`

Kết quả mong đợi:

- Trang nào cũng có layout thống nhất

Commit gợi ý:

```bash
git commit -m "feat: create shared app layout"
```

## Bước 9: Tạo homepage

Mục tiêu:

- Có trang chủ hiển thị phần giới thiệu và bài viết mới nhất

Việc cần làm:

- Tạo route group `(marketing)`
- Tạo homepage

File liên quan:

- `app/(marketing)/layout.tsx`
- `app/(marketing)/page.tsx`

Kết quả mong đợi:

- Route `/` render được dữ liệu bài viết mới nhất

Commit gợi ý:

```bash
git commit -m "feat: add homepage"
```

## Bước 10: Tạo About và Contact page

Mục tiêu:

- Hoàn thành phần page tĩnh theo spec

Việc cần làm:

- Tạo trang giới thiệu
- Tạo trang liên hệ

File liên quan:

- `app/(marketing)/about/page.tsx`
- `app/(marketing)/contact/page.tsx`

Kết quả mong đợi:

- Có route `/about`
- Có route `/contact`

Commit gợi ý:

```bash
git commit -m "feat: add about and contact pages"
```

## Bước 11: Tạo blog components

Mục tiêu:

- Có đủ component để render blog listing và blog detail

Việc cần làm:

- Tạo `CategoryBadge`
- Tạo `PostCard`
- Tạo `PostList`
- Tạo `PostContent`
- Tạo `SearchBar`
- Tạo `CommentsPanel`

File liên quan:

- `components/blog/CategoryBadge.tsx`
- `components/blog/PostCard.tsx`
- `components/blog/PostList.tsx`
- `components/blog/PostContent.tsx`
- `components/blog/SearchBar.tsx`
- `components/blog/CommentsPanel.tsx`

Kết quả mong đợi:

- Có component dùng lại cho mọi page blog

Commit gợi ý:

```bash
git commit -m "feat: add blog components"
```

## Bước 12: Tạo blog listing page

Mục tiêu:

- Có trang `/blog`
- Có search và pagination cơ bản

Việc cần làm:

- Đọc `searchParams`
- Lấy posts từ `lib/api.ts`
- Render list bài viết

File liên quan:

- `app/blog/page.tsx`

Kết quả mong đợi:

- Truy cập `/blog`
- Search cập nhật theo URL params

Commit gợi ý:

```bash
git commit -m "feat: add blog listing page"
```

## Bước 13: Tạo category page

Mục tiêu:

- Có trang lọc theo danh mục

Việc cần làm:

- Tạo dynamic route category
- Lấy posts theo category

File liên quan:

- `app/blog/category/[category]/page.tsx`

Kết quả mong đợi:

- Truy cập được `/blog/category/tutorial`

Commit gợi ý:

```bash
git commit -m "feat: add category page"
```

## Bước 14: Tạo blog detail page

Mục tiêu:

- Có trang chi tiết bài viết
- Có SEO metadata
- Có static params

Việc cần làm:

- Tạo route `[slug]`
- Viết `generateStaticParams`
- Viết `generateMetadata`

File liên quan:

- `app/blog/[slug]/page.tsx`

Kết quả mong đợi:

- Truy cập được `/blog/ten-bai-viet`

Commit gợi ý:

```bash
git commit -m "feat: add blog detail page with SSG metadata"
```

## Bước 15: Tạo parallel comments route

Mục tiêu:

- Tách comments thành slot riêng theo spec

Việc cần làm:

- Tạo layout cho detail page
- Tạo `@comments/default.tsx`

File liên quan:

- `app/blog/[slug]/layout.tsx`
- `app/blog/[slug]/@comments/default.tsx`

Kết quả mong đợi:

- Comments render song song với nội dung bài viết

Commit gợi ý:

```bash
git commit -m "feat: add parallel comments route"
```

## Bước 16: Tạo contact form

Mục tiêu:

- Có form liên hệ đúng spec

Việc cần làm:

- Dùng React Hook Form
- Nối schema Zod
- Gọi API `/api/contact`

File liên quan:

- `components/forms/ContactForm.tsx`

Kết quả mong đợi:

- Submit form có validate và toast

Commit gợi ý:

```bash
git commit -m "feat: implement contact form"
```

## Bước 17: Tạo comment form

Mục tiêu:

- Có form bình luận với optimistic update

Việc cần làm:

- Dùng React Hook Form
- Gọi API comments
- Hiển thị optimistic comment trước khi response trả về

File liên quan:

- `components/forms/CommentForm.tsx`

Kết quả mong đợi:

- Có thể thêm comment mới trên UI

Commit gợi ý:

```bash
git commit -m "feat: implement comment form with optimistic update"
```

## Bước 18: Tạo API routes

Mục tiêu:

- Có backend nội bộ để demo form và data fetching

Việc cần làm:

- Tạo API contact
- Tạo API posts
- Tạo API post detail
- Tạo API comments theo post

File liên quan:

- `app/api/contact/route.ts`
- `app/api/posts/route.ts`
- `app/api/posts/[slug]/route.ts`
- `app/api/posts/[slug]/comments/route.ts`

Kết quả mong đợi:

- Form và comments có API để gọi

Commit gợi ý:

```bash
git commit -m "feat: add internal API routes"
```

## Bước 19: Tạo loading, error, not-found

Mục tiêu:

- App có đủ trạng thái cần thiết theo spec

Việc cần làm:

- Tạo global loading
- Tạo global error
- Tạo not-found
- Tạo loading/error cho blog

File liên quan:

- `app/loading.tsx`
- `app/error.tsx`
- `app/not-found.tsx`
- `app/blog/loading.tsx`
- `app/blog/error.tsx`
- `app/blog/[slug]/loading.tsx`

Kết quả mong đợi:

- App có fallback tốt hơn khi loading hoặc lỗi

Commit gợi ý:

```bash
git commit -m "feat: add loading error and not-found states"
```

## Bước 20: Kiểm tra và deploy

Mục tiêu:

- Đảm bảo app build được trước khi push hoặc deploy

Việc cần làm:

- Chạy build
- Kiểm tra route
- Deploy lên Vercel

Lệnh:

```bash
npm run build
```

Deploy Vercel:

```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

Commit gợi ý:

```bash
git commit -m "docs: finalize project setup and deployment guide"
```

## 5. Cấu trúc thư mục hiện tại

```text
app/
components/
data/
lib/
public/
types/
```

## 6. Route chính

- `/`
- `/about`
- `/contact`
- `/blog`
- `/blog/[slug]`
- `/blog/category/[category]`

## 7. Ghi chú

- Dự án đang dùng mock data
- Comments chưa lưu vào database thật
- `lib/api.ts` đang đóng vai trò data layer giả lập
- Có thể thay bằng Prisma, Supabase hoặc CMS thật sau này

