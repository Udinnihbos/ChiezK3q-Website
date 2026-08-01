import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-neutral-900 border-r border-white/5 p-6">
      <h2 className="font-display font-bold text-xl gradient-text mb-8">Admin</h2>
      <nav className="flex flex-col gap-3 text-sm">
        <Link href="/admin" className="hover:text-cheese-500">Dashboard</Link>
        <Link href="/admin/files" className="hover:text-cheese-500">Files</Link>
        <Link href="/admin/analytics" className="hover:text-cheese-500">Analytics</Link>
      </nav>
    </aside>
  );
}
