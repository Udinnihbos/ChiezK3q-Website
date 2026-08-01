"use client";
import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchFilter({ files, onFilter }: { files: any[]; onFilter: (f: any[]) => void }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const categories = ["All", ...Array.from(new Set(files.map((f) => f.category)))];

  function apply() {
    let result = files;
    if (cat !== "All") result = result.filter((f) => f.category === cat);
    if (q.trim()) result = result.filter((f) => f.title.toLowerCase().includes(q.toLowerCase()) || f.description.toLowerCase().includes(q.toLowerCase()));
    onFilter(result);
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
        <input value={q} onChange={(e) => { setQ(e.target.value); apply(); }} placeholder="Cari file..." className="input-field pl-10" />
      </div>
      <div className="flex gap-2 flex-wrap">
        {categories.map((c) => (
          <button key={c} onClick={() => { setCat(c); setTimeout(apply, 0); }} className={`px-4 py-2 rounded-full text-sm border ${cat === c ? "bg-cheese-500 text-black border-cheese-500" : "border-white/10 text-neutral-300 hover:border-cheese-500/40"}`}>
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
