import React, { useState, useEffect } from "react";
import Icons from "../../assets/Icons";
import _debounce from "lodash/debounce";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import {
  addFavorities,
  fetchGenre,
  fetchGenreMovies,
  fetchMovies,
  searchMovies,
} from "../../services/Movies";
import MovieDetail from "../../modals/MovieDetail/MovieDetail";
import { errorToast, successToast } from "../../utils/toast";

const Index = () => {
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem("movieUser"));
  const [filters, setfilters] = useState();
  const [activeFilter, setActiveFilter] = useState(0); // Initialize with the index of the default active filter
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const debouncedSearch = _debounce(async (query) => {
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    const results = await searchMovies(query);
    setSearchResults(results.results);
  }, 1000);

  const handleFilterClick = (index) => {
    setActiveFilter(index);
  };
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      let res;
      if (user?.id) {
        res = await fetchMovies(user.id);
      } else {
        res = await fetchMovies();
      }
      console.log(res);
      setMovies(res.results);
    };
    fetch();
  }, [user?.id]);
  useEffect(() => {
    const fetchAllGenres = async () => {
      const res = await fetchGenre();
      console.log(res);
      setfilters(res.genres);
    };
    fetchAllGenres();
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [detail, setdetail] = useState();
  const addtofav = async (movie) => {
    const payload = {
      user_id: JSON.parse(localStorage.getItem("movieUser")).id,
      movie_data: movie,
    };
    const res = await addFavorities(payload);
    console.log(res);
    if (res) {
      successToast("Added to favorites");
    }
  };

  const handleGenreClick = async (genre_id) => {
    const res = await fetchGenreMovies(genre_id);
    console.log(res);
    setMovies(res.results);
  };
  return (
    <div className="wrap">
      <div
        className={
          showModal === true ? "home-page |  overflow-hidden" : "home-page"
        }
      >
        {showModal && (
          <MovieDetail
            showModal={showModal}
            setShowModal={setShowModal}
            detail={detail}
          />
        )}

        <div className="home-page-search">
          <div className="header-text">Movies 🍿</div>
          <div className="search-bar">
            <img src={Icons.Search} alt="" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                debouncedSearch(e.target.value);
              }}
            />
          </div>
        </div>

        {searchResults.length > 0 ? (
          <>
            <div className="top-listed-movies-list">
              {searchResults?.map((movie, index) => {
                return (
                  <div className="top-listed-movies-list-item" key={index}>
                    <div className="top-listed-movies-list-item-img">
                      <img
                        onClick={() => {
                          setShowModal(true);
                          setdetail(movie);
                        }}
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt=""
                      />
                    </div>

                    <div className="top-listed-movies-list-item-content">
                      <h1>{movie.title}</h1>
                      <div
                        onClick={() => {
                          if (user !== null) {
                            if (!movie.is_favorite) {
                              addtofav(movie);
                            } else {
                              errorToast("Already added to favorites");
                            }
                          } else {
                            nav("/login");
                          }
                        }}
                        className="heart"
                      >
                        <img
                          src={
                            movie.is_favorite ? Icons.Heart : Icons.EmptyHeart
                          }
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div className="filters">
              {filters?.slice(0, 5)?.map((filter, index) => {
                return (
                  <div
                    className={`filter ${
                      activeFilter === index ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => {
                      handleFilterClick(index);
                      handleGenreClick(filter.id);
                    }}
                  >
                    {filter.name}
                  </div>
                );
              })}
            </div>
            <div className="hero-section">
              <div className="hero-section-one">
                <div className="hero-section-one-img">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movies[0]?.backdrop_path}`}
                    alt=""
                  />
                  <div className="img-layer"></div>
                </div>
                <div className="hero-section-one-text">
                  <h1>{movies[0]?.title}</h1>
                  <p>{movies[0]?.overview}</p>
                </div>
              </div>
              <div className="hero-section-two">
                <div className="hero-section-two-card-back"></div>
                <div className="hero-section-two-card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movies[2]?.backdrop_path}`}
                    alt=""
                  />
                  <div className="hero-section-two-card-content">
                    <h1>{movies[2]?.title}</h1>
                    <p>{movies[2]?.overview.substring(0, 100)}...</p>
                  </div>
                  <div className="hero-section-two-card-content-info">
                    <p>{moment(movies[2]?.release_date).format("MMM Do")}</p>
                    <p>{movies[2]?.release_date.split("-")[0]}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="top-listed-movies">
              <div className="header-text">Top Listed Movies 🍿</div>
              <div className="top-listed-movies-list">
                {movies.map((movie, index) => {
                  return (
                    <div className="top-listed-movies-list-item" key={index}>
                      <div className="top-listed-movies-list-item-img">
                        <img
                          onClick={() => {
                            setShowModal(true);
                            setdetail(movie);
                          }}
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt=""
                        />
                      </div>

                      <div className="top-listed-movies-list-item-content">
                        <h1>{movie.title}</h1>
                        <div
                          onClick={() => {
                            if (user !== null) {
                              if (!movie.is_favorite) {
                                addtofav(movie);
                              } else {
                                errorToast("Already added to favorites");
                              }
                            } else {
                              nav("/login");
                            }
                          }}
                          className="heart"
                        >
                          <img
                            src={
                              movie.is_favorite ? Icons.Heart : Icons.EmptyHeart
                            }
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
