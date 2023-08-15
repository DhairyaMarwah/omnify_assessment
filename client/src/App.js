import React from "react";
import {  HashRouter} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./routes/routes";
import Sidebar from "./components/Sidebar/Sidebar";
import SidebarWidth from "./components/Sidebar/SidebarWidth";

function App() {
  return (
    <HashRouter>
      <ToastContainer />
      <div className="sidebar-flex"> 
        <Sidebar />
        <SidebarWidth />
        <div className="content">
          <Navigation />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
