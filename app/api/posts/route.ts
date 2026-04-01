import { NextResponse } from "next/server";

import { getPostsPage } from "@/lib/api";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") ?? undefined;
  const category = searchParams.get("category") ?? undefined;
  const page = Number(searchParams.get("page") ?? "1");

  const result = await getPostsPage({
    category,
    page: Number.isNaN(page) ? 1 : page,
    search: q
  });

  return NextResponse.json(result);
}
