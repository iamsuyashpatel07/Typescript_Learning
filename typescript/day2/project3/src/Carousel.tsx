import React, { useEffect, useState } from "react";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [play, setPlay] = useState(true);

  const images = [
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    setTimeout(() => {
      if (play) {
        currentIndex ? setCurrentIndex(0) : setCurrentIndex(1);
      }
    }, 1000);
  });

  return (
    <div className="">
      <img
        src={images[currentIndex]}
        alt={`image ${currentIndex + 1}`}
        className="h-60 w-full object-fill"
      />
      <div className="flex flex-row justify-center items-center gap-2 mt-4 ">
        <div
          onClick={() => {
            setPlay(!play);
          }}
        >
          {play ? <AiOutlinePlayCircle /> : <AiOutlinePauseCircle />}
        </div>
        <button className="text-3xl -mt-2" onClick={handlePrev}>
          ‹
        </button>
        <button
          className={`w-2 h-2 border border-black rounded-full ${
            currentIndex === 0 ? "bg-black" : "bg-white"
          }`}
          onClick={() => setCurrentIndex(0)}
        ></button>
        <button
          className={`w-2 h-2 border border-black rounded-full ${
            currentIndex === 1 ? "bg-black" : "bg-white"
          }`}
          onClick={() => setCurrentIndex(1)}
        ></button>
        <button className="text-3xl -mt-2" onClick={handleNext}>
          ›
        </button>
      </div>
    </div>
  );
};

export default Carousel;
