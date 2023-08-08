import React from "react";
import {AboutBanner, Reviews, Stats, WelcomeSection} from "@/sections";
import {AboutData} from "@/constant/data";

export default function About(): React.ReactNode {
    const {welcomeSection, stats, customerReviews} = AboutData;
    return <>
        {/* Banner Image */}
        <AboutBanner />

        {/* Welcome, Section */}
        <WelcomeSection {...welcomeSection} />

        {/* Stats Section */}
         <Stats stats={stats} className={'mt-44'}/>

        {/* Customer Reviews */}
        <Reviews className={'mt-44'} {...customerReviews}/>


    </>;
}
