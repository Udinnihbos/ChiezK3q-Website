"use client";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export default function DownloadButton({ fileId, fileUrl }: { fileId: string; fileUrl: string }) {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function handle() {
    setLoading(true);
    try {
      await fetch(`/api/download/${fileId}`, { method: "POST" });
      setDone(true);
      window.open(fileUrl, "_blank");
    } catch {
      alert("Download error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button onClick={handle} className="btn-primary flex items-center gap-2">
      {loading ? <Loader2 className="animate-spin" size={18} /> : done ? "Downloaded" : "Download ZIP"}
    </button>
  );
}
