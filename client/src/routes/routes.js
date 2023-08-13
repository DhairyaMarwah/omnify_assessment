import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
const routes = [
  {
    path: "/",
    exact: true,
    name: "Home",
    element: <Home />,
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
              route.private && !user ? (
                <Navigate to="/login" />
              ) : (
                route.element
              )
            }
          />
        ))}
      </Routes>
    </>
  );
}
