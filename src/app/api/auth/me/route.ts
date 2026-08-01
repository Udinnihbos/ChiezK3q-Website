import { NextResponse } from "next/server";
import { getAuthCookie, verifyToken } from "@/lib/auth";

export async function GET() {
  const token = await getAuthCookie();
  if (!token) return NextResponse.json({ auth: false }, { status: 401 });
  try {
    const payload = await verifyToken(token);
    return NextResponse.json({ auth: true, user: payload });
  } catch {
    return NextResponse.json({ auth: false }, { status: 401 });
  }
}
