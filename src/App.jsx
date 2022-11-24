import React from "react";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import CocktailList from "./components/CocktailList";

function App() {


  return (
    <>
      <Navbar />
      <SearchForm />
      <CocktailList />
    </>
  );
}

export default App;
