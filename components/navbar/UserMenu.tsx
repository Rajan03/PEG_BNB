import {signOut} from "next-auth/react";
import {BiLogOut} from "react-icons/bi"
import {CgProfile} from "react-icons/cg";
import {GrFavorite} from "react-icons/gr";
import {SiHomeadvisor} from "react-icons/si";
import {useLoginModalAtom, useRegisterModalAtom} from "@/providers/ModalState";
import {Avatar, MenuWrapper} from "@/components";

interface IUserMenu {
    name: string;
    email: string;
    image: string;
}
export default function UserMenu(props: IUserMenu) {
    const setLoginModalState = useLoginModalAtom(s => s.setLoginModalState);
    const setRegisterModalState = useRegisterModalAtom(s => s.setRegisterModalState);

    const menuItems = [
        {
            name: "My Profile",
            icon: <CgProfile className="w-5 h-5"/>,
            onClick: () => setLoginModalState(true)
        },
        {
            name: "My Favorites",
            icon: <GrFavorite className="w-5 h-5 "/>,
            onClick: () => setRegisterModalState(true)
        },
        {
            name: "My Reservations",
            icon: <SiHomeadvisor className="w-5 h-5 "/>,
            onClick: () => setRegisterModalState(true)
        },
        {
            name: "Logout",
            icon: <BiLogOut className="w-5 h-5"/>,
            onClick: () => signOut({redirect: false, callbackUrl: '/'})
        }
    ]

    const trigger = (
        <button className="flex gap-x-2 items-center">
            <Avatar url={props.image} className="hidden sm:inline-block text-base"/>
            <span className="hidden sm:inline-block text-base text-primary-600">{props.name}</span>
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
