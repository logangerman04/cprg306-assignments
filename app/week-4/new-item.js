'use client';

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
<div className='flex justify-center p-1 '>
    <div className="flex items-center bg-gray-700 p-4 rounded gap-3 w-40">
      <div className="text-xl w-1/3 text-center text-white">{quantity}</div>

      <button
        onClick={decrement}
        disabled={quantity === 1}
        className={`w-10 h-6 rounded ${
            quantity === 1 ? 'bg-gray-400 text-white' : 'bg-violet-500 hover:bg-violet-700 text-white font-bold '
          }`}
      >
        -
      </button>

      <button
        onClick={increment}
        className={`w-10 h-6 rounded ${
            quantity === 20 ? 'bg-gray-400 text-white' : 'bg-violet-500 hover:bg-violet-700 text-white font-bold '
          }`}
      >
        +
      </button>
    </div>
    </div>
  );
}