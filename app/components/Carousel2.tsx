"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Carousel2() {
  const images = [
    "/Produk1.png",
    "/Produk2.png",
    "/Produk3.png",
    "/Produk4.png",
    "/Produk5.png",
  ];

  return (
    <div className="w-full">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={1000}
        showDots
        arrows
        keyBoardControl
        swipeable
        draggable
      >
        {images.map((src, idx) => (
          <div key={idx} className="h-96 flex items-center justify-center">
            <img
              src={src}
              alt={`Produk ${idx + 1}`}
              className="max-h-full object-contain"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
