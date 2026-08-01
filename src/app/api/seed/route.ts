import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function GET() {
  return POST();
}

import { execSync } from "child_process";

export async function POST() {
  try { execSync("npx prisma migrate deploy", { stdio: "inherit" }); } catch { /* ignore */ }
  const email = process.env.ADMIN_EMAIL || "admin@chiezk3q.com";
  const password = process.env.ADMIN_PASSWORD || "admin";
  const hashed = await bcrypt.hash(password, 10);
  const admin = await prisma.admin.upsert({ where: { email }, update: {}, create: { email, password: hashed, name: "Admin" } });
  return NextResponse.json({ admin });
}
