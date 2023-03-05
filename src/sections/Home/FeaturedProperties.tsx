import { PropertyCard, SectionHeader, TextBtn } from "@/components";
import { StaticImageData } from "next/image";
import { HiOutlineChevronRight } from "react-icons/hi";

type Props = {
  title: string;
  subtitle: string;

  properties: {
    id: number;
    title: string;
    slug: string;
    location: string;
    image: StaticImageData;
    rating: number;
    price: number;
  }[];
};

const FeaturedProperties = (props: Props) => {
  return (
    <div className="mt-[15rem] flex flex-col justify-center items-center container mx-auto">
      <SectionHeader title={props.title} subtitle={props.subtitle} />

      <div className="flex flex-row flex-wrap justify-center items-center gap-16 mt-24">
        {props.properties.map((property) => {
          const w = 100 / props.properties.length;

          return (
            <PropertyCard
              key={property.title}
              className={"w-" + w + "%"}
              {...property}
            />
          );
        })}
      </div>

      <div
        className="mt-24 flex flex-row justify-start items-center gap-2 cursor-pointer
      hover:scale-105 transition-all duration-300 ease-in-out"
      >
        <TextBtn>View all properties </TextBtn>
        <HiOutlineChevronRight className="h-6 w-6 ml-2 animate-pulse" />
      </div>
    </div>
  );
};

export default FeaturedProperties;
