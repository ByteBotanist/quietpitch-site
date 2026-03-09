import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const handle = req.nextUrl.searchParams.get("handle");

  if (!handle) {
    return NextResponse.json({ available: false });
  }

  const res = await fetch(
    `https://quietpitch-funcapp-axfccbhygagpbkdw.eastus-01.azurewebsites.net/api/checkhandle?handle=${handle}`
  );

  const data = await res.json();

  return NextResponse.json(data);
}