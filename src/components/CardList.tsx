import Card from "./Card";
import { SearchBar } from "../ui";

export default function CardList() {
  return (
    <main className="relative top-30 px-margin flex flex-col gap-[7.4rem]">
      <SearchBar />
      <div className="flex flex-wrap gap-spacing-10">
        {Array.from({ length: 7 }, (_, i) => (
          <Card key={i} />
        ))}
      </div>
    </main>
  );
}
