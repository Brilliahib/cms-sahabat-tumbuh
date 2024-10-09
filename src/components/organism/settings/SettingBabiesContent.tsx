"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { useToast } from "@/hooks/use-toast";
import { useGetBaby } from "@/http/babies/get-babies";
import { babiesSchema, BabiesType } from "@/validators/babies/babies-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { format, parseISO } from "date-fns";
import { useUpdateBabies } from "@/http/babies/update-babies";

export default function SettingsBabiesContent() {
  const { toast } = useToast();
  const router = useRouter();
  const { data: session, status } = useSession();
  const { data } = useGetBaby(session?.access_token as string, {
    enabled: status === "authenticated",
  });

  const mapGender = (
    gender: string | undefined
  ): "male" | "female" | "other" | undefined => {
    if (gender === "male" || gender === "female" || gender === "other") {
      return gender;
    }
    return undefined;
  };

  const birthDate = data?.data.birth_date
    ? typeof data.data.birth_date === "string"
      ? data.data.birth_date
      : format(new Date(data.data.birth_date), "yyyy-MM-dd")
    : undefined;

  const form = useForm<BabiesType>({
    defaultValues: {
      name: data?.data.name,
      birth_date: birthDate,
      gender: mapGender(data?.data.gender),
      weight: data?.data.weight,
      height: data?.data.height,
    },
    mode: "onChange",
    resolver: zodResolver(babiesSchema),
  });

  const { mutate: updateBabiesHandler, isPending } = useUpdateBabies({
    onError: () => {
      toast({
        title: "Gagal Mengubah",
        description:
          "Gagal mengubah informasi akun, cek kembali dan coba lagi!",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      toast({
        title: "Berhasil Mengubah",
        description: "Informasi akun berhasil diubah!",
        variant: "success",
      });
      router.refresh();
    },
  });

  const onSubmit = (body: BabiesType) => {
    const submitData = {
      ...body,
      birth_date: body.birth_date
        ? format(new Date(body.birth_date), "yyyy-MM-dd")
        : "",
    };
    updateBabiesHandler(submitData);
  };

  return (
    <>
      <div className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Informasi Anak</CardTitle>
            <CardDescription>
              Mohon tidak untuk menyebarluaskan informasi.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                className="space-y-5 pt-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Lengkap</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          id="name"
                          placeholder="Masukkan nama lengkap"
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
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jenis Kelamin</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          id="gender"
                          placeholder="Masukkan jenis kelamin (male, female, other)"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end">
                  <Button type="submit" disabled={isPending}>
                    {isPending ? "Loading..." : "Simpan"}
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
