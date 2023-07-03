import { SearchButton } from "../icons/SearchButton";

export function Search({
  query,
  setQuery,
  setSearchResults,
  openModal,
  setOpenModal,
  setOpenCard,
}) {
  const handleSubmit = async (e) => {
    if (query === "") {
      e.preventDefault();
      setSearchResults("");
    } else {
      e.preventDefault();
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=" + query
        );
        const data = await response.json();
        setSearchResults(data);
        setOpenModal(false);
        setOpenCard(false);
      } catch (error) {
        console.error("Oops, error: ", error);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`${
            openModal
              ? "bg-white placeholder:text-black border-none text-black"
              : "bg-transparent placeholder:text-white border-white/25"
          } border border-r-transparent rounded-tl-full rounded-bl-full py-1.5 pl-5 pr-2 lg:pr-10 text-sm placeholder:text-xs placeholder:uppercase`}
          placeholder="Search"
        />

        <button
          type="submit"
          className="border border-transparent rounded-tr-full rounded-br-full py-1.5 px-5 bg-white/25 hover:bg-white/50"
        >
          <SearchButton />
        </button>
      </form>
    </>
  );
}
