"use client";

import { FC, useEffect, useState } from "react";
import { useCycle, motion } from "framer-motion";
import { Bars3CenterLeftIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { SidebarPortal } from "./SidebarPortal";

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
      ></motion.div>

      <div className="md:hidden absolute top-0 right-0 h-[8rem] flex flex-col justify-center items-center pr-9 z-[52]">
        <MenuToggle
          toggle={() => toggleOpen()}
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
