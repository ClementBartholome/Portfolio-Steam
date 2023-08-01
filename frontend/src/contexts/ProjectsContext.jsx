import React, { createContext, useState, useEffect } from "react";
import { getAllProjects } from "../components/getData";

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const images = projects.map((project) => project.image);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await getAllProjects();
        setProjects(projectsData);
        setIsLoading(false); 
      } catch (error) {
        console.error("Error fetching projects:", error);
        setIsLoading(false); 
      }
    };
    fetchProjects();
  }, []);

  return (
    <ProjectsContext.Provider value={{projects, isLoading, images}}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsContext;
