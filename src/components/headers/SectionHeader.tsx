import { HEADER_UNDERLINE } from "@/constant/images";
import Image from "next/image";
import { EB_Garamond } from "@next/font/google";

const Font = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

type Props = {
  title: string;
  subtitle: string;

  className?: string;
};

const SectionHeader = (props: Props) => {
  return (
    <div
      className={
        "flex flex-col justify-center items-center gap-y-3 " + props.className
      }
    >
      <p className="uppercase text-primary-600 text-lg tracking-wider text-center">
        {props.subtitle}
      </p>
      <h2
        className={
          "font-bold text-primary-600 text-5xl text-center tracking-widest " +
          Font.className
        }
      >
        {props.title}
      </h2>
      <Image
        src={HEADER_UNDERLINE}
        alt="underline"
        className={"w-full mt-4 object-cover max-w-[45rem]"}
      />
    </div>
  );
};

export default SectionHeader;
