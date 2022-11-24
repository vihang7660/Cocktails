import React from "react";
import { useContextState } from "../context";

export default function Cocktail({ imageSrc, name, glass, alcoholic }) {
  const { state } = useContextState();
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={imageSrc} alt="" />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{alcoholic}</p>
      </div>
    </article>
  );
}
