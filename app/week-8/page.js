'use client';

import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas'; 
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(''); 

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (itemName) => {
    let cleanedName = itemName.split(',')[0].replace(/[\p{Emoji_Presentation}\p{Emoji}\uFE0F]+$/gu, '');
    setSelectedItemName(cleanedName.trim());
  };

  return (
    <main className="min-h-screen bg-stone-400 text-stone-700 p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Shopping List</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <MealIdeas ingredient={selectedItemName} /> 
      </div>
    </main>
  );
}
