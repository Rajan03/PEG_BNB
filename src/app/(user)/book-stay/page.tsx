import React from "react";
import {ListingHeroBanner} from "@/sections";
import {ListingData} from "@/constant/data";
import {PropertyCard, SectionHeader} from "@/components";

export default function BookAStay(): React.ReactNode {
    const {properties, title, subtitle} = ListingData;
    return (
        <>
            {/* Banner Image */}
            <ListingHeroBanner/>

            <div
                className={
                    "flex flex-col justify-start items-stretch container mx-auto"
                }
            >
                <SectionHeader
                    title={title}
                    subtitle={subtitle}
                    className={"self-center"}
                />

                {/* Listings */}
                <div
                    className={
                        "my-24 px-12 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-12"
                    }
                >
                    {properties.map((property, index) => (
                        <PropertyCard
                            {...property}
                            className={
                                "sm:min-w-full h-full max-h-full justify-self-center" +
                                " self-center"
                            }
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
