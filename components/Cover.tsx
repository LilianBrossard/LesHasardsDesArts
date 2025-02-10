"use client";
import { useRef, useEffect, useContext, use } from "react";
import Image from "next/image";
import { InteractionContext } from "@/context/InteractionContext";
import { AllLoadContext } from "@/context/AllLoadContext";
import { LoaderContext } from "@/context/LoaderContext";
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

  const RefAnimation1 = useRef<HTMLDivElement>(null);
  const RefAnimation2 = useRef<HTMLDivElement>(null);
  const RefAnimation3 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    RefAnimation1.current?.classList.remove("scale-0");
    RefAnimation2.current?.classList.remove("scale-0");
    RefAnimation3.current?.classList.remove("scale-0");
    RefAnimation1.current?.classList.add("scale-[1.3]");
    RefAnimation2.current?.classList.add("scale-[1.2]");
    RefAnimation3.current?.classList.add("scale-[1.1]");
  }, []);

  const allLoadContext = useContext(AllLoadContext);
  const loaderContext = useContext(LoaderContext);
  const Loader = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (allLoadContext?.allLoad) {
      Loader.current?.classList.add("scale-0");
      RefAnimation1.current?.classList.remove("delay-0");
      RefAnimation3.current?.classList.remove("delay-500");
      RefAnimation1.current?.classList.add("delay-500");
      RefAnimation3.current?.classList.add("delay-0");
      RefAnimation1.current?.classList.add("scale-0");
      RefAnimation2.current?.classList.add("scale-0");
      RefAnimation3.current?.classList.add("scale-0");
      RefAnimation1.current?.classList.remove("scale-[1.3]");
      RefAnimation2.current?.classList.remove("scale-[1.2]");
      RefAnimation3.current?.classList.remove("scale-[1.1]");
      loaderContext?.setLoader(true);
    }
  }, [allLoadContext]);

  //mouse interaction
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
      <div
        className="absolute w-full h-full bg-red-200 flex flex-row items-center justify-center all-transition duration-300 ease-in-out"
        ref={Loader}
      >
        <h3 className="font-[family-name:var(--font-rouge)] w-max h-min text-slate-950 z-20 text-[11vw] all-transition duration-300 ease-in-out drop-shadow-lg">
          The Serendipitys of Arts
        </h3>
      </div>
      <div className="relative w-full h-full pointer-events-none">
        <div
          className="absolute top-0 left-0 w-[400vw] h-[400vh] scale-0 bg-red-400 rounded-full all-transition duration-700 ease-in-out delay-0"
          ref={RefAnimation1}
        ></div>
        <div
          className="absolute top-0 left-0 w-[400vw] h-[400vh] scale-0 bg-orange-400 rounded-full all-transition duration-700 ease-in-out delay-300"
          ref={RefAnimation2}
        ></div>
        <div
          className="absolute top-0 left-0 w-[400vw] h-[400vh] scale-0 bg-orange-300 rounded-full all-transition duration-700 ease-in-out delay-500"
          ref={RefAnimation3}
        ></div>
      </div>
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
