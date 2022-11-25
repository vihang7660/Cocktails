import React from "react";
import { useContextState } from "../context";
import { Link, useParams } from "react-router-dom";
import Loading from '../components/Loading'

export default function SingleCocktail() {
  const { state } = useContextState();
  const { cocktailId } = useParams();
  const [drinks, setDrinks] = React.useState([]);

  /* let product = state.cocktail.filter(drink => {
    return drink.idDrink === "15997"
  }) */

  React.useEffect(() => {
    fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + cocktailId
    )
      .then((resp) => resp.json())
      .then((data) => setDrinks(data.drinks));
  }, [cocktailId]);

  let [product] = drinks;

  if (product === undefined) {
    return <Loading />;
  }

  function getIngredients() {
    let ingredientsKeysArray = Object.keys(product).filter((key) =>
      key.includes("Ingredient")
    );
    let ingredientes = ingredientsKeysArray
      .map((key) => product[key])
      .filter((data) => data !== null)
      .join(", ");
    return ingredientes;
  }

  return (
    <section className="section cocktail-section">
      <Link to='/' className="btn btn-primary">Back Home</Link>
      <h2 className="section-title">{product.strDrink}</h2>
      <div className="drink">
        <img src={product.strDrinkThumb} alt={product.strDrink} />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name :</span>
            {product.strDrink}
          </p>
          <p>
            <span className="drink-data">Category :</span>
            {product.strCategory}
          </p>
          <p>
            <span className="drink-data">Info :</span>
            {product.strAlcoholic}
          </p>
          <p>
            <span className="drink-data">Glass</span>
            {product.strGlass}
          </p>
          <p>
            <span className="drink-data">Instructions :</span>
            {product.strInstructions}
          </p>

          <p>
            <span className="drink-data">Ingredients</span>
            {getIngredients()}
          </p>
        </div>
      </div>
    </section>
  );
}
