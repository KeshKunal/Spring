import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Day from '../pages/Detox-Sleep/Day/Day';
import Night from '../pages/Detox-Sleep/Night/Night';

function Detox() {
  const [isDaytime, setIsDaytime] = useState(true);

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const indiaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
      const hours = indiaTime.getHours();
      setIsDaytime(hours >= 6 && hours < 18);
    };

    checkTime();
    const intervalId = setInterval(checkTime, 60000); 

    return () => clearInterval(intervalId);
  }, []);

  const slides = isDaytime ? [<Day />, <Night />] : [<Night />, <Day />];

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Detox;