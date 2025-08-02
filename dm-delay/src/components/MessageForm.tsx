import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

const MessageForm = () => {
    const [message, setMessage] = useState<string>("");
    const [delay, setDelay] = useState<number>(0);
    const [isSending, setIsSending] = useState<boolean>(false);
    const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
    const [sentMessage, setSentMessage] = useState<string>("");

    const handleSend = () => {
        setIsSending(true);

        const id = setTimeout(() => {
            setSentMessage(message);
            setMessage("");
            setIsSending(false);
        }, delay * 1000);
        setTimerId(id);
        console.log("message:", message);
    };

    const handleCancel = () => {
        if (timerId) clearTimeout(timerId);
        setIsSending(false);
    }

    return (
        <div className="max-w-md mx-auto mt-20 p-6 border shadow-sm bg-white space-y-4">
            <h1 className="text-2xl font-bold text-gray-800">Dm Delay Button</h1>
            <Textarea
                placeholder="Type Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <Input
                placeholder="Delay in sec"
                value={delay}
                onChange={(e) => setDelay(Number(e.target.value))}
                disabled={isSending}
            />

            {!isSending ? (
                <Button className="w-full" onClick={handleSend}>
                    Sent with delay
                </Button>
            ) : (
                <Button className="w-full" variant="destructive" onClick={handleCancel}>
                    Cancel Sending
                </Button>
            )}

            {sentMessage && (
                <div className="bg-green-100 border rounded p-3 text-green-900">
                    <p className="font-semibold">Message Sent:</p>
                    <p>{sentMessage}</p>
                </div>
            )}


        </div>
    );
};

export default MessageForm;
