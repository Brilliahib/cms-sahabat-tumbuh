"use client";

import NavHeader from "@/components/atoms/headers/NavHeader";
import { Card, CardHeader } from "@/components/ui/card";
import { useGetBaby } from "@/http/babies/get-babies";
import { useSession } from "next-auth/react";

export default function BabiesPage() {
  const { data: session, status } = useSession();

  const { data, isPending } = useGetBaby(session?.access_token as string, {
    enabled: status === "authenticated",
  });

  return (
    <>
      <NavHeader title="Data Bayi" />
      <div className="flex gap-4">
        <div>
          <Card className="shadow-md! border">
            <CardHeader>
              <div className="flex flex-col space-y-4">
                <p className="font-bold">{data?.data[0]?.name}</p>
                <div>
                  <p className="text-muted-foreground">
                    {data?.data[0]?.gender}
                  </p>
                  <p className="text-muted-foreground">
                    {data?.data[0]?.weight}
                  </p>
                  <p className="text-muted-foreground">
                    {data?.data[0]?.height}
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
        <div></div>
      </div>
    </>
  );
}
