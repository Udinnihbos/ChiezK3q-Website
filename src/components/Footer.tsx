import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-neutral-950 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-display font-bold text-xl gradient-text">ChiezK3q</h3>
          <p className="text-sm text-neutral-400">Download file dengan cepat & aman.</p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
