import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

type Props = {
  subject: string;
  footer: string;
  onReset: () => void;
};

const MoodOutput = ({ subject, footer, onReset }: Props) => {
  return (
    <>
      <div className="space-y-4">
        <div>
          <label className="block font-medium">Subject:</label>
          <Input value={subject} readOnly />
        </div>

        <div>
          <label className="block font-medium">Footer Signature:</label>
          <Textarea value={footer} readOnly />
        </div>
        <Button variant="destructive" className="w-full" onClick={onReset}>
          Reset
        </Button>
      </div>
    </>
  );
};

export default MoodOutput;
