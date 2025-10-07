"use client";
import { useRef, useState } from "react";
interface ImageApiProps {
  image_id: string;
  title?: string;
  specialeClass?: string;
  onLoad?: (aspectRatio: number) => void;
}

export default function ImageApi({
  image_id,
  title = "artwork photo",
  specialeClass = "object-cover",
  onLoad,
}: ImageApiProps) {
  const RefImg = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    if (RefImg.current && onLoad) {
      const aspectRatio =
        RefImg.current.naturalWidth / RefImg.current.naturalHeight;
      onLoad(aspectRatio);
    }
    setLoaded(true);
  };

  if (RefImg.current && loaded) {
    RefImg.current.classList.add(specialeClass);
  }

  return (
    <img
      src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
      alt={title}
      className={`w-full h-full rounded-3xl transition-opacity duration-300 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
      ref={RefImg}
      onLoad={handleImageLoad}
    />
  );
}
