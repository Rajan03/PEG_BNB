import React from "react";
import {ContactBanner, ContactInfo, GetInTouch, ContactForm, Reviews} from "@/sections";
import {ContactData} from "@/constant/data";

export default function Contact(): React.ReactNode {
    const {getInTouch, contactInfo, customerReviews} = ContactData;

    return <>
        {/* Banner Image */}
        <ContactBanner/>

        {/* Get In Touch */}
        <GetInTouch {...getInTouch}/>

        {/* Contact Info */}
        <ContactInfo className={'mt-40'} {...contactInfo}/>

        {/* Customer Reviews */}
        <Reviews className={'mt-40'} {...customerReviews}/>

        {/* Contact Form */}
        <ContactForm className={'mt-40 mb-24'} />
    </>;
}
