import React from "react";
import {EB_Garamond} from "@next/font/google";

const Font = EB_Garamond({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

type Props = {
    className?: string;
    children: React.ReactNode;
};

const TextBtn = (props: Props) => {
    const {className} = props;
    return (
        <button
            className={
                "outline-none bg-transparent text-primary-600 capitalize tracking-widest text-2xl font-medium " +
                "border-b border-primary-600 pb-1 " +
                className +
                " " +
                Font.className
            }
        >
            {props.children}
        </button>
    );
};

export default TextBtn;
