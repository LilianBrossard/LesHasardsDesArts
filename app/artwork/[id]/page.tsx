"use client";
import Link from "next/link";
import Cover from "@/components/Cover";
import ArtPrev from "@/components/ArtPrev";
import { InteractionProvider } from "@/context/InteractionContext";
import { LoaderProvider } from "@/context/LoaderContext";
import { AllLoadProvider } from "@/context/AllLoadContext";

export default function Artwork() {
  return (
    <InteractionProvider>
      <LoaderProvider>
        <AllLoadProvider>
          <main className="w-full overflow-x-hidden cursor-none">
            <Cover />
            <Link href="/">Home</Link>
            <ArtPrev />
          </main>
        </AllLoadProvider>
      </LoaderProvider>
    </InteractionProvider>
  );
}
