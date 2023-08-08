"use client";

import Link from "next/link";

type Props = {
    isLink?: boolean;
    linkTo?: string;
    action?: string;
    clickHandler?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    children?: React.ReactNode;
};

const SimpleButton = (props: Props) => {
    if (props.isLink) {
        return (
            <Link
                href={props.linkTo || "/"}
                className={`bg-primary-600 border-none outline-none rounded-sm px-5 py-3 
      text-white text-2xl font-light tracking-wider ${props.className}`}
            >
                {props.children || props.action}
            </Link>
        );
    }

    return (
        <button
            onClick={props.clickHandler}
            disabled={props.disabled}
            type={props.type || "button"}
            className={`bg-primary-600 border-none outline-none rounded-sm px-5 py-3 
      text-white text-2xl font-light tracking-wider ${props.className}`}
        >
            {props.children || props.action}
        </button>
    );
};

export default SimpleButton;
