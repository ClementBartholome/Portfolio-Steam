import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import AddProject from "./AddProject";

export default function ProjectManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClick() {
    setIsModalOpen(true);
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
    <>
      <button onClick={handleClick}>Gérer les projets</button>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Project Management Modal"
        appElement={document.getElementById("root")}
        style={{
          content: {
            padding: "0px",
            width: "100%",
            height: "100%",
            margin: "auto",
            background: "#1b2838",
            inset: "initial",
          },
        }}
        data-modal>
        <span
          className="close-modal-btn"
          onClick={closeModal}
          aria-label="close">
          &times;
        </span>
        <h2>Ajouter un projet</h2>
        <AddProject />
      </ReactModal>
    </>
  );
}
