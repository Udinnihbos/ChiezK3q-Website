"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
    window.location.href = "/admin";
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 px-6">
      <form onSubmit={handleLogin} className="card p-8 w-full max-w-md">
        <h1 className="text-2xl font-display font-bold mb-6 gradient-text">Admin Login</h1>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field mb-4" required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field mb-6" required />
        <button type="submit" className="btn-primary w-full">Login</button>
      </form>
    </div>
  );
}
