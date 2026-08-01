import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DownloadsClient from "./DownloadsClient";

export default async function DownloadsPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-display font-bold mb-8">Downloads</h1>
        <DownloadsClient files={[]} />
      </div>
      <Footer />
    </>
  );
}
export const dynamic = "force-dynamic";
