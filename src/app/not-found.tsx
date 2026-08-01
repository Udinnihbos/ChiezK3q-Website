import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-display font-bold gradient-text mb-4">404</h1>
      <p className="text-neutral-300 mb-8">Halaman tidak ditemukan.</p>
      <Link href="/" className="btn-primary">Kembali</Link>
    </div>
  );
}
