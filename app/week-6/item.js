export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-stone-100 m-4 p-2 w-95 border border-stone-400 rounded-lg shadow-xl">
      <h2 className="font-bold text-xl">{name}</h2>
      <p>Buy {quantity} in {category}</p>
    </li>
  );
}
