import axios from "axios";

// Search students API call
export const searchStudentsApi = async (query) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/search?q=${encodeURIComponent(query)}`);
    return response.data;
  }
   
  catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
};