import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import About from "../pages/About";
import Focus from "../pages/Focus";
import Community from "../pages/Community";
import Workshops from "../pages/Workshops";
import Join from "../pages/Join";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/focus" element={<Focus />} />
        <Route path="/community" element={<Community />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/join" element={<Join />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
