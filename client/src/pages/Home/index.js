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
      <div className="hero-section-img">
        
      </div>
    </div>
  );
};

export default Index;
