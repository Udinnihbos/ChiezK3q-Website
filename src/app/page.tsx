import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import VideoSection from "@/components/VideoSection";
import SocialLinks from "@/components/SocialLinks";

export default async function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection totalFiles={0} totalDownloads={0} />
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
