import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./routes/routes";
import Sidebar from "./components/Sidebar/Sidebar";
import SidebarWidth from "./components/Sidebar/SidebarWidth";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="sidebar-flex"> 
        <Sidebar />
        <SidebarWidth />
        <div className="content">
          <Navigation />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
