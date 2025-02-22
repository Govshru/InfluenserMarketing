"use client";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";


const images = [
  "/image/FashionInfluencer.jpg",
  "/image/FitnessInfluencer.jpg",
  "/image/foodInfluencer.jpg",
  "/image/SportInfluencer.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height:"50vh",
        overflow: "hidden",
        
      }}
    >
      {/* Image Display */}
      <Box
        component="img"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        sx={{ width: "100vw", height: "50vh", objectFit:"cover",objectPosition:"center",transition: "0.5s ease-in-out" }}
      />

      
    </Box>
  );
};

export default ImageSlider;
