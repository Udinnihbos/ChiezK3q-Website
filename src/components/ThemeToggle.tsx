"use client";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { dark, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full hover:bg-white/10 transition"
      aria-label="Toggle theme"
    >
      {dark ? <Sun className="text-cheese-500" /> : <Moon className="text-cheese-500" />}
    </button>
  );
}
