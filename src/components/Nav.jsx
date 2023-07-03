import { Search } from "./Search.jsx";
import { SearchButton } from "../icons/SearchButton";
import { CloseButton } from "../icons/CloseButton";

export function Nav({
  query,
  setQuery,
  setSearchResults,
  openModal,
  setOpenModal,
  setOpenCard,
}) {
  const title = "the movie app";
  const guide = {
    border: "1px solid red",
  };

  const resetSubmit = (e) => {
    setQuery("");
    setSearchResults("");
    setOpenCard(false);
  };

  const handleModal = (e) => {
    setOpenModal(!openModal);
  };

  return (
    // Grid display to obtain clean distribution on desktop
    <nav className="grid grid-cols-2 lg:grid-cols-3 items-center px-6 py-2 h-[64px]">
      {/* Title */}
      <div>
        <button onClick={resetSubmit} className="text-lg text-green-300">
          {title}
        </button>
      </div>
      {/* Reset */}
      <div className="hidden lg:flex items-center justify-center">
        <button
          onClick={resetSubmit}
          className="text-xs uppercase px-4 py-2 rounded-lg hover:bg-white/25"
        >
          Home
        </button>
        <button className="cursor-not-allowed text-xs uppercase px-4 py-2 rounded-lg hover:bg-white/25">
          Settings
        </button>
      </div>
      {/* Search */}
      <div className="flex items-center justify-end gap-4">
        <div className="hidden lg:flex">
          <Search
            {...{
              query,
              setQuery,
              setSearchResults,
              openModal,
              setOpenModal,
              setOpenCard,
            }}
          />
        </div>
        <button
          onClick={handleModal}
          className="lg:hidden fill-white bg-transparent py-2 ml-5"
        >
          {!openModal ? <SearchButton /> : <CloseButton />}
        </button>
        <img
          className="w-[32px] rounded-full"
          src="../public/assets/profile.jpg"
        />
      </div>
      {/* Search modal on mobile */}
      {openModal && (
        <div className="z-20 fixed bottom-0 left-0 h-[calc(100vh-60px)] w-screen flex items-center justify-center bg-black bg-opacity-90">
          {/* Your modal content goes here */}
          <Search
            {...{
              query,
              setQuery,
              setSearchResults,
              openModal,
              setOpenModal,
              setOpenCard,
            }}
          />
        </div>
      )}
    </nav>
  );
}
