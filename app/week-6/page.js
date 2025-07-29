import itemsData from './items.json';
import ItemList from './item-list'; 


export default function Page() {
  return (
    <main className="min-h-screen bg-stone-400 text-stone-700 p-3">
      <h1 className="text-3xl font-bold mb-2 text-stone-700">Shopping List</h1>
      <ItemList items={itemsData} />

      
    </main>
  );
}

