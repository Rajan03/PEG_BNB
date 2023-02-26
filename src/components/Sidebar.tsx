"use client";

import { Bars3CenterLeftIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { FC } from "react";
import { useCycle, motion } from "framer-motion";

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
  return (
    <button
      className={"outline-none bg-transparent border-0 " + props.styleClass}
      onClick={props.toggle}
    >
      {!props.open ? (
        <Bars3CenterLeftIcon className="h-[30px] w-[30px]" />
      ) : (
        <XCircleIcon className="h-[30px] w-[30px]" />
      )}
    </button>
  );
};

const Sidebar: FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      <motion.div
        className={"absolute top-0 right-0 bottom-0 w-full bg-primary-600 z-50"}
        variants={animationVariants}
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <MenuToggle
          toggle={() => toggleOpen()}
          styleClass={"text-white"}
          open={isOpen}
        />
      </motion.div>

      <div className="h-[8rem] flex flex-col justify-center items-center pr-9">
        <MenuToggle
          toggle={() => toggleOpen()}
          styleClass={"text-primary-600"}
          open={isOpen}
        />
      </div>
    </>
  );
};

export default Sidebar;
