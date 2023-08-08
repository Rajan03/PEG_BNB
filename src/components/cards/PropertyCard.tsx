import Image, { StaticImageData } from "next/image";
import { HiHeart } from "react-icons/hi";
import Rating from "../common/Rating";
import { EB_Garamond } from "@next/font/google";
import Link from "next/link";
import { NavLinks } from "@/constant/data";

type Props = {
  id: number;
  title: string;
  slug: string;
  location: string;
  image: StaticImageData;
  rating: number;
  price: number | string;

  className?: string;
};

const Font = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const PropertyCard = (props: Props) => {
  const { title, location, image, rating, price, className } = props;
  return (
    <Link
      href={NavLinks.bookStay + `/${props.slug}`}
      className={
        "min-w-[32rem] max-w-[32rem] shadow-xl rounded-xl " + className
      }
    >
      {/* Image */}
      <div className="h-[20rem] w-full rounded-t-xl overflow-hidden relative">
        <Image
          src={image}
          alt={title}
          fill
          className="absolute inset-0 object-cover"
        />

        <div className="absolute top-2 left-2 w-12 h-12 flex justify-center items-center bg-white rounded-full">
          <HiHeart className="h-8 w-8 text-red-600" />
        </div>
      </div>

      {/* Content */}
      <div
        className={
          "px-5 pb-9 mt-9 flex flex-col justify-between items-center " +
          Font.className
        }
      >
        <Rating rating={rating} showRating />

        <h3 className="text-2xl font-semibold mt-7 text-primary-600 truncate">
          {title}
        </h3>
        <p className="text-gray-600 text-xl mt-2 truncate">{location}</p>

        <div className="flex flex-row justify-between items-baseline gap-x-1">
          <p className="text-3xl font-semibold mt-7 text-primary-600">
            {price}
          </p>
          <span className="text-lg text-primary-600 font-light">/ night</span>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
