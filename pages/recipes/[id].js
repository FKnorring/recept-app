import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import IngredientList from "../../components/recipes/ingredient-list";
import StepList from "../../components/recipes/step-list";
import { getRecipe } from "../../store/firestore";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useRouter } from "next/router";

const Recipe = () => {
  const router = useRouter();
  const { id } = router.query;

  const [portions, setPortions] = useState(0);
  const [portionMod, setPortionMod] = useState(portions);
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (id)
      getRecipe(id).then((res) => {
        const recipe = res.data();
        setRecipe(recipe);
        setPortions(parseInt(recipe.portions));
        setPortionMod(parseInt(recipe.portions));
      });
  }, [id]);

  const modifiedRecipe = recipe
    ? [...recipe.ingredients].map((ingredient) => {
        return {
          ...ingredient,
          quantity: ingredient.quantity * (portionMod / portions),
        };
      })
    : [];

  if (!recipe) return <h1>Loading</h1>;

  return (
    <div className="px-[7rem] py-20 max-w-[1200px] min-h-screen m-auto bg-primary-100 shadow-lg">
      <div className="cursor-pointer absolute left-0 float-left p-6">
        <FontAwesomeIcon
          onClick={() => router.back()}
          icon={solid("arrow-left")}
          size="2x"
        />
      </div>
      <div className="flex flex-wrap items-center justify-around">
        <div>
          <div className="w-30 h-30 rounded-lg">
            <Image
              className="rounded-lg"
              src={recipe.imgurl}
              alt={recipe.name}
              width={400}
              height={400}
              objectFit="cover"
            />
          </div>
          <h1 className="text-3xl displayfont">{recipe.name}</h1>
          <h2>
            {portionMod} portioner{" "}
            <FontAwesomeIcon
              onClick={() => setPortionMod(portionMod - 1)}
              icon={solid("minus")}
              size="1x"
            />
            <FontAwesomeIcon
              onClick={() => setPortionMod(portionMod + 1)}
              icon={solid("plus")}
              size="1x"
            />
            <p className="my-4 w-[45ch] font-light">
              {recipe.description && recipe.description}
            </p>
          </h2>
        </div>
        <div className="bg-primary-200 w-fit py-3 pb-6 px-10 flex justify-center items-center flex-col rounded-lg shadow-md">
          <h2 className="displayfont text-3xl my-2">Ingredienser</h2>
          <IngredientList list={false} ingredients={modifiedRecipe} />
        </div>
      </div>
      <div className="my-8">
        <h2 className="displayfont text-2xl my-2">Gör så här</h2>
        <StepList className="max-w-prose" steps={recipe.steps} />
      </div>
    </div>
  );
};

export default Recipe;
