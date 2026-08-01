import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true, message: "Database siap. Buka halaman utama." });
}

export async function POST() {
  return GET();
}
