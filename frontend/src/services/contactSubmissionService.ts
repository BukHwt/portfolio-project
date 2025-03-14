import axios from "axios";
import type { ContactSubmission } from "../types/ContactSubmission";

const apiURL = new URL(
  "/contact-submission",
  import.meta.env.VITE_API_BASE_URL
).toString();

export const submitContactForm = async (
  contactSubmission: ContactSubmission
): Promise<{ message: string }> => {
  try {
    const response = await axios.post<{ message: string }>(
      apiURL,
      contactSubmission
    );
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
      throw new Error(
        error.response?.data?.error || "An unknown error occurred."
      );
    } else {
      console.error("Unexpected error:", error);
      throw new Error("Something went wrong. Please try again.");
    }
  }
};
