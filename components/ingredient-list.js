import Ingredient from "./ingredient";
import React from "react";

const IngredientList = ({
  ingredients,
  editable = false,
  removeIngredient = () => {},
}) => {
  return (
    <ul>
      {ingredients.map((ingredient) => {
        return (
          <li key={ingredient.name}>
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
