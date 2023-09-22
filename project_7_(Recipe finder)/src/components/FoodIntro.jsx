import React from "react";
import IngredientLines from "./IngredientLines";

const FoodIntro = ({ RecipeList }) => {
  return (
    <>
      {RecipeList.map((item) => {
        const { label, image, ingredientLines } = item.recipe;
        return (
          <div key={label} className="Ingredient">
            <span>{label}</span>
            <img src={image} alt="img"/>
            <div className="steps">
            <IngredientLines ingredientLines={ingredientLines} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FoodIntro;
