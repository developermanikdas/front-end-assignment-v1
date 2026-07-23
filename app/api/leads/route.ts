import { NextResponse } from "next/server";
import { submitLead } from "@/app/actions/lead";
import { leadFormSchema } from "@/app/lib/validations/lead";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validate request body against Zod schema
    const validationResult = leadFormSchema.safeParse(body);
    if (!validationResult.success) {
      const errorMsg = validationResult.error.issues
        .map((err) => `${err.path.join(".")}: ${err.message}`)
        .join("; ");
      return NextResponse.json(
        { success: false, error: errorMsg },
        { status: 400 }
      );
    }

    // 2. Process submission using the unified Server Action
    const result = await submitLead(validationResult.data);

    if (result.success) {
      return NextResponse.json(result);
    } else {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("API Leads endpoint error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error occurred." },
      { status: 500 }
    );
  }
}
