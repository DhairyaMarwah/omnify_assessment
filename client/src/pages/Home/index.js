import React, { useState } from "react";
import Icons from "../../assets/Icons";

const Index = () => {
  const filters = [
    {
      name: "🍿  All",
    },
    {
      name: "🎥  Movies",
    },
    {
      name: "📺  TV Shows",
    },
    {
      name: "🎬  Documentaries",
    },
    {
      name: "🎵  Music",
    },
    {
      name: "🎵  Music",
    },

    {
      name: "🎵  Music",
    },
  ];
  const [activeFilter, setActiveFilter] = useState(0); // Initialize with the index of the default active filter

  const handleFilterClick = (index) => {
    setActiveFilter(index);
  };
  return (
    <div className="home-page">
      <div className="home-page-search">
        <div className="header-text">Movies 🍿</div>
        <div className="search-bar">
          <img src={Icons.Search} alt="" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="filters">
        {filters.map((filter, index) => {
          return (
            <div
              className={`filter ${activeFilter === index ? "active" : ""}`}
              key={index}
              onClick={() => handleFilterClick(index)}
            >
              {filter.name}
            </div>
          );
        })}
      </div>
      <div className="hero-section">
        <div className="hero-section-one">
          <div className="hero-section-one-img">
            <img src={Icons.Bg} alt="" />
          </div>
          <div className="hero-section-one-text">
            <h1>Interstellar</h1>
            <p>
              Set in a future where a failing Earth puts humanity on the brink
              of extinction, it sees an intrepid team of NASA scientists,
              engineers and pilots attempt to find a new habitable planet, via
              interstellar travel.
            </p>
          </div>
        </div>
        <div className="hero-section-two">
          <div className="hero-section-two-card-back"></div>
          <div className="hero-section-two-card">
            <img src={Icons.Card} alt="" />
            <div className="hero-section-two-card-content">
              <h1>Star Wars: the league</h1>
              <p>
                Set in a future where a failing Earth puts humanity on the brink
                of extinction,
              </p>
            </div>
            <div className="hero-section-two-card-content-info">
              <p>22nd January</p>
              <p>2023</p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-listed-movies">
        <div className="header-text">Top Listed Movies 🍿</div>
      </div>
    </div>
  );
};

export default Index;
