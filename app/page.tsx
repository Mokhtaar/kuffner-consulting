import HeroSection from "@/components/home/HeroSection";
import SecondSection from "@/components/home/SecondSection";

export default async function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <SecondSection />
    </div>
  );
}
