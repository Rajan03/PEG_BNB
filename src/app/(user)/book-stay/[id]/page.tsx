import { propertiesDetailsArr } from "@/constant/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import { Property } from "@/types/app";

type Props = {
  params: {
    id: string;
  };
};

const getProperty = (id: string) => {
  return propertiesDetailsArr[0];
};
export default function PropertyPage(props: Props): JSX.Element {
  const property: Property = getProperty(props.params.id);

  if (!property) {
    return notFound();
  }

  return (
    <div className={"pt-[9rem]"}>
      {/* Image */}
      <div className={"py-8 container mx-auto"}>
        <Image
          src={property.images[0]}
          alt={property.title}
          className={"w-full h-[40rem] rounded-xl shadow-lg object-cover"}
        />
      </div>

      {/* Content */}
      <div className={"container mx-auto"}>
        <div className={"grid grid-cols-[1fr_30%] gap-20"}>
          {/* Title Location Card */}
          <div
            className={
              "col-span-1 flex flex-col gap-y-3 p-8 rounded-lg border border-gray-200"
            }
          >
            <h1 className={"text-4xl text-primary-600 font-medium"}>
              {property.title}
            </h1>
            <p className={"text-xl text-gray-500"}>{property.location}</p>

            <div className={"flex items-center gap-x-32"}>
              {property.topFeatures.map((feature) => (
                <div key={feature.name} className={"flex items-center"}>
                  <div className={"w-4 h-4 text-primary-600"}>
                    {feature.icon}
                  </div>
                  <p className={"ml-2 text-primary-500 text-xl "}>
                    {feature.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Price Card */}
          <div className={"col-span-1 p-8 rounded border border-gray-200"}>
            <div className={"flex justify-end"}>
              <div className={"flex flex-col"}>
                <p className={"text-primary-500"}>Price</p>
                <p className={"text-2xl text-primary-500 font-bold"}>
                  {property.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
