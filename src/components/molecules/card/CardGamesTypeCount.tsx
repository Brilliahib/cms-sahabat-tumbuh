"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useGetGamesTypeCount } from "@/http/games/get-games-types-count";
import { useSession } from "next-auth/react";

export default function CardGamesTypeCount() {
  const { data: session, status } = useSession();
  const { data, isPending } = useGetGamesTypeCount(
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    }
  );
  return (
    <>
      <Card className="shadow-md">
        <CardContent className="p-6">
          <div className="space-y-2">
            <h1 className="font-bold">Jumlah Tipe Games</h1>
            <div>
              <h1 className="font-bold text-3xl">{data?.data.count}</h1>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
