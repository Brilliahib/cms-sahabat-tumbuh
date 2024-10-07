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

interface DialogCalculationGuideProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function DialogCalculationGuide({
  open,
  setOpen,
}: DialogCalculationGuideProps) {
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Panduan Perhitungan</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-gray-700 pt-4">
            <div className="space-y-2">
              <div className="bg-primary text-white px-4 py-2 rounded-md">
                BMI = Berat (kg) ÷ Tinggi (m)²
              </div>
              <p>
                Contoh: <br />
                Berat 70kg, Tinggi 1.75m → BMI = 22.86
              </p>
            </div>
            <div className="space-y-2">
              <p>Status Berat Badan:</p>
              <ul>
                <li>
                  <b>Underweight</b>: BMI dibawah 18,5
                </li>
                <li>
                  <b>Normal</b>: BMI antara 18.5 hingga 25
                </li>
                <li>
                  <b>Overweight</b>: BMI antara 25 hingga 30
                </li>
                <li>
                  <b>Obese</b>: BMI diatas 30
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <p>Status Tinggi Badan:</p>
              <ul>
                <li>
                  <b>Short</b>: Tinggi dibawah 1.6m
                </li>
                <li>
                  <b>Normal</b>: Tinggi diantara 1.6m hingga 1.8m
                </li>
                <li>
                  <b>Tall</b>: Tinggi diatas 1.8m
                </li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
