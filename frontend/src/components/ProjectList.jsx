import React, {useContext} from "react";
import ProjectsContext from "../contexts/ProjectsContext";
import axios from "axios";

const baseURL = "https://portfolio-steam-backend.onrender.com/api";

export default function ProjectList() {

    const { projects, setProjects } = useContext(ProjectsContext);
    const token = localStorage.getItem("token");

    function handleEditProject(project) {
        return
    }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

    async function handleDeleteProject(projectId) {
      try {
        await axios.delete(`${baseURL}/projects/${projectId}`, config);
  
        // Update the projects list in the frontend by removing the deleted project
        setProjects((prevProjects) =>
          prevProjects.filter((project) => project._id !== projectId)
        );
      } catch (error) {
        console.error("Error deleting project:", error);
      }

  }

    return (
        <div className="project-list" data-modal>
          {projects.map((project) => (
            <div key={project._id} className="project-item" >
              <img src={project.image} alt={project.title} />
              <div className="project-buttons">
                <button onClick={() => handleEditProject(project)}>Modifier</button>
                <button onClick={() => handleDeleteProject(project._id)}>Supprimer</button>
              </div>
            </div>
          ))}
        </div>
      );
}