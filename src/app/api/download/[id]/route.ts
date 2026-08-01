import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  await prisma.download.create({
    data: {
      fileId: params.id,
      ip: req.headers.get("x-forwarded-for") || "unknown",
      userAgent: req.headers.get("user-agent") || "unknown",
      referer: req.headers.get("referer") || "unknown",
    },
  });
  await prisma.file.update({ where: { id: params.id }, data: { downloadCount: { increment: 1 } } });
  return NextResponse.json({ ok: true });
}
