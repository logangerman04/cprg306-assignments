'use client';

import { useState } from 'react';
import Item from './item';

export default function ItemList({ items = [] })
 {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  );

  return (
    <div>
      <div className="mb-4 space-x-2">
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 rounded ${
            sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 rounded ${
            sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Sort by Category
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

