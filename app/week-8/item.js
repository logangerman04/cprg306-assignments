export default function Item({ name, quantity, category, onSelect }) {

  return (
    <li   
      className="bg-stone-100 text-black p-4 rounded mb-2 shadow cursor-pointer hover:bg-stone-300"
      onClick={() => onSelect(name)}
      >
      <p className="font-semibold text-lg">{name}</p>
      <p className="text-sm text-gray-500">Buy {quantity} in {category}</p>
    </li>
    );
  }