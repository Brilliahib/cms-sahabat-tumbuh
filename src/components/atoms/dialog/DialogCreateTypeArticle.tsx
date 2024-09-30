import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useAddTypeArticle } from "@/http/article/add-type-article";
import {
  typeArticleSchema,
  TypeArticleType,
} from "@/validators/article/type-article-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface DialogCreateTypeArticleProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function DialogCreateTypeArticles({
  open,
  setOpen,
}: DialogCreateTypeArticleProps) {
  const form = useForm<TypeArticleType>({
    resolver: zodResolver(typeArticleSchema),
    defaultValues: {
      name: "",
    },
    mode: "onChange",
  });
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();

  const { mutate: addBabyHandler, isPending } = useAddTypeArticle({
    onError: (error: AxiosError<any>) => {
      toast({
        title: "Gagal menambahkan tipe artikel!",
        description: error.response?.data.message,
        variant: "destructive",
      });
    },
    onSuccess: () => {
      toast({
        title: "Berhasil menambahkan tipe artikel!",
        variant: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["type-articles"],
      });
      router.refresh();
    },
  });

  const onSubmit = (body: TypeArticleType) => {
    addBabyHandler({ ...body });
    setOpen(false);
  };
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Tambah Tipe Artikel</DialogTitle>
          </DialogHeader>
          <div>
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
                      <FormLabel>Nama Tipe</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Masukkan nama tipe artikel"
                          {...field}
                        />
                      </FormControl>
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
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
