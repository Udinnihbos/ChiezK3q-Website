"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);
  return (
    <div className="fixed bottom-6 right-6 bg-cheese-500 text-black px-6 py-3 rounded-xl shadow-xl flex items-center gap-3 z-50">
      <span>{message}</span>
      <button onClick={onClose}><X size={16} /></button>
    </div>
  );
}
