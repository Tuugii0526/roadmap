import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log("HI ROUTE");
  console.log(request.headers);
  return new Response("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": "Basic realm='test'",
    },
  });
}
