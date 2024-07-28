import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface IHero {
  title: string;
  subtitle: string;
  image: string;
  cta?: string;
  ctaLink?: string;
  className?: string;
}

export function Hero(props: IHero) {
  const clsname = twMerge(
    "relative flex flex-col justify-center items-center gap-y-4 min-h-[30rem] bg-gray-100 p-4",
    props.className
  );

  return (
    <>
      <div className={clsname}>
        <Image
          src={props.image}
          width={500}
          height={500}
          alt={""}
          className="object-cover h-full w-full absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center gap-y-4">
          <h1 className="text-4xl font-semibold text-white">{props.title}</h1>
          <h2 className="text-lg font-medium text-white">{props.subtitle}</h2>
          {props.cta && props.ctaLink && (
            <Link
              href={props.ctaLink}
              className="text-lg font-medium text-primary-600 hover:underline"
            >
              {props.cta}
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
