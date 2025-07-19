import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

class CustomAPIError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "CustomAPIError";
  }
}

// A faulty API route for testing error handling
export function GET() {
  // Simulate an error (optional – remove if you want no error)
  throw new CustomAPIError("This error is raised on the backend by the test API route.");

  // Unreachable return, included for reference
  // return NextResponse.json({ data: "Test API working..." });
}
