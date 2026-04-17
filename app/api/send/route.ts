import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("[send] payload:", body);

  try {
    const res = await fetch("http://188.225.35.172:8000/send", {
      method: "POST",
      headers: { "Content-Type": "application/json", accept: "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => null);
    console.log("[send] backend status:", res.status, data);
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    console.error("[send] fetch error:", err);
    return NextResponse.json({ error: String(err) }, { status: 502 });
  }
}
