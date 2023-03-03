import { HEADER_UNDERLINE } from "@/constant/images";
import { EB_Garamond } from "@next/font/google";
import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
};

const eb = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SectionHeader = (props: Props) => {
  return (
    <div className={"flex flex-col justify-center items-center gap-y-3"}>
      <p className="uppercase text-primary-600 text-lg tracking-wider">
        {props.subtitle}
      </p>
      <h2
        className={
          "font-bold text-primary-600 text-5xl tracking-widest " + eb.className
        }
      >
        {props.title}
      </h2>
      <Image
        src={HEADER_UNDERLINE}
        alt="underline"
        className={"w-full mt-4 object-cover"}
      />
    </div>
  );
};

export default SectionHeader;
