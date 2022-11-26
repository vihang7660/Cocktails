import React from "react";
import { useContextState } from "../context";

export default function SearchForm() {
  const { state, dispatch } = useContextState();

  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="name">Search Your Favorite Cocktail</label>
          <input
            autoFocus={true}
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
