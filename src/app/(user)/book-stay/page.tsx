import React from "react";
import {Filters, ListingHeroBanner, SearchFilter} from "@/sections";

export default function BookAStay(): React.ReactNode {
    return <>
        {/* Banner Image */}
        <ListingHeroBanner/>

        {/* Filters */}
        <SearchFilter />
    </>;
}
