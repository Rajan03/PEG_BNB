import React from "react";
import Link from "next/link";
import {PageBanner} from "@/components";
import {HOME03IMG4} from "@/constant/images";

export default function Contact(): React.ReactNode {
    return <>
        {/* Banner Image */}
        <PageBanner image={HOME03IMG4}>
            <div className={'flex flex-row justify-center items-center gap-x-2 text-3xl font-normal text-white'}>
                <Link href={'/'}>Home</Link>
                <span>/</span>
                <span> Contact Us</span>
            </div>
        </PageBanner>
    </>;
}
