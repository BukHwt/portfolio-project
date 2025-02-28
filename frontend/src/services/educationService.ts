import axios from "axios";

const apiURL = import.meta.env.VITE_API_BASE_URL + "/education";

export const getEducation = async () => {
  try {
    const response = await axios.get(`${apiURL}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
