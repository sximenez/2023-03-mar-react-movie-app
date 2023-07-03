import { useState, useEffect } from "react";
import { Nav } from "./components/Nav.jsx";
import { Main } from "./components/Main.jsx";

export function App() {
  const [searchResults, setSearchResults] = useState("");
  const [query, setQuery] = useState("universe");
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openCard, setOpenCard] = useState(false);

  const handleMockEvent = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://api.tvmaze.com/search/shows?q=" + query
      );
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Oops, error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const mockEvent = { preventDefault: () => {} };
    handleMockEvent(mockEvent);
  }, []);

  return (
    <>
      <div className="flex flex-col bg-gradient-to-b from-[#001219] to-[#00333D] text-white relative">
        <Nav
          {...{
            query,
            setQuery,
            setSearchResults,
            openModal,
            setOpenModal,
            setOpenCard,
          }}
        />
        <Main
          {...{
            searchResults,
            openCard,
            setOpenCard,
          }}
        />
      </div>
    </>
  );
}
