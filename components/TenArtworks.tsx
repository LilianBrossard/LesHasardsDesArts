"use client";
import { useEffect, useState } from "react";
import callApi from "@/components/CallApi";
import ArtworkCard from "@/components/ArtworkCard";

export default function TenArtworks() {
  const [apiData, setApiData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await callApi({});
      setApiData(result);
      await new Promise((resolve) => setTimeout(resolve, 500));
    };
    fetchData();
  }, []);

  return (
    <div className="w-full">
      {apiData?.data[0] && (
        <div className="w-full h-[50vh] lg:h-screen px-2 lg:px-16 py-4 lg:py-16 flex flex-row justify-center items-center">
          <ArtworkCard
            image_id={apiData.data[0].image_id}
            title={apiData.data[0].title}
            lien={`/artwork/${apiData.data[0].id}`}
            info={apiData.data[0].artist_display}
          />
        </div>
      )}
      {apiData?.data[1] && (
        <div className="w-full h-[50vh] lg:h-screen px-2 lg:px-16 py-8 lg:py-16 flex flex-row justify-center items-center">
          <ArtworkCard
            image_id={apiData.data[1].image_id}
            title={apiData.data[1].title}
            lien={`/artwork/${apiData.data[1].id}`}
            info={apiData.data[1].artist_display}
          />
        </div>
      )}
      {apiData?.data[2] && (
        <div className="w-full h-[50vh] lg:h-screen px-2 lg:px-16 py-4 lg:py-16 flex flex-row justify-center items-center">
          <ArtworkCard
            image_id={apiData.data[2].image_id}
            title={apiData.data[2].title}
            lien={`/artwork/${apiData.data[2].id}`}
            info={apiData.data[2].artist_display}
          />
        </div>
      )}
      {apiData?.data[3] && (
        <div className="w-full h-[50vh] lg:h-screen px-2 lg:px-16 py-4 lg:py-16 flex flex-row justify-center items-center">
          <ArtworkCard
            image_id={apiData.data[3].image_id}
            title={apiData.data[3].title}
            lien={`/artwork/${apiData.data[3].id}`}
            info={apiData.data[3].artist_display}
          />
        </div>
      )}
      {apiData?.data[4] && (
        <div className="w-full h-[50vh] lg:h-screen px-2 lg:px-16 py-4 lg:py-16 flex flex-row justify-center items-center">
          <ArtworkCard
            image_id={apiData.data[4].image_id}
            title={apiData.data[4].title}
            lien={`/artwork/${apiData.data[4].id}`}
            info={apiData.data[4].artist_display}
          />
        </div>
      )}
      {apiData?.data[5] && (
        <div className="w-full h-[50vh] lg:h-screen px-2 lg:px-16 py-4 lg:py-16 flex flex-row justify-center items-center">
          <ArtworkCard
            image_id={apiData.data[5].image_id}
            title={apiData.data[5].title}
            lien={`/artwork/${apiData.data[5].id}`}
            info={apiData.data[5].artist_display}
          />
        </div>
      )}
      {apiData?.data[6] && (
        <div className="w-full h-[50vh] lg:h-screen px-2 lg:px-16 py-4 lg:py-16 flex flex-row justify-center items-center">
          <ArtworkCard
            image_id={apiData.data[6].image_id}
            title={apiData.data[6].title}
            lien={`/artwork/${apiData.data[6].id}`}
            info={apiData.data[6].artist_display}
          />
        </div>
      )}
      {apiData?.data[7] && (
        <div className="w-full h-[50vh] lg:h-screen px-2 lg:px-16 py-4 lg:py-16 flex flex-row justify-center items-center">
          <ArtworkCard
            image_id={apiData.data[7].image_id}
            title={apiData.data[7].title}
            lien={`/artwork/${apiData.data[7].id}`}
            info={apiData.data[7].artist_display}
          />
        </div>
      )}
      {apiData?.data[8] && (
        <div className="w-full h-[50vh] lg:h-screen px-2 lg:px-16 py-4 lg:py-16 flex flex-row justify-center items-center">
          <ArtworkCard
            image_id={apiData.data[8].image_id}
            title={apiData.data[8].title}
            lien={`/artwork/${apiData.data[8].id}`}
            info={apiData.data[8].artist_display}
          />
        </div>
      )}
      {apiData?.data[9] && (
        <div className="w-full h-[50vh] lg:h-screen px-2 lg:px-16 py-4 lg:py-16 flex flex-row justify-center items-center">
          <ArtworkCard
            image_id={apiData.data[9].image_id}
            title={apiData.data[9].title}
            lien={`/artwork/${apiData.data[9].id}`}
            info={apiData.data[9].artist_display}
          />
        </div>
      )}
    </div>
  );
}
