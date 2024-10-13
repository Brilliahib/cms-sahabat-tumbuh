"use client";

import { typesGameTypeColumns } from "@/components/atoms/datacolumn/DataTypesGame";
import DialogCreateTypeGames from "@/components/atoms/dialog/DialogCreateTypeGame";
import { DataTable } from "@/components/molecules/datatable/DataTable";
import { Button } from "@/components/ui/button";
import { useGetAllTypesGame } from "@/http/games/get-all-types-games";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function GameTypeContent() {
  const { data: session, status } = useSession();
  const { data, isPending } = useGetAllTypesGame(
    session?.access_token as string,
    {
      enabled: status === "authenticated",
    }
  );
  const [dialogCreateTypeGameOpen, setDialogCreateTypeGameOpen] =
    useState(false);

  const handleDialogTypeGameOpen = () => {
    setDialogCreateTypeGameOpen(true);
  };
  return (
    <>
      <div className="py-8 space-y-8">
        <Button onClick={handleDialogTypeGameOpen}>Tambah Tipe</Button>
        <DataTable columns={typesGameTypeColumns} data={data?.data || []} />
      </div>
      <DialogCreateTypeGames
        open={dialogCreateTypeGameOpen}
        setOpen={setDialogCreateTypeGameOpen}
      />
    </>
  );
}
