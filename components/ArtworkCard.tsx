"use client";
import { useContext } from "react";
import { InteractionContext } from "@/context/InteractionContext";
import Link from "next/link";
import ImageApi from "./ImageApi";
interface LinkStyleProps {
  lien?: string;
  title?: string;
  image_id?: string;
  info?: string;
}

export default function ArtworkCard({
  lien = "/#",
  title = "Untitled",
  image_id = "undifinded",
  info,
}: LinkStyleProps) {
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
  return (
    <Link
      href={lien}
      className="w-full h-full rounded-lg flex flex-col lg:flex-row cursor-none hover:bg-slate-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ImageApi image_id={image_id} title={title} />
      <div className="flex flex-col items-start justify-center w-full">
        <h4 className="text-xl lg:text-4xl text-start all-transition duration-500 ease-in-out">
          {title}
        </h4>
        {info && (
          <p className="hidden lg:inline text-2xl text-start">By {info}</p>
        )}
      </div>
    </Link>
  );
}
