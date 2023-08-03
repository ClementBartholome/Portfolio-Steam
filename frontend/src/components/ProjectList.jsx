import React, {useContext, useState} from "react";
import ProjectsContext from "../contexts/ProjectsContext";
import axios from "axios";

const baseURL = "https://portfolio-steam-backend.onrender.com/api";

export default function ProjectList() {

    const { projects, setProjects } = useContext(ProjectsContext);
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const [isEditFormOpen, setIsEditFormOpen] = useState(false);
    const [editedProject, setEditedProject] = useState(null);
  
    function handleEditProject(project) {
      // Open the edit form and set the current project to be edited
      setIsEditFormOpen(true);
      setEditedProject(project);
    }
      
    async function handleDeleteProject(projectId) {
      try {
        await axios.delete(`${baseURL}/projects/${projectId}`, config);
  
        // Update the projects list by removing the deleted project
        setProjects((prevProjects) =>
          prevProjects.filter((project) => project._id !== projectId)
        );
      } catch (error) {
        console.error("Erreur lors de la suppression du projet :", error);
      }
  }

  async function handleEditFormSubmit(event) {
    event.preventDefault();

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Utilisateur non authentifié.");
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.put(
        `${baseURL}/projects/${editedProject._id}`,
        editedProject,
        config
      );
      setIsEditFormOpen(false);
      setEditedProject(null);
    } catch (error) {
      console.error("Erreur lors de la mise à jour du projet :", error);
    }
  }



  function handleInputChange(event) {
    const { name, value } = event.target;
    setEditedProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  }

  return (
    <div className="project-list" data-modal>
      {isEditFormOpen && editedProject ? (
        <div className="edit-form-container">
          <div className="edit-form-header">
            <h2>Modifier le projet</h2>
            <button onClick={() => setIsEditFormOpen(false)}>
              Revenir en arrière
            </button>
          </div>
          <form className="edit-form" onSubmit={handleEditFormSubmit}>
            {/* Use the same form fields as in AddProject, but pre-fill them with project data */}
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