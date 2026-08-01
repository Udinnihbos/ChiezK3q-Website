import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const admin = await prisma.admin.findUnique({ where: { email } });
  if (!admin) return NextResponse.json({ error: "Invalid" }, { status: 401 });
  const match = await bcrypt.compare(password, admin.password);
  if (!match) return NextResponse.json({ error: "Invalid" }, { status: 401 });
  const token = await signToken({ id: admin.id, email: admin.email });
  const res = NextResponse.json({ ok: true });
  res.cookies.set("auth_token", token, { httpOnly: true, path: "/", maxAge: 60 * 60 * 24 * 7 });
  return res;
}
