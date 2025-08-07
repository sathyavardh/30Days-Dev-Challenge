import { Button } from "./ui/button";
import { Input } from "./ui/input";

type Props = {
  mood: string;
  setMood: (val: string) => void;
  onGenerate: () => void;
  disabled: boolean;
};

const MoodInput = ({ mood, setMood, onGenerate, disabled }: Props) => {
  return (
    <>
      <div className="space-y-4">
        <Input
          placeholder="How are feeling today? (happy, sad, angry,..)"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onGenerate();
            }
          }}
          disabled={disabled}
        />
        <Button className="w-full" onClick={onGenerate} disabled={disabled}>
          Generate Email Template
        </Button>
      </div>
    </>
  );
};

export default MoodInput;
