"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { gameSchema, GameType } from "@/validators/games/games-validator";
import { useAddGame } from "@/http/games/add-games";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export default function GameCreateContent() {
  const form = useForm<GameType>({
    resolver: zodResolver(gameSchema),
    defaultValues: {
      title: "",
      type_id: undefined,
      questions: [
        {
          question_text: "",
          choices: [
            { choice_text: "", is_correct: false },
            { choice_text: "", is_correct: false },
            { choice_text: "", is_correct: false },
            { choice_text: "", is_correct: false },
          ],
        },
      ],
    },
    mode: "onChange",
  });

  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();

  const { mutate: addGameHandler, isPending } = useAddGame({
    onError: (error: AxiosError<any>) => {
      toast({
        title: "Gagal menambahkan game!",
        description: error.response?.data.message,
        variant: "destructive",
      });
    },
    onSuccess: () => {
      toast({
        title: "Berhasil menambahkan game!",
        variant: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["game-list"],
      });
      router.push("/dashboard/admin/games");
    },
  });

  const { fields: questionFields, append: appendQuestion } = useFieldArray({
    control: form.control,
    name: "questions",
  });

  const onSubmit = (body: GameType) => {
    addGameHandler(body);
  };

  return (
    <div className="w-full mt-6">
      <Card className="shadow-md">
        <CardContent className="py-4">
          <Form {...form}>
            <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Judul Game</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Masukkan judul game"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="type_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipe Game</FormLabel>
                    <FormControl>
                      <Select
                        value={String(field.value)}
                        onValueChange={(value) => field.onChange(Number(value))}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Pilih tipe game" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Tipe Game</SelectLabel>
                            <SelectItem value="1">Trivia</SelectItem>
                            <SelectItem value="2">Puzzle</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {questionFields.map((question, questionIndex) => (
                <div
                  key={question.id}
                  className="border rounded-lg p-4 mb-4 space-y-4"
                >
                  <FormField
                    control={form.control}
                    name={`questions.${questionIndex}.question_text`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pertanyaan ke {questionIndex + 1}</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder={`Masukkan pertanyaan`}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    {form
                      .getValues(`questions.${questionIndex}.choices`)
                      .map((choice, choiceIndex) => (
                        <div key={choiceIndex} className="space-y-2">
                          <FormField
                            control={form.control}
                            name={`questions.${questionIndex}.choices.${choiceIndex}.choice_text`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Pilihan {choiceIndex + 1}</FormLabel>
                                <FormControl>
                                  <Input
                                    type="text"
                                    placeholder="Masukkan pilihan jawaban"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name={`questions.${questionIndex}.choices.${choiceIndex}.is_correct`}
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <div className="flex items-center gap-2 text-muted-foreground">
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                    <p className="text-sm">Jawaban Benar</p>
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              ))}

              <Button
                type="button"
                onClick={() =>
                  appendQuestion({
                    question_text: "",
                    choices: [
                      { choice_text: "", is_correct: false },
                      { choice_text: "", is_correct: false },
                      { choice_text: "", is_correct: false },
                      { choice_text: "", is_correct: false },
                    ],
                  })
                }
              >
                Tambahkan Pertanyaan
              </Button>

              <div className="flex justify-end">
                <Button type="submit" disabled={isPending}>
                  {isPending ? "Loading..." : "Tambahkan Game"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
