import Itemlist from './item-list';

export default function Page() {
  return (
    <main className="min-h-screen bg-teal-950 text-white p-3">
      <h1 className="text-3xl font-bold mb-2">Shopping List</h1>
      <Itemlist />
    </main>
  );
}

