import {MdOutlineNotStarted} from "react-icons/md"
import {BiLogIn, BiUserCheck} from "react-icons/bi"

import {MenuWrapper} from "@/components";
import {useLoginModalAtom, useRegisterModalAtom} from "@/providers/ModalState";

export default function GetStartedMenu() {
    const setLoginModalState = useLoginModalAtom(s => s.setLoginModalState);
    const setRegisterModalState = useRegisterModalAtom(s => s.setRegisterModalState);

    const menuItems = [
        {
            name: "Sign in",
            icon: <BiLogIn className="w-6 h-6 ml-[-3px]"/>,
            onClick: () => setLoginModalState(true)
        },
        {
            name: "Sign up",
            icon: <BiUserCheck className="w-6 h-6"/>,
            onClick: () => setRegisterModalState(true)
        }
    ]

    const trigger = (
        <button className="solid-primary-btn-with-icon flex gap-x-2 items-center">
            <MdOutlineNotStarted className="w-6 h-6 "/>
            <span className="hidden sm:inline-block text-base">Get Started</span>
        </button>)

    return (
        <MenuWrapper trigger={trigger}>
            {menuItems.map((item, index) => (
                <button key={item.name} onClick={item.onClick}
                        className={"menu-item flex justify-start items-center gap-x-4"}>
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                </button>))}
        </MenuWrapper>
    );
}
