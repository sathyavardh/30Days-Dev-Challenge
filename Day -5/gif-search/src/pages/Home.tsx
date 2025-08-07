import GifGrid from "@/components/GifGrid";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";

const Home = () => {
  const [query, setQuery] = useState("");
  console.log('query',query);

  return (
    <>
      <div>
        <h2 className="font-bold text-2xl text-center">Gif Quest</h2>
        <SearchBar query={query} setQuery={setQuery} />
        <GifGrid query={query}/>
      </div>
    </>
  );
};

export default Home;
