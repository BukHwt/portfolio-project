import axios from "axios";
import type { Education } from "../types/Education"; // Assuming you have a type

const apiURL = new URL(
  "/education",
  import.meta.env.VITE_API_BASE_URL
).toString();

export const getEducation = async (): Promise<Education[]> => {
  try {
    const response = await axios.get<Education[]>(apiURL);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Axios error fetching education:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data?.error || "Failed to fetch education data."
      );
    } else {
      console.error("Unexpected error:", error);
      throw new Error("Something went wrong while fetching education.");
    }
  }
};
