import axios from "axios";
import type { EmploymentHistory } from "../types/EmploymentHistory"; // Assuming you have a type

const apiURL = new URL(
  "/employment-history",
  import.meta.env.VITE_API_BASE_URL
).toString();

export const getEmploymentHistory = async (): Promise<EmploymentHistory[]> => {
  try {
    const response = await axios.get<EmploymentHistory[]>(apiURL);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Axios error fetching employment history:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data?.error || "Failed to fetch employment history."
      );
    } else {
      console.error("Unexpected error:", error);
      throw new Error(
        "Something went wrong while fetching employment history."
      );
    }
  }
};
