import { Header, Filters, SearchBar } from "./ui";

function App() {
  return (
    <div className="font-normal text-s flex flex-col h-full">
      <Header />
      <Filters />
      <SearchBar />

      <main className="px-margin overflow-y-auto"></main>
    </div>
  );
}

export default App;
