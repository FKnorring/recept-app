import React, { useRef, useState } from "react";

import Button from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const UNIT_INIT = "g";

const options = [
  { value: "g", label: "g" },
  { value: "kg", label: "kg" },
  { value: "ml", label: "ml" },
  { value: "dl", label: "dl" },
  { value: "l", label: "l" },
  { value: "tsk", label: "tsk" },
  { value: "msk", label: "msk" },
  { value: "krm", label: "krm" },
  { value: "st", label: "st" },
  { value: "paket", label: "paket" },
];

const IngredientAdd = ({ addIngredient }) => {
  const [ingredient, setIngredient] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState(null);
  const ingredientRef = useRef(null);
  const quantityRef = useRef(null);
  const unitRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const add = () => {
    if (!ingredient && !quantity) {
      return;
    }
    if (!quantity) {
      return quantityRef.current.focus();
    }
    if (!unit) {
      return unitRef.current.focus();
    }
    addIngredient({
      ingredient: ingredient,
      unit: unit,
      quantity: quantity,
    });
    setIngredient("");
    setUnit(null);
    setQuantity("");
    ingredientRef.current.focus();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          className="px-2 border-solid border-[#00000040] border-[1px] focus:z10 focus:border-none focus:outline-double focus:outline-2 focus:outline-primary-500"
          ref={ingredientRef}
          onChange={(e) => setIngredient(e.target.value)}
          type="text"
          name="name"
          value={ingredient}
        />
        <input
          className="px-2 w-[8ch] border-solid border-[#00000040] border-[1px] focus:z10 focus:border-none focus:outline-double focus:outline-2 focus:outline-primary-500"
          ref={quantityRef}
          onChange={(e) => setQuantity(e.target.value)}
          type="number"
          value={quantity}
        ></input>
        <Select
          className="w-fit border-none outline-none rounded-none"
          styles={{
            control: (provided) => ({
              ...provided,
              width: "fit-content",
              borderRadius: "0",
            }),
          }}
          onChange={(e) => setUnit(e.value)}
          ref={unitRef}
          options={options}
          placeholder="enhet"
          openMenuOnFocus
        />
        <Button
          type="submit"
          className="bg-[white] aspect-square w-9 border-solid border-[#00000040] border-[1px]"
          onClick={add}
        >
          <FontAwesomeIcon icon={solid("plus")} className="text-[#00000040]" />
        </Button>
      </form>
    </div>
  );
};

export default IngredientAdd;
