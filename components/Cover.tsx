"use client";
import { useRef, useEffect, useContext } from "react";
import Image from "next/image";
import { InteractionContext } from "@/context/InteractionContext";
export default function Cover() {
  const RefCherry = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleMouseMove = (event: MouseEvent) => {
        if (RefCherry.current) {
          RefCherry.current.style.left = `${event.clientX - 24}px`;
          RefCherry.current.style.top = `${event.clientY - 24}px`;
        }
      };

      document.addEventListener("mousemove", handleMouseMove);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  const interactionContext = useContext(InteractionContext);

  useEffect(() => {
    if (RefCherry.current) {
      if (interactionContext?.interaction) {
        RefCherry.current.classList.remove("spin-animation");
        RefCherry.current.classList.add("interaction-animation");
      } else {
        RefCherry.current.classList.remove("interaction-animation");
        RefCherry.current.classList.add("spin-animation");
      }
    }
  }, [interactionContext]);
  return (
    <div className="w-full h-screen overflow-hidden fixed z-50 pointer-events-none">
      <Image
        src="/cherry.svg"
        alt="Cherry"
        width={48}
        height={48}
        className="z-50 absolute pointer-events-none all-transition duration-300 ease-out cherry spin-animation"
        ref={RefCherry}
      />
    </div>
  );
}
