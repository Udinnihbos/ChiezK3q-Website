import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-cheese-600/20 to-neutral-950 z-0" />
      <div className="max-w-6xl mx-auto px-6 z-10 text-center">
        <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-6xl md:text-8xl font-display font-bold mb-6 gradient-text">
          ChiezK3q
        </motion.h1>
        <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl mx-auto">
          Download file cepat, aman, dan terpercaya.
        </motion.p>
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="flex gap-4 justify-center">
          <Link href="/downloads" className="btn-primary">Downloads</Link>
          <a href="https://youtube.com/@ChiezK3q" target="_blank" rel="noopener noreferrer" className="btn-secondary">YouTube</a>
        </motion.div>
      </div>
    </section>
  );
}
