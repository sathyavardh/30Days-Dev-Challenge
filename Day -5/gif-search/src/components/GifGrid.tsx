import { fetchGifs } from "@/lib/giphy";
import React, { useEffect, useState } from "react";

interface Props {
  query: string;
}

interface Gif {
  id: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
}


const GifGrid: React.FC<Props> = ({ query }) => {
 const [gifs, setGifs] = useState<Gif[]>([]);
  const [loading, setLoading] = useState(true);
  console.log(query);
  useEffect(() => {
    const getGifs = async () => {
      setLoading(true);
      try {
        const res = await fetchGifs(query);
        setGifs(res);
        console.log(res);
      } catch (error) {
        console.log("Error Fetching Gifs", error);
      } finally {
        setLoading(false);
      }
    };
    getGifs();
  }, [query]);

  if (loading) return <p>Loading Gifs...</p>;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-10">
        {gifs.map((gif) => (
          <img
            key={gif.id}
            src={gif.images.fixed_height.url}
            className="rounded-lg"
          />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
