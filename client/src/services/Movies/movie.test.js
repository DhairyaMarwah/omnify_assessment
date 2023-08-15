import apiCall from "../apiCall";
import {
  fetchMovies,
  addFavorities,
  fetchFavorites,
  searchMovies,
  similarMovies,
  fetchGenre,
  fetchGenreMovies,
} from "./index";

jest.mock("../apiCall", () => jest.fn());

describe("fetchMovies", () => {
  beforeEach(() => {
    apiCall.mockClear();
  });

  it("should call apiCall with correct arguments for a user ID", async () => {
    const userID = 3;
    const responseData = [{ id: 1, title: "Movie 1" }];

    apiCall.mockResolvedValue(responseData);

    const result = await fetchMovies(userID);

    expect(apiCall).toHaveBeenCalledWith(
      `/getMovieData?user_id=${userID}`,
      "GET",
      null
    );
    expect(result).toEqual(responseData);
  });

  it("should call apiCall with correct arguments for no user ID", async () => {
    const responseData = [{ id: 1, title: "Movie 1" }];

    apiCall.mockResolvedValue(responseData);

    const result = await fetchMovies();

    expect(apiCall).toHaveBeenCalledWith(`/getMovieData`, "GET", null);
    expect(result).toEqual(responseData);
  });

  it("should throw an error if apiCall rejects", async () => {
    const errorMessage = "API error";

    apiCall.mockRejectedValue(new Error(errorMessage));

    await expect(fetchMovies()).rejects.toThrowError(
      new RegExp(`${errorMessage}`)
    );
  });
});

describe("addFavorites", () => {
  beforeEach(() => {
    apiCall.mockClear();
  });

  it("should call apiCall with correct arguments and handle success", async () => {
    const formData = {
      user_id: 3,
      movie_data: {
        adult: false,
        backdrop_path: "/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
        genre_ids: [28, 12, 878],
        id: 667538,
        original_language: "en",
        original_title: "Transformers: Rise of the Beasts",
        overview:
          "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
        popularity: 3137.108,
        poster_path: "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
        release_date: "2023-06-06",
        title: "Transformers: Rise of the Beasts",
        video: false,
        vote_average: 7.5,
        vote_count: 2670,
      },
    };

    const responseData = { success: true };

    apiCall.mockResolvedValue(responseData);

    const result = await addFavorities(formData);

    expect(apiCall).toHaveBeenCalledWith(`/addFavorite`, "POST", formData);
    expect(result).toEqual(responseData);
  });

  it("should throw an error if apiCall rejects", async () => {
    const errorMessage = "API error";

    apiCall.mockRejectedValue(new Error(errorMessage));

    await expect(
      addFavorities({
        user_id: 3,
        movie_data: {
          adult: false,
          backdrop_path: "/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
          genre_ids: [28, 12, 878],
          id: 667538,
          original_language: "en",
          original_title: "Transformers: Rise of the Beasts",
          overview:
            "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
          popularity: 3137.108,
          poster_path: "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
          release_date: "2023-06-06",
          title: "Transformers: Rise of the Beasts",
          video: false,
          vote_average: 7.5,
          vote_count: 2670,
        },
      })
    ).rejects.toThrowError(
      new RegExp(`${errorMessage}`)
    );
  });
});

describe("fetchFavorites", () => {
  // Write test cases for fetchFavorites
});

describe("searchMovies", () => {
  // Write test cases for searchMovies
});

describe("similarMovies", () => {
  // Write test cases for similarMovies
});

describe("fetchGenre", () => {
  // Write test cases for fetchGenre
});

describe("fetchGenreMovies", () => {
  // Write test cases for fetchGenreMovies
});
