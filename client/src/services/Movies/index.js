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

// create a function to call post request for favorite movies submission
export const postFavoriteMovies = async (formData) => {
  try {
    return apiCall(`/favoriteMovie`, "POST", formData);
  } catch (error) {
    throw new Error(`Posting Favorite Movies Failed: ${error.message}`);
  }
};

//now to get the favorite movies
export const getFavoriteMovies = async () => {
  try {
    return apiCall(`/favorite`, "GET", null);
  } catch (error) {
    throw new Error(`Getting Favorite Movies Failed: ${error.message}`);
  }
};


// search movie by title
export const searchMovie = async (title) => {
    try {
        return apiCall(
        `/search?title=${title}&api_key=${process.env.REACT_APP_API_KEY}`,
        "GET",
        null
        );
    } catch (error) {
        throw new Error(`Searching Movie Failed: ${error.message}`);
    }
}