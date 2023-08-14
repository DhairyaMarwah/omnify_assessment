import React, { useEffect, useState } from "react";
import Icons from "../../assets/Icons";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      setHide(true);
    } else {
      setHide(false);
    }
  }, [location]);

  return (
    <div className={hide ? "sidebar | hide" : "sidebar"}>
      <div className="sidebar-one">
        <div className="sidebar_logo">
          <img src={Icons.Logo} alt="" />
        </div>
        <div className="sidebar-links">
          <div
            onClick={() => {
              navigate("/");
            }}
            className={`sidebar-links_item ${location.pathname === "/" ? "active" : ""}`}
          >
            <img src={Icons.Home} alt="" />
          </div>
          <div
            onClick={() => {
              navigate("/favorites");
            }}
            className={`sidebar-links_item ${location.pathname === "/favorites" ? "active" : ""}`}
          >
            <img src={Icons.Fav} alt="" />
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
