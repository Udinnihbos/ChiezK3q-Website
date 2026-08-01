import { Youtube, Github, Instagram } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      <a href="https://youtube.com/@ChiezK3q" aria-label="YouTube" className="hover:text-cheese-500 transition"><Youtube /></a>
      <a href="#" aria-label="Instagram" className="hover:text-cheese-500 transition"><Instagram /></a>
      <a href="#" aria-label="GitHub" className="hover:text-cheese-500 transition"><Github /></a>
    </div>
  );
}
