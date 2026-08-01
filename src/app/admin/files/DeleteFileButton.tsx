"use client";

export default function DeleteFileButton({ id }: { id: string }) {
  return (
    <button onClick={async () => {
      if (confirm("Delete file?")) {
        await fetch(`/api/files/${id}`, { method: "DELETE" });
        window.location.reload();
      }
    }} className="text-red-400 hover:text-red-600 text-sm">Delete</button>
  );
}
