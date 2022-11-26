import React from "react";
import { useContextState } from "../context";
import Cocktail from "./Cocktail";
import Loading from "./Loading";

export default function CocktailList() {
  let { state, dispatch } = useContextState();
  React.useEffect(() => {
    dispatch({ type: "turning_on_loading" });
    fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
        state.searchText
    )
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({ type: "turning_off_loading" });
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

  if (state.isLoading) {
    return <Loading />;
  }

  if (state.cocktail.length === 0) {
    return <h1>Nothing matches</h1>;
  }

  let cocktailList = state.cocktail.map((drink) => (
    <Cocktail
      key={drink.idDrink}
      imageSrc={drink.strDrinkThumb}
      name={drink.strDrink}
      glass={drink.strGlass}
      alcoholic={drink.strAlcoholic}
      id={drink.idDrink}
    />
  ));

  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">{cocktailList}</div>
    </section>
  );
}
