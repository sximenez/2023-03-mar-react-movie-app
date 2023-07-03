export function Card({ details, onCardClick }) {
  const { show } = details;

  const handleCardSelection = (e) => {
    onCardClick(details);
  };

  return (
    <div
      key={show?.id}
      onClick={handleCardSelection}
      className="flex flex-col items-center justify-center grow gap-y-4 mb-10 relative cursor-pointer hover:scale-110 transition hover:z-10"
    >
      {show.image?.original ? (
        <img
          src={show.image?.original}
          alt={show?.name}
          className="w-full h-[500px]"
        />
      ) : (
        <div className="flex items-center h-[500px] z-10">
          <p className="font-thin text-xl">No preview available</p>
        </div>
      )}

      <div className="absolute flex items-end justify-center bottom-0 w-full h-3/4 bg-gradient-to-t from-black to-white-transparent">
        <div className="flex flex-col items-center justify-center gap-5 p-8">
          <p className="font-thin text-4xl text-center">{show?.name}</p>
          <div className="flex items-center justify-center gap-5 text-sm">
            <p>{show.network?.name ? show.network?.name : "No info"}</p>
            <p>&#x2022;</p>
            <p className="">{show?.genres[0] ? show?.genres[0] : "No info"}</p>
            <p>&#x2022;</p>
            <p className="">
              {show?.premiered ? show?.premiered.substring(0, 4) : "No info"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
