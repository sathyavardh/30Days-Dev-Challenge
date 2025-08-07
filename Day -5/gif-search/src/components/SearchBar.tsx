import React from "react";
import { Input } from "./ui/input";

interface Props {
  query: string;
  setQuery: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ query, setQuery }) => {
  const handleEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <Input
        placeholder="Gif (eg.,happy, good)"
        className="w-full px-4 py-2 rounded-md shadow-md mt-10"
        value={query}
        onChange={handleEvent}
      />
    </>
  );
};

export default SearchBar;
