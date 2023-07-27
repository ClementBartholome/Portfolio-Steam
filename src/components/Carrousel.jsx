/* eslint-disable react/prop-types */
import React from "react";
import ReactModal from "react-modal";
import ViewProjectBtn from "./ViewProjectBtn";
import Thumbnails from "./Thumbnails";
import useCarrousel from "../hooks/useCarrousel";

export default function Carrousel({ images }) {
  const {
    isModalOpen,
    selectedProject,
    selectedThumbnailIndex,
    hoverIndex,
    carrouselContainerRef,
    carrouselImageRef,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    transformX,
    handleMouseEnter,
    handleMouseLeave,
    previousImage,
    nextImage,
    handleCarrouselImageClick,
    handleThumbnailClick,
    closeModal,
  } = useCarrousel(images);

  return (
    <div className="projects">
      <h2>Projets</h2>
      <section className="carrousel">
        <div
          className="carrousel-container"
          style={{
            transform: `translateX(${transformX}px)`,
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          ref={carrouselContainerRef}>
          {images.map((image, index) => (
            <div
              className="carrousel-image-container"
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}>
              <img
                className="carrousel-image"
                src={image}
                alt="Project"
                ref={carrouselImageRef}
              />
              {hoverIndex === index && (
                <ViewProjectBtn
                  handleCarrouselImageClick={handleCarrouselImageClick}
                  index={index}
                />
              )}
            </div>
          ))}
        </div>
      </section>
      <Thumbnails
        selectedThumbnailIndex={selectedThumbnailIndex}
        handleThumbnailClick={handleThumbnailClick}
        images={images}
        previousImage={previousImage}
        nextImage={nextImage}
      />
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Project Modal"
        appElement={document.getElementById("root")}
        style={{
          content: {
            padding: "0px",
            width: "100%",
            height: "100%",
            margin: "auto",
            background: "#1b2838",
          },
        }}
        data-modal>
        {selectedProject && (
          <div className="project-modal" data-modal>
            <span className="close-modal-btn" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedProject.title}</h2>
            <div className="project-details">
              <img src={selectedProject.image} alt={selectedProject.title} />
              <p>{selectedProject.description}</p>
            </div>
            <div className="project-links">
              <a href={selectedProject.code} target="_blank" rel="noreferrer">
                Code
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white">
                  <path d="M12 .5C5.4.5.5 5.4.5 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.2.8-.6v-2c-3.3.7-4-1.5-4-1.5-.6-1.5-1.4-1.9-1.4-1.9-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-3.1-.4-6.4-1.6-6.4-7.2 0-1.6.6-2.9 1.5-3.9-.2-.4-.7-1.8.2-3.7 0 0 1.2-.4 3.9 1.4 1.1-.3 2.3-.4 3.5-.4 1.2 0 2.4.2 3.5.4 2.7-1.8 3.9-1.4 3.9-1.4.9 1.9.3 3.3.2 3.7.9 1 1.5 2.3 1.5 3.9 0 5.6-3.3 6.8-6.4 7.2.5.4.9 1.1.9 2.2v3.2c0 .4.3.8.8.6C20.6 21.8 24 17.3 24 12c0-6.6-5-11.5-11.5-11.5z" />
                </svg>
              </a>
              <a href={selectedProject.demo} target="_blank" rel="noreferrer">
                Démo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M21 12l-18 12V0z" />
                </svg>
              </a>
            </div>
            <span>Outils utilisés :</span>
            <div className="tags">
              {selectedProject.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </ReactModal>
    </div>
  );
}
