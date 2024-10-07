"use client";

import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import { Card, CardContent } from "@/components/ui/card";
import { useGetDetailDevelopment } from "@/http/tracking/get-detail-development-record";
import { useSession } from "next-auth/react";
import { CheckCircle, XCircle } from "lucide-react";
import { format } from "date-fns";

interface TrackingDevelopmentDetailProps {
  id: number;
}

export default function TrackingDevelopmentDetail({
  id,
}: TrackingDevelopmentDetailProps) {
  const session = useSession();
  const { data, isPending } = useGetDetailDevelopment(
    {
      token: session.data?.access_token as string,
      id,
    },
    { enabled: session.status === "authenticated" }
  );

  const getStatusIcon = (value: boolean) => {
    return value ? (
      <CheckCircle className="text-green-500" size={20} />
    ) : (
      <XCircle className="text-red-500" size={20} />
    );
  };

  const formattedDate = data?.data?.created_at
    ? format(new Date(data.data.created_at), "EEEE, d MMMM yyyy")
    : "Tanggal tidak tersedia";

  return (
    <>
      <DashboardTitle title="Detail Perkembangan" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
        <div className="h-full">
          <Card className="shadow-md">
            <CardContent>
              <div className="mt-4 space-y-6">
                <h1 className="font-bold text-xl">Perkembangan Anak</h1>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { label: "Membaca", value: data?.data.can_read },
                    { label: "Berhitung", value: data?.data.can_count },
                    {
                      label: "Berbicara kata-kata sederhana",
                      value: data?.data.can_speak_simple_words,
                    },
                    {
                      label: "Membentuk kalimat sederhana",
                      value: data?.data.can_form_simple_sentences,
                    },
                    {
                      label: "Dapat bermain dalam permainan sederhana",
                      value: data?.data.can_engage_in_simple_play,
                    },
                    {
                      label: "Mengikuti instruksi sederhana",
                      value: data?.data.can_follow_simple_directions,
                    },
                    {
                      label: "Mengenali warna",
                      value: data?.data.can_recognize_colors,
                    },
                    {
                      label: "Mengenali bentuk",
                      value: data?.data.can_identify_shapes,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between border-b pb-2"
                    >
                      <span className="font-medium text-gray-600">
                        {item.label}
                      </span>
                      {getStatusIcon(item.value ?? false)}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="h-fit">
          <Card className="shadow-md">
            <CardContent>
              <div className="mt-4 space-y-4">
                <h1 className="font-bold text-xl">Catatan</h1>
                <p className="text-muted-foreground">{data?.data.notes}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
