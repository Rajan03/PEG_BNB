import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { Images, Navigation } from "@/utils/appData";
import GetStartedMenu from "./GetStartedMenu";
import UserMenu from "./UserMenu";
import AdminMenu from "./adminMenu";

const Navbar = () => {
  const session = useSession();

  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full shadow-lg bg-neutral-50 h-20
    flex items-center justify-center"
    >
      <div className="flex items-center justify-between container px-4 py-3 mx-auto">
        {/* LOGO */}
        <Link href={Navigation.home}>
          <Image src={Images.logo} alt="logo" className="w-18 mr-2" />
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center justify-between gap-x-8">
          {Object.keys(Navigation).map((key: string) => {
            // @ts-ignore
            const url: string = Navigation[key];
            return (
              <Link
                href={url}
                key={key}
                className="px-0.5 pt-1 pb-0.5 capitalize text-base font-medium text-primary-500
                                  border-b border-transparent transition-all duration-200 ease-in-out
                                  hover:text-primary-800 hover:border-primary-800"
              >
                {key}
              </Link>
            );
          })}
        </div>

        {/* Get Started Menu */}
        {session.data?.user ? (
          session.data.user.isAdmin ? (
            <AdminMenu
              name={session.data.user.name!}
              email={session.data.user.email!}
              image={session.data.user.image!}
            />
          ) : (
            <UserMenu
              name={session.data.user.name!}
              email={session.data.user.email!}
              image={session.data.user.image!}
            />
          )
        ) : (
          <GetStartedMenu />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
