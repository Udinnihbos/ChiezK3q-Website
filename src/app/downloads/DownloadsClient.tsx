"use client";
import { useState } from "react";
import SearchFilter from "@/components/SearchFilter";
import FileCard from "@/components/FileCard";

export default function DownloadsClient({ files }: { files: any[] }) {
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
