import React from "react";
import bg from "../assets/bg.jpg";

export const Layout = ({ children }) => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-bl from-indigo-400 to-purple-700 opacity-75"></div>
      <div className="relative z-10 mx-52 pt-5">{children}</div>
    </div>
  );
};
