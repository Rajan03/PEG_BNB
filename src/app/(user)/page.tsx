import { HomeData } from "@/constant/data";
import { Hero, PopularCategories, SearchFilter } from "@/sections";

export default function Home(): React.ReactNode {
  const { heroData, popularShortRentals } = HomeData;

  return (
    <>
      {/* HERO SECTION */}
      <Hero {...heroData} />

      {/* SEARCH SECTION */}
      <SearchFilter />

      {/* POPULAR CATEGORIES SECTION */}
      <PopularCategories {...popularShortRentals} />
    </>
  );
}
