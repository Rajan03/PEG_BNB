'use client';

import Image, {StaticImageData} from "next/image";
import {SimpleButton} from "@/components";

type Props = {
    title: string;
    description: string;
    image: StaticImageData;
    action: string;
    benefits: string[];
}
const ListProperty = (props: Props) => {
    const {title, description, image, action,benefits} = props;

    return (
        <div className="w-screen h-[50rem] mt-[15rem] relative flex flex-col justify-center items-center">

            <Image
                className="absolute w-full h-full object-cover"
                priority
                src={image}
                alt={title}
            />

            <div className="absolute w-full h-full bg-primary-700 bg-opacity-50" />

            <div className="absolute w-[90%] md:w-[70%] h-full flex flex-col justify-center items-center gap-y-8
            mx-auto py-16">
                <h1 className="text-5xl text-center font-semibold text-white leading-[3.5rem]
                flex flex-col justify-center items-center tracking-wider">
                    {title}
                </h1>
                <p className="hidden md:block flex-1 text-xl text-center leading-8 tracking-wide text-white
                flex flex-col justify-center items-center mt-12">
                    {description}
                </p>

                {/* Grid of three columns responsive */}
                <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
                    {benefits.map((benefit, index) => (
                        <li key={index} className="text-white text-xl font-normal ">
                            <span className="text-primary-500 font-bold mr-2"> &#10003; </span>
                            {benefit}
                        </li>
                    ))}
                </ul>

                <SimpleButton
                    action={action}
                    clickHandler={() => console.log(" Hey")}
                    className="mt-12 px-16 py-7"
                />
            </div>
        </div>);
};

export default ListProperty;
