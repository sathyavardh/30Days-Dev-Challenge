import TimeChart from "@/components/TimeChart";
import TimeForm from "@/components/TimeForm";
import { useState } from "react";

const Home = () => {
  const [data, setData] = useState<{ activity: string; hours: number }[]>([]);

  const handleAdd = (activity: string, hours: number) => {
    console.log(activity, hours);
    // data.push({activity, hours}); normal js
    setData((prev) => [...prev, { activity, hours }]);
    console.log(data); //give only prev state

    //label ->chartjs
    //piechart ->react-chartjs-2
  };
  return (
    <>
      <div className="max-w-md mx-auto text-center space-y-4 bg-white p-6 rounded-lg shadow-md">
        <h2 className="font-bold text-2xl">⌚ Time Tracker</h2>
        <TimeForm onAdd={handleAdd} />
        <TimeChart data={data}/>
      </div>
    </>
  );
};

export default Home;
