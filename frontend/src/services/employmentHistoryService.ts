import axios from "axios";

const apiURL = import.meta.env.VITE_API_BASE_URL + "/employment-history";

export const getEmploymentHistory = async () => {
  try {
    const response = await axios.get(`${apiURL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching employment history", error);
    throw error;
  }
};
