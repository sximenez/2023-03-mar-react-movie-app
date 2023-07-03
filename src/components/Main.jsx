import { useState, useEffect } from "react";
import { Card } from "./Card";
import { CardModal } from "./CardModal";

export function Main({ searchResults, openCard, setOpenCard }) {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelection = (e) => {
    setSelectedCard(e);
    setOpenCard(true);
  };

  return (
    <main className="h-[calc(100vh-64px)] overflow-y-scroll">
      {!searchResults ? (
        // Case 1: the form has not been submitted
        <div
          id="content"
          className="flex items-center justify-center h-full w-full"
        >
          <p className="px-10 py-5 rounded-lg">Please search a movie.</p>
        </div>
      ) : searchResults.length === 0 ? (
        // Case 2: the form has been submitted but no results
        <div
          id="content"
          className="flex items-center justify-center h-full w-full"
        >
          <p className="px-10 py-5 rounded-lg">No results found.</p>
        </div>
      ) : (
        // Case 3: there are results
        <div
          id="content"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 3xl:grid-cols-6 items-start gap-1.5 px-6 pb-6 w-full"
        >
          {searchResults.map((e, i, a) => {
            return (
              <Card key={i} details={e} onCardClick={handleCardSelection} />
            );
          })}
        </div>
      )}
      {openCard && (
        <CardModal setOpenCard={setOpenCard} selectedCard={selectedCard} />
      )}
    </main>
  );
}
