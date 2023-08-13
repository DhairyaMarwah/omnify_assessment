import React from "react";
import Icons from "../../assets/Icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-one">
        <div className="sidebar_logo">
          <img src={Icons.Logo} alt="" />
        </div>
        <div className="sidebar-links">
          <div className="sidebar-links_item active">
            <img src={Icons.Home} alt="" />
          </div>
          <div className="sidebar-links_item">
            <img src={Icons.Favourite} alt="" />
          </div>
        </div>
      </div>
      <div className="sidebar-two">
        <div className="sidebar_logout">
          <img src={Icons.Logout} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
