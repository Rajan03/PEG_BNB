import { HomeData } from "@/constant/data";
import {
  AdForStay,
  FeaturedProperties,
  Hero,
  PopularCategories,
  SearchFilter,
} from "@/sections";

export default function Home(): React.ReactNode {
  const { heroData, popularShortRentals, adForStay, featuredProperties } =
    HomeData;

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

      {/* FEATURED PROPERTIES SECTION */}
      <FeaturedProperties {...featuredProperties} />

      <div className="mt-20"></div>
    </>
  );
}
