"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGetDevelopment } from "@/http/tracking/get-development-record";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { ShieldCheck } from "lucide-react";
import { useSession } from "next-auth/react";

export default function CardTrackingDevelopment() {
  const { data: session, status } = useSession();
  const { data, isPending } = useGetDevelopment(
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    }
  );
  return (
    <>
      {data?.data.map((development) => (
        <div key={development.id} className="group block">
          <Card className="w-full border-2 border-muted shadow-transparent group-hover:bg-muted cursor-pointer">
            <CardHeader className="flex md:flex-row md:items-center md:justify-between p-4">
              <div className="flex gap-4">
                <div className="flex justify-center items-center p-4 bg-primary text-white rounded-lg">
                  <ShieldCheck />
                </div>
                <div className="space-y-1">
                  <CardTitle className="font-bold text-base">
                    {format(
                      new Date(development.created_at),
                      "EEEE, d MMMM yyyy",
                      {
                        locale: id,
                      }
                    )}
                  </CardTitle>
                  <CardDescription>
                    <h1 className="line-clamp-1">Note: {development.notes}</h1>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      ))}
    </>
  );
}
