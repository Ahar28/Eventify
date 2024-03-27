import React, { useState} from 'react';

const ImageCarousel: React.FC<{ images: string[] }> = ({ images }) => {
    const [current, setCurrent] = useState(0);


    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

    if (!Array.isArray(images) || images.length <= 0) {
        return null; //remaining to set some default image
    }

    return (
        <div className="relative flex items-center justify-center">
            {images.map((image, index) => (
                <div
                    className={index === current ? 'opacity-100' : 'opacity-0'}
                    key={index}
                >
                    {index === current && (
                        <img src={image} alt="Event Slide" className="w-full object-cover rounded-lg" />
                    )}
                </div>
            ))}
            <button onClick={prevSlide} className="absolute left-0 bg-gray-800 text-white p-2 rounded-full">
                &#10094;
            </button>
            <button onClick={nextSlide} className="absolute right-0 bg-gray-800 text-white p-2 rounded-full">
                &#10095;
            </button>
        </div>
    );
};

export default ImageCarousel;
