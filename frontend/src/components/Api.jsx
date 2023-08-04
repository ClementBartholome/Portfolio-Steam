import axios from "axios";

const baseURL = "https://portfolio-steam-backend.onrender.com/api";

export const getAllProjects = async () => {
  try {
    const response = await axios.get(`${baseURL}/projects`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all projects:", error);
    return [];
  }
};

export function addProject(projectData, token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.post(`${baseURL}/projects`, projectData, config);
}

export function deleteProject(projectId, token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.delete(`${baseURL}/projects/${projectId}`, config);
}

export function updateProject(projectId, projectData, token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.put(`${baseURL}/projects/${projectId}`, projectData, config);
}