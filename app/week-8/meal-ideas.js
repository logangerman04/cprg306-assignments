'use client';

import { useState, useEffect } from 'react';

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const loadMealIdeas = async () => {
      const ideas = await fetchMealIdeas(ingredient);
      setMeals(ideas);
    };
    if (ingredient) {
      loadMealIdeas();
    }
    
  }, [ingredient]);

  return (
    <div className="p-4 w-full md:w-1/2">
      <h2 className="text-lg font-semi-bold mb-2 text-white">
        {ingredient
          ? `Here are some meal ideas using ${ingredient}:`
          : 'Select an item to see meal ideas'}
      </h2>

      <ul className="space-y-2">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="bg-gray-100 text-black px-4 py-2 rounded"
          >
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}
