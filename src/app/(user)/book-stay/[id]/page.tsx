"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { EB_Garamond } from "@next/font/google";
import { propertiesDetailsArr } from "@/constant/data";

import Carousel from "@/components/Carousel";
import { Property } from "@/types/app";
import { DateRangeModal, Rating, ReviewCard, BookStayForm } from "@/components";

const Font = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
type Props = {
  params: {
    id: string;
  };
};

const getProperty = (id: string) => {
  return propertiesDetailsArr.find((property) => property.slug === id);
};
export default function PropertyPage(props: Props): JSX.Element {
  const [selectedDates, setSelectedDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const property: Property | undefined = getProperty(props.params.id);
  const avgRating = property
    ? property.reviews.reduce((acc, review) => {
        return acc + review.rating;
      }, 0)
    : 0;

  if (!property) {
    return notFound();
  }

  const onDateChange = ([start, end]: Date[]) => {
    setSelectedDates({
      startDate: start,
      endDate: end,
      key: "selection",
    });
  };

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
      <div
        className={
          "container mx-auto grid grid-cols-1 lg:grid-cols-[1fr_30%] gap-20 mt-12"
        }
      >
        {/* ROW 1 - NAME and PRICE card */}
        {/* Title Location Card */}
        <div
          className={
            "md:col-span-1 flex flex-col gap-y-3 p-8 rounded-lg border border-gray-200 " +
            Font.className
          }
        >
          <h1 className={"text-4xl tracking-wider text-primary-600 font-bold"}>
            {property.title}
          </h1>
          <p className={"text-xl text-gray-500"}>{property.location}</p>

          <div className={"flex items-center gap-x-24 mt-4"}>
            {property.topFeatures.map((feature) => (
              <div key={feature.name} className={"flex items-center"}>
                <div className={"w-6 h-6 text-primary-600"}>{feature.icon}</div>
                <p className={"ml-2 text-primary-500 text-xl "}>
                  {feature.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Price Card */}
        <div className={"md:col-span-1 p-8 rounded border border-gray-200"}>
          <div className={"flex flex-col " + Font.className}>
            <p className={"text-primary-500 text-lg"}>Price</p>
            <p className={"text-4xl text-primary-500 font-bold"}>
              {property.price} / night
            </p>
          </div>

          <div className={"flex items-center gap-x-4 mt-9"}>
            <DateRangeModal
              selected={selectedDates}
              setSelected={onDateChange}
              className="flex-1 py-5 px-3 border border-neutral-200"
            />
          </div>

          <BookStayForm dates={[selectedDates.startDate, selectedDates.endDate]} property={property} />
        </div>

        {/* ROW 2 - OVERVIEW */}
        <div className={"md:col-span-1 p-8 rounded-lg border border-gray-200"}>
          <h2
            className={
              "text-3xl tracking-wider text-primary-600 font-bold " +
              Font.className
            }
          >
            Overview
          </h2>
          <p className={"text-lg tracking-widest text-gray-500 mt-4"}>
            {property.overview.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>

        {/* ROW 3 - AMENITIES */}
        <div className={"md:col-span-1 p-8 rounded-lg border border-gray-200"}>
          <h2
            className={
              "text-3xl tracking-wider text-primary-600 font-bold " +
              Font.className
            }
          >
            Amenities
          </h2>
          <div className={"grid grid-cols-2 gap-y-6 mt-4"}>
            {property.amenities.map((amenity, i) =>
              i < 15 ? (
                <div
                  key={amenity.name}
                  className={"col-span-1 flex items-center gap-x-2 mt-4"}
                >
                  <div className={"w-6 h-6 text-primary-600"}>
                    {amenity.icon}
                  </div>
                  <p className={"text-lg text-gray-500"}>{amenity.name}</p>
                </div>
              ) : null
            )}

            {property.amenities.length > 15 && (
              <div className={"col-span-2 flex justify-center mt-4"}>
                <button className={"btn btn-primary"}>
                  Show More Amenities
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ROW 4 - REVIEWS */}
        <div className={"md:col-span-2 p-8 rounded-lg border border-gray-200"}>
          <div className={"flex items-center gap-x-4 mt-4"}>
            <h2
              className={
                "text-3xl tracking-wider text-primary-600 font-bold " +
                Font.className
              }
            >
              Reviews
            </h2>
            <div className={"flex items-center gap-x-2"}>
              <Rating rating={avgRating / property.reviews.length} />
              <p className={"text-lg text-gray-500"}>
                {property.reviews.length} Reviews
              </p>
            </div>
          </div>

          <Carousel className={"my-4 py-8 px-3"}>
            {property.reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </Carousel>
        </div>

        {/* ROW 5 - GALLERY */}
        <div className={"md:col-span-2 p-8 rounded-lg border border-gray-200"}>
          <h2
            className={
              "text-3xl tracking-wider text-primary-600 font-bold " +
              Font.className
            }
          >
            Gallery
          </h2>
          <Carousel className={"my-4 py-8 px-3"}>
            {property.images.map((image, i) => (
              <div
                key={i}
                className={
                  "w-full h-[30rem] rounded-xl pointer-events-none mr-8"
                }
              >
                <Image
                  src={image}
                  alt={property.title}
                  className={"w-full h-full rounded-xl shadow-lg object-cover"}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
