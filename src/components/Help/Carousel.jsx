import React from 'react'
import { useState , useEffect } from 'react';

const images = [
  '/news/ms.jpg',
  '/news/ms.jpg',
  '/news/ms.jpg',
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className=" flex justify-end relative w-1/4 overflow-hidden ">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={image} alt={`Slide ${index}`} className="w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel