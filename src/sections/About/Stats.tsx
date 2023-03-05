import React from "react";
import {EB_Garamond} from "@next/font/google";

const Font = EB_Garamond({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

type Props = {
    title: string;
    value: number;
    icon: JSX.Element;
}

export default function Stats({stats, className}: { stats: Props[], className?: string }): JSX.Element {

    return (
        <>
            <div className={'container mx-auto max-w-[60%] flex flex-row justify-start items-stretch shadow-custom ' +
                '' + Font.className + ' ' + className}>
                {stats.map((item, index) => (
                    <StatsItem key={index} {...item} />
                ))}
            </div>
        </>
    );
}

const StatsItem = ({title, value, icon}: Props): JSX.Element => {
    return (
        <div className={'flex-1 flex flex-col items-center gap-y-2 justify-center p-8'}>
            <div className={'text-primary-600 h-20 w-20 font-light'}>
                {icon}
            </div>
            <div className={'text-4xl font-medium text-primary-600 mt-5'}>
                {value}
            </div>
            <div className={'text-xl font-light text-primary-600'}>
                {title}
            </div>
        </div>
    );
}
