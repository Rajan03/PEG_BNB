import {Rating, SectionHeader} from "@/components";
import Carousel from "@/components/Caarousel";
import Image, {StaticImageData} from "next/image";

type Props = {
    title: string;
    subtitle: string;
    reviews: {
        name: string;
        location: string;
        image: StaticImageData;
        rating: number;
        review: string;
    }[];
};
const CustomerReviews = (props: Props) => {
    const {title, subtitle, reviews} = props;

    return (
        <div className="mt-[15rem] flex flex-col justify-start items-center container mx-auto">
            {/* Section Heading */}
            <SectionHeader title={title} subtitle={subtitle}/>

            {/* Reviews */}
            <Carousel className={'my-12 py-16 px-8'}>
                {reviews.map((review, index) => (
                    <div key={index} className="min-w-[40rem] min-h-[25rem] relative mx-5 pointer-events-none
                     shadow-xl rounded-lg p-7">
                        <div className="min-h-full flex flex-col justify-center items-center pointer-events-none">
                            <div className="flex-1 flex flex-col justify-center items-center pointer-events-none">
                                <p className={'text-center text-lg text-primary-600 font-light tracking-wide ' +
                                    'leading-6 pointer-events-none'}>{review.review}</p>
                                <Rating rating={review.rating} className={"mt-7 pointer-events-none"}/>
                            </div>

                            <div className="flex flex-row justify-center items-stretch mt-7 self-end pointer-events-none">
                                <Image src={review.image} alt={review.name} width={30} height={60}
                                       className={'rounded-full object-cover pointer-events-none'}/>

                                <div className="flex flex-col justify-center items-start ml-4">
                                    <p className="text-lg font-semibold text-primary-600">{review.name}</p>
                                    <p className="text-sm font-light text-primary-600">{review.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default CustomerReviews;
