/* eslint-disable react/prop-types */

import React from "react";

export default function Slider({ previousImage, nextImage }) {
  return (
    <div className="slider_ctn">
      <div
        id="highlight_slider_left"
        className="slider_left"
        onClick={previousImage}>
        <span className="arrow-left"></span>
      </div>
      <div className="slider" id="highlight_slider">
        <div className="slider_bg"></div>
        <div className="handle"></div>
      </div>
      <div
        id="highlight_slider_right"
        className="slider_right"
        onClick={nextImage}>
        <span className="arrow-right"></span>
      </div>
    </div>
  );
}
