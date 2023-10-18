import React, { useContext, useState } from "react";
import ProjectsContext from "../contexts/ProjectsContext";
import { updateProject, deleteProject, getAllProjects } from "./Api";

export default function ProjectList() {
  const { projects, setProjects } = useContext(ProjectsContext);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [editedProject, setEditedProject] = useState(null);
  const token = localStorage.getItem("token");

  // Function to fetch projects
  const fetchProjects = async () => {
    try {
      const projectsData = await getAllProjects();
      setProjects(projectsData);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  // Function to update the project list after editing or deleting
  const updateProjectList = async () => {
    fetchProjects();
  };

  function handleEditProject(project) {
    // Open the edit form and set the current project to be edited
    setIsEditFormOpen(true);
    setEditedProject(project);
  }

  async function handleDeleteProject(projectId) {
    try {
      await deleteProject(projectId, token);

      // Update the projects list by removing the deleted project
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project._id !== projectId)
      );

      // Update the project list
      updateProjectList();
    } catch (error) {
      console.error("Erreur lors de la suppression du projet :", error);
    }
  }

  async function handleEditFormSubmit(event) {
    event.preventDefault();

    try {
      await updateProject(editedProject._id, editedProject, token);
      setIsEditFormOpen(false);
      setEditedProject(null);

      // Update the project list
      updateProjectList();
    } catch (error) {
      console.error("Erreur lors de la mise à jour du projet :", error);
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    if (name === "tags") {
      const tagsArray = value.trim().split(",");
      setEditedProject((prevProject) => ({
        ...prevProject,
        [name]: tagsArray,
      }));
    } else {
      setEditedProject((prevProject) => ({
        ...prevProject,
        [name]: value,
      }));
    }
  }

  return (
    <div className="project-list" data-modal>
      {isEditFormOpen && editedProject ? (
        <div className="edit-form-container">
          <div className="edit-form-header">
            <h2>Modifier le projet</h2>
            <button
              className="back-btn"
              onClick={() => setIsEditFormOpen(false)}
            >
              Revenir en arrière
            </button>
          </div>
          <form className="edit-form" onSubmit={handleEditFormSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Titre du projet"
              value={editedProject.title}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="image"
              placeholder="URL de l'image"
              value={editedProject.image}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="tags"
              placeholder="tags"
              value={editedProject.tags}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="code"
              placeholder="code"
              value={editedProject.code}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="demo"
              placeholder="demo"
              value={editedProject.demo}
              onChange={handleInputChange}
            />
            <textarea
              value={editedProject.description}
              onChange={handleInputChange}
              name="description"
            ></textarea>
            <button type="submit">Mettre à jour</button>
          </form>
        </div>
      ) : (
        // Display the list of projects
        <>
          {projects.map((project) => (
            <div key={project._id} className="project-item">
              <img src={project.image} alt={project.title} />
              <div className="project-buttons">
                <button onClick={() => handleEditProject(project)}>
                  Modifier
                </button>
                <button onClick={() => handleDeleteProject(project._id)}>
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
