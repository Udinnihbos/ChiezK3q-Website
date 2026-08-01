import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FileCard from "@/components/FileCard";
import SearchFilter from "@/components/SearchFilter";
import { prisma } from "@/lib/prisma";
import { useState } from "react";

export default async function DownloadsPage() {
  const files = await prisma.file.findMany({ where: { isPublished: true }, orderBy: { createdAt: "desc" } });

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-display font-bold mb-8">Downloads</h1>
        <ClientSearch files={files} />
      </div>
      <Footer />
    </>
  );
}

function ClientSearch({ files }: { files: any[] }) {
  const [filtered, setFiltered] = useState(files);
  return (
    <>
      <SearchFilter files={files} onFilter={setFiltered} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((f) => (
          <FileCard key={f.id} file={f} />
        ))}
      </div>
    </>
  );
}
