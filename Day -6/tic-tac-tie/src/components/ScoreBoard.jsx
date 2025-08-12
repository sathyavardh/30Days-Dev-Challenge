import React from "react";

const ScoreBoard = ({ score }) => {
  console.log(score);
  return (
    <>
      <div className="flex flex-row justify-between w-[300px] mb-3 text-lg font-semibold">
        <div className="text-[#3bbdf8]">You (X) : {score.X}</div>
        <div className="text-[#f472b6]">Ai (O) : {score.O}</div>
      </div>
    </>
  );
};

export default ScoreBoard;
