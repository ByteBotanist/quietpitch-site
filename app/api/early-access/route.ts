import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const res = await fetch(
      "https://quietpitch-funcapp-axfccbhygagpbkdw.eastus-01.azurewebsites.net/api/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const text = await res.text();

    return new NextResponse(text, {
      status: res.status,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error("Signup proxy failed:", err);

    return NextResponse.json(
      { error: "Signup failed" },
      { status: 500 }
    );
  }
}

