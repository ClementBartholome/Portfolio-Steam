import { useState, useEffect } from "react";
import ReactModal from "react-modal";
import React from "react";

import logoJV from "../assets/logo_jv.svg";
import logoIscpa from "../assets/logo_iscpa.svg";
import logoOc from "../assets/logo_oc.svg";
import successData from "../data/successData";

export default function Success() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSuccess, setSelectedSuccess] = useState(null);

  function handleSuccessClick(index) {
    setIsModalOpen(true);
    setSelectedSuccess(successData[index]);
  }

  function closeModal() {
    setIsModalOpen(false);
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
    <section className="success-container">
      <h2>Succès</h2>
      <>
        <img
          src={logoOc}
          alt="Logo OpenClassrooms"
          className="success"
          title="OpenClassrooms"
          onClick={() => handleSuccessClick(0)}
        />
        <img
          src={logoJV}
          alt="Logo jeuxvideo.com"
          className="success"
          title="jeuxvideo.com"
          onClick={() => handleSuccessClick(1)}
        />
        <img
          src={logoIscpa}
          alt="Logo ISCPA"
          className="success"
          title="ISCPA Paris"
          onClick={() => handleSuccessClick(2)}
        />
      </>

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
            inset: "initial",
          },
        }}>
        {selectedSuccess && (
          <div className="success-modal" data-modal>
            <span className="close-modal-btn" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedSuccess.header} alt={selectedSuccess.title}></img>
            <h2>{selectedSuccess.title}</h2>
            <span className="period">{selectedSuccess.years}</span>
            <p className="description">{selectedSuccess.description}</p>
            <a href={selectedSuccess.lien} target="_blank" rel="noreferrer">
              <p className="tag">Lien</p>
            </a>
          </div>
        )}
      </ReactModal>
    </section>
  );
}
