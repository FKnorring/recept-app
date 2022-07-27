import React, { useEffect, useState } from "react";

import Image from "next/image";
import { getRecipes } from "../store/firestore";

const Recipe = ({ recipe }) => {
  return (
    <a
      href={`../recipes/${recipe.id}`}
      className="bg-primary-200 p-5 rounded-md shadow-lg cursor-pointer w-[180px]"
    >
      <Image
        className="rounded-md min-w-max"
        src={recipe.imgurl}
        alt={recipe.name}
        width={180}
        height={180}
        objectFit="cover"
      />
      <p className="font-normal">{recipe.name}</p>
    </a>
  );
};

const Discover = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then((recipes) => setRecipes(recipes));
  }, []);

  return (
    <div className="flex gap-5 p-10">
      {recipes.map((recipe, i) => {
        return <Recipe key={i} recipe={recipe} />;
      })}
    </div>
  );
};

export default Discover;
