import { Review } from "@/types/app";
import Image from "next/image";
import Rating from "../common/Rating";

interface Props extends Review {
  className?: string;
}

export default function ReviewCard(props: Props): JSX.Element {
  return (
    <div
      className={
        "w-[40rem] min-w-[40rem] min-h-[25rem] relative mx-5 pointer-events-none " +
        "shadow-xl rounded-lg p-7 " +
        props.className
      }
    >
      <div className="min-h-full flex flex-col justify-center items-center pointer-events-none">
        <div className="flex-1 flex flex-col justify-center items-center pointer-events-none">
          <p
            className={
              "text-center text-lg text-primary-600 font-light tracking-wide " +
              "leading-6 pointer-events-none"
            }
          >
            {props.comment}
          </p>
          <Rating
            rating={props.rating}
            className={"mt-7 pointer-events-none"}
          />
        </div>

        <div className="flex flex-row justify-center items-stretch mt-7 self-end pointer-events-none">
          <Image
            src={props.avatar}
            alt={props.name}
            width={30}
            height={60}
            className={"rounded-full object-cover pointer-events-none"}
          />

          <div className="flex flex-col justify-center items-start ml-4">
            <p className="text-lg font-semibold text-primary-600">
              {props.name}
            </p>
            <p className="text-sm font-light text-primary-600">
              {props.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
