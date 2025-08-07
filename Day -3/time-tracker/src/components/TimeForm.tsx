import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface Props {
  onAdd: (activity: string, hours: number) => void;
}

const TimeForm = ({ onAdd }: Props) => {
  const [activity, setActivity] = useState("");
  const [hours, setHours] = useState("");

  const handleSubmit = () => {
    if (!activity.trim() || !hours) return alert("Fill the Tracker");
    onAdd(activity, Number(hours));

    setActivity("");
    setHours("");
  };
  return (
    <>
      <div>
        <Input
          type="text"
          placeholder="Activity (e.g., Coding)"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className="w-full mb-4"
        />
        <Input
          type="text"
          placeholder="Hours (e.g., 8)"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="w-full mb-4"
        />

        <Button className="w-full  text-white " onClick={handleSubmit}>
          Add
        </Button>
      </div>
    </>
  );
};

export default TimeForm;
