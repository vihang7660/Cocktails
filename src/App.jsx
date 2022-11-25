import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import CocktailList from "./components/CocktailList";
import Home from "./pages/Home";
import SingleCocktail from "./pages/SingleCocktail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cocktail/:cocktailId" element={<SingleCocktail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
