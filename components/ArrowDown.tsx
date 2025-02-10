"use client";
import Image from "next/image";

export default function ArrowDown() {
  return (
    <div className="absolute w-full h-screen overflow-hidden flex flex-row justify-center items-end py-6">
      <Image
        src="/arrow-down.svg"
        alt="down arrow"
        width={32}
        height={32}
        className="relative animate-bounce"
      />
    </div>
  );
}
