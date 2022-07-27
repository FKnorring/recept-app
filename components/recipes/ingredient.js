import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Ingredient = ({
  ingredient,
  editable = false,
  removeIngredient = () => {},
}) => {
  return (
    <div>
      <p className="px-2 py-2 border-b-[1px] bg-primary-100">
        {ingredient.ingredient}
        <span className="float-right">
          {ingredient.quantity}
          {ingredient.unit}
          {editable && (
            <FontAwesomeIcon
              className="cursor-pointer ml-2"
              icon={solid("xmark")}
              onClick={() => removeIngredient(ingredient)}
              size="1x"
            />
          )}
        </span>
      </p>
    </div>
  );
};

export default Ingredient;
