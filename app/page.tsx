"use client";
import Nav from "@/components/Nav";
import FirstTitle from "@/components/FirstTitle";
import Cover from "@/components/Cover";
import { InteractionProvider } from "@/context/InteractionContext";
import Link from "next/link";

export default function Home() {
  return (
    <InteractionProvider>
      <main className="w-full h-[200vh] overflow-x-hidden cursor-none">
        <Cover />
        <h1 className="sr-only">the serendipitys of arts home page</h1>
        <FirstTitle />
        <Link href="/test?id=958">test page</Link>
        <Nav />
      </main>
    </InteractionProvider>
  );
}
