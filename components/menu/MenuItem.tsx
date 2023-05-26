import { Menu } from "@headlessui/react";
import { MenuWrapperProps } from "@/types/appTypes";

type MenuItemProps = {
  active: boolean;
};
const MenuItem: React.FC<MenuWrapperProps> = (props) => {
  const { name, icon, onClick } = props;

  return (
    <Menu.Item>
      {({ active }: MenuItemProps) => (
        <button
          onClick={onClick}
          className={`${active ? "bg-primary-500/10 text-primary-500" : "text-neutral-900"} group flex w-full justify-start items-center gap-x-2 rounded-md px-2 py-2 text-sm`}
        >
          {icon}
          <span>{name}</span>
        </button>
      )}
    </Menu.Item>
  );
};

export default MenuItem;
