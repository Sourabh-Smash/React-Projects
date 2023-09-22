import React from "react";

const IngredientLines = ({ ingredientLines }) => {
  return (
    <>
      {ingredientLines.map((step, idx) => {
        return <p key={idx}>{step}</p>;
      })}
    </>
  );
};

export default IngredientLines;
