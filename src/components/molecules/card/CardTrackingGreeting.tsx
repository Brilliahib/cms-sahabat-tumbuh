"use client";

import { useGetBaby } from "@/http/babies/get-babies";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function TrackingGreetingCard() {
  const { data: session, status } = useSession();

  const { data, isPending } = useGetBaby(session?.access_token as string, {
    enabled: status === "authenticated",
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return (
      <div>
        Data bayi tidak tersedia, Silahkan tambahkan terlebih dahulu{" "}
        <Link className="underline text-primary" href={"/dashboard/tracking"}>
          disini
        </Link>{" "}
      </div>
    );
  }

  return (
    <div className="p-4 rounded-lg bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
        <div className="w-36 h-36 bg-white/20 rounded-full" />
      </div>
      <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2">
        <div className="w-36 h-36 bg-white/20 rounded-full" />
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className="font-bold md:text-lg">{data?.data.name}</h1>
        <p>Umur: 12 Tahun</p>
        <p>Berat badan: {data?.data.weight}</p>
        <p>Tinggi badan: {data?.data.height} cm</p>
      </div>
    </div>
  );
}
