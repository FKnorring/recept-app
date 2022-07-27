import Ingredient from "./ingredient";
import React from "react";

const IngredientList = ({
  ingredients,
  editable = false,
  list = true,
  removeIngredient = () => {},
}) => {
  return (
    <ul className={list ? "list-disc ml-5" : undefined}>
      {ingredients.map((ingredient, i) => {
        return (
          <li key={i} className="w-[25ch]">
            <Ingredient
              editable={editable}
              ingredient={ingredient}
              removeIngredient={removeIngredient}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default IngredientList;
