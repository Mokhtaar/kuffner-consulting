import FifthSection from "@/components/home/FifthSection";
import FourthSection from "@/components/home/FourthSection";
import HeroSection from "@/components/home/HeroSection";
import SecondSection from "@/components/home/SecondSection";
import ThirdSection from "@/components/home/ThirdSection";
import SixthSection from "@/components/home/SixthSection";
import SeventhSection from "@/components/home/SeventhSection";
import EighthSection from "@/components/home/EighthSection";
import NinthSection from "@/components/home/NinthSection";

export default async function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection />
      <NinthSection />
    </div>
  );
}
