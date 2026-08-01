import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";

export async function GET() {
  const totalFiles = await prisma.file.count();
  const totalDownloads = await prisma.download.count();
  const filesTop = await prisma.file.findMany({ orderBy: { downloadCount: "desc" }, take: 5 });
  return NextResponse.json({ totalFiles, totalDownloads, filesTop });
}
