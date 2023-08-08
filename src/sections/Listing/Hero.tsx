import React from "react";
import {HOME02IMG4} from "@/constant/images";
import {PageBanner} from "@/components";
import Link from "next/link";

export default function HeroBanner(): JSX.Element {
    return <>
        <PageBanner image={HOME02IMG4}>
            <div className={'flex flex-row justify-center items-center gap-x-2 text-3xl font-normal text-white'}>
                <Link href={'/'}>Home</Link>
                <span>/</span>
                <span> Book a Stay</span>
            </div>
        </PageBanner>
    </>;
}
