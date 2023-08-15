import apiCall from "../apiCall";

export const fetchMovies = async (userID) => {
  try {
    if (userID) {
      return apiCall(`/getMovieData?user_id=${userID}`, "GET", null);
    } else {
      return apiCall(`/getMovieData`, "GET", null);
    }
  } catch (error) {
    throw new Error(`Fetching Movies Failed: ${error.message}`);
  }
};

export const addFavorities = async (formData) => {
  try {
    return apiCall(`/addFavorite`, "POST", formData);
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
    return apiCall(`/search-movies?query=${searchTerm}`, "GET", null);
  } catch (error) {
    throw new Error(`Searching Movies Failed: ${error.message}`);
  }
};

export const similarMovies = async (movieID) => {
  try {
    return apiCall(`/fetchByGenre/${movieID}`, "GET", null);
  } catch (error) {
    throw new Error(`Fetching Similar Movies Failed: ${error.message}`);
  }
};

export const fetchGenre = async () => {
  try {
    return apiCall(`/genres`, "GET", null);
  } catch (error) {
    throw new Error(`Fetching Genre Failed: ${error.message}`);
  }
};

export const fetchGenreMovies = async (id) => {
  try {
    return apiCall(`/category/${id}`, "GET", null);
  } catch (error) {
    throw new Error(`Fetching Genre Movies Failed: ${error.message}`);
  }
};
