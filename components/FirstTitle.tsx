"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useContext, useState } from "react";
import { InteractionContext } from "@/context/InteractionContext";
import { AllLoadContext } from "@/context/AllLoadContext";
import { LoaderContext } from "@/context/LoaderContext";
import callApi from "@/components/CallApi";
import ImageApi from "@/components/ImageApi";
import ArrowDown from "@/components/ArrowDown";

export default function FirstTitle() {
  const RefArt1 = useRef<HTMLDivElement>(null);
  const RefArt2 = useRef<HTMLDivElement>(null);
  const RefArt3 = useRef<HTMLDivElement>(null);

  const loaderContext = useContext(LoaderContext);

  useEffect(() => {
    if (loaderContext?.loader) {
      setTimeout(() => {
        RefArt1.current?.classList.add("translate-x-[0]");
        RefArt2.current?.classList.add("translate-x-[0]");
        RefArt3.current?.classList.add("translate-x-[0]");
        RefArt1.current?.classList.remove("translate-x-[100%]");
        RefArt2.current?.classList.remove("-translate-y-[100%]");
        RefArt3.current?.classList.remove("-translate-x-[100%]");
      }, 700);
    }
  }, [loaderContext]);

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
  const allLoadContext = useContext(AllLoadContext);

  const [apiData, setApiData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await callApi({});
      setApiData(result);
      await new Promise((resolve) => setTimeout(resolve, 500));
      allLoadContext?.setAllLoad(true);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full relative h-screen overflow-hidden flex flex-col justify-center">
      <ArrowDown />
      <h2 className="sr-only">The serendipitys of arts</h2>
      <div className="w-full h-1/3 flex items-center justify-center relative">
        <h3 className="font-[family-name:var(--font-rouge)]  text-slate-950 z-20 text-[11vw] all-transition duration-300 ease-in-out pointer-events-none">
          The Serendipitys of Arts
        </h3>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none -z-10">
        <Image
          src="/images/cerisier1.png"
          alt="Cerisier"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="w-full py-8 h-2/3 flex flex-row justify-around gap-4 lg:gap-16">
        <div className="w-1/3 h-full overflow-hidden flex flex-col justify-center group">
          <h4 className="w-full text-slate-950 text-[2.5vw] z-20">
            The discovery of a side of art
          </h4>
          <p className="w-full text-slate-950 text-[1.5em] z-20">
            Here are randomly selected works from 129 006 artworks referenced by
            the museum&apos;s public data of the{" "}
            <a
              href="https://www.artic.edu/"
              className="underline hover:bg-red-200 cursor-none transition-all duration-300 ease-in-out"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Art Institute of Chicago.
            </a>{" "}
            I'll let you discover some that will touch you.
          </p>
        </div>
        <Link
          href={"/artwork/" + apiData?.data[0]?.id || "#"}
          className="w-1/3 h-full overflow-hidden group relative cursor-none hover:scale-105 all-transition duration-300 ease-in-out"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="w-full h-full bg-orange-300 relative all-transition translate-x-[100%] duration-700 ease-out rounded-[3rem] shadow-2xl"
            ref={RefArt1}
          >
            <div className="absolute w-full h-full rounded-[3rem]">
              {apiData && (
                <ImageApi
                  image_id={apiData.data[0].image_id}
                  title={apiData.data[0].title}
                  specialeClass="object-cover"
                />
              )}
            </div>
            <div className="absolute w-full h-full scale-0 rounded-[3rem] group-hover:scale-100 bg-red-200 opacity-30 all-transition duration-1000 ease-in-out"></div>
          </div>
          <h4 className="absolute w-full bottom-0 p-4 bg-red-200 text-slate-950 text-[1.5em] z-20">
            {apiData && apiData.data[0].title}
          </h4>
        </Link>
      </div>
    </div>
  );
}
