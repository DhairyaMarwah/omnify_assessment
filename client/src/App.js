import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./routes/routes";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="sidebar-flex">
        <Sidebar />
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
