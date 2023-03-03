"use client";
"use client";

import { SimpleButton } from "@/components";
import Image, { StaticImageData } from "next/image";

type Props = {
  title: string;
  description: string;
  image: StaticImageData;
  button: string;
};

const AdForStay = (props: Props) => {
  const { title, description, image, button } = props;

  return (
    <div className="w-screen h-[60rem] mt-[15rem] relative flex flex-col justify-center items-center">
      <Image
        className="absolute w-full h-full object-cover"
        priority
        src={image}
        alt={title}
      />

      <div className="absolute w-full h-full bg-primary-700 bg-opacity-50" />

      <div className="absolute w-[90%] md:w-1/2 h-full flex flex-col justify-center items-center gap-y-8 mx-auto">
        <h1 className="text-5xl text-center font-semibold text-white leading-[3.5rem] tracking-wider">
          {title}
        </h1>
        <p className="text-xl text-center leading-8 text-white mt-5">
          {description}
        </p>

        <SimpleButton
          action={button}
          clickHandler={() => console.log(" Hey")}
          className="mt-16 px-16 py-7"
        />
      </div>
    </div>
  );
};

export default AdForStay;
