import React, { useState } from "react";

import DropImage from "../../components/dropimage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IngredientAdd from "../../components/recipes/ingredient-add";
import IngredientList from "../../components/recipes/ingredient-list";
import StepAdd from "../../components/recipes/step-add";
import StepList from "../../components/recipes/step-list";
import { addRecipe } from "../../store/firestore";
import { auth } from "../../store/firebase";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

const NotUploaded = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <FontAwesomeIcon icon={solid("camera")} size="2x" />
      <p className="my-2 text-center text-primary-800">Ladda upp bild här</p>
    </div>
  );
};

const AddRecipe = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [portions, setPortions] = useState(4);
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const router = useRouter();

  const addIngredient = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };

  const removeIngredient = (ingredient) => {
    setIngredients(
      ingredients.filter((i) => i.ingredient !== ingredient.ingredient)
    );
  };

  const addStep = (step) => {
    setSteps([...steps, step]);
  };

  const removeStep = (step) => {
    setSteps(steps.filter((s) => s !== step));
  };

  const submit = () => {
    if (
      !user ||
      !name ||
      !portions ||
      !ingredients.length ||
      !steps.length ||
      !imgUrl
    ) {
      alert("Please fill in all fields");
      return;
    }
    addRecipe({
      user: user.uid,
      name: name,
      description: description,
      portions: portions,
      ingredients: ingredients,
      steps: steps,
      imgurl: imgUrl,
    });
  };

  return (
    <div className="max-w-[1200px] px-10 py-8 mx-auto">
      <FontAwesomeIcon
        icon={solid("arrow-left")}
        size="2x"
        onClick={() => router.back()}
      />
      <div>
        <DropImage
          noFile={<NotUploaded />}
          imgUrl={imgUrl}
          setImgUrl={setImgUrl}
        />
      </div>
      <div>
        <h4>Receptnamn</h4>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <h4>Receptbeskrivning</h4>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <h4>Antal Portioner</h4>
        <input
          type="number"
          value={portions}
          onChange={(e) => setPortions(e.target.value)}
        />
      </div>
      <h4>Ingredienser</h4>
      <IngredientAdd addIngredient={addIngredient} />
      <IngredientList
        ingredients={ingredients}
        editable={true}
        removeIngredient={removeIngredient}
      />
      <h4>Instruktioner</h4>
      <StepAdd addStep={addStep} />
      <StepList steps={steps} editable={true} removeStep={removeStep} />
      <button onClick={submit}>Lägg till recept</button>
    </div>
  );
};

export default AddRecipe;
