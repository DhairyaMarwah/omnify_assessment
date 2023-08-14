import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SidebarWidth = () => {
  const location = useLocation();
  const [hide, sethide] = useState(false);
  // if location is login hide sidebar
  useEffect(() => {
    if (location.pathname === "/login") {
      sethide(true);
    }
  }, [location]);
  return (
    <div className={hide ? "sidebar-width | hide" : "sidebar-width"}></div>
  );
};

export default SidebarWidth;
