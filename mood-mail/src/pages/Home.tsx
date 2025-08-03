import MoodInput from "@/components/MoodInput";
import MoodOutput from "@/components/MoodOutput";
import { useState } from "react";

const Home = () => {
  const [mood, setMood] = useState("");
  const [subject, setSubject] = useState("");
  const [footer, setFooter] = useState("");
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    const lowerMood = mood.toLowerCase();
    if (lowerMood.includes("happy")) {
      setSubject("Happy Mood");
      setFooter("Today is My Day");
    } else if (lowerMood.includes("sad")) {
      setSubject("Sad Mood");
      setFooter("It will Be Alright");
    } else if (lowerMood.includes("Anger")) {
      setSubject("Anger Mood");
      setFooter("It will be alright, be calm");
    } else {
      setSubject("Mood Update");
      setFooter("Catch You Later");
    }
    setGenerated(true);
  };

  const handleReset = () => {
    setMood("");
    setSubject("");
    setFooter("");
    setGenerated(false);
  };

  return (
    <>
      <div className=" max-w-xl mt-20 mx-auto p-6 bg-white shadow-sm rounded-lg  border space-y-6">
        <h1 className="font-bold text-2xl text-gray-800">
          Mood Mail Generator
        </h1>
        <div className="mt-4">
          {!generated ? (
            <MoodInput
              mood={mood}
              setMood={setMood}
              onGenerate={handleGenerate}
              disabled={generated}
            />
          ) : (
            <MoodOutput
              subject={subject}
              footer={footer}
              onReset={handleReset}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
