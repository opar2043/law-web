// src/Components/Root/Root.jsx
import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import ChatBot from "./Chatbot";

const Root = () => {
  return (
    <div className="max-w-7xl w-full mx-auto relative">
      <Navbar />
      <Outlet />
      <Footer />

      {/* Floating Advocium AI Chatbot */}
      <ChatBot />
    </div>
  );
};

export default Root;
