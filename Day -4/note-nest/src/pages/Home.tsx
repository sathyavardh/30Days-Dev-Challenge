import NoteForm from "@/components/NoteForm";
import NoteList from "@/components/NoteList";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex items-center flex-col justify-center px-4 py-8 bg-gray-50 max-w-screen-sm mx-auto w-full">
        <div className="w-full">
          <h1 className="mb-6 text-3xl font-bold text-center">📝NoteNest</h1>
        </div>
        <div className="p-6 bg-white shadow rounded-lg w-full">
          {/* noteform */}
          <NoteForm />
        </div>
        <div className="w-full">
          <NoteList />
        </div>
      </div>
    </>
  );
};

export default Home;
