"use client";

import { SimpleButton } from "@/components";
import Image, { StaticImageData } from "next/image";

type Props = {
  title: string;
  subtitle: string;
  button: string;

  imageLeft: {
    src: StaticImageData;
  };

  imageRight: {
    imgOne: {
      src: StaticImageData;
    };
    imgTwo: {
      src: StaticImageData;
    };
  };
};

const Hero: React.FC<Props> = (props: Props) => {
  const { title, subtitle, button, imageLeft, imageRight } = props;

  return (
    <div
      className={
        "min-h-[calc(100vh_-_8rem)] max-h-screen container mx-auto flex flex-row gap-x-14 items-center justify-between"
      }
    >
      {/* IMAGE 01 */}
      <div
        className="hidden md:block max-w-[24rem] max-h-[39rem] w-[24rem] h-[39rem] rounded-full 
      relative before:absolute before:inset-0 before:border-2 before:border-primary-600 
      before:border-dashed before:rounded-full before:-right-7 before:-bottom-3 before:z-[-1]"
      >
        <Image
          src={imageLeft.src}
          alt="Hero"
          width={240}
          height={390}
          className="h-full w-full object-cover rounded-full"
        />
      </div>

      {/* CONTENT */}
      <div className="flex-1 flex flex-col items-center gap-y-12">
        <p className="text-4xl text-primary-600 font-extralight text-center">
          {title}
        </p>
        <p className="text-6xl text-primary-600 font-medium text-center">
          {subtitle}
        </p>
        <SimpleButton
          action={button}
          clickHandler={() => console.log("clicked")}
          className={"w-[16rem] h-[5rem] mt-[3rem]"}
        />
      </div>

      {/* IMAGES 02 */}
      <div
        className="hidden md:block max-w-[25rem] max-h-[39rem] w-[25rem] h-[39rem] rounded-full 
      relative before:absolute before:inset-0 before:border-2 before:border-primary-600 
      before:border-dashed before:rounded-full before:-right-7 before:-bottom-3 before:z-[-1]"
      >
        <Image
          src={imageRight.imgOne.src}
          alt="Hero"
          width={240}
          height={390}
          className="h-full w-full object-cover rounded-full"
        />

        <Image
          src={imageRight.imgTwo.src}
          alt="Hero"
          width={200}
          height={160}
          className="w-[25rem] h-[25rem] object-cover rounded-full border-[1.4rem] border-white absolute bottom-[-4rem] left-[-40%]"
        />
      </div>
    </div>
  );
};

export default Hero;
