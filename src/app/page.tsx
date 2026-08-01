import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import VideoSection from "@/components/VideoSection";
import SocialLinks from "@/components/SocialLinks";
import { prisma } from "@/lib/prisma";

export const revalidate = 60;

export default async function HomePage() {
  let files = [];
  let totalFiles = 0;
  let totalDownloads = 0;
  try {
    files = await prisma.file.findMany({ where: { isPublished: true }, take: 6 });
    totalFiles = await prisma.file.count({ where: { isPublished: true } });
    totalDownloads = await prisma.download.count();
  } catch { /* db not ready */ }

  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection totalFiles={totalFiles} totalDownloads={totalDownloads} />
      <AboutSection />
      <VideoSection />
      <div className="max-w-6xl mx-auto px-6 pb-20 flex justify-center">
        <SocialLinks />
      </div>
      <Footer />
    </>
  );
}
export const dynamic = "force-dynamic";
