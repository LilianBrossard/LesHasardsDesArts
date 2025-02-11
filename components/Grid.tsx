"use client";
import Link from "next/link";
import { useEffect, useContext, useState } from "react";
import { InteractionContext } from "@/context/InteractionContext";
import callApi from "@/components/CallApi";
import ImageApi from "@/components/ImageApi";

export default function Grid() {
  const [apiData, setApiData] = useState<any>(null);
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
  useEffect(() => {
    const fetchData = async () => {
      const result = await callApi({});
      setApiData(result);
      await new Promise((resolve) => setTimeout(resolve, 500));
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden p-4 lg:p-16">
      <div className="bg-slate-800 rounded-lg grid grid-cols-4 grid-rows-9 md:grid-cols-6 md:grid-rows-6 lg:grid-cols-9 lg:grid-rows-4 w-full h-full border-2 border-slate-800">
        {apiData?.data[0] && (
          <Link
            href={apiData.data[0] ? "/artwork/" + apiData.data[0].id : "/"}
            className="border-2 border-slate-800 hover:scale-105 rounded-lg hover:z-20 all-transition duration-300 ease-in-out bg-orange-300 row-start-1 row-end-4 col-start-1 col-end-3 md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-3 lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-3 cursor-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ImageApi
              image_id={apiData.data[0].image_id}
              title={apiData.data[0].title}
              specialeClass="object-cover"
            />
          </Link>
        )}
        {apiData?.data[1] && (
          <Link
            href={apiData.data[1] ? "/artwork/" + apiData.data[1].id : "/"}
            className="border-2 border-slate-800 hover:scale-105 rounded-lg hover:z-20 all-transition duration-300 ease-in-out bg-red-300 row-start-4 row-end-6 col-start-1 col-end-3 md:col-start-4 md:col-end-7 md:row-start-1 md:row-end-4 lg:col-start-4 lg:col-end-6 lg:row-start-1 lg:row-end-3 cursor-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ImageApi
              image_id={apiData.data[1].image_id}
              title={apiData.data[1].title}
              specialeClass="object-cover"
            />
          </Link>
        )}
        {apiData?.data[2] && (
          <Link
            href={apiData.data[2] ? "/artwork/" + apiData.data[2].id : "/"}
            className="border-2 border-slate-800 hover:scale-105 rounded-lg hover:z-20 all-transition duration-300 ease-in-out bg-pink-300 row-start-6 row-end-7 col-start-1 col-end-3 md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-5 lg:col-start-6 lg:col-end-7 lg:row-start-1 lg:row-end-3 cursor-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ImageApi
              image_id={apiData.data[2].image_id}
              title={apiData.data[2].title}
              specialeClass="object-cover"
            />
          </Link>
        )}
        {apiData?.data[3] && (
          <Link
            href={apiData.data[3] ? "/artwork/" + apiData.data[3].id : "/"}
            className="border-2 border-slate-800 hover:scale-105 rounded-lg hover:z-20 all-transition duration-300 ease-in-out bg-red-200 row-start-7 row-end-11 col-start-1 col-end-4 md:col-start-2 md:col-end-4 md:row-start-3 md:row-end-5 lg:col-start-7 lg:col-end-11 lg:row-start-1 lg:row-end-4 z-10 md:z-0 lg:z-10 cursor-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ImageApi
              image_id={apiData.data[3].image_id}
              title={apiData.data[3].title}
              specialeClass="object-cover"
            />
          </Link>
        )}
        {apiData?.data[4] && (
          <Link
            href={apiData.data[4] ? "/artwork/" + apiData.data[4].id : "/"}
            className="border-2 border-slate-800 hover:scale-105 rounded-lg hover:z-20 all-transition duration-300 ease-in-out bg-amber-200 row-start-1 row-end-1 col-start-3 col-end-5 md:col-start-3 md:col-end-5 md:row-start-4 md:row-end-6 lg:col-start-1 lg:col-end-1 lg:row-start-3 lg:row-end-5 z-0 md:z-10 lg:z-0 cursor-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ImageApi
              image_id={apiData.data[4].image_id}
              title={apiData.data[4].title}
              specialeClass="object-cover"
            />
          </Link>
        )}
        {apiData?.data[5] && (
          <Link
            href={apiData.data[5] ? "/artwork/" + apiData.data[5].id : "/"}
            className="border-2 border-slate-800 hover:scale-105 rounded-lg hover:z-20 all-transition duration-300 ease-in-out bg-orange-200 row-start-2 row-end-4 col-start-3 col-end-5 md:col-start-5 md:col-end-7 md:row-start-4 md:row-end-5 lg:col-start-2 lg:col-end-4 lg:row-start-3 lg:row-end-5 cursor-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ImageApi
              image_id={apiData.data[5].image_id}
              title={apiData.data[5].title}
              specialeClass="object-cover"
            />
          </Link>
        )}
        {apiData?.data[6] && (
          <Link
            href={apiData.data[6] ? "/artwork/" + apiData.data[6].id : "/"}
            className="border-2 border-slate-800 hover:scale-105 rounded-lg hover:z-20 all-transition duration-300 ease-in-out bg-pink-300 row-start-4 row-end-6 col-start-3 col-end-5 md:col-start-1 md:col-end-2 md:row-start-5 md:row-end-7 lg:col-start-4 lg:col-end-6 lg:row-start-3 lg:row-end-5 cursor-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ImageApi
              image_id={apiData.data[6].image_id}
              title={apiData.data[6].title}
              specialeClass="object-cover"
            />
          </Link>
        )}
        {apiData?.data[7] && (
          <Link
            href={apiData.data[7] ? "/artwork/" + apiData.data[0].id : "/"}
            className="border-2 border-slate-800 hover:scale-105 rounded-lg hover:z-20 all-transition duration-300 ease-in-out bg-orange-400 row-start-3 row-end-5 col-start-2 col-end-4 md:col-start-2 md:col-end-4 md:row-start-5 md:row-end-7 lg:col-start-3 lg:col-end-5 lg:row-start-2 lg:row-end-4 z-10 md:z-0 lg:z-10 cursor-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ImageApi
              image_id={apiData.data[7].image_id}
              title={apiData.data[7].title}
              specialeClass="object-cover"
            />
          </Link>
        )}
        {apiData?.data[8] && (
          <Link
            href={apiData.data[8] ? "/artwork/" + apiData.data[8].id : "/"}
            className="border-2 border-slate-800 hover:scale-105 rounded-lg hover:z-20 all-transition duration-300 ease-in-out bg-amber-300 row-start-6 row-end-8 col-start-3 col-end-5 md:col-start-4 md:col-end-6 md:row-start-5 md:row-end-7 lg:col-start-6 lg:col-end-8 lg:row-start-3 lg:row-end-5 cursor-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ImageApi
              image_id={apiData.data[8].image_id}
              title={apiData.data[8].title}
              specialeClass="object-cover"
            />
          </Link>
        )}
        {apiData?.data[9] && (
          <Link
            href={apiData.data[9] ? "/artwork/" + apiData.data[9].id : "/"}
            className="border-2 border-slate-800 hover:scale-105 rounded-lg hover:z-20 all-transition duration-300 ease-in-out bg-red-300 row-start-8 row-end-11 col-start-4 col-end-5 md:col-start-6 md:col-end-7 md:row-start-5 md:row-end-7 lg:col-start-8 lg:col-end-11 lg:row-start-4 lg:row-end-5 cursor-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ImageApi
              image_id={apiData.data[9].image_id}
              title={apiData.data[9].title}
              specialeClass="object-cover"
            />
          </Link>
        )}
      </div>
    </div>
  );
}
