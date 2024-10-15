"use client";

import DialogSpeakGuide from "@/components/atoms/dialog/DialogSpeakGuide";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircleHelp } from "lucide-react";
import { useState } from "react";

export default function SpeakContent() {
  const [text, setText] = useState<string>("");
  const [dialogGuideOpen, setDialogGuideOpen] = useState(false);

  const speak = (message: string) => {
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = "id-ID";
    window.speechSynthesis.speak(utterance);
  };

  const handleLetterClick = (letter: string) => {
    speak(letter);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSpeakClick = () => {
    speak(text);
  };

  const handleDialogGuideOpen = () => {
    setDialogGuideOpen(true);
  };

  return (
    <div className="space-y-8 py-6">
      <div className="flex flex-wrap justify-center gap-4">
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
          <Button
            key={letter}
            onClick={() => handleLetterClick(letter)}
            className="gap-8 p-8 font-bold text-xl"
          >
            {letter}
          </Button>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <Input
          type="text"
          placeholder="Ketik kalimat disini..."
          value={text}
          onChange={handleTextChange}
          className="max-w-xl"
        />

        <div className="">
          <Button onClick={handleSpeakClick}>Ucapkan</Button>
        </div>
      </div>
      <Button
        className="fixed md:right-8 bottom-4 right-4 border py-6 font-bold gap-2 bg-[#FEC91F] hover:bg-[#FEC91F] shadow-xl text-white"
        onClick={handleDialogGuideOpen}
      >
        <CircleHelp />
        Panduan Penggunaan
      </Button>
      <DialogSpeakGuide open={dialogGuideOpen} setOpen={setDialogGuideOpen} />
    </div>
  );
}
