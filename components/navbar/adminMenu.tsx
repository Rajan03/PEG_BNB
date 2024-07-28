import { signOut } from "next-auth/react";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { GrFavorite } from "react-icons/gr";
import { TbHomeDot, TbHomePlus } from "react-icons/tb";
import { SiHomeadvisor } from "react-icons/si";
import { Avatar, MenuWrapper } from "@/components";
import Link from "next/link";

interface IAdminMenu {
  name: string;
  email: string;
  image: string;
}
export default function AdminMenu(props: IAdminMenu) {
  const menuItems = [
    {
      name: "My Profile",
      icon: <CgProfile className="w-5 h-5" />,
      link: "/admin/profile",
    },
    {
      name: "Property Requests",
      icon: <TbHomeDot className="w-5 h-5 " />,
      link: "/admin/property-requests",
    },
    {
      name: "Add New Property",
      icon: <TbHomePlus className="w-5 h-5 " />,
      link: "/admin/add-property",
    },
    {
      name: "Logout",
      icon: <BiLogOut className="w-5 h-5" />,
      onClick: () => signOut({ redirect: false, callbackUrl: "/" }),
    },
  ];

  const trigger = (
    <button className="flex gap-x-2 items-center">
      <Avatar url={props.image} className="hidden sm:inline-block text-base" />
      <span className="hidden sm:inline-block text-base text-primary-600">
        {props.name}
      </span>
    </button>
  );

  return (
    <MenuWrapper trigger={trigger}>
      {menuItems.map((item, i) =>
        item.onClick ? (
          <button
            onClick={item.onClick}
            key={item.name + i}
            className={"menu-item flex justify-start items-center gap-x-4"}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </button>
        ) : (
          <Link
            href={item.link}
            key={item.name + i}
            className={"menu-item flex justify-start items-center gap-x-4"}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        )
      )}
    </MenuWrapper>
  );
}
