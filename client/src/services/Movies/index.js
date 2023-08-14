import apiCall from "../apiCall";

export const feetchMovies = async () => {
  try {
    return apiCall(
      `/popular?api_key=${process.env.REACT_APP_API_KEY}`,
      "GET",
      null
    );
  } catch (error) {
    throw new Error(`Fetching Movies Failed: ${error.message}`);
  }
};

export const addFavorities = async (formData) => {
  try {
    return apiCall(`/favorite-movies`, "POST", formData);
  } catch (error) {
    throw new Error(`Posting Favorite Movies Failed: ${error.message}`);
  }
};

export const fetchFavorities = async () => {
  const userID = JSON.parse(localStorage.getItem("movieUser")).id;
  try {
    return apiCall(`/favorite-movies/${userID}`, "GET", null);
  } catch (error) {
    throw new Error(`Fetching Favorite Movies Failed: ${error.message}`);
  }
};

export const searchMovies = async (searchTerm) => {
  try {
    return apiCall(`/search-movies?${searchTerm}`, "GET", null);
  } catch (error) {
    throw new Error(`Searching Movies Failed: ${error.message}`);
  }
};
