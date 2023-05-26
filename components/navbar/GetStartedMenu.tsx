import { useSetRecoilState } from "recoil";
import { Menu } from "@headlessui/react";
import { MdOutlineNotStarted } from "react-icons/md"
import { BiLogIn, BiUserCheck } from "react-icons/bi"

import { MenuWrapper } from "@/components";
import { loginModalAtom } from "@/state/ModalState";

export default function GetStartedMenu() {
  const setLoginModalState = useSetRecoilState(loginModalAtom);

  const menuItems = [
    {
      name: "Sign in",
      icon: <BiLogIn className="w-6 h-6 mr-[-3px]" />,
      onClick: () => setLoginModalState(true)
    },
    {
      name: "Sign up",
      icon: <BiUserCheck className="w-6 h-6" />,
      onClick: () => { }
    }
  ]


  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex gap-x-2 align-center text-white bg-primary-600 py-2 px-4 rounded hover:bg-primary-700">
        <MdOutlineNotStarted className="w-6 h-6 " />
        <span className="hidden sm:inline-block text-base">Get Started</span>
      </Menu.Button>

      <MenuWrapper list={menuItems} />
    </Menu>
  );
}
