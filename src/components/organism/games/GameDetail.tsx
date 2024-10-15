"use client";

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
import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import { useSubmitGames } from "@/http/games/submit-games";
import { AxiosError } from "axios";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { baseUrl } from "@/utils/app";

interface GameDetailProps {
  id: number;
}

export default function GameDetail({ id }: GameDetailProps) {
  const session = useSession();
  const { toast } = useToast();
  const router = useRouter();
  const { data, isPending } = useGetDetailGames(
    {
      token: session.data?.access_token as string,
      id,
    },
    { enabled: session.status === "authenticated" }
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoices, setSelectedChoices] = useState<Map<number, number>>(
    new Map()
  );

  const { mutate: submitGame, isPending: isSubmitting } = useSubmitGames({
    onError: (error: AxiosError<any>) => {
      toast({
        title: "Gagal mengirimkan game!",
        description: error.response?.data.message || "Terjadi kesalahan",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      toast({
        title: "Game berhasil disubmit!",
        variant: "success",
      });
      router.push("/dashboard/games");
    },
  });

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

  const handleToggle = (choiceId: number) => {
    setSelectedChoices((prev) => {
      const newSelections = new Map(prev);
      newSelections.set(currentQuestionIndex, choiceId);
      return newSelections;
    });
  };

  const goToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const handleSubmitGame = () => {
    const answers = questions.map((question, index) => ({
      question_id: question.question_id,
      choice_id: selectedChoices.get(index) ?? -1,
    }));
    submitGame({ gameId: id, answers });
  };

  return (
    <>
      <DashboardTitle title={data?.data.title ?? "Tidak ditemukan"} />
      <div className="md:flex gap-4 w-full py-6">
        <div className="md:w-9/12">
          {questions.length > 0 && (
            <Card className="mb-4">
              <CardContent>
                <div className="flex flex-col mb-8 mt-6">
                  <Image
                    src={`${baseUrl}/${questions[currentQuestionIndex].question_image}`}
                    alt={questions[currentQuestionIndex].question_text}
                    width={1000}
                    height={1000}
                    className="max-h-[300px] w-fit rounded-xl"
                  />
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
                            pressed={
                              selectedChoices.get(currentQuestionIndex) ===
                              choice.choice_id
                            }
                            onClick={() => handleToggle(choice.choice_id)}
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
              <div className="flex grid grid-cols-5 gap-4">
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
              <div className="mt-4">
                <Button
                  onClick={handleSubmitGame}
                  className="w-full gap-2 shadow-md"
                  disabled={isSubmitting}
                >
                  <Check className="h-4 w-4" /> Selesai
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
