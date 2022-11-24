import React from "react";
import { useContextState } from "../context";
import Cocktail from "./Cocktail";

export default function CocktailList() {
  let { state, dispatch } = useContextState();
  React.useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + state.searchText)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({
          type: "fetching",
          data: data.drinks,
        });
      });
  }, [state.searchText]);

  /* if (state.cocktail.length === 0) {
    return <h1>Loading...</h1>;
  } */

  console.log(state);

  let cocktailList = state.cocktail.map((drink) => (
    <Cocktail
      key={drink.idDrink}
      imageSrc={drink.strDrinkThumb}
      name={drink.strDrink}
      glass={drink.strGlass}
      alcoholic={drink.strAlcoholic}
    />
  ));

  return <div className="cocktails-center">{cocktailList}</div>;
}
