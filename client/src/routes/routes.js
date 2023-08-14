import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Signup from "../pages/Authentication/Signup";
import Favourities from "../pages/Favourities/Favourities";
const routes = [
  {
    path: "/",
    exact: true,
    name: "Home",
    element: <Home />,
    private: false,
  },
  {
    path: "/favorites",
    exact: true,
    name: "Favourities",
    element: <Favourities />,
    private: true,
  },
  {
    path: "/login",
    exact: true,
    name: "Login",
    element: <Login />,
    private: false,
  },
  {
    path: "/signup",
    exact: true,
    name: "Signup",
    element: <Signup />,
    private: false,
  },
];

export default function Navigation() {
  const user = JSON.parse(localStorage.getItem("movieUser"));
  console.log(user);
  return (
    <>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              route.private && !user ? <Navigate to="/login" /> : route.element
            }
          />
        ))}
      </Routes>
    </>
  );
}
