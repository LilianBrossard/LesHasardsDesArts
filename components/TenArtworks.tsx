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

  // Pattern de décalage pour créer un effet mosaïque
  const offsets = [
    "lg:ml-0", // 0
    "lg:ml-[15%]", // 1
    "lg:ml-[5%]", // 2
    "lg:ml-[25%]", // 3
    "lg:ml-[10%]", // 4
    "lg:ml-[20%]", // 5
    "lg:ml-0", // 6
    "lg:ml-[18%]", // 7
    "lg:ml-[8%]", // 8
    "lg:ml-[15%]", // 9
  ];

  const widths = [
    "lg:w-[70%]", // 0
    "lg:w-[60%]", // 1
    "lg:w-[75%]", // 2
    "lg:w-[55%]", // 3
    "lg:w-[65%]", // 4
    "lg:w-[60%]", // 5
    "lg:w-[70%]", // 6
    "lg:w-[65%]", // 7
    "lg:w-[68%]", // 8
    "lg:w-[62%]", // 9
  ];

  return (
    <div className="w-full space-y-8 lg:space-y-12">
      {apiData?.data?.map(
        (artwork: any, index: number) =>
          artwork && (
            <div
              key={artwork.id || index}
              className={`w-full px-4 transition-all duration-500 ${offsets[index]} ${widths[index]}`}
            >
              <ArtworkCard
                image_id={artwork.image_id}
                title={artwork.title}
                lien={`/artwork/${artwork.id}`}
                info={artwork.artist_display}
              />
            </div>
          )
      )}
    </div>
  );
}
