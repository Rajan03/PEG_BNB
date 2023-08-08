"use client";

import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { SimpleButton } from "@/components";
import { DOTS, PLANE } from "@/constant/images";
import { linearAnimation } from "@/constant/constant";
import { NavLinks } from "@/constant/data";

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
        "container m-auto flex items-center " +
        "flex-col-reverse justify-start gap-y-28 px-7 py-48 " +
        "md:h-screen md:flex-row md:gap-x-14 md:gap-y-0 md:justify-between md:py-7"
      }
    >
      {/* IMAGE 01 */}
      <motion.div
        className="hidden lg:block max-w-[24rem] max-h-[39rem] w-[24rem] h-[39rem] rounded-full
      relative before:absolute before:inset-0 before:border-2 before:border-primary-600
      before:border-dashed before:rounded-full before:-right-7 before:-bottom-3 before:z-[-1]"
      >
        <Image
          src={imageLeft.src}
          alt="Hero"
          width={240}
          height={390}
          priority
          className="h-full w-full object-cover rounded-full"
        />
        <Image
          src={DOTS}
          alt="dots"
          width={80}
          height={80}
          priority
          className="h-[7rem] w-[7rem] object-contain absolute top-[-4rem] right-[-5rem] animate-bounce"
        />
      </motion.div>

      {/* CONTENT */}
      <div className="md:flex-1 flex flex-col items-center gap-y-12">
        <p className="text-4xl text-primary-600 font-extralight text-center">
          {title}
        </p>
        <p className="text-6xl text-primary-600 font-medium text-center">
          {subtitle}
        </p>
        <SimpleButton
          isLink
          linkTo={NavLinks.bookStay}
          action={button}
          className={
            "w-[16rem] h-[5rem] flex justify-center items-center mt-[3rem]"
          }
        />
      </div>

      {/* IMAGES 02 */}
      <div
        className="block max-w-[25rem] max-h-[39rem] w-[25rem] h-[39rem] rounded-full
      relative before:absolute before:inset-0 before:border-2 before:border-primary-600
      before:border-dashed before:rounded-full before:-right-7 before:-bottom-3 before:z-[-1]"
      >
        <Image
          src={imageRight.imgOne.src}
          alt="Hero"
          width={240}
          height={390}
          priority
          className="h-full w-full object-cover rounded-full"
        />

        <Image
          src={imageRight.imgTwo.src}
          alt="Hero"
          width={200}
          height={160}
          priority
          className="w-[25rem] h-[25rem] object-cover rounded-full border-[1.4rem] border-white absolute bottom-[-4rem] left-[-40%]"
        />
      </div>

      {/* Plane Animation */}
      <motion.div
        variants={linearAnimation}
        initial="hidden"
        animate="visible"
        className="hidden md:block absolute top-[12rem]"
      >
        <Image src={PLANE} alt="dots" width={80} height={80} priority />
      </motion.div>
    </div>
  );
};

export default Hero;
