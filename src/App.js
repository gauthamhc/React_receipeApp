import React, { useState } from "react";
import MealSearch from "./MealSearch";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    fetchMeals();
  };

  const fetchMeals = async () => {
    if (search.trim()) {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        );
        const data = await response.json();
        console.log(data);
        setMeals(data.meals);
        setSearch("");
      } catch (error) {
        console.log("error");
      }
    } else {
      alert("please enter the dish name");
    }
  };

  if (meals == null) {
    return (
      <div className="invalid">
        <h1>Invalid dish name</h1>
        <h2>Please try again!!!</h2>
      </div>
    );
  }
  return (
    <div className="receipesearch">
      <h2>Meal Idea Generator</h2>
      <div className="container">
        <form className="receipe-form" onSubmit={onSubmit} type="submit">
          <input
            type="text"
            placeholder="Enter the dish you want to have e.g egg"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button className="btn btn-search">Search</button>
        </form>
      </div>
      <div className="meals">
        {meals !== [] &&
          meals.map((meal) => {
            return <MealSearch key={meal.idMeal} {...meal} />;
          })}
      </div>
    </div>
  );
};

export default App;
