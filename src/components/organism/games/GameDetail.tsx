"use client";

import GameTitle from "@/components/atoms/typography/GameTitle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useGetDetailGames } from "@/http/games/get-detail-games";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Toggle } from "@/components/ui/toggle";

interface GameDetailProps {
  id: number;
}

export default function GameDetail({ id }: GameDetailProps) {
  const session = useSession();
  const { data, isPending } = useGetDetailGames(
    {
      token: session.data?.access_token as string,
      id,
    },
    { enabled: session.status === "authenticated" }
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoices, setSelectedChoices] = useState<number[][]>([]);

  if (isPending) {
    return <p>Loading...</p>;
  }

  const questions = data?.data.questions || [];

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleToggle = (choiceIndex: number) => {
    setSelectedChoices((prev) => {
      const currentSelections = prev[currentQuestionIndex] || [];
      if (currentSelections.includes(choiceIndex)) {
        return prev.map((selections, index) =>
          index === currentQuestionIndex
            ? selections.filter((index) => index !== choiceIndex)
            : selections
        );
      }
      return prev.map((selections, index) =>
        index === currentQuestionIndex
          ? [...selections, choiceIndex]
          : selections
      );
    });
  };

  const goToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  return (
    <>
      <GameTitle
        title={data?.data.title ?? "Not Found"}
        type={data?.data.type ?? "Not Found"}
      />
      <div className="md:flex gap-4 w-full">
        <div className="md:w-9/12">
          {questions.length > 0 && (
            <Card className="mb-4">
              <CardContent>
                <div className="flex flex-col mb-8">
                  <CardTitle className="mt-6 font-bold md:text-xl text-md">
                    {questions[currentQuestionIndex].question_text}
                  </CardTitle>
                </div>
                <CardDescription>
                  <ul className="space-y-2">
                    {questions[currentQuestionIndex].choices.map(
                      (choice, choiceIndex) => (
                        <li key={choiceIndex}>
                          <Toggle
                            pressed={selectedChoices[
                              currentQuestionIndex
                            ]?.includes(choiceIndex)}
                            onClick={() => handleToggle(choiceIndex)}
                            className="p-2 rounded-md text-black justify-start pl-4 md:text-base text-sm"
                          >
                            {choice.choice_text}
                          </Toggle>
                        </li>
                      )
                    )}
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>
          )}
        </div>
        <div className="flex flex-col space-y-4 md:w-3/12">
          <Card>
            <CardContent className="space-y-4">
              <div className="md:mt-6 mt-4 text-center">
                <h1 className="font-bold">Jumlah Soal</h1>
              </div>
              <div className="flex grid grid-cols-4 gap-4">
                {questions.map((_, index) => (
                  <Button
                    key={index}
                    onClick={() => goToQuestion(index)}
                    className={`p-2 rounded-md bg-transparent text-black hover:text-white ${
                      currentQuestionIndex === index
                        ? "bg-primary text-white"
                        : "border border-primary"
                    }`}
                  >
                    {index + 1}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
