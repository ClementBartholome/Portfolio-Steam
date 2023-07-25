import ReactModal from "react-modal";
import React from "react";
import { useState, useEffect } from "react";

export default function Description() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function closeModal() {
    setIsModalOpen(false);
  }

  function handleSeeMoreClick() {
    setIsModalOpen(true);
  }

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isModalOpen) {
        if (!e.target.closest("[data-modal]")) {
          closeModal();
        }
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalOpen]);

  return (
    <section className="description">
      <div className="photo-container">
        <img
          className="photo"
          src="https://storage.googleapis.com/images_portfolio_steam/photo-cv.webp"
          alt="Photo Clément Bartholomé"
        />
      </div>
      <p>
        Clément Bartholomé est un développeur web passionné par le front-end et
        le webdesign. Dans un monde saisissant de réalisme, recrutez-le et
        bénéficiez d’un collaborateur impliqué et rigoureux.
      </p>
      <button onClick={handleSeeMoreClick}>En savoir plus</button>
      <span>Évaluations : extrêmements positives</span>
      <span>Date de parution : 17 janvier 1996</span>
      <span>Tags populaires :</span>
      <div className="tag-list">
        <span className="tag">Coopération</span>
        <span className="tag">Logique</span>
        <span className="tag">Programmation</span>
      </div>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Project Modal"
        appElement={document.getElementById("root")}
        data-modal
        style={{
          content: {
            padding: "0px",
            width: "100%",
            height: "100%",
            margin: "auto",
            background: "#1b2838",
          },
        }}></ReactModal>
    </section>
  );
}
