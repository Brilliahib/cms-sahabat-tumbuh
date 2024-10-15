"use client";

import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
import { useAddBabies } from "@/http/babies/add-babies";
import { babiesSchema, BabiesType } from "@/validators/babies/babies-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function AddBabyForm() {
  const form = useForm<BabiesType>({
    resolver: zodResolver(babiesSchema),
    defaultValues: {
      name: "",
      birth_date: "",
      gender: "male", // default to male
      weight: 0,
      height: 0,
    },
    mode: "onChange",
  });
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();

  const { mutate: addBabyHandler, isPending } = useAddBabies({
    onError: (error: AxiosError<any>) => {
      toast({
        title: "Gagal menambahkan data anak!",
        description: error.response?.data.message,
        variant: "destructive",
      });
    },
    onSuccess: () => {
      toast({
        title: "Berhasil menambahkan data anak!",
        variant: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["babies"],
      });
      router.refresh();
    },
  });

  const onSubmit = (body: BabiesType) => {
    addBabyHandler({ ...body });
  };

  return (
    <>
      <DashboardTitle title="Isi Data Anak" />
      <div className="my-6">
        <Card className="border !shadow-md">
          <CardContent>
            <Form {...form}>
              <form
                className="space-y-5 pt-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className="flex grid md:grid-cols-2 grid-cols-1 md:gap-4 md:space-y-0 space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nama Anak</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            id="name"
                            placeholder="Masukkan nama anak"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="birth_date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tanggal Lahir</FormLabel>
                        <FormControl>
                          <Input type="date" id="birth_date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jenis Kelamin</FormLabel>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Pilih jenis kelamin" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Jenis Kelamin</SelectLabel>
                              <SelectItem value="male">Laki-laki</SelectItem>
                              <SelectItem value="female">Perempuan</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="weight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Berat Badan (kg)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Masukkan berat badan"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>*Contoh: 3.5</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="height"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tinggi Badan (cm)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Masukkan tinggi badan"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>*Contoh: 50</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end">
                  <Button type="submit" disabled={isPending}>
                    {isPending ? "Loading..." : "Tambahkan"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
