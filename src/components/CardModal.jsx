import { BackArrow } from "../icons/BackArrow";
import { ForwardArrow } from "../icons/ForwardArrow";
import { PlayArrow } from "../icons/PlayArrow";

export function CardModal({ selectedCard, setOpenCard }) {
  console.log(selectedCard);
  const removeHtml = (text) => {
    return text.replace(/<[^>]+>/g, "");
  };
  const movieSummary = removeHtml(selectedCard.show?.summary);

  const handleModal = (e) => {
    setOpenCard(false);
  };

  return (
    <div className="z-10 fixed bottom-0 left-0 h-[calc(100vh-60px)] w-screen overflow-y-none">
      {selectedCard.show.image?.original ? (
        <img
          src={selectedCard.show.image?.original}
          alt={selectedCard.show?.name}
          className="h-auto w-full lg:h-full lg:w-auto"
        />
      ) : (
        <div className="flex items-start justify-center h-full pt-64 bg-black">
          <p className="font-thin text-xl">No preview available</p>
        </div>
      )}
      <div onClick={handleModal} className="z-20 absolute top-0 fill-white p-6">
        <BackArrow />
      </div>
      <div className="absolute flex items-end lg:items-center justify-center lg:justify-end lg:pr-64 top-0 w-full h-full bg-gradient-to-t lg:bg-gradient-to-l from-[#00333D] from-10% lg:from-30% via-[#001219] via-30% lg:via-70% to-transparent to-50%">
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-5 p-6 mb-10">
          <p className="font-thin text-4xl">{selectedCard.show?.name}</p>
          <div className="flex flex-col gap-5 text-sm">
            <div className="flex gap-5">
              <p>
                {selectedCard.show.network?.name
                  ? selectedCard.show.network?.name
                  : "No info"}
              </p>
              <p>&#x2022;</p>
              <p className="">
                {selectedCard.show?.genres[0]
                  ? selectedCard.show?.genres[0]
                  : "No info"}
              </p>
              <p>&#x2022;</p>
              <p className="">
                {selectedCard.show?.premiered
                  ? selectedCard.show?.premiered.substring(0, 4)
                  : "No info"}
              </p>
            </div>
            <div>
              <p className="line-clamp-4">
                {movieSummary ? movieSummary : "No info"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="fill-white">
                <PlayArrow />
              </div>
              <div className="fill-white">
                <ForwardArrow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
