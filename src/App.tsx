import { Header, Filters } from "./ui";
import CardList from "./components/CardList";

function App() {
  return (
    <div className="font-normal text-s flex flex-col h-full">
      <Header />
      <Filters />
      <CardList />
    </div>
  );
}

export default App;
