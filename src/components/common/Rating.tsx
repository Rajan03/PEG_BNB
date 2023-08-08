import {FaStar, FaStarHalfAlt, FaRegStar} from "react-icons/fa";

const Rating = ({
                    rating,
                    className,
                    showRating = false,
                }: {
    rating: number;
    className?: string;
    showRating?: boolean;
}) => {
    if (rating === 0) {
        return null;
    }

    if (rating > 5) {
        return null;
    }

    return (
        <div className={"flex flex-row items-center gap-2 " + className}>
            {/* 1st Start */}
            {rating >= 1 ? (
                <FaStar className="h-8 w-8 text-yellow-400"/>
            ) : rating >= 0.5 ? (
                <FaStarHalfAlt className="h-8 w-8 text-yellow-400"/>
            ) : (
                <FaRegStar className="h-8 w-8 text-gray-400"/>
            )}

            {/* 2nd Start */}
            {rating >= 2 ? (
                <FaStar className="h-8 w-8 text-yellow-400"/>
            ) : rating >= 1.5 ? (
                <FaStarHalfAlt className="h-8 w-8 text-yellow-400"/>
            ) : (
                <FaRegStar className="h-8 w-8 text-gray-400"/>
            )}

            {/* 3rd Start */}
            {rating >= 3 ? (
                <FaStar className="h-8 w-8 text-yellow-400"/>
            ) : rating >= 2.5 ? (
                <FaStarHalfAlt className="h-8 w-8 text-yellow-400"/>
            ) : (
                <FaRegStar className="h-8 w-8 text-gray-400"/>
            )}

            {/* 4th Start */}
            {rating >= 4 ? (
                <FaStar className="h-8 w-8 text-yellow-400"/>
            ) : rating >= 3.5 ? (
                <FaStarHalfAlt className="h-8 w-8 text-yellow-400"/>
            ) : (
                <FaRegStar className="h-8 w-8 text-gray-400"/>
            )}

            {/* 5th Start */}
            {rating >= 5 ? (
                <FaStar className="h-8 w-8 text-yellow-400"/>
            ) : rating >= 4.5 ? (
                <FaStarHalfAlt className="h-8 w-8 text-yellow-400"/>
            ) : (
                <FaRegStar className="h-8 w-8 text-gray-400"/>
            )}

            {showRating && <p className="text-gray-500">{rating}</p>}
        </div>
    );
};

export default Rating;
