"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  text: string;
}
const Projectcard = ({ image, title, text }: Props) => {
  const [isFlipped, setisFlipped] = useState(false);
  const [isAnimating, setisAnimating] = useState(false);

  const handleflip = () => {
    if (!isAnimating) {
      setisFlipped(!isFlipped);
      setisAnimating(true);
    }
  };
  return (
    <div
      onClick={handleflip}
      className="w-[450px] h-[280px] rounded-md cursor-pointer"
    >
      <motion.div
        className="flip-card-inner w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setisAnimating(false)}
      >
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-full group relative flip-card-front rounded-lg p-4 text-white bg-cover bg-center"
        />
        <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center">
          Learn more &gt;
        </div>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]" />
          <div className="flex flex-col gap-20 py-3 z-[30]">
            <h1 className="text-whote text-2xl font-semibold">{title}</h1>
            <p className="text-gray-200 text-[20px]">{text}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projectcard;
