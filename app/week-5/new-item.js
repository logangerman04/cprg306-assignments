'use client';

import { useState } from 'react';

export default function NewItem() {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { itemName, quantity, category };
    console.log(item);
    alert(`Added item: ${itemName}, quantity: ${quantity}, category: ${category}`);
    setItemName("");
    setQuantity(1);
    setCategory("");
  };

  return (
  <form
    onSubmit={handleSubmit}
    className="space-y-4 bg-gray-800 p-6 rounded-xl shadow-lg max-w-md mx-auto mt-10 text-white"
  >
    {/* Item Name Field */}
    <div>
      <input
        type="text"
        placeholder="Item name"
        required
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        className="bg-white w-full border border-gray-800 rounded p-2 text-black"
      />
    </div>

    {/* Quantity + Category side-by-side */}
    <div className="flex gap-25">
      {/* Quantity Counter */}
      <div className="flex items-center gap-2 bg-white px-3 py-2 rounded w-fit">
        <span className="text-black pr-8">{quantity}</span> 
        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 1}
          className={`w-8 h-8 rounded ${
            quantity === 1 ? "bg-gray-400" : "bg-violet-500 hover:bg-violet-700"
          } text-white font-bold`}
        >
          −
        </button>
        <button
          type="button"
          onClick={increment}
          disabled={quantity === 20}
          className={`w-8 h-8 rounded ${
            quantity === 20 ? "bg-gray-400" : "bg-violet-500 hover:bg-violet-700"
          } text-white font-bold`}
        >
          +
        </button>
      </div>
      {/* Category Select */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="bg-white flex-1 border border-gray-800 rounded p-2 text-black"
      >
        <option value="" disabled>Category</option>
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen foods">Frozen Foods</option>
        <option value="canned goods">Canned Goods</option>
        <option value="dry goods">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
      </select>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded w-full"
    >
      +
    </button>
  </form>
);
}