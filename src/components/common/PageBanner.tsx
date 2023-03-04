import React from "react";
import Image, {StaticImageData} from "next/image";
import {BG_WAVE} from "@/constant/images";

export default function PageBanner({image, children}: {image: StaticImageData, children: React.ReactNode}): JSX.Element {

    if (!image) return <></>;

    return <>
        <div className={'w-full h-screen bg-gray-200 flex flex-col justify-start items-stretch relative'}>
            <Image src={image} alt={'banner'} fill className={'w-full h-full object-cover absolute bg-top' +
                ' inset-0'} priority/>

            <div className={'w-full h-full bg-black bg-opacity-50 absolute inset-0'}/>

            <Image src={BG_WAVE} alt={'wave'} className={'w-full h-[40%] absolute bottom-0' +
                ' object-cover'}/>

            <div className={'w-full h-full absolute inset-0 flex flex-col justify-center items-center'}>
                {children}
            </div>
        </div>
    </>;
}
