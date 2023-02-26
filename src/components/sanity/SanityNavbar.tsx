import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const SanityNavbar = (props: any) => {
  return (
    <div className="bg-[#101728]">
      <Link href="/" className="text-sky-300 flex items-center p-[10px]">
        <ArrowUturnLeftIcon className="h-6 w-6 text-sky-300 mr-2" />
        Go to Website
      </Link>

      <div className="flex-1">{props.renderDefault(props)}</div>
    </div>
  );
};

export default SanityNavbar;
