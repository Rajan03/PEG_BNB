import React from "react";
import Link from "next/link";

import {PageBanner} from "@/components";
import {HOME03IMG4} from "@/constant/images";

export function AboutBanner(): JSX.Element {

    return (
        <PageBanner image={HOME03IMG4}>
            <div className={'flex flex-row justify-center items-center gap-x-2 text-3xl font-normal text-white'}>
                <Link href={'/'}>Home</Link>
                <span>/</span>
                <span> About Us</span>
            </div>
        </PageBanner>
    )
}
