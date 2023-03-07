"use client";

import { FC, useEffect, useState } from "react";
import { useCycle, motion } from "framer-motion";
import { Bars3CenterLeftIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { SidebarPortal } from "./Portals";
import { NavRoutes } from "@/constant/data";
import Link from "next/link";

const animationVariants = {
  open: {
    clipPath: "circle(1000rem at 100% 0)",
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    clipPath: "circle(0 at 100% 0)",
    transition: {
      duration: 0.5,
    },
  },
};

const MenuToggle: FC<{
  toggle: () => void;
  styleClass?: string;
  open: boolean;
}> = (props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Prevents animation on initial render
    setTimeout(() => {
      setIsMounted(true);
    }, 500);

    // Cleanup
    return () => setIsMounted(false);
  }, [props.open]);

  return (
    <button
      className={"outline-none bg-transparent border-0 " + props.styleClass}
      onClick={props.toggle}
    >
      {!props.open && isMounted ? (
        <Bars3CenterLeftIcon className="h-[30px] w-[30px]" />
      ) : (
        <XCircleIcon className="h-[30px] w-[30px]" />
      )}
    </button>
  );
};

// TODO: IMPLEMENT ROUTES
const NavSidebar: FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const onMenuToggle = () => {
    if (!isOpen) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
      document.getElementsByTagName("body")[0].style.maxHeight = "100vh";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "auto";
      document.getElementsByTagName("body")[0].style.maxHeight = "100%";
    }

    toggleOpen();
  };
  return (
    <>
      <motion.div
        className={
          "md:hidden absolute top-0 right-0 bottom-0 w-full bg-primary-50 z-[52]"
        }
        variants={animationVariants}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        exit={isOpen ? "closed" : "open"}
      >
        <div className="flex flex-col justify-center items-center gap-16 h-screen overflow-hidden">
          {NavRoutes.map((route) => (
            <Link
              href={route.path}
              key={route.name}
              className="text-2xl font-bold text-primary-600"
            >
              {route.name}
            </Link>
          ))}
        </div>
      </motion.div>

      <div className="md:hidden fixed top-0 right-0 h-[8rem] flex flex-col justify-center items-center pr-9 z-[52]">
        <MenuToggle
          toggle={() => onMenuToggle()}
          styleClass={"text-primary-600"}
          open={isOpen}
        />
      </div>
    </>
  );
};

const Sidebar: FC = () => {
  return (
    <SidebarPortal>
      <NavSidebar />
    </SidebarPortal>
  );
};

export default Sidebar;
