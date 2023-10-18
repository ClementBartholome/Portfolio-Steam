import React, { useState, useContext } from "react";
import ProjectsContext from "../contexts/ProjectsContext";
import { addProject, getAllProjects } from "./Api";

export default function AddProject() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [code, setCode] = useState("");
  const [demo, setDemo] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const { setProjects } = useContext(ProjectsContext);

  const fetchProjects = async () => {
    try {
      const projectsData = await getAllProjects();
      setProjects(projectsData);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const projectData = {
      id,
      title,
      image,
      description,
      tags: tags.split(","),
      code,
      demo,
    };
    const token = localStorage.getItem("token");

    if (token) {
      addProject(projectData, token)
        .then(() => {
          console.log("Projet ajouté avec succès!");
          setConfirmationMessage("Projet ajouté !");
          fetchProjects();

          setId("");
          setTitle("");
          setImage("");
          setDescription("");
          setTags("");
          setCode("");
          setDemo("");
        })
        .catch((error) => {
          console.error("Erreur lors de l'ajout du projet:", error);
        });
    }
  };

  return (
    <>
      <h2>Ajouter un projet</h2>
      <form className="add-project-form" onSubmit={handleSubmit} data-modal>
        <div className="add-form-content">
          <div>
            <input
              type="number"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="ID du projet"
              required
            />
          </div>
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Titre du projet"
              required
            />
          </div>
          <div>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="URL de l'image"
              required
            />
          </div>
          <div>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="Tags (séparés par des virgules)"
              required
            />
          </div>
          <div>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Lien vers le code source"
              required
            />
          </div>
          <div>
            <input
              type="text"
              value={demo}
              onChange={(e) => setDemo(e.target.value)}
              placeholder="Lien vers la démo (facultatif)"
            />
          </div>
          <div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description du projet"
              required
            />
          </div>
          <div>
            <button type="submit" className="add-project-btn">
              Ajouter le projet
            </button>
          </div>
        </div>
        {confirmationMessage && (
          <p style={{ marginTop: "10px", color: "green" }}>
            {confirmationMessage}
          </p>
        )}
      </form>
    </>
  );
}
