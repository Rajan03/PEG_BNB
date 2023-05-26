import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Images, Navigation } from "@/utils/appData";
import GetStartedMenu from "./GetStartedMenu";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full shadow-lg bg-neutral-50">
      <div className="flex items-center justify-between container px-4 py-3 mx-auto">
        {/* LOGO */}
        <Link href={Navigation.HOME}>
          <Image src={Images.logo} alt="logo" className="w-18 mr-2" />
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center justify-between">
          {Object.keys(Navigation).map((key: string) => {
            // @ts-ignore
            const url: string = Navigation[key];
            return (
              <Link
                href={url}
                key={key}
                className="px-4 py-2 text-sm font-medium text-primary-500 transition duration-200 ease-in-out rounded-md hover:text-primary-800"
              >
                {key}
              </Link>
            );
          })}
        </div>

        {/* NAVIGATION */}
        <GetStartedMenu />
      </div>
    </nav>
  );
};

export default Navbar;
