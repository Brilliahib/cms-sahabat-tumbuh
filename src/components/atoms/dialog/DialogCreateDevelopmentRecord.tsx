import dynamic from "next/dynamic";
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
import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useAddDevelopmentRecord } from "@/http/tracking/add-development-records";
import {
  developmentRecordSchema,
  DevelopmentRecordType,
} from "@/validators/tracking/development-validator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";

interface DialogCreateDevelopmentProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function DialogCreateDevelopment({
  open,
  setOpen,
}: DialogCreateDevelopmentProps) {
  const form = useForm<DevelopmentRecordType>({
    resolver: zodResolver(developmentRecordSchema),
    defaultValues: {
      can_read: false,
      can_count: false,
      can_speak_simple_words: false,
      can_form_simple_sentences: false,
      can_engage_in_simple_play: false,
      can_follow_simple_directions: false,
      can_recognize_colors: false,
      can_identify_shapes: false,
      notes: "",
    },
    mode: "onChange",
  });

  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();
  const { mutate: addDevelopmentHandler, isPending } = useAddDevelopmentRecord({
    onError: (error: AxiosError<any>) => {
      toast({
        title: "Gagal menambahkan perkembangan!",
        description: error.response?.data.message,
        variant: "destructive",
      });
    },
    onSuccess: () => {
      toast({
        title: "Berhasil menambahkan perkembangan!",
        variant: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["development-records"],
      });
      router.refresh();
    },
  });

  const onSubmit = (body: DevelopmentRecordType) => {
    addDevelopmentHandler(body);
    setOpen(false);
  };

  const items = [
    { label: "Membaca", name: "can_read" as const },
    { label: "Berhitung", name: "can_count" as const },
    {
      label: "Berbicara kata-kata sederhana",
      name: "can_speak_simple_words" as const,
    },
    {
      label: "Membentuk kalimat sederhana",
      name: "can_form_simple_sentences" as const,
    },
    {
      label: "Bermain dalam permainan sederhana",
      name: "can_engage_in_simple_play" as const,
    },
    {
      label: "Mengikuti instruksi sederhana",
      name: "can_follow_simple_directions" as const,
    },
    { label: "Mengenali warna", name: "can_recognize_colors" as const },
    { label: "Mengenali bentuk", name: "can_identify_shapes" as const },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tambah Perkembangan</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[80vh]">
          <Form {...form}>
            <form
              className="space-y-5 pt-4"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              {items.map((item) => (
                <FormField
                  key={item.name}
                  control={form.control}
                  name={item.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{item.label}</FormLabel>
                      <FormControl>
                        <Select
                          value={field.value ? "true" : "false"}
                          onValueChange={(value) =>
                            field.onChange(value === "true")
                          }
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Pilih" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="true">Ya</SelectItem>
                              <SelectItem value="false">Tidak</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Catatan</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Masukkan catatan tambahan"
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
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
