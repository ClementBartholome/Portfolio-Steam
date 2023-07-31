import React from "react";
import Slider from "./Slider";

export default function Thumbnails({
  selectedThumbnailIndex,
  handleThumbnailClick,
  images,
  previousImage,
  nextImage,
}) {
  return (
    <>
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            className={`thumbnail ${
              selectedThumbnailIndex === index ? "selected" : ""
            }`}
            src={image}
            key={index}
            alt="Project thumbnail"
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
      <Slider previousImage={previousImage} nextImage={nextImage} />
    </>
  );
}
