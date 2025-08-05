'use client';

import { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      quantity,
      category
    };

    onAddItem(newItem);
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  // Add increment and decrement functions
  const increment = () => {
    setQuantity((prev) => Math.min(prev + 1, 20));
  };

  const decrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-200 p-4 rounded-xl shadow-lg space-y-4 max-w-md mb-6"
    >
      {/* Name input on its own row */}
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Item name"
          className="bg-white w-full border border-gray-800 rounded p-2 text-black"
        />
      </div>
      {/* Quantity and Category on the next row */}
      <div className="flex gap-24">
        {/* Quantity */}
        <div className="bg-white flex items-center justify-between w-full border border-gray-800 rounded p-2 text-black">
          <span className="text-black">{quantity}</span>
          <div className="flex gap-2 ml-auto">
            <button
              type="button"
              onClick={decrement}
              className={`w-8 h-8 rounded ${
                quantity === 1 ? "bg-gray-400" : "bg-violet-500 hover:bg-violet-700"
              } text-white font-bold`}
              disabled={quantity <= 1}
            >
              -
            </button>
            <button
              type="button"
              onClick={increment}
              className={`w-8 h-8 rounded ${
                quantity === 20 ? "bg-gray-400" : "bg-violet-500 hover:bg-violet-700"
              } text-white font-bold`}
              disabled={quantity >= 20}
            >
              +
            </button>
          </div>
        </div>
        {/* Category Select */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-white flex-1 border border-gray-800 rounded p-2 text-black"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="household">Household</option>
        </select>
      </div>
      {/* Submit button */}
      <button type="submit" className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded w-full">
        +
      </button>
    </form>
  );
}