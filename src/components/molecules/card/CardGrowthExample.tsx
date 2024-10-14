"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useSession } from "next-auth/react";
import { useGetGrowth } from "@/http/tracking/get-growth-record";
import { format } from "date-fns";
import { id } from "date-fns/locale";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

export default function CardGrowthExample() {
  const { data: session, status } = useSession();
  const { data, isPending } = useGetGrowth(session?.access_token as string, {
    enabled: status === "authenticated",
  });

  const labels = data?.data.length
    ? data.data.map((item) =>
        format(new Date(item.created_at), "MMMM", {
          locale: id,
        })
      )
    : [];

  const growthWeightData = data?.data.length
    ? data.data.map((item) => item.weight)
    : [];

  const growthHeightData = data?.data.length
    ? data.data.map((item) => item.height)
    : [];

  const weightStatusData = data?.data.length
    ? data.data.map((item) => item.weight_status)
    : [];

  const heightStatusData = data?.data.length
    ? data.data.map((item) => item.height_status)
    : [];

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Berat Badan",
        data: growthWeightData,
        fill: false,
        borderColor: "#0284cf",
        tension: 0.1,
      },
      {
        label: "Tinggi Badan",
        data: growthHeightData,
        fill: false,
        borderColor: "rgba(255, 99, 132, 1)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const index = context.dataIndex;
            const weightStatus = weightStatusData[index];
            const heightStatus = heightStatusData[index];

            const label = context.dataset.label || "";
            const value = context.raw;

            return [
              `${label}: ${value}`,
              `Status: ${
                label === "Berat Badan" ? weightStatus : heightStatus
              }`,
            ];
          },
        },
      },
    },
  };

  return (
    <>
      <div className="md:space-y-8 space-y-6">
        <Card className="shadow-lg border-0 rounded-xl">
          <CardContent className="p-6">
            <div className="mb-4">
              <h1 className="font-bold text-lg">Grafik Pertumbuhan</h1>
            </div>
            <Line data={chartData} options={options} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
