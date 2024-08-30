
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reviews, settings } from '../constants/data';

const ReviewCarousel = () => {
    return (
        <div className="bg-gray-900 py-12">
            <div className="container md:w-1/2 mx-auto rounded-lg">
                <h2 className="text-3xl font-bold text-white mb-8">Hear from Our Clients</h2>
                <Slider {...settings}>
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-gray-800 text-white rounded-lg shadow-lg p-8 mx-2 aspect-w-16 aspect-h-9">
                            <div className="h-full flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold mb-4">Review by {review.reviewerName}</h3>
                                    <div className="flex items-center mb-4">
                                        <div className="bg-yellow-500 text-gray-900 font-bold px-2 py-1 rounded mr-2">
                                            {review.rating} / 5
                                        </div>
                                        <span className="text-gray-400">Rating</span>
                                    </div>
                                </div>
                                <p className="text-lg">{review.reviewText}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ReviewCarousel;
