import NewItem from './new-item';

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-black">
      <NewItem />
    </main>
  );
}