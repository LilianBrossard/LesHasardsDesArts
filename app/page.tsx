"use client";
import Nav from "@/components/Nav";
import FirstTitle from "@/components/FirstTitle";
import Cover from "@/components/Cover";
import { InteractionProvider } from "@/context/InteractionContext";
import { LoaderProvider } from "@/context/LoaderContext";
import { AllLoadProvider } from "@/context/AllLoadContext";
import Link from "next/link";

export default function Home() {
  return (
    <InteractionProvider>
      <LoaderProvider>
        <AllLoadProvider>
          <main className="w-full h-[200vh] overflow-x-hidden cursor-none">
            <Cover />
            <h1 className="sr-only">the serendipitys of arts home page</h1>
            <FirstTitle />
            <Link href="/test?id=958">test page</Link>
            <Nav />
          </main>
        </AllLoadProvider>
      </LoaderProvider>
    </InteractionProvider>
  );
}
