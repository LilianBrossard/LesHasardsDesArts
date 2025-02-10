"use client";

interface CallApiProps {
  id?: string;
}

const CallApi: React.FC<CallApiProps> = ({ id }) => {

  const fetchArtwork = async (id?: string) => {
    try {
      let url = "";
      if (id) {
        url = `https://api.artic.edu/api/v1/artworks/${id}`;
      } else {
        let randomId;
        randomId = Math.floor(Math.random() * 12761) + 1;
        url = `https://api.artic.edu/api/v1/artworks?limit=10&page=${randomId}`;
      }

      const response = await fetch(url);
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error fetching artwork:", error);
    }
    console.log("Appele API");
  };

  const responseData = fetchArtwork(id);

  return responseData;
};

export default CallApi;
