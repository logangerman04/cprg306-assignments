export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-stone-100 m-4 p-2 w-95 border border-stone-400 rounded-lg shadow-xl">
      <p className="font-semibold text-lg">{name}</p>
      <p className="text-sm text-gray-500">Buy {quantity} in {category}</p>
    </li>
  );
}
