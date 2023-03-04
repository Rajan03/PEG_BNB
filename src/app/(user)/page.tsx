import React from "react";
import {HomeData} from "@/constant/data";
import {
    AdForStay,
    CustomerReviews,
    FeaturedProperties,
    Hero,
    PopularCategories,
    SearchFilter,
} from "@/sections";
import ListProperty from "../../sections/Home/ListProperty";

export default function Home(): React.ReactNode {
    const {
        heroData,
        popularShortRentals,
        adForStay,
        featuredProperties,
        reviews,
        listMyProperty
    } = HomeData;

    return (
        <>
            {/* HERO SECTION */}
            <Hero {...heroData} />

            {/* SEARCH SECTION */}
            <SearchFilter/>

            {/* POPULAR CATEGORIES SECTION */}
            <PopularCategories {...popularShortRentals} />

            {/* AD FOR STAY SECTION */}
            <AdForStay {...adForStay} />

            {/* FEATURED PROPERTIES SECTION */}
            <FeaturedProperties {...featuredProperties} />

            {/* CUSTOMERS REVIEWS */}
            <CustomerReviews {...reviews} />

            {/* LIST PROPERTY SECTION */}
            <ListProperty {...listMyProperty}/>
        </>
    );
}
