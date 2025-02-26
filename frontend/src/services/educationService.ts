import axios from "axios";

const apiURL = "http://localhost:3000/education";

export const getEducation = async () => {
  try {
    const response = await axios.get(`${apiURL}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
