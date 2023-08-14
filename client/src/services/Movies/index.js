import apiCall from "../apiCall";

export const feetchMovies = async () => {
  try {
    return apiCall(`/popular?api_key=${process.env.REACT_APP_API_KEY}`, "GET", null);
  } catch (error) {
    throw new Error(`Fetching Movies Failed: ${error.message}`);
  }
};
