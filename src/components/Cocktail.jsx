import React from "react";
import { Link } from "react-router-dom";
export default function Cocktail({ imageSrc, name, glass, alcoholic, id }) {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={imageSrc} alt="" />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{alcoholic}</p>
        <Link to={"/cocktail/" + id} className={"btn btn-primary btn-details"}>
          Details
        </Link>
      </div>
    </article>
  );
}
