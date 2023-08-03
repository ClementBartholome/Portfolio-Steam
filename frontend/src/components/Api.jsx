import axios from "axios";

const baseURL = "https://portfolio-steam-backend.onrender.com/api";

export function addProject(projectData, token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.post(`${baseURL}/projects`, projectData, config);
}