import { Rating, ReviewCard, SectionHeader } from "@/components";
import Carousel from "@/components/Carousel";
import { Review } from "@/types/app";
import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
  reviews: Review[];
};
const CustomerReviews = (props: Props) => {
  const { title, subtitle, reviews } = props;

  return (
    <div className="mt-[15rem] flex flex-col justify-start items-center container mx-auto">
      {/* Section Heading */}
      <SectionHeader title={title} subtitle={subtitle} />

      {/* Reviews */}
      <Carousel className={"my-12 py-16 px-8"}>
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Carousel>
    </div>
  );
};

export default CustomerReviews;
