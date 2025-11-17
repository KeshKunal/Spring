import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const HelpCard = () => {
  const cards = [
    { img: "/Help/me.svg", text: "Me" },
    { img: "/Help/friend.svg", text: "Friend" },
    { img: "/Help/family.svg", text: "Family Member" },
  ];
 
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-64 mx-auto ">
      <div className="relative h-96 flex items-center justify-center">
        <AnimatePresence initial={false}>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`absolute inset-0 w-full h-full`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: index === currentIndex ? 1 : 0,
                scale: index === currentIndex ? 1 : 0.8,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              
            >
              <Link to={card.link} className="relative w-full h-full block">
                <img
                  src={card.img}
                  className="w-full object-cover rounded-box mt-[120px] scale-125"
                  alt="Carousel item"
                />
                <div className="w-full absolute bottom-0 bg-[#E4FFFD] p-2 rounded-b text-center opacity-70">
                  <span className="text-black text-xl font-extrabold">
                    {card.text}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
        <img src="/Help/Barrow.svg" alt="a" onClick={handlePrev} className="scale-[.6] cursor-pointer mr-40 mt-44" />
        <img src="/Help/Farrow.svg" alt="a" onClick={handleNext} className="scale-[.6] cursor-pointer ml-40 mt-44"/>
      </div>
    </div>
  );
};

export default HelpCard;
