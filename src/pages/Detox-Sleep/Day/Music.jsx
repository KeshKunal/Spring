import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AudioPlayer from './AudioPlayer';

function Audio() { 

  const sources = [
    "/Meditation/audio1.mp3",
    "/Meditation/audio2.mp3",
    "/Meditation/audio3.mp3"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === sources.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sources.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col md:flex-row bg-[#FBF4EE] pb-20 md:pb-0">
      <div>
        <div className="text-xl font-bold m-4 md:m-14">
          Step away from the hustle and embrace calm with our digital detox meditations and soothing guidance
        </div>
        <div className="text-xl ml-4  mr-4 md:ml-14 md:mr-20 md:block hidden">
          Treat yourself to some much-needed ‘me time’ with our digital detox meditations! Block out the toxic stress with our chill audio and video guides that help you relax and recharge. It’s your chance to swipe away the chaos and find your inner zen. Ready to mute the noise and level up your calm? Let’s vibe out together!
        </div>

        <div className="lg:block hidden flex items-center justify-center ml-20 md:ml-52 scale-100 md:scale-125 mt-20">
          <img
            src="/Meditation/Backward.svg"
            alt="back"
            onClick={handlePrev}
            className="cursor-pointer absolute -left-7"
          />

          <div className="relative w-80">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute w-full h-full"
              >
                <AudioPlayer currentIndex={currentIndex} sources={sources} />
              </motion.div>
            </AnimatePresence>
          </div>

          <img
            src="/Meditation/Forward.svg"
            alt="next"
            onClick={handleNext}
            className="absolute cursor-pointer mx-[340px] -pt-20"
          />
        </div>
      </div>
      <div className="flex justify-center items-center my-10 md:mr-36 md:my-32 relative">
      <div className="relative">
          <img
            src="/Meditation/women.svg"
            alt="women"
           className="relative scale-90 md:scale-[1.7]"
          />
          <img
            src="/Meditation/flower.svg"
            alt="flower"
             className="absolute right-32 -bottom-28 md:right-48 scale-50 md:scale-90"
          />
          <img
            src="/Meditation/sun.svg"
            alt="sun"
            className="absolute -right-10 md:-right-36 -top-14 scale-75 md:scale-90"
          />
        </div>
      </div>
      
    </div>
  );
}

export default Audio;
