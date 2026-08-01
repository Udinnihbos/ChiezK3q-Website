import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { slugify } from "@/lib/utils";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const files = await prisma.file.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(files);
}

export async function POST(req: Request) {
  const data = await req.json();
  const file = await prisma.file.create({
    data: {
      ...data,
      slug: slugify(data.title),
      shortcode: nanoid(6),
      tags: data.tags ? data.tags.split(",").map((t: string) => t.trim()) : [],
      downloadCount: 0,
    },
  });
  return NextResponse.json(file);
}
