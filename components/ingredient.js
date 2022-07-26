import React from "react";

const Ingredient = ({
  ingredient,
  editable = false,
  removeIngredient = () => {},
}) => {
  return (
    <div>
      <p>
        {ingredient.ingredient}
        <span>
          {ingredient.quantity}
          {ingredient.unit}
          {editable && (
            <button onClick={() => removeIngredient(ingredient)}>X</button>
          )}
        </span>
      </p>
    </div>
  );
};

export default Ingredient;
