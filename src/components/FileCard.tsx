import Link from "next/link";
import { FileData } from "../types";

export default function FileCard({ file }: { file: FileData }) {
  return (
    <Link href={`/downloads/${file.slug}`} className="card hover:border-cheese-500/30 transition overflow-hidden group">
      <div className="h-48 bg-neutral-800 relative">
        {file.thumbnail ? (
          <img src={file.thumbnail} alt={file.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-tr from-neutral-800 to-neutral-700" />
        )}
      </div>
      <div className="p-6">
        <h3 className="font-display font-bold text-xl mb-2 group-hover:text-cheese-500 transition">{file.title}</h3>
        <p className="text-sm text-neutral-400 mb-4 line-clamp-2">{file.description}</p>
        <div className="flex justify-between items-center text-xs text-neutral-500">
          <span>{file.category}</span>
          <span>{file.downloadCount} downloads</span>
        </div>
      </div>
    </Link>
  );
}
