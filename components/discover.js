import React, { useEffect, useState } from "react";

import { getRecipes } from "../store/firestore";

const Discover = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then((recipes) => setRecipes(recipes));
  }, []);

  return (
    <div>
      <h1>Discover</h1>
      {recipes.map((recipe, i) => {
        return <div key={i}>{recipe.name}</div>;
      })}
    </div>
  );
};

export default Discover;
