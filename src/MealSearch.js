import React, { useState } from "react";

const MealSearch = ({ strMealThumb, strMeal }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="meal">
        <img src={strMealThumb} alt={strMeal} />
        <div className="meal-info">
          <p>{strMeal}</p>
        </div>
      </div>
    </>
  );
};

export default MealSearch;
