import React, { useState} from 'react';

interface ImageCarouselProps {
    images: string[] | string; // Either an array of images or a single image
}

//if I want to show multiple images
// const ImageCarousel: React.FC<{ images: string[] }> = ({ images }) => {

//just for a single image
const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const [current, setCurrent] = useState(0);


    const nextSlide = () => {
        if (Array.isArray(images)) {
            setCurrent(current === images.length - 1 ? 0 : current + 1);
        }
    };

    const prevSlide = () => {
        if (Array.isArray(images)) {
            setCurrent(current === 0 ? images.length - 1 : current - 1);
        }
    };

    // Check if images is an array or a string
    const imageList = Array.isArray(images) ? images : [images];

    if (imageList.length === 0) {
        return null; // No images provided
    }

    return (
        <div className="relative flex items-center justify-center  mb-6 " >
            {imageList.map((image, index) => (
                <div
            key={index}
                    className={index === current ? 'opacity-100' : 'opacity-0'}
                >
                    {index === current && (
                        <img src={image} alt="Event Slide" className="w-full object-cover rounded-lg" style={{ width: '1100px', height: '500px' }} />
                    )}
                </div>
            ))}
            {Array.isArray(images) && (
                <>
                    <button onClick={prevSlide} className="absolute left-0 bg-gray-800 text-white p-2 rounded-full">
                        &#10094;
                    </button>
                    <button onClick={nextSlide} className="absolute right-0 bg-gray-800 text-white p-2 rounded-full">
                        &#10095;
                    </button>
                </>
            )}
        </div>
    );
};


export default ImageCarousel;
