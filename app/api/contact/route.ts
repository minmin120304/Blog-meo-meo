import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    await new Promise((resolve) => setTimeout(resolve, 900));
    console.log("Contact form submission:", validatedData);

    return NextResponse.json({
      success: true,
      message: "Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất có thể."
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: error.errors[0]?.message ?? "Dữ liệu không hợp lệ",
          errors: error.errors
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Đã có lỗi xảy ra khi gửi liên hệ."
      },
      { status: 500 }
    );
  }
}
