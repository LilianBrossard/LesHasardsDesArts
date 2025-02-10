"use client";
import ImageApi from "@/components/ImageApi";
import { AllLoadContext } from "@/context/AllLoadContext";
import callApi from "@/components/CallApi";
import ArrowDown from "@/components/ArrowDown";
import { useParams } from "next/navigation";
import { useRef, useEffect, useContext, useState } from "react";
import { LoaderContext } from "@/context/LoaderContext";

export default function ArtPrev() {
  const params = useParams<{ id: string }>();
  // Route -> /artwork/[id]
  const allLoadContext = useContext(AllLoadContext);

  const [apiData, setApiData] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await callApi({ id: params.id });
      setApiData(result);
      await new Promise((resolve) => setTimeout(resolve, 500));
      allLoadContext?.setAllLoad(true);
    };
    fetchData();
  }, []);

  const RefArt1 = useRef<HTMLDivElement>(null);
  const loaderContext = useContext(LoaderContext);
  useEffect(() => {
    if (loaderContext?.loader) {
      setTimeout(() => {
        RefArt1.current?.classList.add("scale-100");
        RefArt1.current?.classList.remove("scale-0");
      }, 700);
    }
  }, [loaderContext]);

  return (
    <div className="w-full overflow-hidden flex flex-col justify-start">
      <div className="w-full h-screen overflow-hidden flex flex-row items-center justify-center">
        <ArrowDown />
        <div
          className="rounded-md w-full lg:w-1/2 h-1/2 relative flex flex-col items-center justify-center scale-0 all-transition duration-700 ease-in-out"
          ref={RefArt1}
        >
          {apiData && apiData.data && (
            <ImageApi
              image_id={apiData.data.image_id}
              title={apiData.data.title}
            />
          )}
          {apiData && apiData.data.title && (
            <h5 className="">
              {apiData.data.title}{" "}
              {apiData.data.artist_title
                ? " - " + apiData.data.artist_title
                : ""}
            </h5>
          )}
        </div>
      </div>
      <hr className="bg-slate-950 h-1" />
      <div className="w-full overflow-visible px-2 lg:px-64 border-x-slate-500 border-x-1 border-x-solid">
        {apiData && apiData.data.title && (
          <div className="bg-red-200">
            <h2 className="p-2 text-slate-950 text-4xl font-bold">
              {apiData.data.title}
              {apiData.data.date_display
                ? " - " + apiData.data.date_display
                : ""}
            </h2>
          </div>
        )}
        <div className="w-full h-[2px] bg-slate-600 opacity-40" />
        {apiData && apiData.data.artist_display && (
          <h5 className="p-2 text-slate-900 text-2xl">
            {"By : " + apiData.data.artist_display}
          </h5>
        )}
        <div className="w-full h-[2px] bg-slate-600 opacity-40" />
        {apiData &&
          (apiData.data.description || apiData.data.short_description) && (
            <h5 className="p-4 text-slate-900 text-xl">
              {apiData.data.description
                ? apiData.data.description
                : apiData.data.short_description}
            </h5>
          )}
        <hr />
        {apiData && apiData.data.place_of_origin && (
          <h5 className="p-2 text-slate-900 text-xl">
            {"Place of origin: " + apiData.data.place_of_origin}
          </h5>
        )}
        <hr />
        {apiData && apiData.data.artwork_type_title && (
          <h5 className="p-2 text-slate-900 text-xl">
            {"Artwork type: " + apiData.data.artwork_type_title}
          </h5>
        )}
        <hr />
        {apiData && apiData.data.medium_display && (
          <h5 className="p-2 text-slate-900 text-xl">
            {"Materials used: " + apiData.data.medium_display}
          </h5>
        )}
        <hr />
        {apiData && apiData.data.dimensions && (
          <h5 className="p-2 text-slate-900 text-xl">
            {"Dimensions of the artwork: " + apiData.data.dimensions}
          </h5>
        )}
        <hr />
        {apiData &&
          apiData.data.category_titles &&
          apiData.data.category_titles.length > 0 && (
            <div>
              <h5 className="p-2 text-slate-900 text-xl">
                Associated categories:
              </h5>
              <ul className="list-disc list-inside">
                {apiData.data.category_titles.map(
                  (category: string, index: number) => (
                    <li key={index} className="p-2 text-slate-900 text-lg">
                      {category}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        <hr />
        {apiData &&
          apiData.data.style_titles &&
          apiData.data.style_titles.length > 0 && (
            <div>
              <h5 className="p-2 text-slate-900 text-xl">Artistic style:</h5>
              <ul className="list-disc list-inside">
                {apiData.data.style_titles.map(
                  (style: string, index: number) => (
                    <li key={index} className="p-2 text-slate-900 text-lg">
                      {style}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        <hr />
        {apiData &&
          apiData.data.subject_titles &&
          apiData.data.subject_titles.length > 0 && (
            <div>
              <h5 className="p-2 text-slate-900 text-xl">
                Subjects addressed in the work:
              </h5>
              <ul className="list-disc list-inside">
                {apiData.data.subject_titles.map(
                  (subject: string, index: number) => (
                    <li key={index} className="p-2 text-slate-900 text-lg">
                      {subject}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
      </div>
    </div>
  );
}
