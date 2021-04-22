import React, { useState } from "react";
import { FaRandom } from "react-icons/fa";

const RecipeSearch = () => {
  const [search, setSearch] = useState("");

  const fetchMeals = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await response.json();
      console.log(data);
      console.log("hello");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="receipesearch">
      <h2>Receipe Search</h2>
      <div className="container">
        <form className="receipe-form" onSubmit={fetchMeals} type="submit">
          <input
            type="text"
            placeholder="Search for Receipe"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button className="btn btn-search">Search</button>
        </form>
        <button className="btn btn-random">
          <FaRandom />
        </button>
      </div>
    </div>
  );
};

export default RecipeSearch;
