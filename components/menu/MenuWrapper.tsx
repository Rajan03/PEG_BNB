import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import { MenuWrapperProps } from "@/types/appTypes"
import MenuItem from "./MenuItem";

const MenuWrapper: React.FC<{ list?: MenuWrapperProps[], children?: React.ReactNode }> = ({ list, children }) => {

  return <>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="p-1">
          {list && list.length
            ? list.map(p => <MenuItem key={p.name} name={p.name} icon={p.icon} onClick={() => p.onClick()} />)
            : children}
        </div>
      </Menu.Items>
    </Transition>
  </>
};

export default MenuWrapper;
