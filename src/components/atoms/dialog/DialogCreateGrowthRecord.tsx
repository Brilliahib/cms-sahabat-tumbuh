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
import { useAddGrowthRecord } from "@/http/tracking/add-growth-record";
import {
  growthRecordSchema,
  GrowthRecordType,
} from "@/validators/tracking/growth-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface DialogCreateGrowthRecordProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function DialogCreateGrowthRecord({
  open,
  setOpen,
}: DialogCreateGrowthRecordProps) {
  const form = useForm<GrowthRecordType>({
    resolver: zodResolver(growthRecordSchema),
    defaultValues: {
      weight: 0,
      height: 0,
    },
    mode: "onChange",
  });
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();

  const { mutate: addBabyHandler, isPending } = useAddGrowthRecord({
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
        queryKey: ["growth-records"],
      });
      router.refresh();
    },
  });

  const onSubmit = (body: GrowthRecordType) => {
    addBabyHandler({ ...body });
    setOpen(false);
  };
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Tambah Data Pertumbuhan</DialogTitle>
          </DialogHeader>
          <div>
            <Form {...form}>
              <form
                className="space-y-5 pt-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
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
