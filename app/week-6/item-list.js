'use client';

import { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...itemsData].sort((a, b) => {
    return a[sortBy].localeCompare(b[sortBy]);
  });

  
  return (
    <div>
      <div className="mb-4 flex items-center space-x-2">
        <h2 className="text-xl font-bold text-stone-50 m-2">Sort By:</h2>
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 rounded ${
            sortBy === 'name' ? 'bg-stone-700 text-white' : 'bg-gray-200'
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 rounded ${
            sortBy === 'category' ? 'bg-stone-700 text-white' : 'bg-gray-200'
          }`}
        >
          Category
        </button>
      </div>
      

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}

