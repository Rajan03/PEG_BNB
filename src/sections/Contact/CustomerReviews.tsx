'use client';

import Image, {StaticImageData} from "next/image";
import {HOME03IMG3} from "@/constant/images";
import {Rating, SimpleButton} from "@/components";
import Carousel from "@/components/Carousel";

type Review = {
    name: string,
    location: string,
    review: string,
    image: StaticImageData,
    reviewed: string,
    rating: number
}

type Props = {
    title: string,
    action: string,
    reviews: Review[],
    className?: string;
}

export function CustomerReviews(props: Props): JSX.Element {
    const {title, action, reviews, className} = props;

    return (
        <>
            <div className={'w-screen h-[60rem] flex flex-row justify-start items-stretch bg-neutral-900 ' + className}>
                {/* Reviews */}
                <div className={'flex-[60%] max-w-[60%] flex flex-col justify-center items-center relative'}>
                    <Carousel className={'px-32'}>
                        {reviews.map((review, index) => (
                            <div key={index} className={'max-w-[50rem] w-[50rem] min-w-[50rem] flex flex-col' +
                                ' justify-center items-start gap-y-4 px-20 mx-20'}>
                                <span className={'absolute top-0 text-[12rem] text-white text-opacity-50'}>&quot;</span>
                                <ReviewComponent {...review}/>
                            </div>
                        ))}
                    </Carousel>
                </div>

                {/* Action */}
                <div className={'flex-[40%] max-w-[40%] relative flex flex-col justify-center items-center'}>
                    <Image src={HOME03IMG3} alt={'img'} fill className={'absolute inset-0 w-full h-full object-cover'}/>
                    <div className={'absolute inset-0 bg-neutral-900 bg-opacity-50'}/>

                    <JoinUsCard title={title} action={action}/>
                </div>
            </div>
        </>
    )
}

const ReviewComponent = (review: Review) => {
    return (
        <>
            <Rating rating={review.rating} className={'text-primary-600'}/>
            <p className={'text-neutral-400 text-xl text-start tracking-widest leading-[3rem] ' +
                'border-b border-neutral-700 pb-6'}>
                {review.review}
            </p>
            <div className="flex flex-row justify-center items-stretch mt-7 pointer-events-none">
                <Image src={review.image} alt={review.name} width={25} height={50}
                       className={'rounded-full object-cover pointer-events-none'}/>

                <div className="flex flex-col justify-center items-start ml-4">
                    <p className="text-lg font-semibold text-neutral-300">{review.name}</p>
                    <p className="text-sm font-light text-neutral-300">{review.location}</p>
                </div>
            </div>
        </>
    )
}

const JoinUsCard = ({title, action}: {
    title: string,
    action: string
}) => {
    return (
        <>
            <div className={'absolute flex flex-col justify-center items-center w-1/2 h-1/2 ' +
                'bg-white bg-opacity-60 p-5'}>
                <h2 className={'text-[2.6rem] font-semibold text-center text-primary-600 leading-[3rem]'}>{title}</h2>
                <SimpleButton clickHandler={() => console.log('clicked')} action={action} className={'mt-20' +
                    ' px-12 py-4 text-xl'}/>
            </div>
        </>
    )
}
