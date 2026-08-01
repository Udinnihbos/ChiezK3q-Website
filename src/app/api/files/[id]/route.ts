import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const file = await prisma.file.findUnique({ where: { id: params.id } });
  if (!file) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(file);
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const data = await req.json();
  const file = await prisma.file.update({ where: { id: params.id }, data: { ...data, tags: data.tags ? data.tags.split(",").map((t: string) => t.trim()) : undefined } });
  return NextResponse.json(file);
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await prisma.file.delete({ where: { id: params.id } });
  return NextResponse.json({ ok: true });
}
