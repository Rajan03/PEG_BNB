import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

interface MenuWrapperProps {
  children?: React.ReactNode;
  trigger: React.ReactNode;
}

const MenuWrapper: React.FC<MenuWrapperProps> = ({ children, trigger }) => {
  return (
    <Menu as={"div"} className={"relative"}>
      <Menu.Button as={Fragment}>{trigger}</Menu.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items
          className="absolute right-0 w-56 origin-top-right divide-y divide-gray-100
                rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-2"
        >
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MenuWrapper;
