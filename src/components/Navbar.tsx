"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NavRoutes } from "@/constant/data";
import Logo from "./Logo";
import { PhoneArrowUpRightIcon } from "@heroicons/react/24/solid";
import Sidebar from "./Sidebar";

export default function Navbar(): JSX.Element {
  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="h-[8rem] bg-white shadow-lg w-full p-1 sticky top-0"
      >
        <div className="flex justify-between items-center min-h-full md:container mx-auto">
          <Logo />

          {/* Nav Items Visible only after md */}
          <ul className="hidden md:flex items-center space-x-9 list-none">
            {NavRoutes.map((route) => (
              <motion.li
                whileHover={{ scale: 1.05, opacity: 0.8 }}
                transition={{ duration: 0.3 }}
                key={route.name}
              >
                <Link
                  href={route.path}
                  className={"text-xl text-primary-600 hover:font-medium"}
                >
                  {route.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Call Us Visible only after md */}
          <div className="hidden md:flex items-center space-x-4">
            <PhoneArrowUpRightIcon className="h-[3.175rem] w-[2.7rem] text-primary-500" />

            <div className="flex flex-col justify-start items-start">
              <p className="text-lg font-light text-primary-500">Call Us</p>
              <p className="text-xl font-medium text-primary-600">
                911234567890
              </p>
            </div>
          </div>

          {/* Hamburger Menu */}
          <div className="absolute top-0 right-0 flex md:hidden flex-col justify-start items-end space-x-4 w-screen sm:w-[50rem] h-screen">
            <Sidebar />
          </div>
        </div>
      </motion.nav>
    </>
  );
}
