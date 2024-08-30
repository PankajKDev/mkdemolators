import { useState, useEffect } from 'react';
import { images } from '../constants/data';
const Carousel = () => {


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-screen-lg mx-auto mt-10">
      <div className="overflow-hidden rounded-lg">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="w-full h-96 object-cover md:h-[32rem]" />
      </div>
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow md:left-8 md:p-4">
        &#10094; {/* Left Arrow */}
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow md:right-8 md:p-4">
        &#10095; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default Carousel;
