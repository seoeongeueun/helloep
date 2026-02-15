import { Header, Filters } from "./ui";
import CardList from "./components/CardList";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="text-s flex flex-row h-full w-full gap-spacing-10">
      <div className="flex flex-col border-r border-px border-gray h-full overflow-y-auto">
        <Header />
        <Filters />
        <CardList />
      </div>
      <SideBar />
    </div>
  );
}

export default App;
