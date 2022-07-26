import React, { useState } from "react";

const UNIT_INIT = "kg";

const IngredientAdd = ({ addIngredient }) => {
  const [ingredient, setIngredient] = useState("");
  const [unit, setUnit] = useState(UNIT_INIT);
  const [quantity, setQuantity] = useState("");

  const handleClick = () => {
    addIngredient({
      ingredient: ingredient,
      unit: unit,
      quantity: quantity,
    });
    setIngredient("");
    setUnit(UNIT_INIT);
    setQuantity("");
  };

  return (
    <div>
      <input
        onChange={(e) => setIngredient(e.target.value)}
        type="text"
        name="name"
        placeholder="Ingrediens"
        value={ingredient}
      />
      <input
        onChange={(e) => setQuantity(e.target.value)}
        type="number"
        value={quantity}
      ></input>
      <select
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        name="unit"
      >
        <option value="kg">kg</option>
        <option value="g">g</option>
        <option value="l">l</option>
        <option value="ml">ml</option>
        <option value="st">st</option>
      </select>
      <input onClick={handleClick} type="button" value="Add" />
    </div>
  );
};

export default IngredientAdd;
