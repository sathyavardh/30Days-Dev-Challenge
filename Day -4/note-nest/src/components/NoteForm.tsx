import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import toast from "react-hot-toast";

const NoteForm = () => {
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  //It is going to hit the firebase server so modify the fun into async
  const handleSubmit = async () => {
    if (!note.trim()) {
      alert("Fill the note and submit");
      return;
    }
    setLoading(true);
    try {
      await addDoc(collection(db, "notes"), {
        content: note,
        createdAt: serverTimestamp(),
      });
      toast.success("Note Added Successfully");

      setNote("");
    } catch (error) {
      console.error("Error adding note:", error);
      toast.error("Failed to add note");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="space-y-4">
        <Input
          placeholder="Enter your Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          maxLength={50}
        />
        <div className="flex justify-between text-xs text-gray-500">
            <span>{note.length}/50</span>
        </div>
        <Button
          className="w-full mt-3"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Note"}
        </Button>
      </div>
    </>
  );
};

export default NoteForm;
