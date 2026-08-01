"use client";
import { ReactNode } from "react";
import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-neutral-950">
      <AdminSidebar />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
