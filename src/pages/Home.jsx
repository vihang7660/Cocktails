import React from "react";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";

export default function Home() {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
}
