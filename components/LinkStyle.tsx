"use client";
import Link from "next/link";
import { InteractionContext } from "@/context/InteractionContext";
import { useContext } from "react";
import { useState } from "react";
interface LinkStyleProps {
  lien?: string;
  info?: string;
}

export default function LinkStyle({
  lien = "/#",
  info = "not definded",
}: LinkStyleProps) {
  const interactionContext = useContext(InteractionContext);

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    if (interactionContext) {
      interactionContext.setInteraction(true);
    }
    setHovered(true);
  };

  const handleMouseLeave = () => {
    if (interactionContext) {
      interactionContext.setInteraction(false);
    }
    setHovered(false);
  };

  const getAnimatedChars = () =>
    info.split("").map((char, idx) => (
      <span
        key={idx}
        style={{
          display: "inline-block",
          transform: hovered ? "translateY(0%)" : "translateY(100%)",
          animation: hovered
            ? `slideDown 0.2s ${idx * 0.1}s forwards`
            : `slideUp 0.2s ${idx * 0.1}s forwards`,
        }}
      >
        {char}
      </span>
    ));

  return (
    <div className="font-[family-name:var(--font-bruno)] border-t-4 border-t-slate-950 border-b-4 border-b-slate-950 text-slate-950 text-lg md:text-xl lg:text-2xl text-center">
      <Link
        href={lien}
        className="cursor-none overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-col items-center justify-center overflow-hidden relative">
          <p className="absolute -top-full">{getAnimatedChars()}</p>
          <p>{getAnimatedChars()}</p>
        </div>
      </Link>
    </div>
  );
}
