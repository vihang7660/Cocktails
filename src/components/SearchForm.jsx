import React from "react";
import { useContextState } from "../context";

export default function SearchForm() {
  const { state, dispatch } = useContextState();

  /* React.useEffect(() => {
    dispatch({
      type: "filtering_cocktails",
    });
  }, [state.searchText]); */

  return (
    <section className="section search">
      <form action="#" className="search-form">
        <div className="form-control">
          <label htmlFor="name">Search Your Favorite Cocktail</label>
          <input
            value={state.searchText}
            type="text"
            name="name"
            id="name"
            onChange={(e) => {
              dispatch({
                type: "modifying_input_text",
                text: e.target.value,
              });
            }}
          />
        </div>
      </form>
    </section>
  );
}
