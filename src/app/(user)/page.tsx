import { HomeData } from "@/constant/data";
import { AdForStay, Hero, PopularCategories, SearchFilter } from "@/sections";

export default function Home(): React.ReactNode {
  const { heroData, popularShortRentals, adForStay } = HomeData;

  return (
    <>
      {/* HERO SECTION */}
      <Hero {...heroData} />

      {/* SEARCH SECTION */}
      <SearchFilter />

      {/* POPULAR CATEGORIES SECTION */}
      <PopularCategories {...popularShortRentals} />

      {/* AD FOR STAY SECTION */}
      <AdForStay {...adForStay} />
    </>
  );
}
