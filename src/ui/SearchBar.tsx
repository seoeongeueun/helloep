import { Dropdown } from "./Dropdown";
export function SearchBar() {
  return (
    <section className="relative top-30 flex flex-row justify-between gap-4 px-margin">
      <form
        className="flex flex-row bg-secondary border-b border-gray px-margin py-1 w-1/2"
        role="search"
        aria-label="검색"
      >
        <label htmlFor="site-search" className="sr-only">
          검색어 입력
        </label>
        <input
          id="site-search"
          type="search"
          placeholder="Search"
          className="flex-1 focus:ml-margin transtion-[margin] duration-150"
        />
        <button type="submit" aria-label="검색 버튼">
          <img
            src="/icons/icon_search.svg"
            alt="검색"
            aria-hidden="true"
            className="w-[12px] h-[12px]"
          />
        </button>
      </form>
      <Dropdown />
    </section>
  );
}
