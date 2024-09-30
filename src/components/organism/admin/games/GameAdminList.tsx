"use client";

import { gameColumns } from "@/components/atoms/datacolumn/DataGameList";
import { DataTable } from "@/components/molecules/datatable/DataTable";
import { useGetGames } from "@/http/games/get-all-games";
import { useSession } from "next-auth/react";

export default function GameAdminList() {
  const { data: session, status } = useSession();
  const { data, isPending } = useGetGames(session?.access_token as string, {
    enabled: status === "authenticated",
  });
  return (
    <>
      <div className="py-8">
        <DataTable columns={gameColumns} data={data?.data || []} />
      </div>
    </>
  );
}
