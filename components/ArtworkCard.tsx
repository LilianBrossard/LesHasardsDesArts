"use client";
import { useContext, useState } from "react";
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
  const [aspectRatio, setAspectRatio] = useState<number>(1);

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

  const handleImageLoad = (ratio: number) => {
    setAspectRatio(ratio);
  };

  // Détermine si l'image est horizontale (ratio > 1.2) ou verticale/carrée
  const isHorizontal = aspectRatio > 1.2;
  const isVertical = aspectRatio < 0.8;

  return (
    <Link
      href={lien}
      className="group relative rounded-3xl overflow-hidden cursor-none transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative ${
          isHorizontal
            ? "h-[40vh] lg:h-[50vh]"
            : isVertical
            ? "h-[60vh] lg:h-[70vh]"
            : "h-[50vh] lg:h-[60vh]"
        }`}
      >
        <ImageApi
          image_id={image_id}
          title={title}
          onLoad={handleImageLoad}
          specialeClass="object-cover"
        />

        {/* Overlay avec gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-t ${
            isHorizontal
              ? "from-black/80 via-black/20 to-transparent"
              : "from-black/70 via-transparent to-transparent"
          } opacity-60 group-hover:opacity-80 transition-opacity duration-300`}
        />

        {/* Texte positionné selon la proportion */}
        <div
          className={`absolute ${
            isHorizontal
              ? "bottom-0 left-0 right-0 p-6 lg:p-8"
              : "bottom-0 left-0 right-0 p-6 lg:p-8"
          } text-white`}
        >
          <h4
            className={`font-bold mb-2 ${
              isHorizontal ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"
            } line-clamp-2 group-hover:line-clamp-none transition-all duration-300`}
          >
            {title}
          </h4>
          {info && (
            <p className="text-sm lg:text-base text-white/90 line-clamp-1 group-hover:line-clamp-none transition-all duration-300">
              {info}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
