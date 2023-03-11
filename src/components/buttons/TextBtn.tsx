import React from "react";
import { EB_Garamond } from "@next/font/google";
import Link from "next/link";

const Font = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

type Props = {
  className?: string;
  isLink?: boolean;
  linkTo?: string;
  children: React.ReactNode;
};

const TextBtn = (props: Props) => {
  const { className, isLink, linkTo } = props;

  if (isLink) {
    return (
      <Link
        href={linkTo || "/"}
        className={
          "outline-none bg-transparent text-primary-600 capitalize tracking-widest text-2xl font-medium " +
          "border-b border-primary-600 pb-1 " +
          className +
          " " +
          Font.className
        }
      >
        {props.children}
      </Link>
    );
  }

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
