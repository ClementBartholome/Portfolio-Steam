import React, {useContext} from "react";
import ProjectsContext from "../contexts/ProjectsContext";

export default function ProjectList() {

    const { projects } = useContext(ProjectsContext);

    function handleEditProject(project) {
        return
    }

    function handleDeleteProject(project) {
        return
    }

    return (
        <div className="project-list" data-modal>
          {projects.map((project) => (
            <div key={project.id} className="project-item" >
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