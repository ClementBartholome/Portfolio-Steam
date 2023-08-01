import React, { createContext, useState, useEffect } from "react";
import { getAllProjects } from "../components/getData";

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const projectsData = await getAllProjects();
        setProjects(projectsData);
        setIsLoading(false); 
      } catch (error) {
        console.error("Error fetching projects:", error);
        setIsLoading(false); 
      }
    };
    fetchProjectsData();
  }, []);

  return (
    <ProjectsContext.Provider value={{projects, isLoading}}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsContext;
