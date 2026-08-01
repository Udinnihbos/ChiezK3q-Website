"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display font-bold text-xl gradient-text">ChiezK3q</Link>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium">
          <Link href="/" className="hover:text-cheese-500 transition">Home</Link>
          <Link href="/downloads" className="hover:text-cheese-500 transition">Downloads</Link>
          <Link href="/admin" className="hover:text-cheese-500 transition">Admin</Link>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="md:hidden overflow-hidden bg-neutral-950 border-t border-white/5">
            <div className="flex flex-col px-6 py-4 gap-4 text-sm font-medium">
              <Link href="/" onClick={() => setOpen(false)}>Home</Link>
              <Link href="/downloads" onClick={() => setOpen(false)}>Downloads</Link>
              <Link href="/admin" onClick={() => setOpen(false)}>Admin</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
