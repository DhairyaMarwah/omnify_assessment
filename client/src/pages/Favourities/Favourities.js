import React, { useEffect, useState } from "react";
import MovieDetail from "../../modals/MovieDetail/MovieDetail";
import { fetchFavorities } from "../../services/Movies"; 

const Favourities = () => {
  const [showModal, setShowModal] = useState(false);
  const [movies, setmovies] = useState();
  const [detail, setdetail] = useState();
  useEffect(() => {
    const fetchmovies = async () => {
      const res = await fetchFavorities();
      console.log(res);
      setmovies(res);
    };
    fetchmovies();
  }, []);
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
        <div className="header-text">Your Favourite Movies 🍿</div>
        <div className="top-listed-movies-list">
          {movies?.map((movie, index) => {
            return (
              <div className="top-listed-movies-list-item" key={index}>
                <div className="top-listed-movies-list-item-img">
                  <img
                    onClick={() => {
                      setShowModal(true);
                      setdetail(movie.movie_data);
                    }}
                    src={`https://image.tmdb.org/t/p/w500${movie.movie_data.poster_path}`}
                    alt=""
                  />
                </div>

                <div className="top-listed-movies-list-item-content">
                  <h1>{movie.movie_data.title}</h1>
                
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Favourities;
