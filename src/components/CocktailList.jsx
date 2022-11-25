import React from "react";
import { useContextState } from "../context";
import Cocktail from "./Cocktail";

export default function CocktailList() {
  let { state, dispatch } = useContextState();
  React.useEffect(() => {
    fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
        state.searchText
    )
      .then((resp) => resp.json())
      .then((data) => {
        data.drinks[0];
        dispatch({
          type: "fetching",
          data: data.drinks,
        });
      })
      .catch((err) => {
        dispatch({ type: "emptying" });
      });
  }, [state.searchText]);

  if (state.cocktail.length === 0) {
    return <h1>Loading...</h1>;
  }


  let toggle = (id) => console.log(id);
  let cocktailList = state.cocktail.map((drink) => (
    <Cocktail
      key={drink.idDrink}
      imageSrc={drink.strDrinkThumb}
      name={drink.strDrink}
      glass={drink.strGlass}
      alcoholic={drink.strAlcoholic}
      id={drink.idDrink}
      toggle={toggle}
    />
  ));

  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">{cocktailList}</div>
    </section>
  );
}
