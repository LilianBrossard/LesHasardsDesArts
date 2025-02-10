"use client";
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

  const [apiData, setApiData] = useState<any | null>(null);

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
    <div className="w-full h-screen relative overflow-hidden flex flex-row justify-center">
      <ArrowDown />
      <h2 className="sr-only">The serendipitys of arts</h2>
      <h3 className="font-[family-name:var(--font-rouge)] w-max h-min text-slate-950 z-20 text-[11vw] all-transition duration-300 ease-in-out drop-shadow-lg">
        The Serendipitys of Arts
      </h3>
      <div className="w-full h-[146vh] -top-[23vh] flex flex-row gap-4 lg:gap-16 absolute skew-y-12">
        <div className="w-1/2 h-full flex flex-col gap-4 lg:gap-16">
          <Link
            href={"/artwork/" + apiData?.data[0]?.id || "#"}
            className="w-full h-3/5 overflow-hidden relative group cursor-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="w-full h-full bg-blue-200 relative all-transition duration-700 ease-out rounded-md translate-x-[100%]"
              ref={RefArt1}
            >
              <div className="absolute w-full h-full rounded-md">
                {apiData && (
                  <ImageApi
                    image_id={apiData.data[0].image_id}
                    title={apiData.data[0].title}
                    specialeClass="object-cover"
                  />
                )}
              </div>
              <div className="absolute w-full h-full scale-0 group-hover:scale-100 bg-red-200 opacity-30 all-transition duration-1000 ease-in-out"></div>
            </div>
          </Link>
          <Link
            href={"/artwork/" + apiData?.data[1]?.id || "#"}
            className="w-full h-2/5 overflow-hidden relative group cursor-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="w-full h-full bg-blue-200 relative all-transition duration-700 ease-out rounded-md -translate-y-[100%]"
              ref={RefArt2}
            >
              <div className="absolute w-full h-full rounded-md">
                {apiData && (
                  <ImageApi
                    image_id={apiData.data[1].image_id}
                    title={apiData.data[1].title}
                    specialeClass="object-cover"
                  />
                )}
              </div>
              <div className="absolute w-full h-full scale-0 group-hover:scale-100 bg-red-200 opacity-30 all-transition duration-1000 ease-in-out"></div>
            </div>
          </Link>
        </div>
        <Link
          href={"/artwork/" + apiData?.data[2]?.id || "#"}
          className="w-1/2 h-full overflow-hidden relative group cursor-none"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="w-full h-full bg-blue-200 relative all-transition duration-700 ease-out rounded-md -translate-x-[100%]"
            ref={RefArt3}
          >
            <div className="absolute w-full h-full rounded-md">
              {apiData && (
                <ImageApi
                  image_id={apiData.data[2].image_id}
                  title={apiData.data[2].title}
                  specialeClass="object-cover"
                />
              )}
            </div>
            <div className="absolute w-full h-full scale-0 group-hover:scale-100 bg-red-200 opacity-30 all-transition duration-1000 ease-in-out"></div>
          </div>
        </Link>
      </div>
    </div>
  );
}
