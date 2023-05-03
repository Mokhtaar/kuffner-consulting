import FourthSection from "@/components/home/FourthSection";
import HeroSection from "@/components/home/HeroSection";
import SecondSection from "@/components/home/SecondSection";
import ThirdSection from "@/components/home/ThirdSection";

export default async function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </div>
  );
}
