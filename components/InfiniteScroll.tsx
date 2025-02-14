"use client";
import TenArtworks from "@/components/TenArtworks";
import { useRef, useContext } from "react";
import { createRoot } from "react-dom/client";
import { InteractionContext } from "@/context/InteractionContext";

export default function InfiniteScroll() {
  const interactionContext = useContext(InteractionContext);
  const handleMouseEnter = () => {
    if (interactionContext) {
      interactionContext.setInteraction(true);
    }
  };

  const handleMouseLeave = () => {
    if (interactionContext) {
      interactionContext.setInteraction(false);
    }
  };
  const RefArtworkList = useRef<HTMLDivElement>(null);

  const addArtwork = () => {
    const newArtwork = document.createElement("div");
    RefArtworkList.current?.appendChild(newArtwork);
    const root = createRoot(newArtwork);
    root.render(<TenArtworks />);
  };
  return (
    <div className="w-full relative overflow-hidden px-4 lg:px-16">
      <div ref={RefArtworkList} className="w-full flex flex-col">
        <div>
          <TenArtworks />
        </div>
      </div>
      <div className="w-full flex justify-center py-8">
        <button
          onClick={addArtwork}
          className="p-2 bg-orange-500 text-white text-xl rounded-lg border-4 hover:border-orange-300 hover:scale-105 border-orange-500 cursor-none all-transition duration-300 ease-in-out"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Load More Artworks
        </button>
      </div>
    </div>
  );
}
