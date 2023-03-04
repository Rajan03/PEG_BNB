import React from "react";
import {Filters, ListingHeroBanner, SearchFilter} from "@/sections";
import {ListingData} from "@/constant/data";
import {PropertyCard} from "@/components";

export default function BookAStay(): React.ReactNode {
    const {properties} = ListingData
    return <>
        {/* Banner Image */}
        <ListingHeroBanner/>

        <div className={'flex flex-col justify-start items-stretch container mx-auto'}>
            {/* Search Filter */}
            <SearchFilter className={'min-h-[7rem]'}/>

            {/* Filters */}
            {/*<Filters />*/}

            {/* Listings */}
            <div className={'my-24 px-12 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-12'}>
                {properties.map((property, index) => (
                    <PropertyCard {...property} className={'sm:min-w-full h-full max-h-full justify-self-center' +
                        ' self-center'} key={index}/>
                ))}
            </div>
        </div>
    </>;
}
