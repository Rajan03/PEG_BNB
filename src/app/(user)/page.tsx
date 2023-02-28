import { HomeData } from "@/constant/data";
import { Hero } from "@/sections";

export default function Home(): React.ReactNode {
  const { heroData } = HomeData;

  return (
    <>
      {/* HERO SECTION */}
      <Hero {...heroData} />
    </>
  );
}
