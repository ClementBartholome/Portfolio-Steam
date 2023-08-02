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
