import React, { useState } from "react";
import { addRecipe, auth, uploadImage } from "../store/firestore";

import IngredientAdd from "../components/ingredient-add";
import IngredientList from "../components/ingredient-list";
import StepAdd from "../components/step-add";
import StepList from "../components/step-list";
import { getDownloadURL } from "firebase/storage";
import { useAuthState } from "react-firebase-hooks/auth";

const AddRecipe = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [portions, setPortions] = useState(4);
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [image, setImage] = useState(null);
  const [imgUrl, setImgUrl] = useState("");

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

  const handleImageFile = (e) => {
    setImage(e.target.files[0]);
    const uploadTask = uploadImage(image);
    uploadTask.then((snapshot) => {
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        setImgUrl(url);
      });
    });
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
      //log all conditions
      console.log(user, name, portions, ingredients, steps, imgUrl);
      alert("Please fill in all fields");
      return;
    }
    addRecipe({
      user: user.uid,
      name: name,
      portions: portions,
      ingredients: ingredients,
      steps: steps,
      imgurl: imgUrl,
    });
  };

  return (
    <div>
      <div>
        <h4>Receptnamn</h4>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
      <input type="file" accept="image/*" onChange={handleImageFile}></input>
      <button onClick={submit}>Lägg till recept</button>
    </div>
  );
};

export default AddRecipe;
