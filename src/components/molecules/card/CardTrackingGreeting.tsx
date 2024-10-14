"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useGetBaby } from "@/http/babies/get-babies";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { format, parseISO, differenceInYears } from "date-fns"; // Import date-fns
import { id } from "date-fns/locale"; // Import locale Indonesia

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
    <Card className="shadow-lg border-0 rounded-xl">
      <CardContent className="p-6">
        <div className="space-y-8">
          <div className="flex gap-8">
            <div className="bg-primary w-fit h-fit rounded-full">
              <Image
                src={"/images/avatar.png"}
                alt="Background"
                width={2069}
                height={1381}
                className="w-[150px] h-[150px] object-cover rounded-full"
              />
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-muted-foreground">Nama</span>
                <h1 className="font-bold">{data?.data.name}</h1>
              </div>
              <div>
                <span className="text-muted-foreground">Gender</span>
                <h1 className="font-bold">{data?.data.gender}</h1>
              </div>
              <div>
                <span className="text-muted-foreground">Tanggal Lahir</span>
                <h1 className="font-bold">
                  {format(new Date(data?.data.birth_date), "d MMMM yyyy", {
                    locale: id,
                  })}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
