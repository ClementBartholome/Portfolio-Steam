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
      <h2>Profil</h2>
      <div className="container">
        <div className="photo-container">
          <img
            className="photo"
            src="https://storage.googleapis.com/images_portfolio_steam/photo-cv.webp"
            alt="Clément Bartholomé"
          />
        </div>
        <p>
          Dans l'univers infini du développement web, plongez dans une aventure
          épique aux côtés de Clément Bartholomé. Recrutez-le pour étendre votre
          empire numérique.
        </p>
        {/* <p>
          Clément Bartholomé est un développeur web passionné par le front-end
          et le webdesign. Dans un monde saisissant de réalisme, recrutez-le et
          étendez votre empire numérique.
        </p> */}
        <button onClick={handleSeeMoreClick}>En savoir plus</button>

        <span>Évaluations : extrêmements positives</span>
        <span>Date de parution : 17 janvier 1996</span>
      </div>
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
        }}>
        <div className="description-modal" data-modal>
          <span className="close-modal-btn" onClick={closeModal}>
            &times;
          </span>
          <h2>Bienvenue sur mon portfolio !</h2>
          <p>
            Si vous êtes adepte de jeux vidéo, notamment sur PC, vous aurez
            normalement remarqué que ce portfolio s'inspire de la célèbre
            plateforme Steam (sinon, je devrais sans doute revoir mon
            design...). Ce choix reflète mon identité et mon parcours :
            journaliste de formation, j'ai travaillé pendant près de cinq ans
            comme rédacteur freelance pour le site jeuxvideo.com (entre autres
            médias).
            <br></br>
            <br></br>
            Passionné par le monde du web, j'ai décidé de me reconvertir dans le
            développement informatique pour mettre à profit ma créativité et mes
            compétences techniques. J'aime concevoir des sites modernes,
            fonctionnels et accessibles qui répondent aux besoins des
            utilisateurs. Quand je ne code pas, vous me trouverez sûrement en
            train de lire un roman de science-fiction, de jouer du piano ou de
            regarder un match de basketball.
            <br></br>
            <br></br>
            Mon objectif actuel : trouver une alternance au sein d'une
            entreprise de Nouvelle-Aquitaine afin de préparer un diplôme Bac
            +3/4 et enrichir mes compétences. Pour en savoir plus sur mes
            expériences professionnelles et scolaires, je vous invite à cliquer
            sur les "succès" en bas de page.
          </p>
        </div>
      </ReactModal>
    </section>
  );
}
