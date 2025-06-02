export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-teal-900 m-4 p-2 w-95">
      <h2 className="font-bold text-xl">{name}</h2>
      <p>Buy {quantity} in {category}</p>
    </li>
  );
}
