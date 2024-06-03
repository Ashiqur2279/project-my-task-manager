import React, { useEffect, useState } from "react";
import HeroImage from "../assets/hero image.jpg";

const HeroSection = () => {
  const [currentParagraph, setCurrentParagraph] = useState(0);

  const paragraphs = [
    "Stop wasting time. Start managing it...",
    "Get things done, faster and smarter",
    "Conquer your to-do list. Effortlessly",
  ];

  //   console.log(currentParagraph);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentParagraph((prev) => (prev + 1) % paragraphs.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [paragraphs.length]);

  return (
    <div className="bg-gray-100 flex py-4 px-8 my-4 gap-2">
      <div className="flex-1">
        <img
          className="h-full w-full object-cover"
          src={HeroImage}
          alt="Hero Image"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="font-semibold text-3xl text-balance">
          {paragraphs[currentParagraph]}
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
