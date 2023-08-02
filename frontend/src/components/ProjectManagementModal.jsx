import React from "react";
import ReactModal from "react-modal";
import AddProject from "./AddProject";
import ProjectList from "./ProjectList";

export default function ProjectManagement({setIsProjectManagementModalOpen, isProjectManagementModalOpen}) {


  const closeModal = () => { 
    setIsProjectManagementModalOpen(false);
  }

  const handleOutsideClick = (e) => {
      if (isProjectManagementModalOpen) {
        if (!e.target.closest("[data-modal]")) {
          closeModal();
        }
      }
    };

  document.addEventListener("mousedown", handleOutsideClick);

  return (
    <>
      <ReactModal
        isOpen={isProjectManagementModalOpen}
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
        <AddProject />
        <ProjectList />
      </ReactModal>
    </>
  );
}
