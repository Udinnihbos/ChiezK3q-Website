import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest, { params }: { params: { shortcode: string } }) {
  const file = await prisma.file.findUnique({ where: { shortcode: params.shortcode } });
  if (!file) return NextResponse.redirect(new URL("/", req.url));
  return NextResponse.redirect(new URL(`/downloads/${file.slug}`, req.url));
}
