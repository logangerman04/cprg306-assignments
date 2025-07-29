'use client';

import { useState } from 'react';
import Item from './item';

export default function ItemList({ items = [] }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  );

  return (
    <div>
      <div className="flex items-center space-x-4 mb-8">
        <span className="text-white">Sort by:</span>
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 rounded ${
            sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 rounded ${
            sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200'
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


