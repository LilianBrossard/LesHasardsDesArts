"use client";
import { useRef } from "react";
interface ImageApiProps {
  image_id: string;
  title?: string;
  specialeClass?: string;
}

export default function ImageApi({
  image_id,
  title = "artwork photo",
  specialeClass = "object-contain",
}: ImageApiProps) {
  const RefImg = useRef<HTMLImageElement>(null);
  if (RefImg.current) {
    RefImg.current.classList.add(specialeClass);
  }

  return (
    <img
      src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
      alt={title}
      className="w-full h-full rounded-[3rem]"
      ref={RefImg}
    />
  );
}
